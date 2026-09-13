import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full min-w-0 rounded-[9px] border border-line-soft bg-panel-2 px-3 py-2 text-[13px] text-fg shadow-none outline-none transition-[border-color] placeholder:text-fg-mute focus:border-volt-1 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
