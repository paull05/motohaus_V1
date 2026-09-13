import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHead, Panel, EmptyState } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { CustomerDialog } from "@/components/shop/dialogs";
import { initials, peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function CustomersPage() {
  const customers = useShop((s) => s.customers);
  const sales = useShop((s) => s.sales);
  const query = useShop((s) => s.query).toLowerCase();
  const deleteCustomer = useShop((s) => s.deleteCustomer);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | undefined>();
  const [viewId, setViewId] = useState<string | null>(null);
  const rows = customers.filter((c) =>
    `${c.name} ${c.phone} ${c.email} ${c.motorcycle}`.toLowerCase().includes(query),
  );
  const viewing = customers.find((c) => c.id === viewId);

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="CUSTOMER RELATIONSHIPS / RIDER PROFILES"
        title="Customers"
        actions={
          <Button
            onClick={() => {
              setEditId(undefined);
              setOpen(true);
            }}
          >
            + Add customer
          </Button>
        }
      />
      <Panel>
        <div className="mb-3">
          <Input
            placeholder="Search customer, phone or motorcycle"
            defaultValue={useShop.getState().query}
            onChange={(e) => useShop.getState().setQuery(e.target.value)}
          />
        </div>
        {rows.length === 0 ? (
          <EmptyState title="No customers found" body="Add a rider profile to track motorcycles and purchases." />
        ) : (
          <ShopTable
            headers={["Customer", "Contact", "Motorcycle", "Total purchases", "Last transaction", ""]}
            minWidth="820px"
          >
            {rows.map((c) => (
              <tr key={c.id}>
                <Td primary>
                  <div className="flex items-center gap-2.5">
                    <div className="logo-mark flex size-9 items-center justify-center text-[11px] font-bold text-white">
                      {initials(c.name)}
                    </div>
                    <div>
                      {c.name}
                      <small className="block font-normal text-fg-mute">{c.id}</small>
                    </div>
                  </div>
                </Td>
                <Td>
                  {c.phone}
                  <small className="block text-fg-mute">{c.email}</small>
                </Td>
                <Td>{c.motorcycle}</Td>
                <Td>{peso(c.purchases)}</Td>
                <Td>{c.last}</Td>
                <Td>
                  <div className="flex gap-1.5">
                    <Button variant="secondary" size="sm" onClick={() => setViewId(c.id)}>
                      View
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setEditId(c.id);
                        setOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        deleteCustomer(c.id);
                        toast.success("Customer removed.");
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </Td>
              </tr>
            ))}
          </ShopTable>
        )}
      </Panel>
      {viewing ? (
        <Panel>
          <h3 className="m-0 mb-2 text-sm font-bold">{viewing.name}</h3>
          <p className="m-0 text-xs text-fg-dim">
            {viewing.phone} · {viewing.email}
            <br />
            {viewing.motorcycle} · {viewing.points} loyalty points
          </p>
          {viewing.notes ? <p className="mt-2 text-xs text-fg-mute">{viewing.notes}</p> : null}
          <div className="mt-3">
            {sales
              .filter((s) => s.customerId === viewing.id)
              .map((s) => (
                <div key={s.id} className="flex justify-between border-b border-line-soft py-2 text-xs">
                  <span>
                    {s.id} · {s.date}
                  </span>
                  <b>{peso(s.total)}</b>
                </div>
              ))}
          </div>
        </Panel>
      ) : null}
      <CustomerDialog open={open} id={editId} onClose={() => setOpen(false)} />
    </div>
  );
}
