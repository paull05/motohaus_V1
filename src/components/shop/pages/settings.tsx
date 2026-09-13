import { type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHead, Panel } from "@/components/shop/page-head";
import { Field, Input, Textarea } from "@/components/shop/field";
import { barcodeBars } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";

export function SettingsPage() {
  const settings = useShop((s) => s.settings);
  const updateSettings = useShop((s) => s.updateSettings);
  const resetDemo = useShop((s) => s.resetDemo);
  const logout = useShop((s) => s.logout);
  const products = useShop((s) => s.products);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    updateSettings({
      shopName: String(data.get("shopName")),
      tagline: String(data.get("tagline")),
      address: String(data.get("address")),
      phone: String(data.get("phone")),
      tin: String(data.get("tin")),
      vatRate: Number(data.get("vatRate")),
      receiptFooter: String(data.get("receiptFooter")),
    });
    toast.success("Shop profile saved.");
  }

  return (
    <div className="flex max-w-xl flex-col gap-4">
      <PageHead kicker="SHOP / PREFERENCES" title="Settings" />
      <Panel>
        <div className="mb-3.5 text-sm font-bold">Shop profile</div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <Field label="Shop name">
            <Input name="shopName" required defaultValue={settings.shopName} />
          </Field>
          <Field label="Tagline">
            <Input name="tagline" defaultValue={settings.tagline} />
          </Field>
          <Field label="Address">
            <Input name="address" defaultValue={settings.address} />
          </Field>
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <Field label="Phone">
              <Input name="phone" defaultValue={settings.phone} />
            </Field>
            <Field label="TIN">
              <Input name="tin" defaultValue={settings.tin} />
            </Field>
          </div>
          <Field label="VAT rate %">
            <Input name="vatRate" type="number" min={0} step="0.01" defaultValue={settings.vatRate} />
          </Field>
          <Field label="Receipt footer">
            <Textarea name="receiptFooter" rows={3} defaultValue={settings.receiptFooter} />
          </Field>
          <Button type="submit" className="self-start">
            Save changes
          </Button>
        </form>
      </Panel>
      <Panel>
        <div className="mb-3 text-sm font-bold">Shelf barcode preview</div>
        <p className="mt-0 mb-3 text-[11px] text-fg-mute">
          Each SKU renders as a scan-style mark on the counter. First catalog item shown.
        </p>
        {products[0] ? <Barcode sku={products[0].sku} /> : null}
      </Panel>
      <Panel className="border-danger/30">
        <div className="mb-2.5 text-sm font-bold">Danger zone</div>
        <p className="mt-0 mb-3 text-[11px] text-fg-mute">
          Restore the demo catalog, or sign out of this device.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            onClick={() => {
              resetDemo();
              toast.success("Demo catalog restored.");
            }}
          >
            Reset demo data
          </Button>
          <Button variant="danger" onClick={logout}>
            Log out
          </Button>
        </div>
      </Panel>
    </div>
  );
}

function Barcode({ sku }: { sku: string }) {
  const bars = barcodeBars(sku);
  return (
    <div>
      <div className="flex h-14 items-end gap-px rounded-lg bg-white px-2 py-1.5">
        {bars.map((w, i) => (
          <span key={i} className="bg-black" style={{ width: w, height: i % 7 === 0 ? "100%" : "86%" }} />
        ))}
      </div>
      <div className="mt-1 text-center font-mono text-[11px] tracking-[0.2em]">{sku}</div>
    </div>
  );
}
