import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHead, Panel, EmptyState } from "@/components/shop/page-head";
import { ProductPhoto } from "@/components/shop/product-photo";
import { CheckoutDialog, ReceiptDialog } from "@/components/shop/dialogs";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function PosPage() {
  const products = useShop((s) => s.products);
  const query = useShop((s) => s.query);
  const setQuery = useShop((s) => s.setQuery);
  const cart = useShop((s) => s.cart);
  const addToCart = useShop((s) => s.addToCart);
  const setCartQty = useShop((s) => s.setCartQty);
  const clearCart = useShop((s) => s.clearCart);
  const cartDiscount = useShop((s) => s.cartDiscount);
  const setCartDiscount = useShop((s) => s.setCartDiscount);
  const cartTotals = useShop((s) => s.cartTotals);
  const [sku, setSku] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [receiptId, setReceiptId] = useState<string | null>(null);
  const totals = cartTotals();

  const available = useMemo(
    () =>
      products.filter(
        (p) =>
          p.stock > 0 &&
          `${p.name} ${p.sku} ${p.compatibility}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [products, query],
  );

  function scan() {
    const found = products.find((p) => p.sku.toLowerCase() === sku.trim().toLowerCase());
    if (!found) {
      toast.error("SKU not found.");
      return;
    }
    const err = addToCart(found.id);
    if (err) toast.error(err);
    else {
      toast.success(`${found.name} added.`);
      setSku("");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="SALES / COUNTER"
        title="Point of Sale"
        actions={<span className="text-[11px] text-fg-mute">Demo checkout · inventory updates on completion</span>}
      />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(300px,1fr)]">
        <Panel>
          <div className="mb-2.5 flex items-center justify-between">
            <h3 className="m-0 text-sm font-bold">Select parts</h3>
            <span className="text-[11px] text-fg-mute">{products.length} catalog items</span>
          </div>
          <form
            className="mb-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              scan();
            }}
          >
            <Input
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="Scan or type SKU then Enter"
            />
            <Button type="submit" variant="secondary">
              Add SKU
            </Button>
          </form>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by part name or SKU"
            className="mb-3"
          />
          <div className="flex max-h-[520px] flex-col overflow-y-auto">
            {available.length === 0 ? (
              <EmptyState title="No matching parts in stock" body="Try another search or restock first." />
            ) : (
              available.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <ProductPhoto product={p} size="sm" />
                    <div className="min-w-0">
                      <strong className="block truncate text-xs">{p.name}</strong>
                      <span className="text-[10.5px] text-fg-mute">
                        {p.sku} · {p.stock} in stock · {peso(p.price)}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      const err = addToCart(p.id);
                      if (err) toast.error(err);
                    }}
                  >
                    Add
                  </Button>
                </div>
              ))
            )}
          </div>
        </Panel>
        <Panel>
          <div className="mb-2.5 flex items-center justify-between">
            <h3 className="m-0 text-sm font-bold">Current cart</h3>
            <Button variant="secondary" size="sm" onClick={clearCart}>
              Clear
            </Button>
          </div>
          <div className="flex flex-col">
            {cart.length === 0 ? (
              <EmptyState title="Your cart is empty" body="Select a part or scan a SKU to begin a sale." />
            ) : (
              cart.map((i) => (
                <div
                  key={i.productId}
                  className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 border-b border-line-soft py-2.5"
                >
                  <div>
                    <strong className="block text-xs">{i.name}</strong>
                    <span className="text-[11px] text-fg-mute">{peso(i.price)} each</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <button
                      className="size-7 rounded-[7px] border border-line-soft bg-panel-2"
                      onClick={() => setCartQty(i.productId, i.qty - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-5 text-center text-xs tabular-nums">{i.qty}</span>
                    <button
                      className="size-7 rounded-[7px] border border-line-soft bg-panel-2"
                      onClick={() => setCartQty(i.productId, i.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <b className="text-xs tabular-nums">{peso(i.qty * i.price)}</b>
                </div>
              ))
            )}
            <label className="mt-3 flex items-center justify-between text-xs text-fg-dim">
              Discount %
              <Input
                type="number"
                min={0}
                max={100}
                value={cartDiscount}
                onChange={(e) => setCartDiscount(Number(e.target.value))}
                className="ml-3 h-8 w-20"
              />
            </label>
            <div className="mt-3 flex items-center justify-between pt-3 text-[13px] font-bold">
              <span>Total</span>
              <strong className="tabular-nums">{peso(totals.total)}</strong>
            </div>
            <p className="mt-1 text-[10.5px] text-fg-mute">Includes VAT {peso(totals.tax)}</p>
            <Button className="mt-3" disabled={!cart.length} onClick={() => setCheckout(true)}>
              Complete sale
            </Button>
          </div>
        </Panel>
      </div>
      <CheckoutDialog
        open={checkout}
        onClose={() => setCheckout(false)}
        onDone={(id) => setReceiptId(id)}
      />
      <ReceiptDialog open={!!receiptId} saleId={receiptId} onClose={() => setReceiptId(null)} />
    </div>
  );
}
