import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHead, Panel } from "@/components/shop/page-head";
import { ShopTable, Td } from "@/components/shop/table";
import { Field, Input, NativeSelect, Textarea } from "@/components/shop/field";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MOTORCYCLES } from "@/lib/shop/seed";
import { peso } from "@/lib/shop/format";
import { useShop } from "@/lib/shop/store";
import type { ServiceStatus } from "@/lib/shop/types";

const TONE: Record<ServiceStatus, "info" | "warn" | "good" | "muted"> = {
  Queued: "info",
  "In progress": "warn",
  Ready: "good",
  Completed: "muted",
};

export function ServicePage() {
  const services = useShop((s) => s.services);
  const customers = useShop((s) => s.customers);
  const products = useShop((s) => s.products);
  const saveService = useShop((s) => s.saveService);
  const setServiceStatus = useShop((s) => s.setServiceStatus);
  const [open, setOpen] = useState(false);

  function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const customerId = String(data.get("customerId"));
    const customer = customers.find((c) => c.id === customerId);
    const productId = String(data.get("productId"));
    const p = products.find((x) => x.id === productId);
    saveService({
      customerId: customer?.id ?? null,
      customer: customer?.name ?? String(data.get("name") || "Walk-in"),
      motorcycle: String(data.get("motorcycle")),
      complaint: String(data.get("complaint")),
      labor: Number(data.get("labor")),
      due: String(data.get("due")),
      parts: p
        ? [{ productId: p.id, name: p.name, sku: p.sku, qty: 1, price: p.price, cost: p.cost }]
        : [],
    });
    toast.success("Work order opened.");
    setOpen(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHead
        kicker="WORKSHOP / JOB TICKETS"
        title="Service Bay"
        actions={<Button onClick={() => setOpen(true)}>+ Work order</Button>}
      />
      <Panel>
        <ShopTable
          headers={["WO", "Rider", "Motorcycle", "Job", "Parts + labor", "Status", "Due", ""]}
          minWidth="900px"
        >
          {services.map((j) => {
            const parts = j.parts.reduce((n, i) => n + i.qty * i.price, 0);
            return (
              <tr key={j.id}>
                <Td primary>{j.id}</Td>
                <Td>{j.customer}</Td>
                <Td>{j.motorcycle}</Td>
                <Td>{j.complaint}</Td>
                <Td>{peso(parts + j.labor)}</Td>
                <Td>
                  <Badge variant={TONE[j.status]}>{j.status}</Badge>
                </Td>
                <Td>{j.due}</Td>
                <Td>
                  <NativeSelect
                    value={j.status}
                    onChange={(e) => {
                      const err = setServiceStatus(j.id, e.target.value as ServiceStatus);
                      if (err) toast.error(err);
                    }}
                    className="h-8 w-auto"
                  >
                    <option>Queued</option>
                    <option>In progress</option>
                    <option>Ready</option>
                    <option>Completed</option>
                  </NativeSelect>
                </Td>
              </tr>
            );
          })}
        </ShopTable>
      </Panel>
      <Dialog open={open} onOpenChange={(v) => !v && setOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Open work order</DialogTitle>
          </DialogHeader>
          <form onSubmit={onCreate} className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            <Field label="Customer">
              <NativeSelect name="customerId">
                <option value="">Walk-in</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Motorcycle">
              <NativeSelect name="motorcycle">
                {MOTORCYCLES.map((m) => (
                  <option key={m.label}>{m.label}</option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Complaint / job" className="col-span-2">
              <Textarea name="complaint" required rows={3} placeholder="Oil change, brake squeal, CVT clean…" />
            </Field>
            <Field label="Labor">
              <Input name="labor" type="number" min={0} defaultValue={350} />
            </Field>
            <Field label="Due">
              <Input name="due" type="date" required />
            </Field>
            <Field label="Suggested part" className="col-span-2">
              <NativeSelect name="productId">
                <option value="">None yet</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <DialogFooter className="col-span-2">
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Open ticket</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
