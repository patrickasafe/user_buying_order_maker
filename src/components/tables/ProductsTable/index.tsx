import BaseTable from "../BaseTable";

import useProducts from "./hooks/useProducts";
import { productsTableHeadCells as headCells } from "../BaseTable/utils/configs";

const ProductsTable = () => {
  const [products, setProducts] = useProducts();

  return <BaseTable title={'Products'} headCells={headCells} data={products} setData={setProducts} />;
};
export default ProductsTable;
