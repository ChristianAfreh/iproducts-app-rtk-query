import React from "react";
import ProductCard from "./ProductCard";
import ProductCardLoading from "./ProductCardLoading";
import NotFound from "../../pages/NotFound";
import { useGetAllProductsQuery } from "../../app/services/productsApi";

const ProductList = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  if (isError) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-5 gap-x-5 gap-y-8 w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardLoading key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5 gap-x-5 gap-y-8 w-full">
      {data &&
        data.products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            discountPercentage={product.discountPercentage}
            thumbnail={product.thumbnail}
          />
        ))}
    </div>
  );
};
export default ProductList;
