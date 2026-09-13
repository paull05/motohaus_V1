export type Role = "Owner" | "Cashier" | "Inventory Staff";

export type PageId =
  | "dashboard"
  | "inventory"
  | "pos"
  | "sales"
  | "orders"
  | "customers"
  | "suppliers"
  | "purchases"
  | "fitment"
  | "service"
  | "reports"
  | "staff"
  | "settings";

export type PaymentMethod = "Cash" | "GCash" | "Card" | "Bank Transfer";

export type StockStatus = "ok" | "low" | "out";

export type OrderStatus = "Ready" | "Completed" | "Picked up";

export type PurchaseStatus = "Ordered" | "Received" | "Cancelled";

export type ServiceStatus = "Queued" | "In progress" | "Ready" | "Completed";

export type Staff = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;
  brand: string;
  compatibility: string;
  supplierId: string;
  price: number;
  cost: number;
  stock: number;
  min: number;
  location: string;
  description: string;
  image: string;
  warrantyDays: number;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  motorcycle: string;
  notes: string;
  purchases: number;
  points: number;
  last: string;
};

export type Supplier = {
  id: string;
  company: string;
  contact: string;
  phone: string;
  email: string;
  status: "Active" | "Paused";
  notes: string;
};

export type SaleItem = {
  productId: string;
  name: string;
  sku: string;
  qty: number;
  price: number;
  cost: number;
};

export type Sale = {
  id: string;
  customerId: string | null;
  customer: string;
  items: SaleItem[];
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  payment: PaymentMethod;
  received: number;
  change: number;
  staff: string;
  staffId: string;
  date: string;
  time: string;
  status: OrderStatus;
  note: string;
  voided?: boolean;
};

export type PurchaseItem = {
  productId: string;
  name: string;
  qty: number;
  cost: number;
};

export type Purchase = {
  id: string;
  supplierId: string;
  supplier: string;
  items: PurchaseItem[];
  total: number;
  status: PurchaseStatus;
  date: string;
  note: string;
};

export type ServiceJob = {
  id: string;
  customerId: string | null;
  customer: string;
  motorcycle: string;
  complaint: string;
  labor: number;
  parts: SaleItem[];
  status: ServiceStatus;
  staff: string;
  date: string;
  due: string;
};

export type StockMovement = {
  id: string;
  productId: string;
  product: string;
  delta: number;
  reason: "sale" | "stock-in" | "purchase" | "return" | "adjust" | "service";
  ref: string;
  user: string;
  date: string;
  time: string;
};

export type AuditEntry = {
  id: string;
  action: string;
  detail: string;
  user: string;
  date: string;
  time: string;
};

export type ShopNotice = {
  id: string;
  text: string;
  unread: boolean;
  kind: "stock" | "sale" | "purchase" | "info";
  date: string;
};

export type CartItem = {
  productId: string;
  name: string;
  sku: string;
  price: number;
  cost: number;
  qty: number;
  stock: number;
  image: string;
};

export type ShopSettings = {
  shopName: string;
  tagline: string;
  address: string;
  phone: string;
  tin: string;
  vatRate: number;
  vatInclusive: boolean;
  receiptFooter: string;
  lowStockAlerts: boolean;
};

export type Motorcycle = {
  make: string;
  model: string;
  years: string;
  label: string;
};

export type ReturnTicket = {
  id: string;
  saleId: string;
  customer: string;
  items: SaleItem[];
  total: number;
  restock: boolean;
  reason: string;
  staff: string;
  date: string;
};

export type Shift = {
  id: string;
  staffId: string;
  staff: string;
  opened: string;
  closed: string | null;
  openingCash: number;
  closingCash: number | null;
  expectedCash: number | null;
};
