import { Dispatch, SetStateAction } from "react";

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



export interface BaseTableToolbarProps {
  numSelected: number;
  title: string;
}

export type Product = {
  id: number;
  name?: string;
  ref?: string;
  cost?: number;
  price?: number;
  supplier?: string;
}

export type Inventory = {
  id: number;
  name?: string;
  ref?: string;
  address?: number;
}

export type NewProduct = Omit<Product, 'id'>

export type Order = "asc" | "desc";


export interface Products {
  products: Product[];
}

export interface InventoryItem {
  id: number
  name: string
  ref: string
}


//Props
export type BaseTableHeadProps = {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Product
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
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


export { }