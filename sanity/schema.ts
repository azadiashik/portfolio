// Sanity Studio schema: this creates the forms you use to add and edit content.
const list = (name: string) => ({ name, type: "array", of: [{ type: "string" }] });
export const schemaTypes = [
  { name: "project", title: "Project", type: "document", fields: [
    { name: "title", type: "string" }, { name: "slug", type: "slug", options: { source: "title" } },
    { name: "category", type: "string", options: { list: ["Financial Modelling & Valuation", "Equity Research", "Investment Analysis", "Corporate Finance", "Banking & Financial Analysis", "Business Analysis"] } },
    { name: "context", type: "string", title: "Where it was done" }, { name: "summary", type: "text", rows: 2 },
    { name: "objective", type: "text", rows: 2 }, list("methodology"), list("outputs"), list("tools"), { name: "order", type: "number" } ] },
];
