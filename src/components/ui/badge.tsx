import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 text-[10px] font-bold whitespace-nowrap",
  {
    variants: {
      variant: {
        good: "bg-good/12 text-good",
        warn: "bg-orange-1/14 text-orange-1",
        muted: "bg-fg-dim/12 text-fg-dim",
        info: "bg-volt-1/14 text-volt-1",
        danger: "bg-danger/14 text-danger",
      },
    },
    defaultVariants: { variant: "muted" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
