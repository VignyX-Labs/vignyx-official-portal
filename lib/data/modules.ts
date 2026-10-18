export interface ModuleFeature {
  title: string;
  body: string;
}

export interface ProductModule {
  id: string;
  icon: string;
  label: string;
  headline: string;
  summary: string;
  audience: string;
  features: ModuleFeature[];
}

export const productModules: ProductModule[] = [
  {
    id: "counter",
    icon: "🧾",
    label: "Shop Counter",
    headline: "Fast, correct billing at the counter",
    summary:
      "Bill in seconds with the right batch, the right price and the right GST — every time.",
    audience: "Retail pharmacies & hospital pharmacies",
    features: [
      {
        title: "Oldest expiry sells first",
        body: "Batches are picked oldest-expiry first, with one bill line per batch at that batch's own MRP.",
      },
      {
        title: "GST bills, ready to share",
        body: "GST and discounts calculated automatically. Print the bill or share it as a PDF on WhatsApp.",
      },
      {
        title: "Cancellations & returns",
        body: "Cancel a sale or take back a customer return. Stock and accounts adjust automatically.",
      },
      {
        title: "Udhaar, without the notebook",
        body: "Customer credit accounts with running dues and settlements, always up to date.",
      },
      {
        title: "Customer profiles & prescriptions",
        body: "Keep customer history and scanned prescriptions together, with a Schedule H, H1 and X register.",
      },
      {
        title: "Never lose a sale silently",
        body: "Medicines asked for but out of stock are recorded — and the customer is told when they're back.",
      },
    ],
  },
  {
    id: "stock",
    icon: "💊",
    label: "Stock",
    headline: "Know exactly what's on every shelf",
    summary:
      "Every strip tracked by batch, expiry and rack — with alerts before anything runs out or expires.",
    audience: "Every account type",
    features: [
      {
        title: "Batch, expiry & rack",
        body: "See stock by batch, expiry date and rack location, with a detail page for every medicine.",
      },
      {
        title: "Low, out & reserved",
        body: "Low stock, out of stock and reserved quantities at a glance.",
      },
      {
        title: "Dead stock & slow movers",
        body: "Spot stock that isn't moving so you can return it or push it before it expires.",
      },
      {
        title: "Full batch traceability",
        body: "Trace any batch — where it came from and where it went.",
      },
      {
        title: "Alerts & watchlist on WhatsApp",
        body: "Low stock, out of stock, expiring and expired — set rules per shop or per medicine, with a \"Send test\" button.",
      },
      {
        title: "Opening stock import",
        body: "Bring your existing stock in from a sheet on day one, instead of typing it item by item.",
      },
    ],
  },
  {
    id: "receiving",
    icon: "📥",
    label: "Receiving Stock",
    headline: "Stock in, in minutes — not hours",
    summary:
      "Scan boxes, or upload the supplier's bill and let VignyX read it for you.",
    audience: "Pharmacies, chains, warehouses & hospitals",
    features: [
      {
        title: "Scan or type",
        body: "Receive stock by scanning the barcode or the box label — or type it in if you prefer.",
      },
      {
        title: "AI Bill Reader",
        body: "Upload a photo, PDF, Excel or CSV of the supplier bill. Items, batch, expiry, quantities, rates, MRP, GST and HSN are filled in for you.",
      },
      {
        title: "Matches you can trust",
        body: "Every item match is explained. A different strength or pack size is never matched automatically.",
      },
      {
        title: "Totals double-checked",
        body: "The totals printed on the bill are checked against what was read, before anything enters your stock.",
      },
      {
        title: "Duplicate bills blocked",
        body: "The same invoice number in the same financial year is caught — however it's written.",
      },
      {
        title: "Wrong documents refused",
        body: "Credit notes, debit notes, return notes and quotations are spotted and never received as stock.",
      },
    ],
  },
  {
    id: "buying",
    icon: "🛒",
    label: "Buying & Orders",
    headline: "Order the right quantity from the right supplier",
    summary:
      "Reorder suggestions, purchase orders and bill checking — so you only pay for what you ordered.",
    audience: "Pharmacies, chains & hospitals",
    features: [
      {
        title: "Running Low list",
        body: "What to reorder, with suggested quantities — minus what's already on order.",
      },
      {
        title: "Preferred supplier per medicine",
        body: "Assign one supplier to many medicines at once. VignyX remembers it for next time.",
      },
      {
        title: "Purchase orders",
        body: "Create a PO and send it by WhatsApp or PDF. Quantities in loose units, priced per pack.",
      },
      {
        title: "Bill vs order check",
        body: "Flags quantity and price differences, missing items and items you never ordered.",
      },
      {
        title: "Receive against the PO",
        body: "Partial deliveries, free goods, per-line GST and MRP or cost updates — all handled.",
      },
      {
        title: "Order up the chain",
        body: "Order directly from a distributor, your warehouse or a C&F agent on VignyX.",
      },
    ],
  },
  {
    id: "money",
    icon: "💰",
    label: "Money",
    headline: "Payables, returns and GST — handled",
    summary:
      "Know what you owe, what you're owed, and stay ready for GST filing.",
    audience: "Every account type",
    features: [
      {
        title: "Distributor payments",
        body: "Bills are booked automatically when stock is received, with due dates from each distributor's credit days.",
      },
      {
        title: "Credit notes & reminders",
        body: "Record payments and credit notes, and get reminded before anything goes overdue.",
      },
      {
        title: "Expiry returns",
        body: "Return near-expiry stock to suppliers and track every credit and replacement until it's settled.",
      },
      {
        title: "GST reports & GSTR-1",
        body: "GST reports and GSTR-1 export, ready for your accountant.",
      },
      {
        title: "Financial year close",
        body: "Close the year cleanly and start the next one with the right numbers.",
      },
      {
        title: "Reports & dashboard",
        body: "Sales, purchase and stock reports on one dashboard, ready to share with your accountant.",
      },
    ],
  },
  {
    id: "chains",
    icon: "🏬",
    label: "Chains & Warehouses",
    headline: "Run every branch and godown as one business",
    summary:
      "Branch requests, transfers and a central godown — with stock visible across the whole group.",
    audience: "Pharmacy chains & warehouses",
    features: [
      {
        title: "Group overview",
        body: "Multiple branches in one account, with a group dashboard and chain-wide inventory.",
      },
      {
        title: "Branch stock requests",
        body: "Branches request stock; the godown approves, picks and dispatches.",
      },
      {
        title: "Transfers & in-transit",
        body: "Track every transfer from dispatch to receipt, including stock still on the road.",
      },
      {
        title: "Godown demand",
        body: "See combined demand from all branches before you buy.",
      },
      {
        title: "Order inbox from shops",
        body: "Shop orders land in one inbox at the warehouse, ready to fulfil.",
      },
      {
        title: "Manage shops & shipments",
        body: "Create and manage shops from the warehouse, and track incoming shipments.",
      },
    ],
  },
  {
    id: "supply",
    icon: "🚚",
    label: "Supply Chain",
    headline: "Distributors, C&F agents and pharma companies — connected",
    summary:
      "The same platform runs every link from the manufacturer to the pharmacy counter.",
    audience: "Distributors, C&F agents & pharma companies",
    features: [
      {
        title: "Distributor: orders & invoices",
        body: "Customers, retailer orders, GST invoices, returns and payments in one place.",
      },
      {
        title: "Distributor: field sales",
        body: "Schemes, routes and van sales, with compliance records kept as you go.",
      },
      {
        title: "C&F: inward & dispatch",
        body: "Orders, inward and dispatch, claims and schemes, with reconciliation built in.",
      },
      {
        title: "C&F: demand intelligence",
        body: "Invoice intake, plus demand intelligence to plan stock ahead.",
      },
      {
        title: "Pharma company view",
        body: "One connected view across your C&F agents and distributors.",
      },
      {
        title: "Stock tracing",
        body: "Trace stock as it moves down the chain, location by location.",
      },
    ],
  },
  {
    id: "team",
    icon: "👥",
    label: "Team & Admin",
    headline: "Give every person exactly the access they need",
    summary:
      "Staff logins with permissions per feature and per location — and real people when you need help.",
    audience: "Every account type",
    features: [
      {
        title: "Workers & permissions",
        body: "Add staff and choose what each person can do — per feature and per location.",
      },
      {
        title: "Location access",
        body: "Scope a login to one branch, one godown, or the whole business.",
      },
      {
        title: "Subscriptions",
        body: "Manage your VignyX plan from inside the app.",
      },
      {
        title: "Support & issues",
        body: "Raise an issue from inside the app and hear back from a real person.",
      },
    ],
  },
];
