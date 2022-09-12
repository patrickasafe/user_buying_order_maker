import { Dispatch, SetStateAction } from "react";
import { RawDateTimeString } from "./date_time";

export interface FormAttribute {
  id: string;
  label: string;
  numeric: boolean;
}


export type HeadCell = FormAttribute & {
  disablePadding: boolean;
}


export type FormAttributeWithStates = FormAttribute & {
  setState: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
}


export type Product = {
  id: number;
  name: string;
  ref: string;
  price: number;
  supplier?: string;
}


export type TableSortingOrder = "asc" | "desc";

//
export type Order = {
  id: number;
  customer: number; 
  ref: string;
  order_date: RawDateTimeString;
  shipment_date: RawDateTimeString;
  products: ProductAndQuantity[];
  total_price: number;
}

type ProductAndQuantity = {
  product: number;
  quantity: number;
}

//Props
export interface BaseTableToolbarProps {
  numSelected: number;
  title: string;
}

export type BaseTableHeadProps = {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TableSortingOrder;
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export type BaseTableProps = {
  title: string;
  data: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
  headCells: readonly HeadCell[]
}