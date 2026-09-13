import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHead, Panel } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { NativeSelect } from "@/components/shop/field";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";
import type { OrderStatus } from "@/lib/shop/types";

export function OrdersPage() {
  const sales = useShop((s) => s.sales);
  const setOrderStatus = useShop((s) => s.setOrderStatus);
  const setPage = useShop((s) => s.setPage);
  const query = useShop((s) => s.query).toLowerCase();
  const rows = sales.filter(
    (s) => !s.voided && `${s.id} ${s.customer}`.toLowerCase().includes(query),
  );

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="FULFILLMENT / CUSTOMER ORDERS"
        title="Orders"
        actions={<Button onClick={() => setPage("pos")}>+ New sale</Button>}
      />
      <Panel>
        <ShopTable
          headers={["Order ID", "Customer", "Items", "Total", "Payment", "Order status", "Date"]}
          minWidth="760px"
        >
          {rows.map((s) => (
            <tr key={s.id}>
              <Td primary>{s.id}</Td>
              <Td>{s.customer}</Td>
              <Td>{s.items.map((i) => i.name).join(", ")}</Td>
              <Td>{peso(s.total)}</Td>
              <Td>
                <Badge variant="good">Paid</Badge>
              </Td>
              <Td>
                <NativeSelect
                  value={s.status}
                  onChange={(e) => setOrderStatus(s.id, e.target.value as OrderStatus)}
                  className="h-8 w-auto"
                >
                  <option>Ready</option>
                  <option>Completed</option>
                  <option>Picked up</option>
                </NativeSelect>
              </Td>
              <Td>{s.date}</Td>
            </tr>
          ))}
        </ShopTable>
      </Panel>
    </div>
  );
}
