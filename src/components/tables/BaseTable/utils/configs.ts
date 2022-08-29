import { HeadCell } from "./interfaces";

export const productsTableHeadCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Product Name",
  },
  {
    id: "ref",
    numeric: false,
    disablePadding: true,
    label: "Reference",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: true,
    label: "Selling Price ($)",
  },
];

export const inventoriesTableHeadCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "ref",
    numeric: false,
    disablePadding: false,
    label: "Reference",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: false,
    label: "Inventory Address",
  },
];