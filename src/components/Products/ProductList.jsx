import React from "react";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../app/services/productsApi";

const ProductList = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();
  return (
    <div className="grid grid-cols-5 gap-x-5 gap-y-8 w-full">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
