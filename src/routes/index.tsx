import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useShop } from "@/lib/shop/store";
import { LoginScreen } from "@/components/shop/login-screen";
import { ShopShell } from "@/components/shop/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrated = useShop((s) => s.hydrated);
  const user = useShop((s) => s.user);

  useEffect(() => {
    void (async () => {
      await useShop.persist.rehydrate();
      useShop.getState().setHydrated();
    })();
  }, []);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#050507] text-fg">
        <div className="flex items-center gap-2 text-sm text-fg-dim">
          <div className="logo-mark" />
          Loading MotoHaus…
        </div>
      </div>
    );
  }

  return (
    <>
      {user ? <ShopShell /> : <LoginScreen />}
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          className: "!bg-panel !border-line-soft !text-fg !text-[12.5px]",
        }}
      />
    </>
  );
}
