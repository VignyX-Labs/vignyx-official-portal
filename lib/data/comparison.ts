import { ComparisonRow } from "@/lib/types";

export const comparisonRows: ComparisonRow[] = [
  {
    id: "stock-in",
    criterion: "Entering supplier bills",
    manual: "Typing every line by hand, item by item",
    vignyx: "Upload the bill — AI reads it, you review and confirm",
  },
  {
    id: "bill-check",
    criterion: "Checking bills",
    manual: "Short supplies and wrong rates noticed late, or never",
    vignyx: "Bill checked against your order — differences flagged",
  },
  {
    id: "duplicates",
    criterion: "Duplicate bills",
    manual: "Same bill entered twice, paid twice",
    vignyx: "Same invoice in the same financial year is caught",
  },
  {
    id: "alerts",
    criterion: "Expiry & low stock",
    manual: "You find out when it's too late",
    vignyx: "WhatsApp alerts with rules per shop or medicine",
  },
  {
    id: "fefo",
    criterion: "Batch rotation",
    manual: "Depends on staff remembering expiry dates",
    vignyx: "Oldest expiry sells first, automatically",
  },
  {
    id: "payables",
    criterion: "Distributor dues",
    manual: "Due dates tracked in a diary",
    vignyx: "Bills booked on receipt, due dates from credit days",
  },
  {
    id: "gst",
    criterion: "GST filing",
    manual: "Collecting bills for the accountant every month",
    vignyx: "GST reports and GSTR-1 export, ready to share",
  },
];
