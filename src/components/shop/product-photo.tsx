import { cn } from "@/lib/utils";
import type { Product } from "@/lib/shop/types";

export function ProductPhoto({
  product,
  className,
  size = "md",
}: {
  product: Pick<Product, "name" | "image" | "category">;
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
}) {
  const dims = {
    sm: "size-10",
    md: "size-12",
    lg: "size-20",
    hero: "h-52 w-full",
  }[size];

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-lg bg-panel-2",
        dims,
        className,
      )}
    >
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center bg-linear-to-br from-volt-1/30 to-orange-1/30 text-[10px] font-bold text-fg">
          {product.category.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}
