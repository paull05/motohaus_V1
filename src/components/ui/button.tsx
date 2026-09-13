import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[9px] text-[12.5px] font-semibold leading-tight transition-[filter,background-color,color,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-55 outline-none focus-visible:ring-2 focus-visible:ring-volt-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-br from-volt-1 to-volt-2 text-white hover:brightness-110",
        orange:
          "bg-linear-to-br from-orange-1 to-orange-2 text-white hover:brightness-110",
        secondary:
          "bg-panel-2 text-fg-dim border border-line-soft hover:text-fg",
        ghost: "text-fg-dim hover:bg-panel-2 hover:text-fg",
        danger:
          "bg-danger/15 text-[#ff8a8a] border border-danger/30 hover:bg-danger/22",
        outline: "border border-line-soft bg-transparent text-fg-dim hover:text-fg",
      },
      size: {
        default: "h-9 min-h-[34px] px-3",
        sm: "h-8 min-h-8 px-2.5 text-xs",
        lg: "h-10 min-h-10 px-4",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
