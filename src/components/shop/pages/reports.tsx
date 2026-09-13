import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { PageHead, Panel } from "@/components/shop/page-head";
import { peso, toDateKey } from "@/lib/shop/format";
import { stockStatus, useShop } from "@/lib/shop/store";

const COLORS = ["#ff6a3d", "#8b6bff", "#3ddc8a", "#ff2d55", "#6a3df5", "#9494a3"];

export function ReportsPage() {
  const sales = useShop((s) => s.sales);
  const products = useShop((s) => s.products);
  const setPage = useShop((s) => s.setPage);

  const data = useMemo(() => {
    const live = sales.filter((s) => !s.voided);
    const revenue = live.reduce((n, s) => n + s.total, 0);
    const cogs = live.reduce(
      (n, s) => n + s.items.reduce((m, i) => m + i.qty * i.cost, 0),
      0,
    );
    const inventory = products.reduce((n, p) => n + p.stock * p.cost, 0);
    const cats: Record<string, number> = {};
    for (const s of live) {
      for (const item of s.items) {
        const p = products.find((x) => x.id === item.productId);
        const cat = p?.category ?? "Other";
        cats[cat] = (cats[cat] ?? 0) + item.qty * item.price;
      }
    }
    const category = Object.entries(cats)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
    const today = toDateKey();
    const todayRev = live.filter((s) => s.date === today).reduce((n, s) => n + s.total, 0);
    return {
      revenue,
      cogs,
      profit: revenue - cogs,
      inventory,
      avg: live.length ? revenue / live.length : 0,
      count: live.length,
      category,
      todayRev,
      healthy: products.filter((p) => stockStatus(p) === "ok").length,
      attention: products.filter((p) => stockStatus(p) !== "ok").length,
    };
  }, [sales, products]);

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="BUSINESS INTELLIGENCE / OWNER VIEW"
        title="Reports"
        actions={
          <Button variant="secondary" onClick={() => setPage("sales")}>
            View transactions
          </Button>
        }
      />
      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        <Card label="Sales (all time in shop)" value={peso(data.revenue)} meta={`${data.count} transactions`} />
        <Card label="Estimated profit" value={peso(data.profit)} meta="Revenue minus item cost" />
        <Card label="Inventory value" value={peso(data.inventory)} meta="At purchase cost" />
        <Card label="Average sale" value={peso(data.avg)} meta={`Today ${peso(data.todayRev)}`} />
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Panel>
          <h3 className="mt-0 mb-3 text-sm font-bold">Sales by category</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.category}>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#6c6c7a", fontSize: 10 }} interval={0} angle={-18} height={56} />
                <YAxis tick={{ fill: "#6c6c7a", fontSize: 10 }} width={40} />
                <Tooltip
                  contentStyle={{ background: "#17171f", border: "1px solid #212129", borderRadius: 12 }}
                  formatter={(v) => peso(Number(v))}
                />
                <Bar dataKey="value" radius={[6, 6, 3, 3]} fill="#8b6bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel>
          <h3 className="mt-0 mb-3 text-sm font-bold">Mix</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data.category} dataKey="value" nameKey="name" innerRadius={48} outerRadius={80} paddingAngle={3}>
                  {data.category.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#17171f", border: "1px solid #212129", borderRadius: 12 }}
                  formatter={(v) => peso(Number(v))}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
      <Panel>
        <h3 className="mt-0 mb-3 text-sm font-bold">Inventory health</h3>
        <div className="flex flex-col">
          <Row label="Healthy stock" hint="Above minimum level" value={String(data.healthy)} />
          <Row label="Needs attention" hint="At or below minimum" value={String(data.attention)} />
          <Row
            label="Gross margin"
            hint="Across recorded sales"
            value={data.revenue ? `${((data.profit / data.revenue) * 100).toFixed(1)}%` : "—"}
          />
        </div>
      </Panel>
    </div>
  );
}

function Card({ label, value, meta }: { label: string; value: string; meta: string }) {
  return (
    <div className="rounded-xl border border-line-soft bg-panel p-3.5">
      <div className="text-[11px] text-fg-dim">{label}</div>
      <div className="mt-2 text-[22px] font-bold break-all tabular-nums">{value}</div>
      <div className="mt-1.5 text-[10.5px] text-fg-mute">{meta}</div>
    </div>
  );
}

function Row({ label, hint, value }: { label: string; hint: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line-soft py-2.5 last:border-0">
      <div>
        <strong className="block text-xs">{label}</strong>
        <span className="text-[10.5px] text-fg-mute">{hint}</span>
      </div>
      <b className="tabular-nums">{value}</b>
    </div>
  );
}
