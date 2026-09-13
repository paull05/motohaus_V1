import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PageHead, Panel, EmptyState } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { NativeSelect } from "@/components/shop/field";
import { ReceiptDialog } from "@/components/shop/dialogs";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function SalesPage() {
  const sales = useShop((s) => s.sales);
  const query = useShop((s) => s.query);
  const setPage = useShop((s) => s.setPage);
  const createReturn = useShop((s) => s.createReturn);
  const [payment, setPayment] = useState("");
  const [receiptId, setReceiptId] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      sales.filter((s) => {
        if (payment && s.payment !== payment) return false;
        const hay = `${s.id} ${s.customer} ${s.payment} ${s.staff}`.toLowerCase();
        return !query || hay.includes(query.toLowerCase());
      }),
    [sales, query, payment],
  );

  function exportCsv() {
    if (!rows.length) {
      toast.error("Nothing to export.");
      return;
    }
    const header = "ID,Customer,Total,Payment,Date,Staff,Status\n";
    const body = rows
      .map((s) => [s.id, s.customer, s.total, s.payment, s.date, s.staff, s.voided ? "Voided" : s.status].join(","))
      .join("\n");
    const blob = new Blob([header + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "motohaus-sales.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${rows.length} sales.`);
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="TRANSACTIONS / PAYMENT HISTORY"
        title="Sales"
        actions={
          <>
            <Button variant="secondary" onClick={exportCsv}>
              Export CSV
            </Button>
            <Button onClick={() => setPage("pos")}>+ New sale</Button>
          </>
        }
      />
      <Panel>
        <div className="mb-3 flex flex-wrap gap-2">
          <Input
            placeholder="Search transaction, customer or payment"
            defaultValue={query}
            onChange={(e) => useShop.getState().setQuery(e.target.value)}
            className="min-w-[160px] flex-1"
          />
          <NativeSelect value={payment} onChange={(e) => setPayment(e.target.value)} className="w-auto min-w-36">
            <option value="">All payments</option>
            <option>Cash</option>
            <option>GCash</option>
            <option>Card</option>
            <option>Bank Transfer</option>
          </NativeSelect>
        </div>
        {rows.length === 0 ? (
          <EmptyState title="No sales found" body="Complete a sale from Point of Sale to see it here." />
        ) : (
          <ShopTable
            headers={["Transaction", "Customer", "Items", "Total", "Payment", "Date", "Staff", ""]}
            minWidth="860px"
          >
            {rows.map((s) => (
              <tr key={s.id} className={s.voided ? "opacity-50" : ""}>
                <Td primary>{s.id}</Td>
                <Td>{s.customer}</Td>
                <Td>{s.items.reduce((n, i) => n + i.qty, 0)}</Td>
                <Td>{peso(s.total)}</Td>
                <Td>
                  <Badge variant="info">{s.payment}</Badge>
                </Td>
                <Td>
                  {s.date} {s.time}
                </Td>
                <Td>{s.staff}</Td>
                <Td>
                  <div className="flex gap-1.5">
                    <Button variant="secondary" size="sm" onClick={() => setReceiptId(s.id)}>
                      Receipt
                    </Button>
                    {!s.voided ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const result = createReturn(s.id, "Counter return", true);
                          if (typeof result === "string") toast.error(result);
                          else toast.success("Return processed and stock restored.");
                        }}
                      >
                        Return
                      </Button>
                    ) : (
                      <Badge variant="muted">Voided</Badge>
                    )}
                  </div>
                </Td>
              </tr>
            ))}
          </ShopTable>
        )}
      </Panel>
      <ReceiptDialog open={!!receiptId} saleId={receiptId} onClose={() => setReceiptId(null)} />
    </div>
  );
}
