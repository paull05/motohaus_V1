import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHead, Panel } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { SupplierDialog } from "@/components/shop/dialogs";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function SuppliersPage() {
  const suppliers = useShop((s) => s.suppliers);
  const products = useShop((s) => s.products);
  const purchases = useShop((s) => s.purchases);
  const query = useShop((s) => s.query).toLowerCase();
  const deleteSupplier = useShop((s) => s.deleteSupplier);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | undefined>();
  const rows = suppliers.filter((s) =>
    `${s.company} ${s.contact} ${s.phone}`.toLowerCase().includes(query),
  );

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="VENDOR NETWORK / SOURCING"
        title="Suppliers"
        actions={
          <Button
            onClick={() => {
              setEditId(undefined);
              setOpen(true);
            }}
          >
            + Add supplier
          </Button>
        }
      />
      <Panel>
        <ShopTable
          headers={["Supplier", "Contact", "Products supplied", "Total purchases", "Status", ""]}
          minWidth="760px"
        >
          {rows.map((s) => {
            const supplied = products.filter((p) => p.supplierId === s.id).length;
            const spend = purchases
              .filter((p) => p.supplierId === s.id)
              .reduce((n, p) => n + p.total, 0);
            return (
              <tr key={s.id}>
                <Td primary>
                  {s.company}
                  <small className="block font-normal text-fg-mute">{s.id}</small>
                </Td>
                <Td>
                  {s.contact}
                  <small className="block text-fg-mute">{s.phone}</small>
                </Td>
                <Td>{supplied}</Td>
                <Td>{peso(spend)}</Td>
                <Td>
                  <Badge variant={s.status === "Active" ? "good" : "muted"}>{s.status}</Badge>
                </Td>
                <Td>
                  <div className="flex gap-1.5">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setEditId(s.id);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        deleteSupplier(s.id);
                        toast.success("Supplier removed.");
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </Td>
              </tr>
            );
          })}
        </ShopTable>
      </Panel>
      <SupplierDialog open={open} id={editId} onClose={() => setOpen(false)} />
    </div>
  );
}
