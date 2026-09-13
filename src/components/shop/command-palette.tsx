import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useShop, navFor } from "@/lib/shop/store";
import { PAGE_LABELS } from "@/lib/shop/nav";
import { peso } from "@/lib/shop/format";

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const setPage = useShop((s) => s.setPage);
  const user = useShop((s) => s.user);
  const products = useShop((s) => s.products);
  const customers = useShop((s) => s.customers);
  const pages = navFor(user?.role);
  const query = q.trim().toLowerCase();

  const matches = useMemo(() => {
    const pageHits = pages
      .filter((p) => PAGE_LABELS[p].toLowerCase().includes(query) || p.includes(query))
      .map((p) => ({ kind: "page" as const, id: p, label: PAGE_LABELS[p], extra: "Go to page" }));
    const productHits = products
      .filter((p) => `${p.name} ${p.sku} ${p.brand}`.toLowerCase().includes(query))
      .slice(0, 6)
      .map((p) => ({
        kind: "product" as const,
        id: p.id,
        label: p.name,
        extra: `${p.sku} · ${peso(p.price)}`,
      }));
    const customerHits = customers
      .filter((c) => `${c.name} ${c.phone} ${c.motorcycle}`.toLowerCase().includes(query))
      .slice(0, 4)
      .map((c) => ({
        kind: "customer" as const,
        id: c.id,
        label: c.name,
        extra: c.motorcycle,
      }));
    if (!query) return pageHits;
    return [...pageHits, ...productHits, ...customerHits];
  }, [query, pages, products, customers]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="p-3">
        <DialogTitle className="sr-only">Jump to</DialogTitle>
        <Input
          autoFocus
          placeholder="Jump to a page, part, or rider…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="mt-2 max-h-72 overflow-y-auto">
          {matches.length === 0 ? (
            <div className="px-2 py-6 text-center text-xs text-fg-mute">Nothing matches.</div>
          ) : (
            matches.map((m) => (
              <button
                key={m.kind + m.id}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left hover:bg-panel-2"
                onClick={() => {
                  if (m.kind === "page") setPage(m.id as typeof pages[number]);
                  if (m.kind === "product") setPage("inventory");
                  if (m.kind === "customer") setPage("customers");
                  onClose();
                }}
              >
                <span className="text-[13px] font-medium">{m.label}</span>
                <span className="text-[10px] text-fg-mute">{m.extra}</span>
              </button>
            ))
          )}
        </div>
        <p className="mt-1 px-1 text-[10px] text-fg-mute">Tip: press Ctrl/Cmd + K anywhere.</p>
      </DialogContent>
    </Dialog>
  );
}
