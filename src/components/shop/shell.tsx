import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Bell,
  Bike,
  Boxes,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Wrench,
  BarChart3,
  Shield,
  ArrowDownToLine,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navFor, useShop } from "@/lib/shop/store";
import type { PageId } from "@/lib/shop/types";
import { cn } from "@/lib/utils";
import { DashboardPage } from "@/components/shop/pages/dashboard";
import { InventoryPage } from "@/components/shop/pages/inventory";
import { PosPage } from "@/components/shop/pages/pos";
import { SalesPage } from "@/components/shop/pages/sales";
import { OrdersPage } from "@/components/shop/pages/orders";
import { CustomersPage } from "@/components/shop/pages/customers";
import { SuppliersPage } from "@/components/shop/pages/suppliers";
import { PurchasesPage } from "@/components/shop/pages/purchases";
import { FitmentPage } from "@/components/shop/pages/fitment";
import { ServicePage } from "@/components/shop/pages/service";
import { ReportsPage } from "@/components/shop/pages/reports";
import { StaffPage } from "@/components/shop/pages/staff";
import { SettingsPage } from "@/components/shop/pages/settings";
import { CommandPalette } from "@/components/shop/command-palette";
import { StockInDialog } from "@/components/shop/dialogs";
import { PAGE_LABELS } from "@/lib/shop/nav";

const ICONS: Record<PageId, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  inventory: Boxes,
  pos: ShoppingCart,
  sales: BarChart3,
  orders: ClipboardList,
  customers: Users,
  suppliers: Truck,
  purchases: ArrowDownToLine,
  fitment: Bike,
  service: Wrench,
  reports: Package,
  staff: Shield,
  settings: Settings,
};

const LABELS = PAGE_LABELS;

const PAGES: Record<PageId, () => ReactNode> = {
  dashboard: () => <DashboardPage />,
  inventory: () => <InventoryPage />,
  pos: () => <PosPage />,
  sales: () => <SalesPage />,
  orders: () => <OrdersPage />,
  customers: () => <CustomersPage />,
  suppliers: () => <SuppliersPage />,
  purchases: () => <PurchasesPage />,
  fitment: () => <FitmentPage />,
  service: () => <ServicePage />,
  reports: () => <ReportsPage />,
  staff: () => <StaffPage />,
  settings: () => <SettingsPage />,
};

export function ShopShell() {
  const user = useShop((s) => s.user)!;
  const page = useShop((s) => s.page);
  const setPage = useShop((s) => s.setPage);
  const logout = useShop((s) => s.logout);
  const query = useShop((s) => s.query);
  const setQuery = useShop((s) => s.setQuery);
  const notices = useShop((s) => s.notices);
  const markNoticesRead = useShop((s) => s.markNoticesRead);
  const nav = useMemo(() => navFor(user.role), [user.role]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [stockOpen, setStockOpen] = useState(false);
  const unread = notices.filter((n) => n.unread).length;
  const bottom = nav.filter((p) =>
    user.role === "Inventory Staff"
      ? ["dashboard", "inventory", "purchases", "suppliers"].includes(p)
      : ["dashboard", "pos", "inventory", "sales"].includes(p),
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex min-h-dvh bg-bg text-fg max-md:flex-col">
      <aside className="sticky top-0 hidden h-dvh w-[220px] shrink-0 flex-col overflow-y-auto border-r border-line-soft px-4 py-5 md:flex">
        <Brand role={user.role} />
        <div className="mb-5 flex items-center gap-2 rounded-[10px] border border-line-soft bg-panel px-2.5 py-2">
          <Search className="size-3.5 text-fg-mute" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-xs text-fg-dim outline-none placeholder:text-fg-mute"
          />
        </div>
        <NavList pages={nav} current={page} onPick={setPage} />
        <div className="promo-card relative mt-auto mb-3.5 overflow-hidden rounded-[14px] px-3.5 pt-4 pb-14">
          <div className="absolute -top-5 -right-5 size-[70px] rounded-full bg-white/15" />
          <span className="mb-2.5 inline-block rounded-[5px] bg-black/28 px-1.5 py-0.5 text-[9.5px] font-bold tracking-wide text-white">
            MOTOHAUS°
          </span>
          <h4 className="m-0 max-w-[120px] text-base leading-tight font-bold text-white">
            Parts that keep riders moving
          </h4>
          <button
            className="absolute right-3.5 bottom-3.5 left-3.5 h-[34px] rounded-[20px] bg-[#101014] text-xs font-semibold text-white"
            onClick={() => (user.role === "Cashier" ? setPage("pos") : setStockOpen(true))}
          >
            {user.role === "Cashier" ? "Open POS" : "Quick stock in"}
          </button>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2.5 px-2.5 py-2 text-[13px] text-fg-dim hover:text-fg"
        >
          <LogOut className="size-3.5" />
          Logout
        </button>
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative flex h-full w-[min(280px,86vw)] flex-col bg-bg p-4">
            <Brand role={user.role} />
            <NavList
              pages={nav}
              current={page}
              onPick={(p) => {
                setPage(p);
                setMobileOpen(false);
              }}
            />
            <button
              onClick={logout}
              className="mt-auto flex items-center gap-2.5 px-2.5 py-2 text-[13px] text-fg-dim"
            >
              <LogOut className="size-3.5" />
              Logout
            </button>
          </div>
        </div>
      ) : null}

      <main className="flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto px-[clamp(16px,2.4vw,28px)] py-5 pb-24 md:h-dvh md:pb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <button
              className="flex size-9 items-center justify-center rounded-[10px] border border-line-soft bg-panel md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
            <h1 className="m-0 truncate text-[clamp(19px,2vw,22px)] font-bold">{LABELS[page]}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-[10px] border border-line-soft bg-panel px-3 py-2 sm:flex sm:w-[230px]">
              <Search className="size-3.5 text-fg-mute" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search parts, SKU, customers"
                className="w-full bg-transparent text-xs text-fg-dim outline-none placeholder:text-fg-mute"
              />
            </div>
            <button
              className="hidden size-9 items-center justify-center rounded-[10px] border border-line-soft bg-panel text-fg-dim hover:bg-panel-2 lg:flex"
              onClick={() => setCmdOpen(true)}
              title="Command palette"
            >
              <Search className="size-3.5" />
            </button>
            <DropdownMenu
              onOpenChange={(open) => {
                if (open) markNoticesRead();
              }}
            >
              <DropdownMenuTrigger asChild>
                <button className="relative flex size-9 items-center justify-center rounded-[10px] border border-line-soft bg-panel hover:bg-panel-2">
                  <Bell className="size-3.5" />
                  {unread > 0 ? (
                    <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-orange-1" />
                  ) : null}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[230px]">
                {notices.length === 0 ? (
                  <div className="px-2.5 py-3.5 text-center text-xs text-fg-mute">No notifications.</div>
                ) : (
                  notices.slice(0, 6).map((n) => (
                    <DropdownMenuItem key={n.id} className={n.unread ? "text-fg" : ""}>
                      {n.text}
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="flex items-center gap-2 rounded-[10px] border border-line-soft bg-panel px-3 py-2">
            <Search className="size-3.5 text-fg-mute" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search parts, SKU, customers"
              className="h-8 border-0 bg-transparent px-0"
            />
          </div>
        </div>
        {PAGES[page]()}
      </main>

      <nav className="fixed right-0 bottom-0 left-0 z-40 flex border-t border-line-soft bg-bg/95 px-2 py-1.5 backdrop-blur md:hidden">
        {bottom.map((p) => {
          const Icon = ICONS[p];
          const active = page === p;
          return (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg text-[10px]",
                active ? "text-fg" : "text-fg-mute",
              )}
            >
              <Icon className="size-4" />
              {LABELS[p].split(" ")[0]}
            </button>
          );
        })}
      </nav>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <StockInDialog open={stockOpen} onClose={() => setStockOpen(false)} />
    </div>
  );
}

function Brand({ role }: { role: string }) {
  return (
    <div className="mb-6 flex items-center gap-2 px-1">
      <div className="logo-mark" />
      <div>
        <div className="text-[13px] leading-tight font-semibold">MotoHaus Parts</div>
        <div className="mt-0.5 text-[10px] text-orange-1">{role}</div>
      </div>
    </div>
  );
}

function NavList({
  pages,
  current,
  onPick,
}: {
  pages: PageId[];
  current: PageId;
  onPick: (p: PageId) => void;
}) {
  return (
    <div className="mb-4">
      <div className="px-2 pb-2 text-[10px] tracking-wider text-fg-mute uppercase">Workspace</div>
      {pages.map((p) => {
        const Icon = ICONS[p];
        const active = current === p;
        return (
          <button
            key={p}
            onClick={() => onPick(p)}
            className={cn(
              "mb-0.5 flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-2 text-left text-[13px]",
              active
                ? "border border-line-soft bg-panel-2 text-fg"
                : "text-fg-dim hover:bg-[#141419]",
            )}
          >
            <Icon className={cn("size-3.5", active ? "opacity-100" : "opacity-75")} />
            {LABELS[p]}
          </button>
        );
      })}
    </div>
  );
}

export { LABELS };
