import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHead, Panel, EmptyState } from "@/components/shop/page-head";
import { NativeSelect } from "@/components/shop/field";
import { ProductPhoto } from "@/components/shop/product-photo";
import { StockBadge } from "@/components/shop/status-badge";
import { ProductViewDialog } from "@/components/shop/dialogs";
import { MOTORCYCLES } from "@/lib/shop/seed";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";
import type { Product } from "@/lib/shop/types";

export function FitmentPage() {
  const products = useShop((s) => s.products);
  const addToCart = useShop((s) => s.addToCart);
  const setPage = useShop((s) => s.setPage);
  const user = useShop((s) => s.user);
  const [bike, setBike] = useState(MOTORCYCLES[0]!.label);
  const [view, setView] = useState<Product | null>(null);

  const matches = useMemo(
    () =>
      products.filter(
        (p) =>
          p.compatibility === bike ||
          p.compatibility.startsWith("Universal") ||
          bike.startsWith("Universal"),
      ),
    [products, bike],
  );

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="FITMENT / COMPATIBILITY"
        title="Fitment Finder"
        actions={
          <NativeSelect value={bike} onChange={(e) => setBike(e.target.value)} className="min-w-56">
            {MOTORCYCLES.map((m) => (
              <option key={m.label}>{m.label}</option>
            ))}
          </NativeSelect>
        }
      />
      <Panel>
        <p className="mt-0 mb-4 text-xs text-fg-dim">
          Showing parts that bolt onto <b className="text-fg">{bike}</b>, plus universal shop stock.
        </p>
        {matches.length === 0 ? (
          <EmptyState title="No matching parts" body="Try another motorcycle or add a catalog item with this fitment." />
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3.5">
            {matches.map((p) => (
              <div key={p.id} className="rounded-xl border border-line-soft bg-panel-2 p-3">
                <button className="w-full text-left" onClick={() => setView(p)}>
                  <ProductPhoto product={p} size="hero" className="h-32 rounded-lg" />
                  <div className="mt-2 text-[13px] font-bold">{p.name}</div>
                  <div className="text-[11px] text-fg-mute">{p.brand}</div>
                </button>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold tabular-nums">{peso(p.price)}</span>
                  <StockBadge product={p} />
                </div>
                <div className="mt-2">
                  {p.compatibility.startsWith("Universal") ? (
                    <Badge variant="info">Universal</Badge>
                  ) : (
                    <Badge variant="good">Direct fit</Badge>
                  )}
                </div>
                {user?.role !== "Inventory Staff" ? (
                  <Button
                    className="mt-2.5 w-full"
                    disabled={p.stock <= 0}
                    onClick={() => {
                      addToCart(p.id);
                      setPage("pos");
                    }}
                  >
                    Add to POS
                  </Button>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Panel>
      <ProductViewDialog open={!!view} product={view} onClose={() => setView(null)} />
    </div>
  );
}
