import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PageHead, Panel } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { STAFF } from "@/lib/shop/seed";
import { peso, prettyDateTime } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function StaffPage() {
  const audit = useShop((s) => s.audit);
  const shifts = useShop((s) => s.shifts);
  const user = useShop((s) => s.user)!;
  const openShift = useShop((s) => s.openShift);
  const closeShift = useShop((s) => s.closeShift);
  const [cash, setCash] = useState("2000");
  const open = shifts.find((s) => s.staffId === user.id && !s.closed);

  return (
    <div className="flex flex-col gap-4">
      <PageHead kicker="ACCESS / ACTIVITY" title="Staff & Audit Log" />
      <Panel>
        <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
          <h3 className="m-0 text-sm font-bold">Cash drawer shift</h3>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={0}
              value={cash}
              onChange={(e) => setCash(e.target.value)}
              className="w-28"
            />
            {open ? (
              <Button
                variant="orange"
                onClick={() => {
                  const result = closeShift(Number(cash));
                  if (typeof result === "string") toast.error(result);
                  else
                    toast.success(
                      `Shift closed. Expected ${peso(result.expectedCash ?? 0)}, counted ${peso(result.closingCash ?? 0)}.`,
                    );
                }}
              >
                Close shift
              </Button>
            ) : (
              <Button
                onClick={() => {
                  const result = openShift(Number(cash));
                  if (typeof result === "string") toast.error(result);
                  else toast.success("Shift opened.");
                }}
              >
                Open shift
              </Button>
            )}
          </div>
        </div>
        <p className="mt-0 mb-3 text-xs text-fg-mute">
          Opening cash plus today's cash sales is the expected drawer. Counted cash is logged on close.
        </p>
        {shifts.slice(0, 4).map((s) => (
          <div key={s.id} className="flex justify-between border-b border-line-soft py-2 text-xs last:border-0">
            <span>
              {s.staff} · {s.opened}
              {s.closed ? ` → ${s.closed}` : " · OPEN"}
            </span>
            <b>
              {s.closed
                ? `${peso(s.closingCash ?? 0)} / ${peso(s.expectedCash ?? 0)}`
                : `Start ${peso(s.openingCash)}`}
            </b>
          </div>
        ))}
      </Panel>
      <Panel>
        <div className="mb-2.5">
          <h3 className="m-0 text-sm font-bold">Demo staff accounts</h3>
          <p className="mt-1 text-[11px] text-fg-mute">
            Frontend demo roles. A live shop would put authorization on the server.
          </p>
        </div>
        <ShopTable headers={["Staff member", "Email", "Role", "Access"]} minWidth="640px">
          {STAFF.map((u) => (
            <tr key={u.id}>
              <Td primary>{u.name}</Td>
              <Td>{u.email}</Td>
              <Td>
                <Badge variant="info">{u.role}</Badge>
              </Td>
              <Td>
                {u.role === "Owner"
                  ? "All modules"
                  : u.role === "Cashier"
                    ? "POS, sales, customers, service"
                    : "Inventory, stock in, suppliers"}
              </Td>
            </tr>
          ))}
        </ShopTable>
      </Panel>
      <Panel>
        <h3 className="mt-0 mb-3 text-sm font-bold">Recent activity</h3>
        <div className="flex flex-col">
          {audit.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0"
            >
              <div>
                <strong className="block text-xs">{a.action}</strong>
                <span className="text-[10.5px] text-fg-mute">
                  {a.detail} · {a.user}
                </span>
              </div>
              <span className="text-[11px] text-fg-mute">{prettyDateTime(a.date, a.time)}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
