import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHead, Panel } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { Field, Input, NativeSelect } from "@/components/shop/field";
import { StockInDialog } from "@/components/shop/dialogs";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function PurchasesPage() {
  const purchases = useShop((s) => s.purchases);
  const products = useShop((s) => s.products);
  const suppliers = useShop((s) => s.suppliers);
  const receivePurchase = useShop((s) => s.receivePurchase);
  const createPurchase = useShop((s) => s.createPurchase);
  const [stockOpen, setStockOpen] = useState(false);
  const [poOpen, setPoOpen] = useState(false);

  function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const productId = String(data.get("productId"));
    const p = products.find((x) => x.id === productId);
    if (!p) return;
    createPurchase({
      supplierId: String(data.get("supplierId")),
      items: [
        {
          productId,
          name: p.name,
          qty: Number(data.get("qty")),
          cost: Number(data.get("cost")) || p.cost,
        },
      ],
      note: String(data.get("note") ?? ""),
    });
    toast.success("Purchase order created.");
    setPoOpen(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="PROCUREMENT / INCOMING INVENTORY"
        title="Purchases & Stock In"
        actions={
          <>
            <Button variant="secondary" onClick={() => setPoOpen(true)}>
              + Purchase order
            </Button>
            <Button onClick={() => setStockOpen(true)}>+ Record stock in</Button>
          </>
        }
      />
      <Panel>
        <div className="mb-2.5 flex items-center justify-between">
          <h3 className="m-0 text-sm font-bold">Purchase orders</h3>
          <span className="text-[11px] text-fg-mute">Receiving a purchase increases inventory</span>
        </div>
        <ShopTable
          headers={["Purchase ID", "Supplier", "Line items", "Total cost", "Status", "Date", ""]}
          minWidth="800px"
        >
          {purchases.map((p) => (
            <tr key={p.id}>
              <Td primary>{p.id}</Td>
              <Td>{p.supplier}</Td>
              <Td>{p.items.reduce((n, i) => n + i.qty, 0)}</Td>
              <Td>{peso(p.total)}</Td>
              <Td>
                <Badge variant={p.status === "Received" ? "good" : "info"}>{p.status}</Badge>
              </Td>
              <Td>{p.date}</Td>
              <Td>
                {p.status === "Ordered" ? (
                  <Button
                    size="sm"
                    onClick={() => {
                      const err = receivePurchase(p.id);
                      if (err) toast.error(err);
                      else toast.success("Purchase received and inventory updated.");
                    }}
                  >
                    Receive
                  </Button>
                ) : (
                  <span className="text-[11px] text-fg-mute">Completed</span>
                )}
              </Td>
            </tr>
          ))}
        </ShopTable>
      </Panel>
      <StockInDialog open={stockOpen} onClose={() => setStockOpen(false)} />
      <Dialog open={poOpen} onOpenChange={(v) => !v && setPoOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New purchase order</DialogTitle>
          </DialogHeader>
          <form onSubmit={onCreate} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <Field label="Supplier" className="col-span-2">
              <NativeSelect name="supplierId">
                {suppliers.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.company}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Product" className="col-span-2">
              <NativeSelect name="productId">
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Qty">
              <Input name="qty" type="number" min={1} required defaultValue={6} />
            </Field>
            <Field label="Unit cost">
              <Input name="cost" type="number" min={0} step="0.01" />
            </Field>
            <Field label="Note" className="col-span-2">
              <Input name="note" />
            </Field>
            <DialogFooter className="col-span-2">
              <Button type="button" variant="secondary" onClick={() => setPoOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Create PO</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
