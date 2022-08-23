import React from "react"
import { NextPage } from "next"

import styles from "styles/Home.module.css"

import ProductsTable from "components/tables/ProductsTable"


const Products: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProductsTable />
    </div>
  );
}

export default Products
export { }