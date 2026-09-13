import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-20 w-full rounded-[9px] border border-line-soft bg-panel-2 px-3 py-2 text-[13px] text-fg outline-none placeholder:text-fg-mute focus:border-volt-1 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
