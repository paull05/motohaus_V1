import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, Input, NativeSelect, Textarea } from "@/components/shop/field";
import { CATEGORIES, MOTORCYCLES } from "@/lib/shop/seed";
import { useShop } from "@/lib/shop/store";
import { fileToDataUrl, peso } from "@/lib/shop/format";
import type { PaymentMethod, Product } from "@/lib/shop/types";
import { ProductPhoto } from "@/components/shop/product-photo";
import { StockBadge } from "@/components/shop/status-badge";

export function ProductDialog({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product?: Product | null;
}) {
  const saveProduct = useShop((s) => s.saveProduct);
  const suppliers = useShop((s) => s.suppliers);
  const [image, setImage] = useState(product?.image ?? "");

  useEffect(() => {
    if (open) setImage(product?.image ?? "");
  }, [open, product]);

  async function onFile(file?: File) {
    if (!file) return;
    try {
      setImage(await fileToDataUrl(file));
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not read image");
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    saveProduct({
      id: product?.id,
      sku: String(data.get("sku")),
      name: String(data.get("name")),
      category: String(data.get("category")),
      brand: String(data.get("brand")),
      compatibility: String(data.get("compatibility")),
      supplierId: String(data.get("supplierId")),
      price: Number(data.get("price")),
      cost: Number(data.get("cost")),
      stock: Number(data.get("stock")),
      min: Number(data.get("min")),
      location: String(data.get("location")),
      description: String(data.get("description")),
      image,
      warrantyDays: Number(data.get("warrantyDays")),
    });
    toast.success(product ? "Part updated." : "Part added to inventory.");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="w-[min(560px,calc(100%-24px))]">
        <DialogHeader>
          <DialogTitle>{product ? "Edit part" : "Add product"}</DialogTitle>
          <DialogDescription>Catalog photos, pricing, and fitment stay with the SKU.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Product photo" className="col-span-2">
            <div className="flex items-center gap-3">
              {image ? (
                <img src={image} alt="" className="size-16 rounded-lg object-cover" />
              ) : (
                <div className="size-16 rounded-lg bg-panel-2" />
              )}
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => onFile(e.target.files?.[0])}
              />
            </div>
          </Field>
          <Field label="Product name">
            <Input name="name" required defaultValue={product?.name} />
          </Field>
          <Field label="SKU">
            <Input name="sku" required defaultValue={product?.sku} />
          </Field>
          <Field label="Category">
            <NativeSelect name="category" defaultValue={product?.category ?? "Brake System"}>
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Brand">
            <Input name="brand" required defaultValue={product?.brand} />
          </Field>
          <Field label="Motorcycle compatibility" className="col-span-2">
            <NativeSelect name="compatibility" defaultValue={product?.compatibility}>
              {MOTORCYCLES.map((m) => (
                <option key={m.label}>{m.label}</option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Selling price">
            <Input name="price" type="number" min={0} step="0.01" required defaultValue={product?.price} />
          </Field>
          <Field label="Cost">
            <Input name="cost" type="number" min={0} step="0.01" required defaultValue={product?.cost} />
          </Field>
          <Field label="Current stock">
            <Input name="stock" type="number" min={0} required defaultValue={product?.stock ?? 0} />
          </Field>
          <Field label="Minimum stock">
            <Input name="min" type="number" min={0} required defaultValue={product?.min ?? 5} />
          </Field>
          <Field label="Shelf / location">
            <Input name="location" defaultValue={product?.location ?? "A-01"} />
          </Field>
          <Field label="Warranty (days)">
            <Input name="warrantyDays" type="number" min={0} defaultValue={product?.warrantyDays ?? 90} />
          </Field>
          <Field label="Supplier">
            <NativeSelect name="supplierId" defaultValue={product?.supplierId}>
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.company}
                </option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Description" className="col-span-2">
            <Textarea name="description" rows={3} defaultValue={product?.description} />
          </Field>
          <DialogFooter className="col-span-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{product ? "Save changes" : "Add product"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function ProductViewDialog({
  open,
  onClose,
  product,
  onEdit,
}: {
  open: boolean;
  onClose: () => void;
  product?: Product | null;
  onEdit?: () => void;
}) {
  if (!product) return null;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>
            {product.sku} · {product.brand} · {product.category}
          </DialogDescription>
        </DialogHeader>
        <ProductPhoto product={product} size="hero" className="rounded-xl" />
        <p className="mt-3 text-xs leading-relaxed text-fg-dim">{product.description}</p>
        <div className="mt-3 flex items-center justify-between border-b border-line-soft py-2.5">
          <div>
            <div className="text-xs font-semibold">Compatibility</div>
            <div className="text-[10.5px] text-fg-mute">{product.compatibility}</div>
          </div>
          <StockBadge product={product} />
        </div>
        <div className="flex items-center justify-between py-2.5">
          <div>
            <div className="text-xs font-semibold">Shelf · warranty</div>
            <div className="text-[10.5px] text-fg-mute">
              {product.location} · {product.warrantyDays ? `${product.warrantyDays} days` : "No warranty"}
            </div>
          </div>
          <b className="tabular-nums">{product.stock} units</b>
        </div>
        <div className="text-sm font-bold tabular-nums">{peso(product.price)}</div>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          {onEdit ? <Button onClick={onEdit}>Edit</Button> : null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function CustomerDialog({
  open,
  onClose,
  id,
}: {
  open: boolean;
  onClose: () => void;
  id?: string;
}) {
  const customers = useShop((s) => s.customers);
  const saveCustomer = useShop((s) => s.saveCustomer);
  const current = customers.find((c) => c.id === id);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    saveCustomer({
      id: current?.id,
      name: String(data.get("name")),
      phone: String(data.get("phone")),
      email: String(data.get("email")),
      motorcycle: String(data.get("motorcycle")),
      notes: String(data.get("notes")),
    });
    toast.success(current ? "Customer updated." : "Customer added.");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{current ? "Edit customer" : "Add customer"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Full name">
            <Input name="name" required defaultValue={current?.name} />
          </Field>
          <Field label="Contact number">
            <Input name="phone" required defaultValue={current?.phone} />
          </Field>
          <Field label="Email">
            <Input name="email" type="email" defaultValue={current?.email} />
          </Field>
          <Field label="Motorcycle">
            <NativeSelect name="motorcycle" defaultValue={current?.motorcycle}>
              {MOTORCYCLES.map((m) => (
                <option key={m.label}>{m.label}</option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Notes" className="col-span-2">
            <Textarea name="notes" rows={3} defaultValue={current?.notes} />
          </Field>
          <DialogFooter className="col-span-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{current ? "Save" : "Add customer"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function SupplierDialog({
  open,
  onClose,
  id,
}: {
  open: boolean;
  onClose: () => void;
  id?: string;
}) {
  const suppliers = useShop((s) => s.suppliers);
  const saveSupplier = useShop((s) => s.saveSupplier);
  const current = suppliers.find((s) => s.id === id);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    saveSupplier({
      id: current?.id,
      company: String(data.get("company")),
      contact: String(data.get("contact")),
      phone: String(data.get("phone")),
      email: String(data.get("email")),
      status: String(data.get("status")) === "Paused" ? "Paused" : "Active",
      notes: String(data.get("notes")),
    });
    toast.success(current ? "Supplier updated." : "Supplier added.");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{current ? "Edit supplier" : "Add supplier"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Company name">
            <Input name="company" required defaultValue={current?.company} />
          </Field>
          <Field label="Contact person">
            <Input name="contact" required defaultValue={current?.contact} />
          </Field>
          <Field label="Phone">
            <Input name="phone" required defaultValue={current?.phone} />
          </Field>
          <Field label="Email">
            <Input name="email" type="email" defaultValue={current?.email} />
          </Field>
          <Field label="Status">
            <NativeSelect name="status" defaultValue={current?.status ?? "Active"}>
              <option>Active</option>
              <option>Paused</option>
            </NativeSelect>
          </Field>
          <Field label="Notes" className="col-span-2">
            <Textarea name="notes" rows={3} defaultValue={current?.notes} />
          </Field>
          <DialogFooter className="col-span-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{current ? "Save" : "Add supplier"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function StockInDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const products = useShop((s) => s.products);
  const suppliers = useShop((s) => s.suppliers);
  const stockIn = useShop((s) => s.stockIn);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    stockIn(
      String(data.get("productId")),
      Number(data.get("qty")),
      String(data.get("supplierId")),
      Number(data.get("cost")) || undefined,
    );
    toast.success("Stock received and inventory updated.");
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Record stock in</DialogTitle>
          <DialogDescription>Receiving stock increases on-hand quantity immediately.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Product" className="col-span-2">
            <NativeSelect name="productId">
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} · {p.sku}
                </option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Quantity received">
            <Input name="qty" type="number" min={1} required defaultValue={5} />
          </Field>
          <Field label="Unit cost (optional)">
            <Input name="cost" type="number" min={0} step="0.01" />
          </Field>
          <Field label="Supplier" className="col-span-2">
            <NativeSelect name="supplierId">
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.company}
                </option>
              ))}
            </NativeSelect>
          </Field>
          <DialogFooter className="col-span-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Receive stock</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function CheckoutDialog({
  open,
  onClose,
  onDone,
}: {
  open: boolean;
  onClose: () => void;
  onDone: (saleId: string) => void;
}) {
  const cart = useShop((s) => s.cart);
  const customers = useShop((s) => s.customers);
  const cartCustomerId = useShop((s) => s.cartCustomerId);
  const setCartCustomer = useShop((s) => s.setCartCustomer);
  const cartTotals = useShop((s) => s.cartTotals);
  const checkout = useShop((s) => s.checkout);
  const totals = cartTotals();
  const [received, setReceived] = useState(String(totals.total.toFixed(2)));

  useEffect(() => {
    if (open) setReceived(totals.total.toFixed(2));
  }, [open, totals.total]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = checkout({
      payment: String(data.get("payment")) as PaymentMethod,
      received: Number(data.get("received")),
      note: String(data.get("note") ?? ""),
    });
    if (typeof result === "string") {
      toast.error(result);
      return;
    }
    toast.success("Sale completed and inventory updated.");
    onDone(result.id);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete sale</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <Field label="Customer" className="col-span-2">
            <NativeSelect
              name="customer"
              value={cartCustomerId}
              onChange={(e) => setCartCustomer(e.target.value)}
            >
              <option value="walkin">Walk-in customer</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </NativeSelect>
          </Field>
          <Field label="Payment method">
            <NativeSelect name="payment">
              <option>Cash</option>
              <option>GCash</option>
              <option>Card</option>
              <option>Bank Transfer</option>
            </NativeSelect>
          </Field>
          <Field label="Amount received">
            <Input
              name="received"
              type="number"
              min={0}
              step="0.01"
              required
              value={received}
              onChange={(e) => setReceived(e.target.value)}
            />
          </Field>
          <Field label="Note" className="col-span-2">
            <Input name="note" placeholder="Optional" />
          </Field>
          <div className="col-span-2 rounded-[10px] border border-dashed border-line p-3.5">
            <h4 className="mb-2 text-[13px] font-semibold">Transaction summary</h4>
            {cart.map((i) => (
              <p key={i.productId} className="m-0 text-[11px] text-fg-dim">
                {i.qty} × {i.name} — {peso(i.qty * i.price)}
              </p>
            ))}
            <p className="mt-2 text-[11px] text-fg-dim">VAT in total: {peso(totals.tax)}</p>
            <p className="mt-1 text-sm font-bold">Total: {peso(totals.total)}</p>
            <p className="text-[11px] text-fg-dim">
              Change: {peso(Math.max(0, Number(received) - totals.total))}
            </p>
          </div>
          <DialogFooter className="col-span-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Complete sale</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function ReceiptDialog({
  open,
  onClose,
  saleId,
}: {
  open: boolean;
  onClose: () => void;
  saleId: string | null;
}) {
  const sale = useShop((s) => s.sales.find((x) => x.id === saleId));
  const settings = useShop((s) => s.settings);
  if (!sale) return null;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Receipt</DialogTitle>
        </DialogHeader>
        <div id="receipt-print" className="rounded-[10px] border border-dashed border-line p-4">
          <div className="text-center">
            <div className="text-sm font-bold">{settings.shopName}</div>
            <div className="text-[11px] text-fg-dim">{settings.address}</div>
            <div className="text-[11px] text-fg-dim">{settings.phone}</div>
            <div className="text-[10px] text-fg-mute">TIN {settings.tin}</div>
          </div>
          <div className="mt-3 text-[11px] text-fg-dim">
            {sale.id} · {sale.date} {sale.time}
            <br />
            Cashier: {sale.staff}
            <br />
            Customer: {sale.customer}
          </div>
          <div className="mt-3 space-y-1">
            {sale.items.map((i) => (
              <div key={i.productId} className="flex justify-between text-xs">
                <span>
                  {i.qty} × {i.name}
                </span>
                <span className="tabular-nums">{peso(i.qty * i.price)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1 border-t border-line-soft pt-2 text-xs">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="tabular-nums">{peso(sale.subtotal)}</span>
            </div>
            {sale.discount > 0 ? (
              <div className="flex justify-between text-orange-1">
                <span>Discount</span>
                <span className="tabular-nums">-{peso(sale.discount)}</span>
              </div>
            ) : null}
            <div className="flex justify-between">
              <span>VAT</span>
              <span className="tabular-nums">{peso(sale.tax)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>Total</span>
              <span className="tabular-nums">{peso(sale.total)}</span>
            </div>
            <div className="flex justify-between text-fg-dim">
              <span>{sale.payment} received</span>
              <span className="tabular-nums">{peso(sale.received)}</span>
            </div>
            <div className="flex justify-between text-fg-dim">
              <span>Change</span>
              <span className="tabular-nums">{peso(sale.change)}</span>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] leading-relaxed text-fg-mute">
            {settings.receiptFooter}
          </p>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => window.print()}>Print</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
