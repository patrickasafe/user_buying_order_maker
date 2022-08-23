import { Product } from "components/tables/BaseTable/utils/interfaces";
import React from "react";
import { useQuery } from "react-query";

import { axiosInstance } from "libs/axiosInstance";
import { queryKeys } from "libs/react-query/constants";


async function getProducts(): Promise<Product[]> {
  const { data } = await axiosInstance.get("products/list/");
  return data;
}

// interface of payload
type useProductsPayload = Product[] | [];

const useProducts = (): [
  useProductsPayload,
  React.Dispatch<React.SetStateAction<Product[]>>
] => {
  const fallback: [] = [];
  const { data = fallback } = useQuery(queryKeys.products, getProducts);
  const [products, setProducts] = React.useState(data);

  React.useEffect(() => {
    setProducts(data)

  }, [data])

  return [products, setProducts];
}

export default useProducts