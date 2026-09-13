import type { ReactNode } from "react";

export function PageHead({
  kicker,
  title,
  actions,
}: {
  kicker: string;
  title: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-1 text-[11px] text-fg-mute">{kicker}</p>
        <h2 className="m-0 text-[clamp(19px,2vw,24px)] font-bold">{title}</h2>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`min-w-0 rounded-2xl border border-line-soft bg-panel p-4 ${className}`}>
      {children}
    </section>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="px-2.5 py-8 text-center text-xs text-fg-mute">
      <strong className="mb-1 block text-sm text-fg-dim">{title}</strong>
      {body}
    </div>
  );
}
