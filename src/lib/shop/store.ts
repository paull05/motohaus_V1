import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STAFF, cloneSeed } from "./seed";
import { makeId, toDateKey, toTimeKey } from "./format";
import type {
  CartItem,
  Customer,
  PageId,
  PaymentMethod,
  Product,
  Purchase,
  PurchaseItem,
  ReturnTicket,
  Role,
  Sale,
  SaleItem,
  ServiceJob,
  ServiceStatus,
  Shift,
  ShopNotice,
  ShopSettings,
  Staff,
  StockMovement,
  Supplier,
} from "./types";

const seed = cloneSeed();

type PersistSlice = {
  user: Staff | null;
  page: PageId;
  products: Product[];
  customers: Customer[];
  suppliers: Supplier[];
  sales: Sale[];
  purchases: Purchase[];
  services: ServiceJob[];
  movements: StockMovement[];
  audit: import("./types").AuditEntry[];
  notices: ShopNotice[];
  returns: ReturnTicket[];
  settings: ShopSettings;
  shifts: Shift[];
  cart: CartItem[];
  cartDiscount: number;
  cartCustomerId: string | "walkin";
};

type ShopState = PersistSlice & {
  hydrated: boolean;
  query: string;
  setHydrated: () => void;
  login: (email: string, password: string) => Staff | null;
  logout: () => void;
  setPage: (page: PageId) => void;
  setQuery: (q: string) => void;
  canAccess: (page: PageId) => boolean;
  addAudit: (action: string, detail: string) => void;
  addNotice: (text: string, kind: ShopNotice["kind"]) => void;
  markNoticesRead: () => void;
  saveProduct: (product: Omit<Product, "id"> & { id?: string }) => Product;
  deleteProduct: (id: string) => void;
  adjustStock: (id: string, delta: number, reason: StockMovement["reason"], ref: string) => void;
  addToCart: (productId: string) => string | null;
  setCartQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  setCartDiscount: (n: number) => void;
  setCartCustomer: (id: string | "walkin") => void;
  cartTotals: () => { subtotal: number; discount: number; tax: number; total: number };
  checkout: (input: { payment: PaymentMethod; received: number; note?: string }) => Sale | string;
  setOrderStatus: (id: string, status: Sale["status"]) => void;
  voidSale: (id: string, restock: boolean) => string | null;
  saveCustomer: (c: Omit<Customer, "id" | "purchases" | "points" | "last"> & { id?: string }) => Customer;
  deleteCustomer: (id: string) => void;
  saveSupplier: (s: Omit<Supplier, "id"> & { id?: string }) => Supplier;
  deleteSupplier: (id: string) => void;
  createPurchase: (input: { supplierId: string; items: PurchaseItem[]; note?: string }) => Purchase;
  receivePurchase: (id: string) => string | null;
  stockIn: (productId: string, qty: number, supplierId: string, cost?: number) => void;
  saveService: (job: Partial<ServiceJob> & { customer: string; motorcycle: string; complaint: string }) => ServiceJob;
  setServiceStatus: (id: string, status: ServiceStatus) => string | null;
  createReturn: (saleId: string, reason: string, restock: boolean) => ReturnTicket | string;
  updateSettings: (patch: Partial<ShopSettings>) => void;
  openShift: (openingCash: number) => Shift | string;
  closeShift: (closingCash: number) => Shift | string;
  resetDemo: () => void;
};

export const PAGE_ROLES: Record<PageId, Role[]> = {
  dashboard: ["Owner", "Cashier", "Inventory Staff"],
  inventory: ["Owner", "Cashier", "Inventory Staff"],
  pos: ["Owner", "Cashier"],
  sales: ["Owner", "Cashier"],
  orders: ["Owner", "Cashier"],
  customers: ["Owner", "Cashier"],
  suppliers: ["Owner", "Inventory Staff"],
  purchases: ["Owner", "Inventory Staff"],
  fitment: ["Owner", "Cashier", "Inventory Staff"],
  service: ["Owner", "Cashier"],
  reports: ["Owner"],
  staff: ["Owner"],
  settings: ["Owner"],
};

function nowStamp() {
  return { date: toDateKey(), time: toTimeKey() };
}

function movement(
  product: Product,
  delta: number,
  reason: StockMovement["reason"],
  ref: string,
  user: string,
): StockMovement {
  const { date, time } = nowStamp();
  return {
    id: makeId("MV"),
    productId: product.id,
    product: product.name,
    delta,
    reason,
    ref,
    user,
    date,
    time,
  };
}

export const useShop = create<ShopState>()(
  persist(
    (set, get) => ({
      user: null,
      page: "dashboard",
      products: seed.products,
      customers: seed.customers,
      suppliers: seed.suppliers,
      sales: seed.sales,
      purchases: seed.purchases,
      services: seed.services,
      movements: seed.movements,
      audit: seed.audit,
      notices: seed.notices,
      returns: seed.returns,
      settings: seed.settings,
      shifts: seed.shifts,
      cart: [],
      cartDiscount: 0,
      cartCustomerId: "walkin",
      hydrated: false,
      query: "",
      setHydrated: () => set({ hydrated: true }),
      login: (email, password) => {
        const found = STAFF.find(
          (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
        );
        if (!found) return null;
        set({ user: found, page: "dashboard" });
        get().addAudit("Signed in", found.role);
        return found;
      },
      logout: () => {
        const user = get().user;
        if (user) get().addAudit("Signed out", user.name);
        set({ user: null, cart: [], page: "dashboard" });
      },
      setPage: (page) => {
        if (!get().canAccess(page)) return;
        set({ page, query: "" });
      },
      setQuery: (q) => set({ query: q }),
      canAccess: (page) => {
        const role = get().user?.role;
        if (!role) return false;
        return PAGE_ROLES[page].includes(role);
      },
      addAudit: (action, detail) => {
        const user = get().user?.name ?? "System";
        const { date, time } = nowStamp();
        set((s) => ({
          audit: [{ id: makeId("AU"), action, detail, user, date, time }, ...s.audit].slice(0, 80),
        }));
      },
      addNotice: (text, kind) => {
        set((s) => ({
          notices: [
            { id: makeId("N"), text, unread: true, kind, date: toDateKey() },
            ...s.notices,
          ].slice(0, 40),
        }));
      },
      markNoticesRead: () =>
        set((s) => ({ notices: s.notices.map((n) => ({ ...n, unread: false })) })),
      saveProduct: (input) => {
        const current = input.id ? get().products.find((p) => p.id === input.id) : undefined;
        const product: Product = {
          id: current?.id ?? makeId("P"),
          sku: input.sku.trim(),
          name: input.name.trim(),
          category: input.category,
          brand: input.brand.trim(),
          compatibility: input.compatibility.trim(),
          supplierId: input.supplierId,
          price: Number(input.price) || 0,
          cost: Number(input.cost) || 0,
          stock: Number(input.stock) || 0,
          min: Number(input.min) || 0,
          location: input.location.trim(),
          description: input.description.trim(),
          image: input.image,
          warrantyDays: Number(input.warrantyDays) || 0,
        };
        set((s) => ({
          products: current
            ? s.products.map((p) => (p.id === current.id ? product : p))
            : [product, ...s.products],
        }));
        get().addAudit(current ? "Product updated" : "Product added", product.name);
        if (product.stock === 0) get().addNotice(`${product.name} is out of stock`, "stock");
        else if (product.stock <= product.min)
          get().addNotice(`${product.name} is below minimum (${product.stock} / ${product.min})`, "stock");
        return product;
      },
      deleteProduct: (id) => {
        const p = get().products.find((x) => x.id === id);
        if (!p) return;
        set((s) => ({ products: s.products.filter((x) => x.id !== id) }));
        get().addAudit("Product removed", p.name);
      },
      adjustStock: (id, delta, reason, ref) => {
        const p = get().products.find((x) => x.id === id);
        if (!p) return;
        const stock = Math.max(0, p.stock + delta);
        const user = get().user?.name ?? "System";
        set((s) => ({
          products: s.products.map((x) => (x.id === id ? { ...x, stock } : x)),
          movements: [movement({ ...p, stock }, delta, reason, ref, user), ...s.movements].slice(0, 120),
        }));
        if (stock === 0) get().addNotice(`${p.name} is out of stock`, "stock");
        else if (stock <= p.min) get().addNotice(`${p.name} is below minimum (${stock} / ${p.min})`, "stock");
      },
      addToCart: (productId) => {
        const p = get().products.find((x) => x.id === productId);
        if (!p) return "Part not found.";
        if (p.stock <= 0) return "That part is out of stock.";
        const existing = get().cart.find((i) => i.productId === productId);
        if (existing) {
          if (existing.qty >= p.stock) return "Not enough stock for another unit.";
          set((s) => ({
            cart: s.cart.map((i) => (i.productId === productId ? { ...i, qty: i.qty + 1 } : i)),
          }));
          return null;
        }
        set((s) => ({
          cart: [
            ...s.cart,
            {
              productId: p.id,
              name: p.name,
              sku: p.sku,
              price: p.price,
              cost: p.cost,
              qty: 1,
              stock: p.stock,
              image: p.image,
            },
          ],
        }));
        return null;
      },
      setCartQty: (productId, qty) => {
        const p = get().products.find((x) => x.id === productId);
        const max = p?.stock ?? 0;
        const next = Math.max(0, Math.min(qty, max));
        if (next === 0) {
          get().removeFromCart(productId);
          return;
        }
        set((s) => ({
          cart: s.cart.map((i) => (i.productId === productId ? { ...i, qty: next } : i)),
        }));
      },
      removeFromCart: (productId) =>
        set((s) => ({ cart: s.cart.filter((i) => i.productId !== productId) })),
      clearCart: () => set({ cart: [], cartDiscount: 0 }),
      setCartDiscount: (n) => set({ cartDiscount: Math.max(0, Math.min(100, n)) }),
      setCartCustomer: (id) => set({ cartCustomerId: id }),
      cartTotals: () => {
        const { cart, cartDiscount, settings } = get();
        const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0);
        const discount = subtotal * (cartDiscount / 100);
        const net = Math.max(0, subtotal - discount);
        const tax = settings.vatInclusive ? net - net / (1 + settings.vatRate / 100) : net * (settings.vatRate / 100);
        const total = settings.vatInclusive ? net : net + tax;
        return { subtotal, discount, tax, total };
      },
      checkout: ({ payment, received, note }) => {
        const { cart, user, cartCustomerId, customers } = get();
        if (!user) return "Sign in first.";
        if (!cart.length) return "Cart is empty.";
        for (const item of cart) {
          const p = get().products.find((x) => x.id === item.productId);
          if (!p || p.stock < item.qty) return `Not enough stock for ${item.name}.`;
        }
        const totals = get().cartTotals();
        if (received + 0.001 < totals.total) return "Amount received is short of the total.";
        const customer = cartCustomerId === "walkin" ? null : customers.find((c) => c.id === cartCustomerId) ?? null;
        const items: SaleItem[] = cart.map((i) => ({
          productId: i.productId,
          name: i.name,
          sku: i.sku,
          qty: i.qty,
          price: i.price,
          cost: i.cost,
        }));
        const { date, time } = nowStamp();
        const sale: Sale = {
          id: makeId("TXN"),
          customerId: customer?.id ?? null,
          customer: customer?.name ?? "Walk-in customer",
          items,
          subtotal: totals.subtotal,
          discount: totals.discount,
          tax: totals.tax,
          total: totals.total,
          payment,
          received,
          change: received - totals.total,
          staff: user.name,
          staffId: user.id,
          date,
          time,
          status: "Completed",
          note: note ?? "",
        };
        for (const item of items) {
          get().adjustStock(item.productId, -item.qty, "sale", sale.id);
        }
        set((s) => ({
          sales: [sale, ...s.sales],
          customers: customer
            ? s.customers.map((c) =>
                c.id === customer.id
                  ? {
                      ...c,
                      purchases: c.purchases + sale.total,
                      points: c.points + Math.floor(sale.total / 100),
                      last: date,
                    }
                  : c,
              )
            : s.customers,
          cart: [],
          cartDiscount: 0,
        }));
        get().addAudit("Sale completed", `${sale.id} · ${pesoPlain(sale.total)}`);
        get().addNotice(`Sale ${sale.id} · ${sale.customer}`, "sale");
        return sale;
      },
      setOrderStatus: (id, status) => {
        set((s) => ({ sales: s.sales.map((x) => (x.id === id ? { ...x, status } : x)) }));
        get().addAudit("Order updated", `${id} → ${status}`);
      },
      voidSale: (id, restock) => {
        const sale = get().sales.find((s) => s.id === id);
        if (!sale) return "Sale not found.";
        if (sale.voided) return "Already voided.";
        if (restock) {
          for (const item of sale.items) get().adjustStock(item.productId, item.qty, "return", id);
        }
        set((s) => ({
          sales: s.sales.map((x) => (x.id === id ? { ...x, voided: true, status: "Completed" } : x)),
          customers: sale.customerId
            ? s.customers.map((c) =>
                c.id === sale.customerId ? { ...c, purchases: Math.max(0, c.purchases - sale.total) } : c,
              )
            : s.customers,
        }));
        get().addAudit("Sale voided", id);
        return null;
      },
      saveCustomer: (input) => {
        const current = input.id ? get().customers.find((c) => c.id === input.id) : undefined;
        const customer: Customer = {
          id: current?.id ?? makeId("C"),
          name: input.name.trim(),
          phone: input.phone.trim(),
          email: input.email.trim(),
          motorcycle: input.motorcycle.trim(),
          notes: input.notes.trim(),
          purchases: current?.purchases ?? 0,
          points: current?.points ?? 0,
          last: current?.last ?? "—",
        };
        set((s) => ({
          customers: current
            ? s.customers.map((c) => (c.id === current.id ? customer : c))
            : [customer, ...s.customers],
        }));
        get().addAudit(current ? "Customer updated" : "Customer added", customer.name);
        return customer;
      },
      deleteCustomer: (id) => {
        const c = get().customers.find((x) => x.id === id);
        if (!c) return;
        set((s) => ({ customers: s.customers.filter((x) => x.id !== id) }));
        get().addAudit("Customer removed", c.name);
      },
      saveSupplier: (input) => {
        const current = input.id ? get().suppliers.find((s) => s.id === input.id) : undefined;
        const supplier: Supplier = {
          id: current?.id ?? makeId("S"),
          company: input.company.trim(),
          contact: input.contact.trim(),
          phone: input.phone.trim(),
          email: input.email.trim(),
          status: input.status,
          notes: input.notes.trim(),
        };
        set((s) => ({
          suppliers: current
            ? s.suppliers.map((x) => (x.id === current.id ? supplier : x))
            : [supplier, ...s.suppliers],
        }));
        get().addAudit(current ? "Supplier updated" : "Supplier added", supplier.company);
        return supplier;
      },
      deleteSupplier: (id) => {
        const s = get().suppliers.find((x) => x.id === id);
        if (!s) return;
        set((st) => ({ suppliers: st.suppliers.filter((x) => x.id !== id) }));
        get().addAudit("Supplier removed", s.company);
      },
      createPurchase: ({ supplierId, items, note }) => {
        const supplier = get().suppliers.find((s) => s.id === supplierId);
        const { date } = nowStamp();
        const po: Purchase = {
          id: makeId("PO"),
          supplierId,
          supplier: supplier?.company ?? "Supplier",
          items,
          total: items.reduce((s, i) => s + i.qty * i.cost, 0),
          status: "Ordered",
          date,
          note: note ?? "",
        };
        set((s) => ({ purchases: [po, ...s.purchases] }));
        get().addAudit("Purchase created", po.id);
        get().addNotice(`Purchase ${po.id} sent to ${po.supplier}`, "purchase");
        return po;
      },
      receivePurchase: (id) => {
        const po = get().purchases.find((p) => p.id === id);
        if (!po) return "Purchase not found.";
        if (po.status === "Received") return "Already received.";
        for (const item of po.items) {
          get().adjustStock(item.productId, item.qty, "purchase", po.id);
        }
        set((s) => ({
          purchases: s.purchases.map((p) => (p.id === id ? { ...p, status: "Received" } : p)),
        }));
        get().addAudit("Purchase received", po.id);
        return null;
      },
      stockIn: (productId, qty, supplierId, cost) => {
        const p = get().products.find((x) => x.id === productId);
        if (!p || qty <= 0) return;
        if (cost && cost > 0) {
          set((s) => ({
            products: s.products.map((x) => (x.id === productId ? { ...x, cost } : x)),
          }));
        }
        get().adjustStock(productId, qty, "stock-in", "STOCK-IN");
        const supplier = get().suppliers.find((s) => s.id === supplierId);
        const { date } = nowStamp();
        const po: Purchase = {
          id: makeId("SI"),
          supplierId,
          supplier: supplier?.company ?? "Direct",
          items: [{ productId, name: p.name, qty, cost: cost || p.cost }],
          total: qty * (cost || p.cost),
          status: "Received",
          date,
          note: "Quick stock in",
        };
        set((s) => ({ purchases: [po, ...s.purchases] }));
        get().addAudit("Stock received", `${p.name} +${qty}`);
      },
      saveService: (input) => {
        const current = input.id ? get().services.find((j) => j.id === input.id) : undefined;
        const job: ServiceJob = {
          id: current?.id ?? makeId("WO"),
          customerId: input.customerId ?? current?.customerId ?? null,
          customer: input.customer,
          motorcycle: input.motorcycle,
          complaint: input.complaint,
          labor: Number(input.labor) || 0,
          parts: input.parts ?? current?.parts ?? [],
          status: input.status ?? current?.status ?? "Queued",
          staff: get().user?.name ?? current?.staff ?? "",
          date: current?.date ?? toDateKey(),
          due: input.due ?? current?.due ?? toDateKey(),
        };
        set((s) => ({
          services: current
            ? s.services.map((j) => (j.id === current.id ? job : j))
            : [job, ...s.services],
        }));
        get().addAudit(current ? "Work order updated" : "Work order opened", job.id);
        return job;
      },
      setServiceStatus: (id, status) => {
        const job = get().services.find((j) => j.id === id);
        if (!job) return "Work order not found.";
        if (status === "Completed" && job.status !== "Completed") {
          for (const part of job.parts) {
            const p = get().products.find((x) => x.id === part.productId);
            if (p && p.stock >= part.qty) get().adjustStock(part.productId, -part.qty, "service", job.id);
          }
        }
        set((s) => ({ services: s.services.map((j) => (j.id === id ? { ...j, status } : j)) }));
        get().addAudit("Work order updated", `${id} → ${status}`);
        return null;
      },
      createReturn: (saleId, reason, restock) => {
        const sale = get().sales.find((s) => s.id === saleId);
        if (!sale) return "Sale not found.";
        if (sale.voided) return "That sale is already voided.";
        const err = get().voidSale(saleId, restock);
        if (err) return err;
        const ticket: ReturnTicket = {
          id: makeId("RTN"),
          saleId,
          customer: sale.customer,
          items: sale.items,
          total: sale.total,
          restock,
          reason,
          staff: get().user?.name ?? "",
          date: toDateKey(),
        };
        set((s) => ({ returns: [ticket, ...s.returns] }));
        get().addAudit("Return processed", ticket.id);
        return ticket;
      },
      updateSettings: (patch) => {
        set((s) => ({ settings: { ...s.settings, ...patch } }));
        get().addAudit("Settings updated", "Shop profile");
      },
      openShift: (openingCash) => {
        const user = get().user;
        if (!user) return "Sign in first.";
        if (get().shifts.some((s) => s.staffId === user.id && !s.closed))
          return "You already have an open shift.";
        const shift: Shift = {
          id: makeId("SH"),
          staffId: user.id,
          staff: user.name,
          opened: `${toDateKey()} ${toTimeKey()}`,
          closed: null,
          openingCash,
          closingCash: null,
          expectedCash: null,
        };
        set((s) => ({ shifts: [shift, ...s.shifts] }));
        get().addAudit("Shift opened", pesoPlain(openingCash));
        return shift;
      },
      closeShift: (closingCash) => {
        const user = get().user;
        if (!user) return "Sign in first.";
        const open = get().shifts.find((s) => s.staffId === user.id && !s.closed);
        if (!open) return "No open shift.";
        const cashSales = get()
          .sales.filter((s) => s.staffId === user.id && s.payment === "Cash" && !s.voided && s.date === toDateKey())
          .reduce((n, s) => n + s.total, 0);
        const expected = open.openingCash + cashSales;
        const closed: Shift = {
          ...open,
          closed: `${toDateKey()} ${toTimeKey()}`,
          closingCash,
          expectedCash: expected,
        };
        set((s) => ({ shifts: s.shifts.map((x) => (x.id === open.id ? closed : x)) }));
        get().addAudit("Shift closed", `${pesoPlain(closingCash)} counted / ${pesoPlain(expected)} expected`);
        return closed;
      },
      resetDemo: () => {
        const fresh = cloneSeed();
        set({
          ...fresh,
          user: get().user,
          page: "dashboard",
          cart: [],
          cartDiscount: 0,
          cartCustomerId: "walkin",
          query: "",
        });
        get().addAudit("Demo data reset", "Catalog restored");
      },
    }),
    {
      name: "motohaus-v3",
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return localStorage;
      }),
      skipHydration: true,
      partialize: (s) => ({
        user: s.user,
        page: s.page,
        products: s.products,
        customers: s.customers,
        suppliers: s.suppliers,
        sales: s.sales,
        purchases: s.purchases,
        services: s.services,
        movements: s.movements,
        audit: s.audit,
        notices: s.notices,
        returns: s.returns,
        settings: s.settings,
        shifts: s.shifts,
        cart: s.cart,
        cartDiscount: s.cartDiscount,
        cartCustomerId: s.cartCustomerId,
      }),
    },
  ),
);

function pesoPlain(n: number) {
  return "₱" + n.toLocaleString("en-PH", { maximumFractionDigits: 0 });
}

export function stockStatus(p: Product) {
  if (p.stock <= 0) return "out" as const;
  if (p.stock <= p.min) return "low" as const;
  return "ok" as const;
}

export function navFor(role: Role | undefined): PageId[] {
  if (!role) return [];
  return (Object.keys(PAGE_ROLES) as PageId[]).filter((p) => PAGE_ROLES[p].includes(role));
}
