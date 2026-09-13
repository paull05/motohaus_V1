import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as Bike, c as Settings, d as Menu, f as LogOut, g as Boxes, h as ChartColumn, i as Truck, l as Search, m as ClipboardList, n as Wrench, o as ShoppingCart, p as LayoutDashboard, r as Users, s as Shield, t as X, u as Package, v as Bell, y as ArrowDownToLine } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Trigger, i as Root2, n as Item2, r as Portal2, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as PieChart, o as Area, r as BarChart, s as CartesianGrid, t as AreaChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BYAGJFK-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function peso(n) {
	return "₱" + Number(n || 0).toLocaleString("en-PH", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}
function pad(n, size = 2) {
	return String(n).padStart(size, "0");
}
function toDateKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function toTimeKey(d = /* @__PURE__ */ new Date()) {
	return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function shiftDate(days, hours = 10, minutes = 12) {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + days);
	d.setHours(hours, minutes, 0, 0);
	return d;
}
function prettyDate(iso) {
	const d = /* @__PURE__ */ new Date(iso + (iso.length === 10 ? "T12:00:00" : ""));
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("en-PH", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function prettyDateTime(date, time) {
	return `${prettyDate(date)} · ${time}`;
}
function greeting() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	if (h < 12) return "Good morning";
	if (h < 18) return "Good afternoon";
	return "Good evening";
}
function firstName(name) {
	return name.split(" ")[0] ?? name;
}
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}
function makeId(prefix) {
	const d = /* @__PURE__ */ new Date();
	return `${prefix}-${`${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}`}-${pad(Math.floor(Math.random() * 900) + 100, 3)}`;
}
function fileToDataUrl(file) {
	return new Promise((resolve, reject) => {
		if (file.size > 25e5) {
			reject(/* @__PURE__ */ new Error("Image is too large. Use a file under 2.5 MB."));
			return;
		}
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result ?? ""));
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read that image."));
		reader.readAsDataURL(file);
	});
}
function barcodeBars(value) {
	const seed = value.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
	const bars = [];
	let n = seed || 1;
	for (let i = 0; i < 48; i++) {
		n = n * 1103515245 + 12345 & 2147483647;
		bars.push(n % 4 + 1);
	}
	return bars;
}
var STAFF = [
	{
		id: "U-1",
		name: "Rafael Santos",
		email: "owner@motohaus.demo",
		password: "demo1234",
		role: "Owner"
	},
	{
		id: "U-2",
		name: "Mika Reyes",
		email: "cashier@motohaus.demo",
		password: "demo1234",
		role: "Cashier"
	},
	{
		id: "U-3",
		name: "Noel Garcia",
		email: "inventory@motohaus.demo",
		password: "demo1234",
		role: "Inventory Staff"
	}
];
var MOTORCYCLES = [
	{
		make: "Honda",
		model: "Click 125",
		years: "2023-2025",
		label: "Honda Click 125 (2023-2025)"
	},
	{
		make: "Honda",
		model: "PCX 160",
		years: "2021-2025",
		label: "Honda PCX 160 (2021-2025)"
	},
	{
		make: "Honda",
		model: "Beat",
		years: "2020-2025",
		label: "Honda Beat (2020-2025)"
	},
	{
		make: "Yamaha",
		model: "NMAX 155",
		years: "2020-2024",
		label: "Yamaha NMAX 155 (2020-2024)"
	},
	{
		make: "Yamaha",
		model: "Aerox 155",
		years: "2020-2025",
		label: "Yamaha Aerox 155 (2020-2025)"
	},
	{
		make: "Yamaha",
		model: "Mio i125",
		years: "2019-2025",
		label: "Yamaha Mio i125 (2019-2025)"
	},
	{
		make: "Yamaha",
		model: "Sniper 150",
		years: "2018-2025",
		label: "Yamaha Sniper 150 (2018-2025)"
	},
	{
		make: "Suzuki",
		model: "Raider 150",
		years: "2019-2025",
		label: "Suzuki Raider 150 (2019-2025)"
	},
	{
		make: "Kawasaki",
		model: "Barako II",
		years: "2018-2024",
		label: "Kawasaki Barako II (2018-2024)"
	},
	{
		make: "Universal",
		model: "Most scooters",
		years: "2018-2025",
		label: "Universal / Most scooters"
	}
];
var CATEGORIES = [
	"Brake System",
	"Chain & Sprocket",
	"Oils & Fluids",
	"Lighting",
	"Tires & Wheels",
	"Performance Parts",
	"Electrical",
	"Engine",
	"Transmission",
	"Filters",
	"Suspension",
	"Body & Controls"
];
var DEFAULT_SETTINGS = {
	shopName: "MotoHaus Parts",
	tagline: "Parts that keep riders moving",
	address: "248 Quezon Ave., Quezon City",
	phone: "(02) 8555 0140",
	tin: "009-482-771-000",
	vatRate: 12,
	vatInclusive: true,
	receiptFooter: "Thank you for riding with MotoHaus. Warranty follows the part maker. Returns within 7 days with receipt.",
	lowStockAlerts: true
};
var SEED_PRODUCTS = [
	{
		id: "P-1001",
		sku: "BP-HC125-01",
		name: "Ceramic Brake Pad Set",
		category: "Brake System",
		brand: "HausFriction",
		compatibility: "Honda Click 125 (2023-2025)",
		supplierId: "S-001",
		price: 680,
		cost: 390,
		stock: 3,
		min: 5,
		location: "A-02",
		description: "Front ceramic pad set for daily city riding. Quiet bite and stable heat fade for stop-and-go traffic.",
		image: "/products/brake-pads.jpg",
		warrantyDays: 90
	},
	{
		id: "P-1002",
		sku: "CS-YNMAX-02",
		name: "428 Chain & Sprocket Kit",
		category: "Chain & Sprocket",
		brand: "GearWorks",
		compatibility: "Yamaha NMAX 155 (2020-2024)",
		supplierId: "S-002",
		price: 2450,
		cost: 1650,
		stock: 18,
		min: 6,
		location: "B-01",
		description: "Heavy-duty chain with matched front and rear sprockets. Pre-stretched for cleaner first install.",
		image: "/products/chain-sprocket.jpg",
		warrantyDays: 180
	},
	{
		id: "P-1003",
		sku: "OF-HPCX160-03",
		name: "Synthetic Engine Oil 10W-40",
		category: "Oils & Fluids",
		brand: "ApexLube",
		compatibility: "Honda PCX 160 (2021-2025)",
		supplierId: "S-001",
		price: 520,
		cost: 330,
		stock: 24,
		min: 8,
		location: "C-04",
		description: "1L synthetic scooter oil for regular 1,000–2,000 km service intervals.",
		image: "/products/engine-oil.jpg",
		warrantyDays: 0
	},
	{
		id: "P-1004",
		sku: "LL-YAEROX-04",
		name: "LED Headlight Bulb",
		category: "Lighting",
		brand: "VoltEdge",
		compatibility: "Yamaha Aerox 155 (2020-2025)",
		supplierId: "S-003",
		price: 890,
		cost: 540,
		stock: 7,
		min: 4,
		location: "D-03",
		description: "Bright plug-and-play LED replacement with cooling fins. Street-legal white beam.",
		image: "/products/led-bulb.jpg",
		warrantyDays: 365
	},
	{
		id: "P-1005",
		sku: "TI-SRAIDER-05",
		name: "Tubeless Tire 90/80-17",
		category: "Tires & Wheels",
		brand: "GripLine",
		compatibility: "Suzuki Raider 150 (2019-2025)",
		supplierId: "S-002",
		price: 3150,
		cost: 2280,
		stock: 0,
		min: 3,
		location: "E-01",
		description: "Street tire with wet-weather siping. Balanced for daily commuting and weekend runs.",
		image: "/products/tire.jpg",
		warrantyDays: 120
	},
	{
		id: "P-1006",
		sku: "SP-KBARAKO-06",
		name: "Heavy-Duty Clutch Spring Set",
		category: "Performance Parts",
		brand: "BarakoTech",
		compatibility: "Kawasaki Barako II (2018-2024)",
		supplierId: "S-002",
		price: 760,
		cost: 470,
		stock: 11,
		min: 4,
		location: "B-06",
		description: "Replacement clutch springs for utility bikes that haul cargo through city heat.",
		image: "/products/clutch-springs.jpg",
		warrantyDays: 90
	},
	{
		id: "P-1007",
		sku: "EN-HBEAT-07",
		name: "Iridium Spark Plug",
		category: "Engine",
		brand: "FirePoint",
		compatibility: "Honda Beat (2020-2025)",
		supplierId: "S-001",
		price: 280,
		cost: 145,
		stock: 32,
		min: 10,
		location: "C-01",
		description: "Fine-wire iridium plug for easier cold starts and a cleaner idle.",
		image: "/products/spark-plug.jpg",
		warrantyDays: 180
	},
	{
		id: "P-1008",
		sku: "TR-YMIO-08",
		name: "CVT Drive Belt",
		category: "Transmission",
		brand: "BeltCore",
		compatibility: "Yamaha Mio i125 (2019-2025)",
		supplierId: "S-002",
		price: 980,
		cost: 610,
		stock: 9,
		min: 5,
		location: "B-03",
		description: "OEM-spec toothed belt. Replace with rollers during a CVT clean for best life.",
		image: "/products/cvt-belt.jpg",
		warrantyDays: 120
	},
	{
		id: "P-1009",
		sku: "FL-HC125-09",
		name: "Air Filter Element",
		category: "Filters",
		brand: "HausFilter",
		compatibility: "Honda Click 125 (2023-2025)",
		supplierId: "S-001",
		price: 320,
		cost: 170,
		stock: 16,
		min: 6,
		location: "C-02",
		description: "Drop-in paper element. Swap every 4,000 km in dusty city routes.",
		image: "/products/air-filter.jpg",
		warrantyDays: 30
	},
	{
		id: "P-1010",
		sku: "EL-UNIV-10",
		name: "Lithium Motorcycle Battery 12V",
		category: "Electrical",
		brand: "VoltEdge",
		compatibility: "Universal / Most scooters",
		supplierId: "S-003",
		price: 2890,
		cost: 1980,
		stock: 5,
		min: 3,
		location: "D-01",
		description: "Compact 12V lithium pack with standard terminals. Lighter than flooded batteries.",
		image: "/products/battery.jpg",
		warrantyDays: 365
	},
	{
		id: "P-1011",
		sku: "OF-DOT4-11",
		name: "Brake Fluid DOT 4",
		category: "Oils & Fluids",
		brand: "ApexLube",
		compatibility: "Universal / Most scooters",
		supplierId: "S-001",
		price: 240,
		cost: 125,
		stock: 21,
		min: 8,
		location: "C-05",
		description: "500ml DOT 4 fluid for disc brake systems. Flush every two years.",
		image: "/products/engine-oil.jpg",
		warrantyDays: 0
	},
	{
		id: "P-1012",
		sku: "BP-YSNIP-12",
		name: "Disc Brake Rotor 220mm",
		category: "Brake System",
		brand: "HausFriction",
		compatibility: "Yamaha Sniper 150 (2018-2025)",
		supplierId: "S-002",
		price: 1680,
		cost: 1090,
		stock: 4,
		min: 3,
		location: "A-04",
		description: "Stainless ventilated rotor. True-running face for clean pad seating.",
		image: "/products/brake-pads.jpg",
		warrantyDays: 180
	},
	{
		id: "P-1013",
		sku: "SU-HC125-13",
		name: "Rear Shock Absorber",
		category: "Suspension",
		brand: "RideLink",
		compatibility: "Honda Click 125 (2023-2025)",
		supplierId: "S-002",
		price: 1850,
		cost: 1180,
		stock: 6,
		min: 3,
		location: "E-03",
		description: "Gas-charged rear shock for two-up commuting. Direct bolt-on.",
		image: "/products/clutch-springs.jpg",
		warrantyDays: 180
	},
	{
		id: "P-1014",
		sku: "BD-UNIV-14",
		name: "Handle Grip Set",
		category: "Body & Controls",
		brand: "RideLink",
		compatibility: "Universal / Most scooters",
		supplierId: "S-003",
		price: 220,
		cost: 95,
		stock: 28,
		min: 10,
		location: "D-06",
		description: "Soft-touch dual-density grips. Fits standard 22mm bars.",
		image: "/products/cvt-belt.jpg",
		warrantyDays: 30
	}
];
var SEED_CUSTOMERS = [
	{
		id: "C-001",
		name: "Marco Villanueva",
		phone: "0917 555 0142",
		email: "marco.demo@example.com",
		motorcycle: "Honda Click 125 (2023-2025)",
		notes: "Prefers GCash. Regular oil change every 1,500 km.",
		purchases: 4280,
		points: 42,
		last: toDateKey(shiftDate(-1))
	},
	{
		id: "C-002",
		name: "Janelle Cruz",
		phone: "0920 555 0198",
		email: "janelle.demo@example.com",
		motorcycle: "Yamaha NMAX 155 (2020-2024)",
		notes: "Asked for chain kit quote last week.",
		purchases: 7950,
		points: 79,
		last: toDateKey(shiftDate(0, 11, 20))
	},
	{
		id: "C-003",
		name: "Paolo Mendoza",
		phone: "0918 555 0126",
		email: "paolo.demo@example.com",
		motorcycle: "Suzuki Raider 150 (2019-2025)",
		notes: "Waiting on tire restock.",
		purchases: 3150,
		points: 31,
		last: toDateKey(shiftDate(-5))
	},
	{
		id: "C-004",
		name: "Aira Dela Peña",
		phone: "0916 555 0104",
		email: "aira.demo@example.com",
		motorcycle: "Honda PCX 160 (2021-2025)",
		notes: "",
		purchases: 1560,
		points: 15,
		last: toDateKey(shiftDate(-2))
	},
	{
		id: "C-005",
		name: "Gino Ramirez",
		phone: "0927 555 0188",
		email: "gino.demo@example.com",
		motorcycle: "Yamaha Aerox 155 (2020-2025)",
		notes: "Night shift rider. Comes in after 8pm.",
		purchases: 890,
		points: 8,
		last: toDateKey(shiftDate(-3))
	}
];
var SEED_SUPPLIERS = [
	{
		id: "S-001",
		company: "RiderPro Supply",
		contact: "Aileen Tan",
		phone: "(02) 8555 0140",
		email: "orders@riderpro.demo",
		status: "Active",
		notes: "2-day Metro Manila lead. Best for oils and filters."
	},
	{
		id: "S-002",
		company: "GearWorks PH",
		contact: "Luis Navarro",
		phone: "(02) 8555 0191",
		email: "sales@gearworks.demo",
		status: "Active",
		notes: "Chains, tires, performance. Weekly truck on Thursdays."
	},
	{
		id: "S-003",
		company: "VoltEdge Motors",
		contact: "Nica Ramos",
		phone: "(02) 8555 0177",
		email: "hello@voltedge.demo",
		status: "Active",
		notes: "Lighting and electrical. Same-day QC for in-stock SKUs."
	}
];
function sale(id, days, hours, minutes, customer, productIds, payment, staff, status = "Completed") {
	const when = shiftDate(days, hours, minutes);
	const items = productIds.map((row) => {
		const p = SEED_PRODUCTS.find((x) => x.id === row.id);
		return {
			productId: p.id,
			name: p.name,
			sku: p.sku,
			qty: row.qty,
			price: p.price,
			cost: p.cost
		};
	});
	const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0);
	return {
		id,
		customerId: customer?.id ?? null,
		customer: customer?.name ?? "Walk-in customer",
		items,
		subtotal,
		discount: 0,
		tax: 0,
		total: subtotal,
		payment,
		received: subtotal,
		change: 0,
		staff: staff.name,
		staffId: staff.id,
		date: toDateKey(when),
		time: toTimeKey(when),
		status,
		note: ""
	};
}
var owner = STAFF[0];
var cashier = STAFF[1];
var SEED_SALES = [
	sale("TXN-TODAY-018", 0, 9, 12, SEED_CUSTOMERS[1], [{
		id: "P-1003",
		qty: 2
	}], "Cash", cashier, "Ready"),
	sale("TXN-TODAY-017", 0, 10, 41, SEED_CUSTOMERS[0], [{
		id: "P-1001",
		qty: 1
	}], "GCash", cashier),
	sale("TXN-TODAY-016", 0, 13, 5, null, [{
		id: "P-1004",
		qty: 1
	}], "Card", owner),
	sale("TXN-YD-015", -1, 16, 22, SEED_CUSTOMERS[3], [{
		id: "P-1003",
		qty: 1
	}, {
		id: "P-1007",
		qty: 1
	}], "GCash", cashier),
	sale("TXN-YD-014", -1, 11, 8, SEED_CUSTOMERS[4], [{
		id: "P-1004",
		qty: 1
	}], "Cash", cashier),
	sale("TXN-2D-013", -2, 15, 40, SEED_CUSTOMERS[1], [{
		id: "P-1002",
		qty: 1
	}], "Bank Transfer", owner),
	sale("TXN-3D-012", -3, 14, 18, null, [{
		id: "P-1014",
		qty: 2
	}, {
		id: "P-1007",
		qty: 1
	}], "Cash", cashier),
	sale("TXN-4D-011", -4, 12, 2, SEED_CUSTOMERS[0], [{
		id: "P-1009",
		qty: 1
	}, {
		id: "P-1003",
		qty: 1
	}], "GCash", cashier),
	sale("TXN-5D-010", -5, 17, 33, SEED_CUSTOMERS[2], [{
		id: "P-1006",
		qty: 1
	}], "Card", owner),
	sale("TXN-6D-009", -6, 10, 55, null, [{
		id: "P-1008",
		qty: 1
	}], "Cash", cashier),
	sale("TXN-8D-008", -8, 13, 14, SEED_CUSTOMERS[3], [{
		id: "P-1010",
		qty: 1
	}], "GCash", owner),
	sale("TXN-10D-007", -10, 16, 47, SEED_CUSTOMERS[1], [{
		id: "P-1003",
		qty: 3
	}], "Cash", cashier)
];
var SEED_PURCHASES = [{
	id: "PO-OPEN-004",
	supplierId: "S-002",
	supplier: "GearWorks PH",
	items: [{
		productId: "P-1005",
		name: "Tubeless Tire 90/80-17",
		qty: 6,
		cost: 2280
	}, {
		productId: "P-1002",
		name: "428 Chain & Sprocket Kit",
		qty: 8,
		cost: 1650
	}],
	total: 26880,
	status: "Ordered",
	date: toDateKey(shiftDate(-2)),
	note: "Rush the tires — Raider 150 is sold out."
}, {
	id: "PO-DONE-003",
	supplierId: "S-001",
	supplier: "RiderPro Supply",
	items: [{
		productId: "P-1003",
		name: "Synthetic Engine Oil 10W-40",
		qty: 24,
		cost: 330
	}, {
		productId: "P-1001",
		name: "Ceramic Brake Pad Set",
		qty: 10,
		cost: 390
	}],
	total: 11820,
	status: "Received",
	date: toDateKey(shiftDate(-6)),
	note: ""
}];
var SEED_SERVICES = [
	{
		id: "WO-TODAY-03",
		customerId: "C-001",
		customer: "Marco Villanueva",
		motorcycle: "Honda Click 125 (2023-2025)",
		complaint: "Squeal on front brake + scheduled oil change",
		labor: 350,
		parts: [{
			productId: "P-1001",
			name: "Ceramic Brake Pad Set",
			sku: "BP-HC125-01",
			qty: 1,
			price: 680,
			cost: 390
		}],
		status: "In progress",
		staff: "Rafael Santos",
		date: toDateKey(),
		due: toDateKey()
	},
	{
		id: "WO-TODAY-02",
		customerId: "C-002",
		customer: "Janelle Cruz",
		motorcycle: "Yamaha NMAX 155 (2020-2024)",
		complaint: "CVT chatter at 40 kph",
		labor: 650,
		parts: [{
			productId: "P-1008",
			name: "CVT Drive Belt",
			sku: "TR-YMIO-08",
			qty: 1,
			price: 980,
			cost: 610
		}],
		status: "Queued",
		staff: "Mika Reyes",
		date: toDateKey(),
		due: toDateKey(shiftDate(1))
	},
	{
		id: "WO-YD-01",
		customerId: "C-004",
		customer: "Aira Dela Peña",
		motorcycle: "Honda PCX 160 (2021-2025)",
		complaint: "1,000 km service",
		labor: 250,
		parts: [{
			productId: "P-1003",
			name: "Synthetic Engine Oil 10W-40",
			sku: "OF-HPCX160-03",
			qty: 1,
			price: 520,
			cost: 330
		}],
		status: "Completed",
		staff: "Rafael Santos",
		date: toDateKey(shiftDate(-1)),
		due: toDateKey(shiftDate(-1))
	}
];
var SEED_MOVEMENTS = [{
	id: "MV-1",
	productId: "P-1001",
	product: "Ceramic Brake Pad Set",
	delta: -1,
	reason: "sale",
	ref: "TXN-TODAY-017",
	user: "Mika Reyes",
	date: toDateKey(),
	time: "10:41"
}, {
	id: "MV-2",
	productId: "P-1003",
	product: "Synthetic Engine Oil 10W-40",
	delta: 24,
	reason: "purchase",
	ref: "PO-DONE-003",
	user: "Rafael Santos",
	date: toDateKey(shiftDate(-6)),
	time: "10:05"
}];
var SEED_AUDIT = [
	{
		id: "AU-1",
		action: "Sale completed",
		detail: "TXN-TODAY-017 · Ceramic Brake Pad Set",
		user: "Mika Reyes",
		date: toDateKey(),
		time: "10:41"
	},
	{
		id: "AU-2",
		action: "Stock adjusted",
		detail: "Ceramic Brake Pad Set marked low",
		user: "Noel Garcia",
		date: toDateKey(),
		time: "09:18"
	},
	{
		id: "AU-3",
		action: "Purchase received",
		detail: "PO-DONE-003",
		user: "Rafael Santos",
		date: toDateKey(shiftDate(-6)),
		time: "10:05"
	}
];
var SEED_NOTICES = [
	{
		id: "N-1",
		text: "Ceramic Brake Pad Set is below minimum (3 / 5)",
		unread: true,
		kind: "stock",
		date: toDateKey()
	},
	{
		id: "N-2",
		text: "Tubeless Tire 90/80-17 is out of stock",
		unread: true,
		kind: "stock",
		date: toDateKey()
	},
	{
		id: "N-3",
		text: "Purchase PO-OPEN-004 from GearWorks PH is still open",
		unread: false,
		kind: "purchase",
		date: toDateKey(shiftDate(-2))
	}
];
function cloneSeed() {
	return {
		products: structuredClone(SEED_PRODUCTS),
		customers: structuredClone(SEED_CUSTOMERS),
		suppliers: structuredClone(SEED_SUPPLIERS),
		sales: structuredClone(SEED_SALES),
		purchases: structuredClone(SEED_PURCHASES),
		services: structuredClone(SEED_SERVICES),
		movements: structuredClone(SEED_MOVEMENTS),
		audit: structuredClone(SEED_AUDIT),
		notices: structuredClone(SEED_NOTICES),
		returns: [],
		settings: structuredClone(DEFAULT_SETTINGS),
		shifts: []
	};
}
var seed = cloneSeed();
var PAGE_ROLES = {
	dashboard: [
		"Owner",
		"Cashier",
		"Inventory Staff"
	],
	inventory: [
		"Owner",
		"Cashier",
		"Inventory Staff"
	],
	pos: ["Owner", "Cashier"],
	sales: ["Owner", "Cashier"],
	orders: ["Owner", "Cashier"],
	customers: ["Owner", "Cashier"],
	suppliers: ["Owner", "Inventory Staff"],
	purchases: ["Owner", "Inventory Staff"],
	fitment: [
		"Owner",
		"Cashier",
		"Inventory Staff"
	],
	service: ["Owner", "Cashier"],
	reports: ["Owner"],
	staff: ["Owner"],
	settings: ["Owner"]
};
function nowStamp() {
	return {
		date: toDateKey(),
		time: toTimeKey()
	};
}
function movement(product, delta, reason, ref, user) {
	const { date, time } = nowStamp();
	return {
		id: makeId("MV"),
		productId: product.id,
		product: product.name,
		delta,
		reason,
		ref,
		user,
		date,
		time
	};
}
var useShop = create()(persist((set, get) => ({
	user: null,
	page: "dashboard",
	products: seed.products,
	customers: seed.customers,
	suppliers: seed.suppliers,
	sales: seed.sales,
	purchases: seed.purchases,
	services: seed.services,
	movements: seed.movements,
	audit: seed.audit,
	notices: seed.notices,
	returns: seed.returns,
	settings: seed.settings,
	shifts: seed.shifts,
	cart: [],
	cartDiscount: 0,
	cartCustomerId: "walkin",
	hydrated: false,
	query: "",
	setHydrated: () => set({ hydrated: true }),
	login: (email, password) => {
		const found = STAFF.find((u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password);
		if (!found) return null;
		set({
			user: found,
			page: "dashboard"
		});
		get().addAudit("Signed in", found.role);
		return found;
	},
	logout: () => {
		const user = get().user;
		if (user) get().addAudit("Signed out", user.name);
		set({
			user: null,
			cart: [],
			page: "dashboard"
		});
	},
	setPage: (page) => {
		if (!get().canAccess(page)) return;
		set({
			page,
			query: ""
		});
	},
	setQuery: (q) => set({ query: q }),
	canAccess: (page) => {
		const role = get().user?.role;
		if (!role) return false;
		return PAGE_ROLES[page].includes(role);
	},
	addAudit: (action, detail) => {
		const user = get().user?.name ?? "System";
		const { date, time } = nowStamp();
		set((s) => ({ audit: [{
			id: makeId("AU"),
			action,
			detail,
			user,
			date,
			time
		}, ...s.audit].slice(0, 80) }));
	},
	addNotice: (text, kind) => {
		set((s) => ({ notices: [{
			id: makeId("N"),
			text,
			unread: true,
			kind,
			date: toDateKey()
		}, ...s.notices].slice(0, 40) }));
	},
	markNoticesRead: () => set((s) => ({ notices: s.notices.map((n) => ({
		...n,
		unread: false
	})) })),
	saveProduct: (input) => {
		const current = input.id ? get().products.find((p) => p.id === input.id) : void 0;
		const product = {
			id: current?.id ?? makeId("P"),
			sku: input.sku.trim(),
			name: input.name.trim(),
			category: input.category,
			brand: input.brand.trim(),
			compatibility: input.compatibility.trim(),
			supplierId: input.supplierId,
			price: Number(input.price) || 0,
			cost: Number(input.cost) || 0,
			stock: Number(input.stock) || 0,
			min: Number(input.min) || 0,
			location: input.location.trim(),
			description: input.description.trim(),
			image: input.image,
			warrantyDays: Number(input.warrantyDays) || 0
		};
		set((s) => ({ products: current ? s.products.map((p) => p.id === current.id ? product : p) : [product, ...s.products] }));
		get().addAudit(current ? "Product updated" : "Product added", product.name);
		if (product.stock === 0) get().addNotice(`${product.name} is out of stock`, "stock");
		else if (product.stock <= product.min) get().addNotice(`${product.name} is below minimum (${product.stock} / ${product.min})`, "stock");
		return product;
	},
	deleteProduct: (id) => {
		const p = get().products.find((x) => x.id === id);
		if (!p) return;
		set((s) => ({ products: s.products.filter((x) => x.id !== id) }));
		get().addAudit("Product removed", p.name);
	},
	adjustStock: (id, delta, reason, ref) => {
		const p = get().products.find((x) => x.id === id);
		if (!p) return;
		const stock = Math.max(0, p.stock + delta);
		const user = get().user?.name ?? "System";
		set((s) => ({
			products: s.products.map((x) => x.id === id ? {
				...x,
				stock
			} : x),
			movements: [movement({
				...p,
				stock
			}, delta, reason, ref, user), ...s.movements].slice(0, 120)
		}));
		if (stock === 0) get().addNotice(`${p.name} is out of stock`, "stock");
		else if (stock <= p.min) get().addNotice(`${p.name} is below minimum (${stock} / ${p.min})`, "stock");
	},
	addToCart: (productId) => {
		const p = get().products.find((x) => x.id === productId);
		if (!p) return "Part not found.";
		if (p.stock <= 0) return "That part is out of stock.";
		const existing = get().cart.find((i) => i.productId === productId);
		if (existing) {
			if (existing.qty >= p.stock) return "Not enough stock for another unit.";
			set((s) => ({ cart: s.cart.map((i) => i.productId === productId ? {
				...i,
				qty: i.qty + 1
			} : i) }));
			return null;
		}
		set((s) => ({ cart: [...s.cart, {
			productId: p.id,
			name: p.name,
			sku: p.sku,
			price: p.price,
			cost: p.cost,
			qty: 1,
			stock: p.stock,
			image: p.image
		}] }));
		return null;
	},
	setCartQty: (productId, qty) => {
		const max = get().products.find((x) => x.id === productId)?.stock ?? 0;
		const next = Math.max(0, Math.min(qty, max));
		if (next === 0) {
			get().removeFromCart(productId);
			return;
		}
		set((s) => ({ cart: s.cart.map((i) => i.productId === productId ? {
			...i,
			qty: next
		} : i) }));
	},
	removeFromCart: (productId) => set((s) => ({ cart: s.cart.filter((i) => i.productId !== productId) })),
	clearCart: () => set({
		cart: [],
		cartDiscount: 0
	}),
	setCartDiscount: (n) => set({ cartDiscount: Math.max(0, Math.min(100, n)) }),
	setCartCustomer: (id) => set({ cartCustomerId: id }),
	cartTotals: () => {
		const { cart, cartDiscount, settings } = get();
		const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0);
		const discount = subtotal * (cartDiscount / 100);
		const net = Math.max(0, subtotal - discount);
		const tax = settings.vatInclusive ? net - net / (1 + settings.vatRate / 100) : net * (settings.vatRate / 100);
		return {
			subtotal,
			discount,
			tax,
			total: settings.vatInclusive ? net : net + tax
		};
	},
	checkout: ({ payment, received, note }) => {
		const { cart, user, cartCustomerId, customers } = get();
		if (!user) return "Sign in first.";
		if (!cart.length) return "Cart is empty.";
		for (const item of cart) {
			const p = get().products.find((x) => x.id === item.productId);
			if (!p || p.stock < item.qty) return `Not enough stock for ${item.name}.`;
		}
		const totals = get().cartTotals();
		if (received + .001 < totals.total) return "Amount received is short of the total.";
		const customer = cartCustomerId === "walkin" ? null : customers.find((c) => c.id === cartCustomerId) ?? null;
		const items = cart.map((i) => ({
			productId: i.productId,
			name: i.name,
			sku: i.sku,
			qty: i.qty,
			price: i.price,
			cost: i.cost
		}));
		const { date, time } = nowStamp();
		const sale = {
			id: makeId("TXN"),
			customerId: customer?.id ?? null,
			customer: customer?.name ?? "Walk-in customer",
			items,
			subtotal: totals.subtotal,
			discount: totals.discount,
			tax: totals.tax,
			total: totals.total,
			payment,
			received,
			change: received - totals.total,
			staff: user.name,
			staffId: user.id,
			date,
			time,
			status: "Completed",
			note: note ?? ""
		};
		for (const item of items) get().adjustStock(item.productId, -item.qty, "sale", sale.id);
		set((s) => ({
			sales: [sale, ...s.sales],
			customers: customer ? s.customers.map((c) => c.id === customer.id ? {
				...c,
				purchases: c.purchases + sale.total,
				points: c.points + Math.floor(sale.total / 100),
				last: date
			} : c) : s.customers,
			cart: [],
			cartDiscount: 0
		}));
		get().addAudit("Sale completed", `${sale.id} · ${pesoPlain(sale.total)}`);
		get().addNotice(`Sale ${sale.id} · ${sale.customer}`, "sale");
		return sale;
	},
	setOrderStatus: (id, status) => {
		set((s) => ({ sales: s.sales.map((x) => x.id === id ? {
			...x,
			status
		} : x) }));
		get().addAudit("Order updated", `${id} → ${status}`);
	},
	voidSale: (id, restock) => {
		const sale = get().sales.find((s) => s.id === id);
		if (!sale) return "Sale not found.";
		if (sale.voided) return "Already voided.";
		if (restock) for (const item of sale.items) get().adjustStock(item.productId, item.qty, "return", id);
		set((s) => ({
			sales: s.sales.map((x) => x.id === id ? {
				...x,
				voided: true,
				status: "Completed"
			} : x),
			customers: sale.customerId ? s.customers.map((c) => c.id === sale.customerId ? {
				...c,
				purchases: Math.max(0, c.purchases - sale.total)
			} : c) : s.customers
		}));
		get().addAudit("Sale voided", id);
		return null;
	},
	saveCustomer: (input) => {
		const current = input.id ? get().customers.find((c) => c.id === input.id) : void 0;
		const customer = {
			id: current?.id ?? makeId("C"),
			name: input.name.trim(),
			phone: input.phone.trim(),
			email: input.email.trim(),
			motorcycle: input.motorcycle.trim(),
			notes: input.notes.trim(),
			purchases: current?.purchases ?? 0,
			points: current?.points ?? 0,
			last: current?.last ?? "—"
		};
		set((s) => ({ customers: current ? s.customers.map((c) => c.id === current.id ? customer : c) : [customer, ...s.customers] }));
		get().addAudit(current ? "Customer updated" : "Customer added", customer.name);
		return customer;
	},
	deleteCustomer: (id) => {
		const c = get().customers.find((x) => x.id === id);
		if (!c) return;
		set((s) => ({ customers: s.customers.filter((x) => x.id !== id) }));
		get().addAudit("Customer removed", c.name);
	},
	saveSupplier: (input) => {
		const current = input.id ? get().suppliers.find((s) => s.id === input.id) : void 0;
		const supplier = {
			id: current?.id ?? makeId("S"),
			company: input.company.trim(),
			contact: input.contact.trim(),
			phone: input.phone.trim(),
			email: input.email.trim(),
			status: input.status,
			notes: input.notes.trim()
		};
		set((s) => ({ suppliers: current ? s.suppliers.map((x) => x.id === current.id ? supplier : x) : [supplier, ...s.suppliers] }));
		get().addAudit(current ? "Supplier updated" : "Supplier added", supplier.company);
		return supplier;
	},
	deleteSupplier: (id) => {
		const s = get().suppliers.find((x) => x.id === id);
		if (!s) return;
		set((st) => ({ suppliers: st.suppliers.filter((x) => x.id !== id) }));
		get().addAudit("Supplier removed", s.company);
	},
	createPurchase: ({ supplierId, items, note }) => {
		const supplier = get().suppliers.find((s) => s.id === supplierId);
		const { date } = nowStamp();
		const po = {
			id: makeId("PO"),
			supplierId,
			supplier: supplier?.company ?? "Supplier",
			items,
			total: items.reduce((s, i) => s + i.qty * i.cost, 0),
			status: "Ordered",
			date,
			note: note ?? ""
		};
		set((s) => ({ purchases: [po, ...s.purchases] }));
		get().addAudit("Purchase created", po.id);
		get().addNotice(`Purchase ${po.id} sent to ${po.supplier}`, "purchase");
		return po;
	},
	receivePurchase: (id) => {
		const po = get().purchases.find((p) => p.id === id);
		if (!po) return "Purchase not found.";
		if (po.status === "Received") return "Already received.";
		for (const item of po.items) get().adjustStock(item.productId, item.qty, "purchase", po.id);
		set((s) => ({ purchases: s.purchases.map((p) => p.id === id ? {
			...p,
			status: "Received"
		} : p) }));
		get().addAudit("Purchase received", po.id);
		return null;
	},
	stockIn: (productId, qty, supplierId, cost) => {
		const p = get().products.find((x) => x.id === productId);
		if (!p || qty <= 0) return;
		if (cost && cost > 0) set((s) => ({ products: s.products.map((x) => x.id === productId ? {
			...x,
			cost
		} : x) }));
		get().adjustStock(productId, qty, "stock-in", "STOCK-IN");
		const supplier = get().suppliers.find((s) => s.id === supplierId);
		const { date } = nowStamp();
		const po = {
			id: makeId("SI"),
			supplierId,
			supplier: supplier?.company ?? "Direct",
			items: [{
				productId,
				name: p.name,
				qty,
				cost: cost || p.cost
			}],
			total: qty * (cost || p.cost),
			status: "Received",
			date,
			note: "Quick stock in"
		};
		set((s) => ({ purchases: [po, ...s.purchases] }));
		get().addAudit("Stock received", `${p.name} +${qty}`);
	},
	saveService: (input) => {
		const current = input.id ? get().services.find((j) => j.id === input.id) : void 0;
		const job = {
			id: current?.id ?? makeId("WO"),
			customerId: input.customerId ?? current?.customerId ?? null,
			customer: input.customer,
			motorcycle: input.motorcycle,
			complaint: input.complaint,
			labor: Number(input.labor) || 0,
			parts: input.parts ?? current?.parts ?? [],
			status: input.status ?? current?.status ?? "Queued",
			staff: get().user?.name ?? current?.staff ?? "",
			date: current?.date ?? toDateKey(),
			due: input.due ?? current?.due ?? toDateKey()
		};
		set((s) => ({ services: current ? s.services.map((j) => j.id === current.id ? job : j) : [job, ...s.services] }));
		get().addAudit(current ? "Work order updated" : "Work order opened", job.id);
		return job;
	},
	setServiceStatus: (id, status) => {
		const job = get().services.find((j) => j.id === id);
		if (!job) return "Work order not found.";
		if (status === "Completed" && job.status !== "Completed") for (const part of job.parts) {
			const p = get().products.find((x) => x.id === part.productId);
			if (p && p.stock >= part.qty) get().adjustStock(part.productId, -part.qty, "service", job.id);
		}
		set((s) => ({ services: s.services.map((j) => j.id === id ? {
			...j,
			status
		} : j) }));
		get().addAudit("Work order updated", `${id} → ${status}`);
		return null;
	},
	createReturn: (saleId, reason, restock) => {
		const sale = get().sales.find((s) => s.id === saleId);
		if (!sale) return "Sale not found.";
		if (sale.voided) return "That sale is already voided.";
		const err = get().voidSale(saleId, restock);
		if (err) return err;
		const ticket = {
			id: makeId("RTN"),
			saleId,
			customer: sale.customer,
			items: sale.items,
			total: sale.total,
			restock,
			reason,
			staff: get().user?.name ?? "",
			date: toDateKey()
		};
		set((s) => ({ returns: [ticket, ...s.returns] }));
		get().addAudit("Return processed", ticket.id);
		return ticket;
	},
	updateSettings: (patch) => {
		set((s) => ({ settings: {
			...s.settings,
			...patch
		} }));
		get().addAudit("Settings updated", "Shop profile");
	},
	openShift: (openingCash) => {
		const user = get().user;
		if (!user) return "Sign in first.";
		if (get().shifts.some((s) => s.staffId === user.id && !s.closed)) return "You already have an open shift.";
		const shift = {
			id: makeId("SH"),
			staffId: user.id,
			staff: user.name,
			opened: `${toDateKey()} ${toTimeKey()}`,
			closed: null,
			openingCash,
			closingCash: null,
			expectedCash: null
		};
		set((s) => ({ shifts: [shift, ...s.shifts] }));
		get().addAudit("Shift opened", pesoPlain(openingCash));
		return shift;
	},
	closeShift: (closingCash) => {
		const user = get().user;
		if (!user) return "Sign in first.";
		const open = get().shifts.find((s) => s.staffId === user.id && !s.closed);
		if (!open) return "No open shift.";
		const cashSales = get().sales.filter((s) => s.staffId === user.id && s.payment === "Cash" && !s.voided && s.date === toDateKey()).reduce((n, s) => n + s.total, 0);
		const expected = open.openingCash + cashSales;
		const closed = {
			...open,
			closed: `${toDateKey()} ${toTimeKey()}`,
			closingCash,
			expectedCash: expected
		};
		set((s) => ({ shifts: s.shifts.map((x) => x.id === open.id ? closed : x) }));
		get().addAudit("Shift closed", `${pesoPlain(closingCash)} counted / ${pesoPlain(expected)} expected`);
		return closed;
	},
	resetDemo: () => {
		set({
			...cloneSeed(),
			user: get().user,
			page: "dashboard",
			cart: [],
			cartDiscount: 0,
			cartCustomerId: "walkin",
			query: ""
		});
		get().addAudit("Demo data reset", "Catalog restored");
	}
}), {
	name: "motohaus-v3",
	storage: createJSONStorage(() => {
		if (typeof window === "undefined") return {
			getItem: () => null,
			setItem: () => {},
			removeItem: () => {}
		};
		return localStorage;
	}),
	skipHydration: true,
	partialize: (s) => ({
		user: s.user,
		page: s.page,
		products: s.products,
		customers: s.customers,
		suppliers: s.suppliers,
		sales: s.sales,
		purchases: s.purchases,
		services: s.services,
		movements: s.movements,
		audit: s.audit,
		notices: s.notices,
		returns: s.returns,
		settings: s.settings,
		shifts: s.shifts,
		cart: s.cart,
		cartDiscount: s.cartDiscount,
		cartCustomerId: s.cartCustomerId
	})
}));
function pesoPlain(n) {
	return "₱" + n.toLocaleString("en-PH", { maximumFractionDigits: 0 });
}
function stockStatus(p) {
	if (p.stock <= 0) return "out";
	if (p.stock <= p.min) return "low";
	return "ok";
}
function navFor(role) {
	if (!role) return [];
	return Object.keys(PAGE_ROLES).filter((p) => PAGE_ROLES[p].includes(role));
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[9px] text-[12.5px] font-semibold leading-tight transition-[filter,background-color,color,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-55 outline-none focus-visible:ring-2 focus-visible:ring-volt-1 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-linear-to-br from-volt-1 to-volt-2 text-white hover:brightness-110",
			orange: "bg-linear-to-br from-orange-1 to-orange-2 text-white hover:brightness-110",
			secondary: "bg-panel-2 text-fg-dim border border-line-soft hover:text-fg",
			ghost: "text-fg-dim hover:bg-panel-2 hover:text-fg",
			danger: "bg-danger/15 text-[#ff8a8a] border border-danger/30 hover:bg-danger/22",
			outline: "border border-line-soft bg-transparent text-fg-dim hover:text-fg"
		},
		size: {
			default: "h-9 min-h-[34px] px-3",
			sm: "h-8 min-h-8 px-2.5 text-xs",
			lg: "h-10 min-h-10 px-4",
			icon: "size-9 p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full min-w-0 rounded-[9px] border border-line-soft bg-panel-2 px-3 py-2 text-[13px] text-fg shadow-none outline-none transition-[border-color] placeholder:text-fg-mute focus:border-volt-1 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-[11.5px] font-medium text-fg-dim", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-20 w-full rounded-[9px] border border-line-soft bg-panel-2 px-3 py-2 text-[13px] text-fg outline-none placeholder:text-fg-mute focus:border-volt-1 disabled:opacity-50", className),
		...props
	});
}
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("flex flex-col gap-1.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function NativeSelect({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("h-9 w-full rounded-[9px] border border-line-soft bg-panel-2 px-2.5 text-[13px] text-fg outline-none focus:border-volt-1", className),
		...props
	});
}
function LoginScreen() {
	const login = useShop((s) => s.login);
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh w-full items-center justify-center bg-[#050507] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-[340px] max-w-[92vw] rounded-2xl border border-line-soft bg-panel px-6.5 py-7 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5.5 flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "logo-mark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[14.5px] font-semibold",
						children: "MotoHaus Parts"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "m-0 text-center text-[17px] font-semibold",
					children: "Workshop management"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 mb-5 text-center text-xs text-fg-mute",
					children: "Sign in to your motorcycle parts shop"
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 rounded-lg border border-danger/30 bg-danger/10 px-2.5 py-2 text-xs text-[#ff8a8a]",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "email",
								type: "email",
								required: true,
								autoComplete: "username",
								placeholder: "owner@motohaus.demo",
								defaultValue: "owner@motohaus.demo"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Password",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "password",
								type: "password",
								required: true,
								autoComplete: "current-password",
								defaultValue: "demo1234"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "mt-1.5 w-full",
							disabled: busy,
							children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3.5 animate-spin rounded-full border-2 border-white/35 border-t-white" }) : "Sign in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-center text-[11px] leading-relaxed text-fg-mute",
					children: [
						"Demo roles: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "font-semibold text-fg-dim",
							children: "owner@motohaus.demo"
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "font-semibold text-fg-dim",
							children: "cashier@motohaus.demo"
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "font-semibold text-fg-dim",
							children: "inventory@motohaus.demo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Password: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "font-semibold text-fg-dim",
							children: "demo1234"
						})
					]
				})
			]
		})
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 min-w-44 overflow-hidden rounded-xl border border-line-soft bg-panel p-2 shadow-[0_18px_40px_rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-fg-dim outline-none select-none hover:bg-panel-2 hover:text-fg focus:bg-panel-2 focus:text-fg", className),
		...props
	});
}
function PageHead({ kicker, title, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 text-[11px] text-fg-mute",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "m-0 text-[clamp(19px,2vw,24px)] font-bold",
			children: title
		})] }), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: actions
		}) : null]
	});
}
function Panel({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `min-w-0 rounded-2xl border border-line-soft bg-panel p-4 ${className}`,
		children
	});
}
function EmptyState({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-2.5 py-8 text-center text-xs text-fg-mute",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "mb-1 block text-sm text-fg-dim",
			children: title
		}), body]
	});
}
function ShopTable({ headers, children, minWidth = "700px" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-full overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full border-collapse text-xs",
			style: { minWidth },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				className: "whitespace-nowrap border-b border-line-soft px-2 py-2 text-left font-medium text-fg-mute",
				children: h
			}, h)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children })]
		})
	});
}
function Td({ children, primary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: `border-b border-line-soft px-2 py-2.5 align-middle ${primary ? "font-semibold text-fg" : "text-fg-dim"}`,
		children
	});
}
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 text-[10px] font-bold whitespace-nowrap", {
	variants: { variant: {
		good: "bg-good/12 text-good",
		warn: "bg-orange-1/14 text-orange-1",
		muted: "bg-fg-dim/12 text-fg-dim",
		info: "bg-volt-1/14 text-volt-1",
		danger: "bg-danger/14 text-danger"
	} },
	defaultVariants: { variant: "muted" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function StockBadge({ product }) {
	const s = stockStatus(product);
	if (s === "out") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "muted",
		children: "Out of stock"
	});
	if (s === "low") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "warn",
		children: "Low stock"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "good",
		children: "In stock"
	});
}
function DashboardPage() {
	const user = useShop((s) => s.user);
	const products = useShop((s) => s.products);
	const sales = useShop((s) => s.sales);
	const services = useShop((s) => s.services);
	const purchases = useShop((s) => s.purchases);
	const setPage = useShop((s) => s.setPage);
	const today = toDateKey();
	const stats = (0, import_react.useMemo)(() => {
		const live = sales.filter((s) => !s.voided);
		const todaySales = live.filter((s) => s.date === today);
		const todayTotal = todaySales.reduce((n, s) => n + s.total, 0);
		const low = products.filter((p) => stockStatus(p) === "low").length;
		const out = products.filter((p) => stockStatus(p) === "out").length;
		const units = products.reduce((n, p) => n + p.stock, 0);
		const days = [];
		for (let i = 13; i >= 0; i--) {
			const d = /* @__PURE__ */ new Date();
			d.setDate(d.getDate() - i);
			const key = toDateKey(d);
			const slice = live.filter((s) => s.date === key);
			days.push({
				label: d.toLocaleDateString("en-PH", {
					month: "short",
					day: "numeric"
				}),
				revenue: slice.reduce((n, s) => n + s.total, 0),
				orders: slice.length
			});
		}
		return {
			todaySales,
			todayTotal,
			low,
			out,
			units,
			days
		};
	}, [
		sales,
		products,
		today
	]);
	const attention = products.filter((p) => p.stock <= p.min);
	const openPO = purchases.filter((p) => p.status === "Ordered").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: `MOTOHAUS PARTS / ${user.role.toUpperCase()} VIEW`,
				title: `${greeting()}, ${firstName(user.name)}`,
				actions: user.role !== "Inventory Staff" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setPage("pos"),
					children: "+ New sale"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setPage("purchases"),
					children: "+ Stock in"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3.5 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Today's sales",
						value: peso(stats.todayTotal),
						meta: `${stats.todaySales.length} transactions today`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total products",
						value: String(products.length),
						meta: `${stats.units} units on hand`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Low stock items",
						value: String(stats.low),
						meta: "Review before next delivery",
						alert: stats.low > 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Out of stock",
						value: String(stats.out),
						meta: `${openPO} purchase orders in motion`,
						alert: stats.out > 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "m-0 text-sm font-bold",
					children: "Sales dynamic · last 14 days"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 text-[11.5px] text-fg-dim",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-1.5 rounded-full bg-orange-1" }), " Revenue"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "size-1.5 rounded-full bg-volt-1" }), " Orders"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-52 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: stats.days,
						margin: {
							top: 8,
							right: 8,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "revFill",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#ff6a3d",
									stopOpacity: .35
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#ff6a3d",
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "rgba(255,255,255,0.04)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "label",
								tick: {
									fill: "#6c6c7a",
									fontSize: 10
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: {
									fill: "#6c6c7a",
									fontSize: 10
								},
								axisLine: false,
								tickLine: false,
								width: 36
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "#17171f",
								border: "1px solid #212129",
								borderRadius: 12,
								fontSize: 12
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "revenue",
								stroke: "#ff6a3d",
								fill: "url(#revFill)",
								strokeWidth: 2.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "orders",
								stroke: "#8b6bff",
								fill: "transparent",
								strokeWidth: 2
							})
						]
					})
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(280px,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "m-0 text-sm font-bold",
						children: "Recent sales"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: () => setPage("sales"),
						children: "View sales"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
					headers: [
						"Transaction",
						"Customer",
						"Total",
						"Payment",
						"Staff"
					],
					minWidth: "560px",
					children: sales.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
							primary: true,
							children: s.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.customer }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(s.total) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "info",
							children: s.payment
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.staff })
					] }, s.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2.5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "m-0 text-sm font-bold",
						children: "Stock attention"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: () => setPage("inventory"),
						children: "Open inventory"
					})]
				}), attention.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "Healthy shelves",
					body: "All products are above minimum stock."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col",
					children: attention.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "block text-xs text-fg",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-[10.5px] text-fg-mute",
							children: p.compatibility
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "block text-xs tabular-nums",
								children: [
									p.stock,
									" / ",
									p.min
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockBadge, { product: p })]
						})]
					}, p.id))
				})] })]
			}),
			user.role !== "Inventory Staff" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2.5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "m-0 text-sm font-bold",
					children: "Service bay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					onClick: () => setPage("service"),
					children: "Open bay"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col",
				children: services.filter((j) => j.status !== "Completed").slice(0, 4).map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "block text-xs",
						children: j.customer
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10.5px] text-fg-mute",
						children: j.complaint
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: j.status === "Ready" ? "good" : j.status === "In progress" ? "warn" : "info",
						children: j.status
					})]
				}, j.id))
			})] }) : null
		]
	});
}
function Stat({ label, value, meta, alert }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 rounded-xl border bg-panel p-3.5 ${alert ? "border-orange-1/40" : "border-line-soft"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-fg-dim",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-2 text-[22px] font-bold break-all tabular-nums ${alert ? "text-orange-1" : ""}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 text-[10.5px] text-fg-mute",
				children: meta
			})
		]
	});
}
function ProductPhoto({ product, className, size = "md" }) {
	const dims = {
		sm: "size-10",
		md: "size-12",
		lg: "size-20",
		hero: "h-52 w-full"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative shrink-0 overflow-hidden rounded-lg bg-panel-2", dims, className),
		children: product.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.image,
			alt: product.name,
			className: "size-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex size-full items-center justify-center bg-linear-to-br from-volt-1/30 to-orange-1/30 text-[10px] font-bold text-fg",
			children: product.category.slice(0, 2).toUpperCase()
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-black/62 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(440px,calc(100%-32px))] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-line-soft bg-panel p-5 shadow-[0_18px_40px_rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-sm:top-auto max-sm:bottom-0 max-sm:translate-y-0 max-sm:w-full max-sm:max-w-none max-sm:rounded-t-2xl max-sm:rounded-b-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3.5 right-3.5 flex size-8 items-center justify-center rounded-lg text-fg-mute hover:bg-panel-2 hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-3.5 pr-8", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mt-4 flex justify-end gap-2.5 max-sm:flex-col-reverse", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-base font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-xs leading-relaxed text-fg-dim", className),
		...props
	});
}
function ProductDialog({ open, onClose, product }) {
	const saveProduct = useShop((s) => s.saveProduct);
	const suppliers = useShop((s) => s.suppliers);
	const [image, setImage] = (0, import_react.useState)(product?.image ?? "");
	(0, import_react.useEffect)(() => {
		if (open) setImage(product?.image ?? "");
	}, [open, product]);
	async function onFile(file) {
		if (!file) return;
		try {
			setImage(await fileToDataUrl(file));
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not read image");
		}
	}
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		saveProduct({
			id: product?.id,
			sku: String(data.get("sku")),
			name: String(data.get("name")),
			category: String(data.get("category")),
			brand: String(data.get("brand")),
			compatibility: String(data.get("compatibility")),
			supplierId: String(data.get("supplierId")),
			price: Number(data.get("price")),
			cost: Number(data.get("cost")),
			stock: Number(data.get("stock")),
			min: Number(data.get("min")),
			location: String(data.get("location")),
			description: String(data.get("description")),
			image,
			warrantyDays: Number(data.get("warrantyDays"))
		});
		toast.success(product ? "Part updated." : "Part added to inventory.");
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "w-[min(560px,calc(100%-24px))]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: product ? "Edit part" : "Add product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Catalog photos, pricing, and fitment stay with the SKU." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Product photo",
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: "",
								className: "size-16 rounded-lg object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-16 rounded-lg bg-panel-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "file",
								accept: "image/*",
								onChange: (e) => onFile(e.target.files?.[0])
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Product name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "name",
							required: true,
							defaultValue: product?.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "SKU",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "sku",
							required: true,
							defaultValue: product?.sku
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Category",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							name: "category",
							defaultValue: product?.category ?? "Brake System",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "brand",
							required: true,
							defaultValue: product?.brand
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Motorcycle compatibility",
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							name: "compatibility",
							defaultValue: product?.compatibility,
							children: MOTORCYCLES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m.label }, m.label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Selling price",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "price",
							type: "number",
							min: 0,
							step: "0.01",
							required: true,
							defaultValue: product?.price
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Cost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "cost",
							type: "number",
							min: 0,
							step: "0.01",
							required: true,
							defaultValue: product?.cost
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Current stock",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "stock",
							type: "number",
							min: 0,
							required: true,
							defaultValue: product?.stock ?? 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Minimum stock",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "min",
							type: "number",
							min: 0,
							required: true,
							defaultValue: product?.min ?? 5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Shelf / location",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "location",
							defaultValue: product?.location ?? "A-01"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Warranty (days)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "warrantyDays",
							type: "number",
							min: 0,
							defaultValue: product?.warrantyDays ?? 90
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Supplier",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							name: "supplierId",
							defaultValue: product?.supplierId,
							children: suppliers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.company
							}, s.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Description",
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							name: "description",
							rows: 3,
							defaultValue: product?.description
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: onClose,
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: product ? "Save changes" : "Add product"
						})]
					})
				]
			})]
		})
	});
}
function ProductViewDialog({ open, onClose, product, onEdit }) {
	if (!product) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: product.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				product.sku,
				" · ",
				product.brand,
				" · ",
				product.category
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhoto, {
				product,
				size: "hero",
				className: "rounded-xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-fg-dim",
				children: product.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-between border-b border-line-soft py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold",
					children: "Compatibility"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10.5px] text-fg-mute",
					children: product.compatibility
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockBadge, { product })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold",
					children: "Shelf · warranty"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10.5px] text-fg-mute",
					children: [
						product.location,
						" · ",
						product.warrantyDays ? `${product.warrantyDays} days` : "No warranty"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
					className: "tabular-nums",
					children: [product.stock, " units"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-bold tabular-nums",
				children: peso(product.price)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				onClick: onClose,
				children: "Close"
			}), onEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: onEdit,
				children: "Edit"
			}) : null] })
		] })
	});
}
function CustomerDialog({ open, onClose, id }) {
	const customers = useShop((s) => s.customers);
	const saveCustomer = useShop((s) => s.saveCustomer);
	const current = customers.find((c) => c.id === id);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		saveCustomer({
			id: current?.id,
			name: String(data.get("name")),
			phone: String(data.get("phone")),
			email: String(data.get("email")),
			motorcycle: String(data.get("motorcycle")),
			notes: String(data.get("notes"))
		});
		toast.success(current ? "Customer updated." : "Customer added.");
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: current ? "Edit customer" : "Add customer" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Full name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "name",
						required: true,
						defaultValue: current?.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Contact number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "phone",
						required: true,
						defaultValue: current?.phone
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						type: "email",
						defaultValue: current?.email
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Motorcycle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						name: "motorcycle",
						defaultValue: current?.motorcycle,
						children: MOTORCYCLES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m.label }, m.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Notes",
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "notes",
						rows: 3,
						defaultValue: current?.notes
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: current ? "Save" : "Add customer"
					})]
				})
			]
		})] })
	});
}
function SupplierDialog({ open, onClose, id }) {
	const suppliers = useShop((s) => s.suppliers);
	const saveSupplier = useShop((s) => s.saveSupplier);
	const current = suppliers.find((s) => s.id === id);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		saveSupplier({
			id: current?.id,
			company: String(data.get("company")),
			contact: String(data.get("contact")),
			phone: String(data.get("phone")),
			email: String(data.get("email")),
			status: String(data.get("status")) === "Paused" ? "Paused" : "Active",
			notes: String(data.get("notes"))
		});
		toast.success(current ? "Supplier updated." : "Supplier added.");
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: current ? "Edit supplier" : "Add supplier" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Company name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "company",
						required: true,
						defaultValue: current?.company
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Contact person",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "contact",
						required: true,
						defaultValue: current?.contact
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "phone",
						required: true,
						defaultValue: current?.phone
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						type: "email",
						defaultValue: current?.email
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Status",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						name: "status",
						defaultValue: current?.status ?? "Active",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Active" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Paused" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Notes",
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "notes",
						rows: 3,
						defaultValue: current?.notes
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: current ? "Save" : "Add supplier"
					})]
				})
			]
		})] })
	});
}
function StockInDialog({ open, onClose }) {
	const products = useShop((s) => s.products);
	const suppliers = useShop((s) => s.suppliers);
	const stockIn = useShop((s) => s.stockIn);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		stockIn(String(data.get("productId")), Number(data.get("qty")), String(data.get("supplierId")), Number(data.get("cost")) || void 0);
		toast.success("Stock received and inventory updated.");
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Record stock in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Receiving stock increases on-hand quantity immediately." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Product",
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						name: "productId",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: p.id,
							children: [
								p.name,
								" · ",
								p.sku
							]
						}, p.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Quantity received",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "qty",
						type: "number",
						min: 1,
						required: true,
						defaultValue: 5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Unit cost (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "cost",
						type: "number",
						min: 0,
						step: "0.01"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Supplier",
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						name: "supplierId",
						children: suppliers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.id,
							children: s.company
						}, s.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Receive stock"
					})]
				})
			]
		})] })
	});
}
function CheckoutDialog({ open, onClose, onDone }) {
	const cart = useShop((s) => s.cart);
	const customers = useShop((s) => s.customers);
	const cartCustomerId = useShop((s) => s.cartCustomerId);
	const setCartCustomer = useShop((s) => s.setCartCustomer);
	const cartTotals = useShop((s) => s.cartTotals);
	const checkout = useShop((s) => s.checkout);
	const totals = cartTotals();
	const [received, setReceived] = (0, import_react.useState)(String(totals.total.toFixed(2)));
	(0, import_react.useEffect)(() => {
		if (open) setReceived(totals.total.toFixed(2));
	}, [open, totals.total]);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const result = checkout({
			payment: String(data.get("payment")),
			received: Number(data.get("received")),
			note: String(data.get("note") ?? "")
		});
		if (typeof result === "string") {
			toast.error(result);
			return;
		}
		toast.success("Sale completed and inventory updated.");
		onDone(result.id);
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Complete sale" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Customer",
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						name: "customer",
						value: cartCustomerId,
						onChange: (e) => setCartCustomer(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "walkin",
							children: "Walk-in customer"
						}), customers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.name
						}, c.id))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Payment method",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						name: "payment",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cash" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "GCash" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Card" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bank Transfer" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Amount received",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "received",
						type: "number",
						min: 0,
						step: "0.01",
						required: true,
						value: received,
						onChange: (e) => setReceived(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Note",
					className: "col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "note",
						placeholder: "Optional"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 rounded-[10px] border border-dashed border-line p-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 text-[13px] font-semibold",
							children: "Transaction summary"
						}),
						cart.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "m-0 text-[11px] text-fg-dim",
							children: [
								i.qty,
								" × ",
								i.name,
								" — ",
								peso(i.qty * i.price)
							]
						}, i.productId)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-[11px] text-fg-dim",
							children: ["VAT in total: ", peso(totals.tax)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm font-bold",
							children: ["Total: ", peso(totals.total)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-fg-dim",
							children: ["Change: ", peso(Math.max(0, Number(received) - totals.total))]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Complete sale"
					})]
				})
			]
		})] })
	});
}
function ReceiptDialog({ open, onClose, saleId }) {
	const sale = useShop((s) => s.sales.find((x) => x.id === saleId));
	const settings = useShop((s) => s.settings);
	if (!sale) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Receipt" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "receipt-print",
				className: "rounded-[10px] border border-dashed border-line p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: settings.shopName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-fg-dim",
								children: settings.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-fg-dim",
								children: settings.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] text-fg-mute",
								children: ["TIN ", settings.tin]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-[11px] text-fg-dim",
						children: [
							sale.id,
							" · ",
							sale.date,
							" ",
							sale.time,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cashier: ",
							sale.staff,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Customer: ",
							sale.customer
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-1",
						children: sale.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.qty,
								" × ",
								i.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: peso(i.qty * i.price)
							})]
						}, i.productId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-1 border-t border-line-soft pt-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: peso(sale.subtotal)
								})]
							}),
							sale.discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-orange-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: ["-", peso(sale.discount)]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VAT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: peso(sale.tax)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: peso(sale.total)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-fg-dim",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [sale.payment, " received"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: peso(sale.received)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-fg-dim",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Change" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: peso(sale.change)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-center text-[10px] leading-relaxed text-fg-mute",
						children: settings.receiptFooter
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				onClick: onClose,
				children: "Close"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => window.print(),
				children: "Print"
			})] })
		] })
	});
}
function InventoryPage() {
	const products = useShop((s) => s.products);
	const query = useShop((s) => s.query);
	const user = useShop((s) => s.user);
	const setQuery = useShop((s) => s.setQuery);
	const deleteProduct = useShop((s) => s.deleteProduct);
	const [category, setCategory] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [layout, setLayout] = (0, import_react.useState)("table");
	const [edit, setEdit] = (0, import_react.useState)(void 0);
	const [view, setView] = (0, import_react.useState)(null);
	const [stockOpen, setStockOpen] = (0, import_react.useState)(false);
	const canEdit = user.role !== "Cashier";
	const rows = (0, import_react.useMemo)(() => {
		return products.filter((p) => {
			const q = `${p.name} ${p.sku} ${p.brand} ${p.compatibility}`.toLowerCase();
			if (query && !q.includes(query.toLowerCase())) return false;
			if (category && p.category !== category) return false;
			if (status && stockStatus(p) !== status) return false;
			return true;
		});
	}, [
		products,
		query,
		category,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "CATALOG / STOCK CONTROL",
				title: "Inventory",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => setStockOpen(true),
					children: "+ Stock in"
				}) : null, canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEdit(null),
					children: "+ Add product"
				}) : null] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search product, SKU, brand or compatibility",
						className: "min-w-[160px] flex-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						value: category,
						onChange: (e) => setCategory(e.target.value),
						className: "w-auto min-w-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All categories"
						}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						value: status,
						onChange: (e) => setStatus(e.target.value),
						className: "w-auto min-w-36",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All stock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "ok",
								children: "In stock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "low",
								children: "Low stock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "out",
								children: "Out of stock"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: () => setLayout(layout === "table" ? "grid" : "table"),
						children: layout === "table" ? "Photo grid" : "Table"
					})
				]
			}),
			layout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3.5",
				children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setView(p),
					className: "rounded-xl border border-line-soft bg-panel p-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhoto, {
							product: p,
							size: "hero",
							className: "h-36 rounded-lg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5 text-[13px] font-bold",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] text-fg-mute",
							children: [
								p.sku,
								" · ",
								p.brand
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold tabular-nums",
								children: peso(p.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockBadge, { product: p })]
						})
					]
				}, p.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "p-4",
				children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No products found",
					body: "Try a different search or add a new part."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
					headers: [
						"Part / SKU",
						"Category",
						"Compatibility",
						"Price",
						"Stock",
						"Status",
						""
					],
					minWidth: "820px",
					children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
							primary: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhoto, {
									product: p,
									size: "sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [p.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
									className: "mt-0.5 block font-normal text-fg-mute",
									children: [
										p.sku,
										" · ",
										p.brand
									]
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.category }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.compatibility }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(p.price) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.stock }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockBadge, { product: p }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									onClick: () => setView(p),
									children: "View"
								}),
								canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									size: "sm",
									onClick: () => setEdit(p),
									children: "Edit"
								}) : null,
								canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => {
										deleteProduct(p.id);
										toast.success("Part removed.");
									},
									children: "Remove"
								}) : null
							]
						}) })
					] }, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDialog, {
				open: edit !== void 0,
				product: edit ?? void 0,
				onClose: () => setEdit(void 0)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductViewDialog, {
				open: !!view,
				product: view,
				onClose: () => setView(null),
				onEdit: canEdit && view ? () => {
					setEdit(view);
					setView(null);
				} : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockInDialog, {
				open: stockOpen,
				onClose: () => setStockOpen(false)
			})
		]
	});
}
function PosPage() {
	const products = useShop((s) => s.products);
	const query = useShop((s) => s.query);
	const setQuery = useShop((s) => s.setQuery);
	const cart = useShop((s) => s.cart);
	const addToCart = useShop((s) => s.addToCart);
	const setCartQty = useShop((s) => s.setCartQty);
	const clearCart = useShop((s) => s.clearCart);
	const cartDiscount = useShop((s) => s.cartDiscount);
	const setCartDiscount = useShop((s) => s.setCartDiscount);
	const cartTotals = useShop((s) => s.cartTotals);
	const [sku, setSku] = (0, import_react.useState)("");
	const [checkout, setCheckout] = (0, import_react.useState)(false);
	const [receiptId, setReceiptId] = (0, import_react.useState)(null);
	const totals = cartTotals();
	const available = (0, import_react.useMemo)(() => products.filter((p) => p.stock > 0 && `${p.name} ${p.sku} ${p.compatibility}`.toLowerCase().includes(query.toLowerCase())), [products, query]);
	function scan() {
		const found = products.find((p) => p.sku.toLowerCase() === sku.trim().toLowerCase());
		if (!found) {
			toast.error("SKU not found.");
			return;
		}
		const err = addToCart(found.id);
		if (err) toast.error(err);
		else {
			toast.success(`${found.name} added.`);
			setSku("");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "SALES / COUNTER",
				title: "Point of Sale",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-fg-mute",
					children: "Demo checkout · inventory updates on completion"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(300px,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "m-0 text-sm font-bold",
							children: "Select parts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] text-fg-mute",
							children: [products.length, " catalog items"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mb-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							scan();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: sku,
							onChange: (e) => setSku(e.target.value),
							placeholder: "Scan or type SKU then Enter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "secondary",
							children: "Add SKU"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search by part name or SKU",
						className: "mb-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex max-h-[520px] flex-col overflow-y-auto",
						children: available.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							title: "No matching parts in stock",
							body: "Try another search or restock first."
						}) : available.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhoto, {
									product: p,
									size: "sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "block truncate text-xs",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10.5px] text-fg-mute",
										children: [
											p.sku,
											" · ",
											p.stock,
											" in stock · ",
											peso(p.price)
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									const err = addToCart(p.id);
									if (err) toast.error(err);
								},
								children: "Add"
							})]
						}, p.id))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2.5 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "m-0 text-sm font-bold",
						children: "Current cart"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: clearCart,
						children: "Clear"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [
						cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							title: "Your cart is empty",
							body: "Select a part or scan a SKU to begin a sale."
						}) : cart.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 border-b border-line-soft py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-xs",
									children: i.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-fg-mute",
									children: [peso(i.price), " each"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "size-7 rounded-[7px] border border-line-soft bg-panel-2",
											onClick: () => setCartQty(i.productId, i.qty - 1),
											children: "−"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-5 text-center text-xs tabular-nums",
											children: i.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "size-7 rounded-[7px] border border-line-soft bg-panel-2",
											onClick: () => setCartQty(i.productId, i.qty + 1),
											children: "+"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-xs tabular-nums",
									children: peso(i.qty * i.price)
								})
							]
						}, i.productId)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 flex items-center justify-between text-xs text-fg-dim",
							children: ["Discount %", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: 0,
								max: 100,
								value: cartDiscount,
								onChange: (e) => setCartDiscount(Number(e.target.value)),
								className: "ml-3 h-8 w-20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between pt-3 text-[13px] font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "tabular-nums",
								children: peso(totals.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-[10.5px] text-fg-mute",
							children: ["Includes VAT ", peso(totals.tax)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							disabled: !cart.length,
							onClick: () => setCheckout(true),
							children: "Complete sale"
						})
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutDialog, {
				open: checkout,
				onClose: () => setCheckout(false),
				onDone: (id) => setReceiptId(id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptDialog, {
				open: !!receiptId,
				saleId: receiptId,
				onClose: () => setReceiptId(null)
			})
		]
	});
}
function SalesPage() {
	const sales = useShop((s) => s.sales);
	const query = useShop((s) => s.query);
	const setPage = useShop((s) => s.setPage);
	const createReturn = useShop((s) => s.createReturn);
	const [payment, setPayment] = (0, import_react.useState)("");
	const [receiptId, setReceiptId] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => sales.filter((s) => {
		if (payment && s.payment !== payment) return false;
		const hay = `${s.id} ${s.customer} ${s.payment} ${s.staff}`.toLowerCase();
		return !query || hay.includes(query.toLowerCase());
	}), [
		sales,
		query,
		payment
	]);
	function exportCsv() {
		if (!rows.length) {
			toast.error("Nothing to export.");
			return;
		}
		const header = "ID,Customer,Total,Payment,Date,Staff,Status\n";
		const body = rows.map((s) => [
			s.id,
			s.customer,
			s.total,
			s.payment,
			s.date,
			s.staff,
			s.voided ? "Voided" : s.status
		].join(",")).join("\n");
		const blob = new Blob([header + body], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "motohaus-sales.csv";
		a.click();
		URL.revokeObjectURL(url);
		toast.success(`Exported ${rows.length} sales.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "TRANSACTIONS / PAYMENT HISTORY",
				title: "Sales",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: exportCsv,
					children: "Export CSV"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setPage("pos"),
					children: "+ New sale"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search transaction, customer or payment",
					defaultValue: query,
					onChange: (e) => useShop.getState().setQuery(e.target.value),
					className: "min-w-[160px] flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
					value: payment,
					onChange: (e) => setPayment(e.target.value),
					className: "w-auto min-w-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All payments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cash" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "GCash" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Card" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bank Transfer" })
					]
				})]
			}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No sales found",
				body: "Complete a sale from Point of Sale to see it here."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
				headers: [
					"Transaction",
					"Customer",
					"Items",
					"Total",
					"Payment",
					"Date",
					"Staff",
					""
				],
				minWidth: "860px",
				children: rows.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: s.voided ? "opacity-50" : "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
							primary: true,
							children: s.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.customer }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.items.reduce((n, i) => n + i.qty, 0) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(s.total) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "info",
							children: s.payment
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Td, { children: [
							s.date,
							" ",
							s.time
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.staff }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => setReceiptId(s.id),
								children: "Receipt"
							}), !s.voided ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => {
									const result = createReturn(s.id, "Counter return", true);
									if (typeof result === "string") toast.error(result);
									else toast.success("Return processed and stock restored.");
								},
								children: "Return"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: "Voided"
							})]
						}) })
					]
				}, s.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptDialog, {
				open: !!receiptId,
				saleId: receiptId,
				onClose: () => setReceiptId(null)
			})
		]
	});
}
function OrdersPage() {
	const sales = useShop((s) => s.sales);
	const setOrderStatus = useShop((s) => s.setOrderStatus);
	const setPage = useShop((s) => s.setPage);
	const query = useShop((s) => s.query).toLowerCase();
	const rows = sales.filter((s) => !s.voided && `${s.id} ${s.customer}`.toLowerCase().includes(query));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			kicker: "FULFILLMENT / CUSTOMER ORDERS",
			title: "Orders",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setPage("pos"),
				children: "+ New sale"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
			headers: [
				"Order ID",
				"Customer",
				"Items",
				"Total",
				"Payment",
				"Order status",
				"Date"
			],
			minWidth: "760px",
			children: rows.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
					primary: true,
					children: s.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.customer }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.items.map((i) => i.name).join(", ") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(s.total) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "good",
					children: "Paid"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
					value: s.status,
					onChange: (e) => setOrderStatus(s.id, e.target.value),
					className: "h-8 w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ready" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Completed" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Picked up" })
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: s.date })
			] }, s.id))
		}) })]
	});
}
function CustomersPage() {
	const customers = useShop((s) => s.customers);
	const sales = useShop((s) => s.sales);
	const query = useShop((s) => s.query).toLowerCase();
	const deleteCustomer = useShop((s) => s.deleteCustomer);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editId, setEditId] = (0, import_react.useState)();
	const [viewId, setViewId] = (0, import_react.useState)(null);
	const rows = customers.filter((c) => `${c.name} ${c.phone} ${c.email} ${c.motorcycle}`.toLowerCase().includes(query));
	const viewing = customers.find((c) => c.id === viewId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "CUSTOMER RELATIONSHIPS / RIDER PROFILES",
				title: "Customers",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setEditId(void 0);
						setOpen(true);
					},
					children: "+ Add customer"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search customer, phone or motorcycle",
					defaultValue: useShop.getState().query,
					onChange: (e) => useShop.getState().setQuery(e.target.value)
				})
			}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No customers found",
				body: "Add a rider profile to track motorcycles and purchases."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
				headers: [
					"Customer",
					"Contact",
					"Motorcycle",
					"Total purchases",
					"Last transaction",
					""
				],
				minWidth: "820px",
				children: rows.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
						primary: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "logo-mark flex size-9 items-center justify-center text-[11px] font-bold text-white",
								children: initials(c.name)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [c.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "block font-normal text-fg-mute",
								children: c.id
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Td, { children: [c.phone, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "block text-fg-mute",
						children: c.email
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: c.motorcycle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(c.purchases) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: c.last }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => setViewId(c.id),
								children: "View"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => {
									setEditId(c.id);
									setOpen(true);
								},
								children: "Edit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => {
									deleteCustomer(c.id);
									toast.success("Customer removed.");
								},
								children: "Remove"
							})
						]
					}) })
				] }, c.id))
			})] }),
			viewing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "m-0 mb-2 text-sm font-bold",
					children: viewing.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0 text-xs text-fg-dim",
					children: [
						viewing.phone,
						" · ",
						viewing.email,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						viewing.motorcycle,
						" · ",
						viewing.points,
						" loyalty points"
					]
				}),
				viewing.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-fg-mute",
					children: viewing.notes
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: sales.filter((s) => s.customerId === viewing.id).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-b border-line-soft py-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							s.id,
							" · ",
							s.date
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: peso(s.total) })]
					}, s.id))
				})
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerDialog, {
				open,
				id: editId,
				onClose: () => setOpen(false)
			})
		]
	});
}
function SuppliersPage() {
	const suppliers = useShop((s) => s.suppliers);
	const products = useShop((s) => s.products);
	const purchases = useShop((s) => s.purchases);
	const query = useShop((s) => s.query).toLowerCase();
	const deleteSupplier = useShop((s) => s.deleteSupplier);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editId, setEditId] = (0, import_react.useState)();
	const rows = suppliers.filter((s) => `${s.company} ${s.contact} ${s.phone}`.toLowerCase().includes(query));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "VENDOR NETWORK / SOURCING",
				title: "Suppliers",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setEditId(void 0);
						setOpen(true);
					},
					children: "+ Add supplier"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
				headers: [
					"Supplier",
					"Contact",
					"Products supplied",
					"Total purchases",
					"Status",
					""
				],
				minWidth: "760px",
				children: rows.map((s) => {
					const supplied = products.filter((p) => p.supplierId === s.id).length;
					const spend = purchases.filter((p) => p.supplierId === s.id).reduce((n, p) => n + p.total, 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Td, {
							primary: true,
							children: [s.company, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "block font-normal text-fg-mute",
								children: s.id
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Td, { children: [s.contact, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "block text-fg-mute",
							children: s.phone
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: supplied }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(spend) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: s.status === "Active" ? "good" : "muted",
							children: s.status
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => {
									setEditId(s.id);
									setOpen(true);
								},
								children: "Edit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => {
									deleteSupplier(s.id);
									toast.success("Supplier removed.");
								},
								children: "Remove"
							})]
						}) })
					] }, s.id);
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupplierDialog, {
				open,
				id: editId,
				onClose: () => setOpen(false)
			})
		]
	});
}
function PurchasesPage() {
	const purchases = useShop((s) => s.purchases);
	const products = useShop((s) => s.products);
	const suppliers = useShop((s) => s.suppliers);
	const receivePurchase = useShop((s) => s.receivePurchase);
	const createPurchase = useShop((s) => s.createPurchase);
	const [stockOpen, setStockOpen] = (0, import_react.useState)(false);
	const [poOpen, setPoOpen] = (0, import_react.useState)(false);
	function onCreate(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const productId = String(data.get("productId"));
		const p = products.find((x) => x.id === productId);
		if (!p) return;
		createPurchase({
			supplierId: String(data.get("supplierId")),
			items: [{
				productId,
				name: p.name,
				qty: Number(data.get("qty")),
				cost: Number(data.get("cost")) || p.cost
			}],
			note: String(data.get("note") ?? "")
		});
		toast.success("Purchase order created.");
		setPoOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "PROCUREMENT / INCOMING INVENTORY",
				title: "Purchases & Stock In",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => setPoOpen(true),
					children: "+ Purchase order"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setStockOpen(true),
					children: "+ Record stock in"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2.5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "m-0 text-sm font-bold",
					children: "Purchase orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-fg-mute",
					children: "Receiving a purchase increases inventory"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
				headers: [
					"Purchase ID",
					"Supplier",
					"Line items",
					"Total cost",
					"Status",
					"Date",
					""
				],
				minWidth: "800px",
				children: purchases.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
						primary: true,
						children: p.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.supplier }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.items.reduce((n, i) => n + i.qty, 0) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(p.total) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: p.status === "Received" ? "good" : "info",
						children: p.status
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.date }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: p.status === "Ordered" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => {
							const err = receivePurchase(p.id);
							if (err) toast.error(err);
							else toast.success("Purchase received and inventory updated.");
						},
						children: "Receive"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-fg-mute",
						children: "Completed"
					}) })
				] }, p.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockInDialog, {
				open: stockOpen,
				onClose: () => setStockOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: poOpen,
				onOpenChange: (v) => !v && setPoOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New purchase order" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onCreate,
					className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Supplier",
							className: "col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
								name: "supplierId",
								children: suppliers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.id,
									children: s.company
								}, s.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Product",
							className: "col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
								name: "productId",
								children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.id,
									children: p.name
								}, p.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Qty",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "qty",
								type: "number",
								min: 1,
								required: true,
								defaultValue: 6
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Unit cost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "cost",
								type: "number",
								min: 0,
								step: "0.01"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Note",
							className: "col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "note" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => setPoOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Create PO"
							})]
						})
					]
				})] })
			})
		]
	});
}
function FitmentPage() {
	const products = useShop((s) => s.products);
	const addToCart = useShop((s) => s.addToCart);
	const setPage = useShop((s) => s.setPage);
	const user = useShop((s) => s.user);
	const [bike, setBike] = (0, import_react.useState)(MOTORCYCLES[0].label);
	const [view, setView] = (0, import_react.useState)(null);
	const matches = (0, import_react.useMemo)(() => products.filter((p) => p.compatibility === bike || p.compatibility.startsWith("Universal") || bike.startsWith("Universal")), [products, bike]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "FITMENT / COMPATIBILITY",
				title: "Fitment Finder",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
					value: bike,
					onChange: (e) => setBike(e.target.value),
					className: "min-w-56",
					children: MOTORCYCLES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m.label }, m.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0 mb-4 text-xs text-fg-dim",
				children: [
					"Showing parts that bolt onto ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-fg",
						children: bike
					}),
					", plus universal shop stock."
				]
			}), matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				title: "No matching parts",
				body: "Try another motorcycle or add a catalog item with this fitment."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3.5",
				children: matches.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line-soft bg-panel-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "w-full text-left",
							onClick: () => setView(p),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPhoto, {
									product: p,
									size: "hero",
									className: "h-32 rounded-lg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[13px] font-bold",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-fg-mute",
									children: p.brand
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold tabular-nums",
								children: peso(p.price)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockBadge, { product: p })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2",
							children: p.compatibility.startsWith("Universal") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "info",
								children: "Universal"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "good",
								children: "Direct fit"
							})
						}),
						user?.role !== "Inventory Staff" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-2.5 w-full",
							disabled: p.stock <= 0,
							onClick: () => {
								addToCart(p.id);
								setPage("pos");
							},
							children: "Add to POS"
						}) : null
					]
				}, p.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductViewDialog, {
				open: !!view,
				product: view,
				onClose: () => setView(null)
			})
		]
	});
}
var TONE = {
	Queued: "info",
	"In progress": "warn",
	Ready: "good",
	Completed: "muted"
};
function ServicePage() {
	const services = useShop((s) => s.services);
	const customers = useShop((s) => s.customers);
	const products = useShop((s) => s.products);
	const saveService = useShop((s) => s.saveService);
	const setServiceStatus = useShop((s) => s.setServiceStatus);
	const [open, setOpen] = (0, import_react.useState)(false);
	function onCreate(e) {
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
			parts: p ? [{
				productId: p.id,
				name: p.name,
				sku: p.sku,
				qty: 1,
				price: p.price,
				cost: p.cost
			}] : []
		});
		toast.success("Work order opened.");
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "WORKSHOP / JOB TICKETS",
				title: "Service Bay",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOpen(true),
					children: "+ Work order"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
				headers: [
					"WO",
					"Rider",
					"Motorcycle",
					"Job",
					"Parts + labor",
					"Status",
					"Due",
					""
				],
				minWidth: "900px",
				children: services.map((j) => {
					const parts = j.parts.reduce((n, i) => n + i.qty * i.price, 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
							primary: true,
							children: j.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: j.customer }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: j.motorcycle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: j.complaint }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: peso(parts + j.labor) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: TONE[j.status],
							children: j.status
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: j.due }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
							value: j.status,
							onChange: (e) => {
								const err = setServiceStatus(j.id, e.target.value);
								if (err) toast.error(err);
							},
							className: "h-8 w-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Queued" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In progress" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ready" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Completed" })
							]
						}) })
					] }, j.id);
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: (v) => !v && setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Open work order" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onCreate,
					className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Customer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								name: "customerId",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Walk-in"
								}), customers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.name
								}, c.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Motorcycle",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
								name: "motorcycle",
								children: MOTORCYCLES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m.label }, m.label))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Complaint / job",
							className: "col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								name: "complaint",
								required: true,
								rows: 3,
								placeholder: "Oil change, brake squeal, CVT clean…"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Labor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "labor",
								type: "number",
								min: 0,
								defaultValue: 350
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Due",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "due",
								type: "date",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Suggested part",
							className: "col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								name: "productId",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "None yet"
								}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.id,
									children: p.name
								}, p.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => setOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Open ticket"
							})]
						})
					]
				})] })
			})
		]
	});
}
var COLORS = [
	"#ff6a3d",
	"#8b6bff",
	"#3ddc8a",
	"#ff2d55",
	"#6a3df5",
	"#9494a3"
];
function ReportsPage() {
	const sales = useShop((s) => s.sales);
	const products = useShop((s) => s.products);
	const setPage = useShop((s) => s.setPage);
	const data = (0, import_react.useMemo)(() => {
		const live = sales.filter((s) => !s.voided);
		const revenue = live.reduce((n, s) => n + s.total, 0);
		const cogs = live.reduce((n, s) => n + s.items.reduce((m, i) => m + i.qty * i.cost, 0), 0);
		const inventory = products.reduce((n, p) => n + p.stock * p.cost, 0);
		const cats = {};
		for (const s of live) for (const item of s.items) {
			const cat = products.find((x) => x.id === item.productId)?.category ?? "Other";
			cats[cat] = (cats[cat] ?? 0) + item.qty * item.price;
		}
		const category = Object.entries(cats).map(([name, value]) => ({
			name,
			value
		})).sort((a, b) => b.value - a.value);
		const today = toDateKey();
		const todayRev = live.filter((s) => s.date === today).reduce((n, s) => n + s.total, 0);
		return {
			revenue,
			cogs,
			profit: revenue - cogs,
			inventory,
			avg: live.length ? revenue / live.length : 0,
			count: live.length,
			category,
			todayRev,
			healthy: products.filter((p) => stockStatus(p) === "ok").length,
			attention: products.filter((p) => stockStatus(p) !== "ok").length
		};
	}, [sales, products]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "BUSINESS INTELLIGENCE / OWNER VIEW",
				title: "Reports",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => setPage("sales"),
					children: "View transactions"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3.5 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Sales (all time in shop)",
						value: peso(data.revenue),
						meta: `${data.count} transactions`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Estimated profit",
						value: peso(data.profit),
						meta: "Revenue minus item cost"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Inventory value",
						value: peso(data.inventory),
						meta: "At purchase cost"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Average sale",
						value: peso(data.avg),
						meta: `Today ${peso(data.todayRev)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-0 mb-3 text-sm font-bold",
					children: "Sales by category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: data.category,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "rgba(255,255,255,0.04)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									tick: {
										fill: "#6c6c7a",
										fontSize: 10
									},
									interval: 0,
									angle: -18,
									height: 56
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: {
										fill: "#6c6c7a",
										fontSize: 10
									},
									width: 40
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "#17171f",
										border: "1px solid #212129",
										borderRadius: 12
									},
									formatter: (v) => peso(Number(v))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "value",
									radius: [
										6,
										6,
										3,
										3
									],
									fill: "#8b6bff"
								})
							]
						})
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-0 mb-3 text-sm font-bold",
					children: "Mix"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: data.category,
							dataKey: "value",
							nameKey: "name",
							innerRadius: 48,
							outerRadius: 80,
							paddingAngle: 3,
							children: data.category.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i % COLORS.length] }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							contentStyle: {
								background: "#17171f",
								border: "1px solid #212129",
								borderRadius: 12
							},
							formatter: (v) => peso(Number(v))
						})] })
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-0 mb-3 text-sm font-bold",
				children: "Inventory health"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Healthy stock",
						hint: "Above minimum level",
						value: String(data.healthy)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Needs attention",
						hint: "At or below minimum",
						value: String(data.attention)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Gross margin",
						hint: "Across recorded sales",
						value: data.revenue ? `${(data.profit / data.revenue * 100).toFixed(1)}%` : "—"
					})
				]
			})] })
		]
	});
}
function Card({ label, value, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line-soft bg-panel p-3.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-fg-dim",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-[22px] font-bold break-all tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 text-[10.5px] text-fg-mute",
				children: meta
			})
		]
	});
}
function Row({ label, hint, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-b border-line-soft py-2.5 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "block text-xs",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10.5px] text-fg-mute",
			children: hint
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
			className: "tabular-nums",
			children: value
		})]
	});
}
function StaffPage() {
	const audit = useShop((s) => s.audit);
	const shifts = useShop((s) => s.shifts);
	const user = useShop((s) => s.user);
	const openShift = useShop((s) => s.openShift);
	const closeShift = useShop((s) => s.closeShift);
	const [cash, setCash] = (0, import_react.useState)("2000");
	const open = shifts.find((s) => s.staffId === user.id && !s.closed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "ACCESS / ACTIVITY",
				title: "Staff & Audit Log"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2.5 flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "m-0 text-sm font-bold",
						children: "Cash drawer shift"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							value: cash,
							onChange: (e) => setCash(e.target.value),
							className: "w-28"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "orange",
							onClick: () => {
								const result = closeShift(Number(cash));
								if (typeof result === "string") toast.error(result);
								else toast.success(`Shift closed. Expected ${peso(result.expectedCash ?? 0)}, counted ${peso(result.closingCash ?? 0)}.`);
							},
							children: "Close shift"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => {
								const result = openShift(Number(cash));
								if (typeof result === "string") toast.error(result);
								else toast.success("Shift opened.");
							},
							children: "Open shift"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-3 text-xs text-fg-mute",
					children: "Opening cash plus today's cash sales is the expected drawer. Counted cash is logged on close."
				}),
				shifts.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between border-b border-line-soft py-2 text-xs last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						s.staff,
						" · ",
						s.opened,
						s.closed ? ` → ${s.closed}` : " · OPEN"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: s.closed ? `${peso(s.closingCash ?? 0)} / ${peso(s.expectedCash ?? 0)}` : `Start ${peso(s.openingCash)}` })]
				}, s.id))
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "m-0 text-sm font-bold",
					children: "Demo staff accounts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] text-fg-mute",
					children: "Frontend demo roles. A live shop would put authorization on the server."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTable, {
				headers: [
					"Staff member",
					"Email",
					"Role",
					"Access"
				],
				minWidth: "640px",
				children: STAFF.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
						primary: true,
						children: u.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: u.email }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "info",
						children: u.role
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: u.role === "Owner" ? "All modules" : u.role === "Cashier" ? "POS, sales, customers, service" : "Inventory, stock in, suppliers" })
				] }, u.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-0 mb-3 text-sm font-bold",
				children: "Recent activity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col",
				children: audit.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-b border-line-soft py-2.5 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "block text-xs",
						children: a.action
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10.5px] text-fg-mute",
						children: [
							a.detail,
							" · ",
							a.user
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-fg-mute",
						children: prettyDateTime(a.date, a.time)
					})]
				}, a.id))
			})] })
		]
	});
}
function SettingsPage() {
	const settings = useShop((s) => s.settings);
	const updateSettings = useShop((s) => s.updateSettings);
	const resetDemo = useShop((s) => s.resetDemo);
	const logout = useShop((s) => s.logout);
	const products = useShop((s) => s.products);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		updateSettings({
			shopName: String(data.get("shopName")),
			tagline: String(data.get("tagline")),
			address: String(data.get("address")),
			phone: String(data.get("phone")),
			tin: String(data.get("tin")),
			vatRate: Number(data.get("vatRate")),
			receiptFooter: String(data.get("receiptFooter"))
		});
		toast.success("Shop profile saved.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex max-w-xl flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
				kicker: "SHOP / PREFERENCES",
				title: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3.5 text-sm font-bold",
				children: "Shop profile"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Shop name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "shopName",
							required: true,
							defaultValue: settings.shopName
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tagline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "tagline",
							defaultValue: settings.tagline
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Address",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "address",
							defaultValue: settings.address
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3 max-sm:grid-cols-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "phone",
								defaultValue: settings.phone
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "TIN",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "tin",
								defaultValue: settings.tin
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "VAT rate %",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "vatRate",
							type: "number",
							min: 0,
							step: "0.01",
							defaultValue: settings.vatRate
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Receipt footer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							name: "receiptFooter",
							rows: 3,
							defaultValue: settings.receiptFooter
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "self-start",
						children: "Save changes"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-sm font-bold",
					children: "Shelf barcode preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 mb-3 text-[11px] text-fg-mute",
					children: "Each SKU renders as a scan-style mark on the counter. First catalog item shown."
				}),
				products[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Barcode, { sku: products[0].sku }) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "border-danger/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2.5 text-sm font-bold",
						children: "Danger zone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0 mb-3 text-[11px] text-fg-mute",
						children: "Restore the demo catalog, or sign out of this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => {
								resetDemo();
								toast.success("Demo catalog restored.");
							},
							children: "Reset demo data"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "danger",
							onClick: logout,
							children: "Log out"
						})]
					})
				]
			})
		]
	});
}
function Barcode({ sku }) {
	const bars = barcodeBars(sku);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-14 items-end gap-px rounded-lg bg-white px-2 py-1.5",
		children: bars.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "bg-black",
			style: {
				width: w,
				height: i % 7 === 0 ? "100%" : "86%"
			}
		}, i))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-center font-mono text-[11px] tracking-[0.2em]",
		children: sku
	})] });
}
var PAGE_LABELS = {
	dashboard: "Dashboard",
	inventory: "Inventory",
	pos: "Point of Sale",
	sales: "Sales",
	orders: "Orders",
	customers: "Customers",
	suppliers: "Suppliers",
	purchases: "Purchases / Stock In",
	fitment: "Fitment Finder",
	service: "Service Bay",
	reports: "Reports",
	staff: "Staff & Audit",
	settings: "Settings"
};
function CommandPalette({ open, onClose }) {
	const [q, setQ] = (0, import_react.useState)("");
	const setPage = useShop((s) => s.setPage);
	const user = useShop((s) => s.user);
	const products = useShop((s) => s.products);
	const customers = useShop((s) => s.customers);
	const pages = navFor(user?.role);
	const query = q.trim().toLowerCase();
	const matches = (0, import_react.useMemo)(() => {
		const pageHits = pages.filter((p) => PAGE_LABELS[p].toLowerCase().includes(query) || p.includes(query)).map((p) => ({
			kind: "page",
			id: p,
			label: PAGE_LABELS[p],
			extra: "Go to page"
		}));
		const productHits = products.filter((p) => `${p.name} ${p.sku} ${p.brand}`.toLowerCase().includes(query)).slice(0, 6).map((p) => ({
			kind: "product",
			id: p.id,
			label: p.name,
			extra: `${p.sku} · ${peso(p.price)}`
		}));
		const customerHits = customers.filter((c) => `${c.name} ${c.phone} ${c.motorcycle}`.toLowerCase().includes(query)).slice(0, 4).map((c) => ({
			kind: "customer",
			id: c.id,
			label: c.name,
			extra: c.motorcycle
		}));
		if (!query) return pageHits;
		return [
			...pageHits,
			...productHits,
			...customerHits
		];
	}, [
		query,
		pages,
		products,
		customers
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Jump to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					autoFocus: true,
					placeholder: "Jump to a page, part, or rider…",
					value: q,
					onChange: (e) => setQ(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 max-h-72 overflow-y-auto",
					children: matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-2 py-6 text-center text-xs text-fg-mute",
						children: "Nothing matches."
					}) : matches.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left hover:bg-panel-2",
						onClick: () => {
							if (m.kind === "page") setPage(m.id);
							if (m.kind === "product") setPage("inventory");
							if (m.kind === "customer") setPage("customers");
							onClose();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13px] font-medium",
							children: m.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-fg-mute",
							children: m.extra
						})]
					}, m.kind + m.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 px-1 text-[10px] text-fg-mute",
					children: "Tip: press Ctrl/Cmd + K anywhere."
				})
			]
		})
	});
}
var ICONS = {
	dashboard: LayoutDashboard,
	inventory: Boxes,
	pos: ShoppingCart,
	sales: ChartColumn,
	orders: ClipboardList,
	customers: Users,
	suppliers: Truck,
	purchases: ArrowDownToLine,
	fitment: Bike,
	service: Wrench,
	reports: Package,
	staff: Shield,
	settings: Settings
};
var LABELS = PAGE_LABELS;
var PAGES = {
	dashboard: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPage, {}),
	inventory: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryPage, {}),
	pos: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PosPage, {}),
	sales: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesPage, {}),
	orders: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersPage, {}),
	customers: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomersPage, {}),
	suppliers: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuppliersPage, {}),
	purchases: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurchasesPage, {}),
	fitment: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitmentPage, {}),
	service: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePage, {}),
	reports: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsPage, {}),
	staff: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffPage, {}),
	settings: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {})
};
function ShopShell() {
	const user = useShop((s) => s.user);
	const page = useShop((s) => s.page);
	const setPage = useShop((s) => s.setPage);
	const logout = useShop((s) => s.logout);
	const query = useShop((s) => s.query);
	const setQuery = useShop((s) => s.setQuery);
	const notices = useShop((s) => s.notices);
	const markNoticesRead = useShop((s) => s.markNoticesRead);
	const nav = (0, import_react.useMemo)(() => navFor(user.role), [user.role]);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [cmdOpen, setCmdOpen] = (0, import_react.useState)(false);
	const [stockOpen, setStockOpen] = (0, import_react.useState)(false);
	const unread = notices.filter((n) => n.unread).length;
	const bottom = nav.filter((p) => user.role === "Inventory Staff" ? [
		"dashboard",
		"inventory",
		"purchases",
		"suppliers"
	].includes(p) : [
		"dashboard",
		"pos",
		"inventory",
		"sales"
	].includes(p));
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setCmdOpen(true);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh bg-bg text-fg max-md:flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-dvh w-[220px] shrink-0 flex-col overflow-y-auto border-r border-line-soft px-4 py-5 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { role: user.role }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-2 rounded-[10px] border border-line-soft bg-panel px-2.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-fg-mute" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search",
							className: "w-full bg-transparent text-xs text-fg-dim outline-none placeholder:text-fg-mute"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, {
						pages: nav,
						current: page,
						onPick: setPage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "promo-card relative mt-auto mb-3.5 overflow-hidden rounded-[14px] px-3.5 pt-4 pb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-5 -right-5 size-[70px] rounded-full bg-white/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2.5 inline-block rounded-[5px] bg-black/28 px-1.5 py-0.5 text-[9.5px] font-bold tracking-wide text-white",
								children: "MOTOHAUS°"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "m-0 max-w-[120px] text-base leading-tight font-bold text-white",
								children: "Parts that keep riders moving"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "absolute right-3.5 bottom-3.5 left-3.5 h-[34px] rounded-[20px] bg-[#101014] text-xs font-semibold text-white",
								onClick: () => user.role === "Cashier" ? setPage("pos") : setStockOpen(true),
								children: user.role === "Cashier" ? "Open POS" : "Quick stock in"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: logout,
						className: "flex items-center gap-2.5 px-2.5 py-2 text-[13px] text-fg-dim hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), "Logout"]
					})
				]
			}),
			mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute inset-0 bg-black/60",
					onClick: () => setMobileOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full w-[min(280px,86vw)] flex-col bg-bg p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { role: user.role }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, {
							pages: nav,
							current: page,
							onPick: (p) => {
								setPage(p);
								setMobileOpen(false);
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: logout,
							className: "mt-auto flex items-center gap-2.5 px-2.5 py-2 text-[13px] text-fg-dim",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), "Logout"]
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto px-[clamp(16px,2.4vw,28px)] py-5 pb-24 md:h-dvh md:pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex size-9 items-center justify-center rounded-[10px] border border-line-soft bg-panel md:hidden",
								onClick: () => setMobileOpen(true),
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "m-0 truncate text-[clamp(19px,2vw,22px)] font-bold",
								children: LABELS[page]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden items-center gap-2 rounded-[10px] border border-line-soft bg-panel px-3 py-2 sm:flex sm:w-[230px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-fg-mute" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Search parts, SKU, customers",
										className: "w-full bg-transparent text-xs text-fg-dim outline-none placeholder:text-fg-mute"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "hidden size-9 items-center justify-center rounded-[10px] border border-line-soft bg-panel text-fg-dim hover:bg-panel-2 lg:flex",
									onClick: () => setCmdOpen(true),
									title: "Command palette",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
									onOpenChange: (open) => {
										if (open) markNoticesRead();
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "relative flex size-9 items-center justify-center rounded-[10px] border border-line-soft bg-panel hover:bg-panel-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-3.5" }), unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 size-1.5 rounded-full bg-orange-1" }) : null]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
										align: "end",
										className: "w-[230px]",
										children: notices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "px-2.5 py-3.5 text-center text-xs text-fg-mute",
											children: "No notifications."
										}) : notices.slice(0, 6).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
											className: n.unread ? "text-fg" : "",
											children: n.text
										}, n.id))
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-[10px] border border-line-soft bg-panel px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-fg-mute" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search parts, SKU, customers",
								className: "h-8 border-0 bg-transparent px-0"
							})]
						})
					}),
					PAGES[page]()
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed right-0 bottom-0 left-0 z-40 flex border-t border-line-soft bg-bg/95 px-2 py-1.5 backdrop-blur md:hidden",
				children: bottom.map((p) => {
					const Icon = ICONS[p];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setPage(p),
						className: cn("flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg text-[10px]", page === p ? "text-fg" : "text-fg-mute"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), LABELS[p].split(" ")[0]]
					}, p);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				open: cmdOpen,
				onClose: () => setCmdOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockInDialog, {
				open: stockOpen,
				onClose: () => setStockOpen(false)
			})
		]
	});
}
function Brand({ role }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex items-center gap-2 px-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "logo-mark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[13px] leading-tight font-semibold",
			children: "MotoHaus Parts"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-[10px] text-orange-1",
			children: role
		})] })]
	});
}
function NavList({ pages, current, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-2 pb-2 text-[10px] tracking-wider text-fg-mute uppercase",
			children: "Workspace"
		}), pages.map((p) => {
			const Icon = ICONS[p];
			const active = current === p;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onPick(p),
				className: cn("mb-0.5 flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-2 text-left text-[13px]", active ? "border border-line-soft bg-panel-2 text-fg" : "text-fg-dim hover:bg-[#141419]"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("size-3.5", active ? "opacity-100" : "opacity-75") }), LABELS[p]]
			}, p);
		})]
	});
}
function Home() {
	const hydrated = useShop((s) => s.hydrated);
	const user = useShop((s) => s.user);
	(0, import_react.useEffect)(() => {
		(async () => {
			await useShop.persist.rehydrate();
			useShop.getState().setHydrated();
		})();
	}, []);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-[#050507] text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-sm text-fg-dim",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "logo-mark" }), "Loading MotoHaus…"]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopShell, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginScreen, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme: "dark",
		position: "bottom-right",
		toastOptions: { className: "!bg-panel !border-line-soft !text-fg !text-[12.5px]" }
	})] });
}
//#endregion
export { Home as component };
