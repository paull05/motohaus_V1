import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHead, Panel, EmptyState } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { ProductPhoto } from "@/components/shop/product-photo";
import { StockBadge } from "@/components/shop/status-badge";
import { ProductDialog, ProductViewDialog, StockInDialog } from "@/components/shop/dialogs";
import { NativeSelect } from "@/components/shop/field";
import { CATEGORIES } from "@/lib/shop/seed";
import { peso } from "@/lib/shop/format";
import { stockStatus, useShop } from "@/lib/shop/store";
import type { Product } from "@/lib/shop/types";

export function InventoryPage() {
  const products = useShop((s) => s.products);
  const query = useShop((s) => s.query);
  const user = useShop((s) => s.user)!;
  const setQuery = useShop((s) => s.setQuery);
  const deleteProduct = useShop((s) => s.deleteProduct);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [layout, setLayout] = useState<"table" | "grid">("table");
  const [edit, setEdit] = useState<Product | null | undefined>(undefined);
  const [view, setView] = useState<Product | null>(null);
  const [stockOpen, setStockOpen] = useState(false);
  const canEdit = user.role !== "Cashier";

  const rows = useMemo(() => {
    return products.filter((p) => {
      const q = `${p.name} ${p.sku} ${p.brand} ${p.compatibility}`.toLowerCase();
      if (query && !q.includes(query.toLowerCase())) return false;
      if (category && p.category !== category) return false;
      if (status && stockStatus(p) !== status) return false;
      return true;
    });
  }, [products, query, category, status]);

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="CATALOG / STOCK CONTROL"
        title="Inventory"
        actions={
          <>
            {canEdit ? (
              <Button variant="secondary" onClick={() => setStockOpen(true)}>
                + Stock in
              </Button>
            ) : null}
            {canEdit ? <Button onClick={() => setEdit(null)}>+ Add product</Button> : null}
          </>
        }
      />
      <div className="flex flex-wrap items-center gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search product, SKU, brand or compatibility"
          className="min-w-[160px] flex-1"
        />
        <NativeSelect value={category} onChange={(e) => setCategory(e.target.value)} className="w-auto min-w-40">
          <option value="">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </NativeSelect>
        <NativeSelect value={status} onChange={(e) => setStatus(e.target.value)} className="w-auto min-w-36">
          <option value="">All stock</option>
          <option value="ok">In stock</option>
          <option value="low">Low stock</option>
          <option value="out">Out of stock</option>
        </NativeSelect>
        <Button variant="secondary" onClick={() => setLayout(layout === "table" ? "grid" : "table")}>
          {layout === "table" ? "Photo grid" : "Table"}
        </Button>
      </div>

      {layout === "grid" ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3.5">
          {rows.map((p) => (
            <button
              key={p.id}
              onClick={() => setView(p)}
              className="rounded-xl border border-line-soft bg-panel p-3 text-left"
            >
              <ProductPhoto product={p} size="hero" className="h-36 rounded-lg" />
              <div className="mt-2.5 text-[13px] font-bold">{p.name}</div>
              <div className="text-[11px] text-fg-mute">
                {p.sku} · {p.brand}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-bold tabular-nums">{peso(p.price)}</span>
                <StockBadge product={p} />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <Panel className="p-4">
          {rows.length === 0 ? (
            <EmptyState title="No products found" body="Try a different search or add a new part." />
          ) : (
            <ShopTable
              headers={["Part / SKU", "Category", "Compatibility", "Price", "Stock", "Status", ""]}
              minWidth="820px"
            >
              {rows.map((p) => (
                <tr key={p.id}>
                  <Td primary>
                    <div className="flex items-center gap-2.5">
                      <ProductPhoto product={p} size="sm" />
                      <div>
                        {p.name}
                        <small className="mt-0.5 block font-normal text-fg-mute">
                          {p.sku} · {p.brand}
                        </small>
                      </div>
                    </div>
                  </Td>
                  <Td>{p.category}</Td>
                  <Td>{p.compatibility}</Td>
                  <Td>{peso(p.price)}</Td>
                  <Td>{p.stock}</Td>
                  <Td>
                    <StockBadge product={p} />
                  </Td>
                  <Td>
                    <div className="flex gap-1.5">
                      <Button variant="secondary" size="sm" onClick={() => setView(p)}>
                        View
                      </Button>
                      {canEdit ? (
                        <Button variant="secondary" size="sm" onClick={() => setEdit(p)}>
                          Edit
                        </Button>
                      ) : null}
                      {canEdit ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            deleteProduct(p.id);
                            toast.success("Part removed.");
                          }}
                        >
                          Remove
                        </Button>
                      ) : null}
                    </div>
                  </Td>
                </tr>
              ))}
            </ShopTable>
          )}
        </Panel>
      )}

      <ProductDialog
        open={edit !== undefined}
        product={edit ?? undefined}
        onClose={() => setEdit(undefined)}
      />
      <ProductViewDialog
        open={!!view}
        product={view}
        onClose={() => setView(null)}
        onEdit={
          canEdit && view
            ? () => {
                setEdit(view);
                setView(null);
              }
            : undefined
        }
      />
      <StockInDialog open={stockOpen} onClose={() => setStockOpen(false)} />
    </div>
  );
}
