export function peso(n: number) {
  return (
    "₱" +
    Number(n || 0).toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export function compactPeso(n: number) {
  const v = Number(n || 0);
  if (Math.abs(v) >= 1_000_000) return "₱" + (v / 1_000_000).toFixed(1) + "M";
  if (Math.abs(v) >= 1_000) return "₱" + (v / 1_000).toFixed(v >= 10_000 ? 0 : 1) + "k";
  return peso(v);
}

export function pad(n: number, size = 2) {
  return String(n).padStart(size, "0");
}

export function toDateKey(d = new Date()) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function toTimeKey(d = new Date()) {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function shiftDate(days: number, hours = 10, minutes = 12) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(hours, minutes, 0, 0);
  return d;
}

export function prettyDate(iso: string) {
  const d = new Date(iso + (iso.length === 10 ? "T12:00:00" : ""));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function prettyDateTime(date: string, time: string) {
  return `${prettyDate(date)} · ${time}`;
}

export function todayLabel() {
  return new Date().toLocaleDateString("en-PH", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export function firstName(name: string) {
  return name.split(" ")[0] ?? name;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function makeId(prefix: string) {
  const d = new Date();
  const stamp = `${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  const rand = pad(Math.floor(Math.random() * 900) + 100, 3);
  return `${prefix}-${stamp}-${rand}`;
}

export function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    if (file.size > 2_500_000) {
      reject(new Error("Image is too large. Use a file under 2.5 MB."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(file);
  });
}

export function barcodeBars(value: string) {
  const seed = value.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const bars: number[] = [];
  let n = seed || 1;
  for (let i = 0; i < 48; i++) {
    n = (n * 1103515245 + 12345) & 0x7fffffff;
    bars.push((n % 4) + 1);
  }
  return bars;
}
