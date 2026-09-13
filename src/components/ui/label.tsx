import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("text-[11.5px] font-medium text-fg-dim", className)}
      {...props}
    />
  );
}
