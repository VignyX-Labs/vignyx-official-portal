import { ComparisonRow } from "@/lib/types";

export const comparisonRows: ComparisonRow[] = [
  {
    id: "inventory",
    criterion: "Stock records",
    manual: "Handwritten registers, easy to lose or misread",
    vignyx: "Digital inventory, searchable and always up to date",
  },
  {
    id: "alerts",
    criterion: "Expiry & low stock",
    manual: "No alerts — you find out when it's too late",
    vignyx: "WhatsApp alerts before medicines expire or run out",
  },
  {
    id: "fifo",
    criterion: "Batch rotation",
    manual: "Manual FIFO, dependent on staff remembering",
    vignyx: "Automatic FIFO — oldest batch always sells first",
  },
  {
    id: "reports",
    criterion: "Reports",
    manual: "Paper registers, hard to analyze or share",
    vignyx: "Sales, expiry & purchase analytics, exportable to Excel",
  },
  {
    id: "ordering",
    criterion: "Reordering",
    manual: "Manual calls to distributors when stock runs low",
    vignyx: "One-tap WhatsApp order sent straight to your distributor",
  },
];
