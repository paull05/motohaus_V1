import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { PageHead, Panel, EmptyState } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { StockBadge } from "@/components/shop/status-badge";
import { Badge } from "@/components/ui/badge";
import { firstName, greeting, peso, toDateKey } from "@/lib/shop/format";
import { stockStatus, useShop } from "@/lib/shop/store";

export function DashboardPage() {
  const user = useShop((s) => s.user)!;
  const products = useShop((s) => s.products);
  const sales = useShop((s) => s.sales);
  const services = useShop((s) => s.services);
  const purchases = useShop((s) => s.purchases);
  const setPage = useShop((s) => s.setPage);
  const today = toDateKey();

  const stats = useMemo(() => {
    const live = sales.filter((s) => !s.voided);
    const todaySales = live.filter((s) => s.date === today);
    const todayTotal = todaySales.reduce((n, s) => n + s.total, 0);
    const low = products.filter((p) => stockStatus(p) === "low").length;
    const out = products.filter((p) => stockStatus(p) === "out").length;
    const units = products.reduce((n, p) => n + p.stock, 0);
    const days: { label: string; revenue: number; orders: number }[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = toDateKey(d);
      const slice = live.filter((s) => s.date === key);
      days.push({
        label: d.toLocaleDateString("en-PH", { month: "short", day: "numeric" }),
        revenue: slice.reduce((n, s) => n + s.total, 0),
        orders: slice.length,
      });
    }
    return { todaySales, todayTotal, low, out, units, days };
  }, [sales, products, today]);

  const attention = products.filter((p) => p.stock <= p.min);
  const openPO = purchases.filter((p) => p.status === "Ordered").length;

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker={`MOTOHAUS PARTS / ${user.role.toUpperCase()} VIEW`}
        title={`${greeting()}, ${firstName(user.name)}`}
        actions={
          user.role !== "Inventory Staff" ? (
            <Button onClick={() => setPage("pos")}>+ New sale</Button>
          ) : (
            <Button onClick={() => setPage("purchases")}>+ Stock in</Button>
          )
        }
      />

      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        <Stat label="Today's sales" value={peso(stats.todayTotal)} meta={`${stats.todaySales.length} transactions today`} />
        <Stat label="Total products" value={String(products.length)} meta={`${stats.units} units on hand`} />
        <Stat label="Low stock items" value={String(stats.low)} meta="Review before next delivery" alert={stats.low > 0} />
        <Stat label="Out of stock" value={String(stats.out)} meta={`${openPO} purchase orders in motion`} alert={stats.out > 0} />
      </div>

      <Panel>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h3 className="m-0 text-sm font-bold">Sales dynamic · last 14 days</h3>
          <div className="flex gap-4 text-[11.5px] text-fg-dim">
            <span className="inline-flex items-center gap-1.5">
              <i className="size-1.5 rounded-full bg-orange-1" /> Revenue
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="size-1.5 rounded-full bg-volt-1" /> Orders
            </span>
          </div>
        </div>
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={stats.days} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff6a3d" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#ff6a3d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="label" tick={{ fill: "#6c6c7a", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6c6c7a", fontSize: 10 }} axisLine={false} tickLine={false} width={36} />
              <Tooltip
                contentStyle={{
                  background: "#17171f",
                  border: "1px solid #212129",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#ff6a3d" fill="url(#revFill)" strokeWidth={2.2} />
              <Area type="monotone" dataKey="orders" stroke="#8b6bff" fill="transparent" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(280px,1fr)]">
        <Panel>
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <h3 className="m-0 text-sm font-bold">Recent sales</h3>
            <Button variant="secondary" size="sm" onClick={() => setPage("sales")}>
              View sales
            </Button>
          </div>
          <ShopTable headers={["Transaction", "Customer", "Total", "Payment", "Staff"]} minWidth="560px">
            {sales.slice(0, 6).map((s) => (
              <tr key={s.id}>
                <Td primary>{s.id}</Td>
                <Td>{s.customer}</Td>
                <Td>{peso(s.total)}</Td>
                <Td>
                  <Badge variant="info">{s.payment}</Badge>
                </Td>
                <Td>{s.staff}</Td>
              </tr>
            ))}
          </ShopTable>
        </Panel>
        <Panel>
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <h3 className="m-0 text-sm font-bold">Stock attention</h3>
            <Button variant="secondary" size="sm" onClick={() => setPage("inventory")}>
              Open inventory
            </Button>
          </div>
          {attention.length === 0 ? (
            <EmptyState title="Healthy shelves" body="All products are above minimum stock." />
          ) : (
            <div className="flex flex-col">
              {attention.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0"
                >
                  <div>
                    <strong className="block text-xs text-fg">{p.name}</strong>
                    <span className="mt-0.5 block text-[10.5px] text-fg-mute">{p.compatibility}</span>
                  </div>
                  <div className="text-right">
                    <strong className="block text-xs tabular-nums">
                      {p.stock} / {p.min}
                    </strong>
                    <StockBadge product={p} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Panel>
      </div>

      {user.role !== "Inventory Staff" ? (
        <Panel>
          <div className="mb-2.5 flex items-center justify-between">
            <h3 className="m-0 text-sm font-bold">Service bay</h3>
            <Button variant="secondary" size="sm" onClick={() => setPage("service")}>
              Open bay
            </Button>
          </div>
          <div className="flex flex-col">
            {services
              .filter((j) => j.status !== "Completed")
              .slice(0, 4)
              .map((j) => (
                <div
                  key={j.id}
                  className="flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0"
                >
                  <div>
                    <strong className="block text-xs">{j.customer}</strong>
                    <span className="text-[10.5px] text-fg-mute">{j.complaint}</span>
                  </div>
                  <Badge variant={j.status === "Ready" ? "good" : j.status === "In progress" ? "warn" : "info"}>
                    {j.status}
                  </Badge>
                </div>
              ))}
          </div>
        </Panel>
      ) : null}
    </div>
  );
}

function Stat({
  label,
  value,
  meta,
  alert,
}: {
  label: string;
  value: string;
  meta: string;
  alert?: boolean;
}) {
  return (
    <div className={`min-w-0 rounded-xl border bg-panel p-3.5 ${alert ? "border-orange-1/40" : "border-line-soft"}`}>
      <div className="text-[11px] text-fg-dim">{label}</div>
      <div className={`mt-2 text-[22px] font-bold break-all tabular-nums ${alert ? "text-orange-1" : ""}`}>
        {value}
      </div>
      <div className="mt-1.5 text-[10.5px] text-fg-mute">{meta}</div>
    </div>
  );
}
