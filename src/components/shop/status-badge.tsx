import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { stockStatus } from "@/lib/shop/store";
import type { Product } from "@/lib/shop/types";

export function StockBadge({ product }: { product: Product }) {
  const s = stockStatus(product);
  if (s === "out") return <Badge variant="muted">Out of stock</Badge>;
  if (s === "low") return <Badge variant="warn">Low stock</Badge>;
  return <Badge variant="good">In stock</Badge>;
}

export function DotStatus({
  tone,
  children,
}: {
  tone: "orange" | "volt" | "good" | "mute";
  children: ReactNode;
}) {
  const color = {
    orange: "text-orange-1",
    volt: "text-volt-1",
    good: "text-good",
    mute: "text-fg-dim",
  }[tone];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${color}`}>
      <i className="inline-block size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
