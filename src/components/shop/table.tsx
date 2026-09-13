import type { ReactNode } from "react";

export function ShopTable({
  headers,
  children,
  minWidth = "700px",
}: {
  headers: string[];
  children: ReactNode;
  minWidth?: string;
}) {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className="w-full border-collapse text-xs" style={{ minWidth }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap border-b border-line-soft px-2 py-2 text-left font-medium text-fg-mute"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function Td({
  children,
  primary,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <td
      className={`border-b border-line-soft px-2 py-2.5 align-middle ${primary ? "font-semibold text-fg" : "text-fg-dim"}`}
    >
      {children}
    </td>
  );
}
