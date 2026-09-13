import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/shop/field";
import { useShop } from "@/lib/shop/store";

export function LoginScreen() {
  const login = useShop((s) => s.login);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    setBusy(true);
    await new Promise((r) => setTimeout(r, 420));
    const user = login(email, password);
    setBusy(false);
    if (!user) setError("Use one of the demo role accounts listed below.");
  }

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-[#050507] px-4">
      <div className="w-[340px] max-w-[92vw] rounded-2xl border border-line-soft bg-panel px-6.5 py-7 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
        <div className="mb-5.5 flex items-center justify-center gap-2">
          <div className="logo-mark" />
          <div className="text-[14.5px] font-semibold">MotoHaus Parts</div>
        </div>
        <h1 className="m-0 text-center text-[17px] font-semibold">Workshop management</h1>
        <p className="mt-1 mb-5 text-center text-xs text-fg-mute">
          Sign in to your motorcycle parts shop
        </p>
        {error ? (
          <div className="mb-3 rounded-lg border border-danger/30 bg-danger/10 px-2.5 py-2 text-xs text-[#ff8a8a]">
            {error}
          </div>
        ) : null}
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <Field label="Email">
            <Input
              name="email"
              type="email"
              required
              autoComplete="username"
              placeholder="owner@motohaus.demo"
              defaultValue="owner@motohaus.demo"
            />
          </Field>
          <Field label="Password">
            <Input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              defaultValue="demo1234"
            />
          </Field>
          <Button type="submit" className="mt-1.5 w-full" disabled={busy}>
            {busy ? (
              <span className="size-3.5 animate-spin rounded-full border-2 border-white/35 border-t-white" />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-fg-mute">
          Demo roles: <b className="font-semibold text-fg-dim">owner@motohaus.demo</b>,{" "}
          <b className="font-semibold text-fg-dim">cashier@motohaus.demo</b>,{" "}
          <b className="font-semibold text-fg-dim">inventory@motohaus.demo</b>
          <br />
          Password: <b className="font-semibold text-fg-dim">demo1234</b>
        </p>
      </div>
    </div>
  );
}
