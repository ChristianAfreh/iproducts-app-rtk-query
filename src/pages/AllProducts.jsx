import React from "react";
import Search from "../components/Search";
import { CiBoxList } from "react-icons/ci";
import { HiViewGrid } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import PriceFilter from "../components/PriceFilter";
import BrandFilter from "../components/BrandFilter";
import StockFilter from "../components/StockFilter";
import ProductList from "../components/Products/ProductList";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-12 mx-6 mt-4 px-5 pt-5 h-100vh">
      <section className="col-span-2 pt-6 px-2 h-full">
        <div>
          <div className="flex flex-row items-center gap-2 mb-4 text-[1.15rem]">
            <button className="border-2 rounded-full p-2 active:bg-slate-300">
              <FiFilter />
            </button>
            <span className="font-bold tracking-wider">Filter</span>
          </div>
          <div>
            <BrandFilter />
            <PriceFilter />
            <StockFilter />
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo qui a,
          magnam at molestias perferendis voluptatibus corporis vel beatae
          exercitationem velit labore tempora necessitatibus error! Minus amet
          consequuntur libero consectetur repudiandae. Neque corrupti odit
          facilis similique possimus hic doloremque voluptatibus. Est earum,
          tempora quae facilis autem praesentium reiciendis incidunt.
        </div>
      </section>
      <section className="col-span-10 border-l-2 border-b-gray-600 pt-5 px-5">
        <div className="flex flex-row justify-between items-baseline">
          <h3 className="mb-4 text-[1.15rem]">
            <span className="font-bold  tracking-wide">Product List</span>
            <span className="text-gray-500">(45)</span>
          </h3>
          <div className="flex flex-row items-center text-sm gap-2">
            <Search />
            <span className="mr-4 font-semibold">Sort by:</span>
            <select className="border-2 rounded-md p-2">
              <option>Low to High</option>
            </select>
            <div>
              <button className="border-2 p-2 rounded-md text-lg active:bg-gray-300">
                <CiBoxList />
              </button>
              <button className="border-2 p-2 rounded-md text-lg active:bg-zinc-700 active:text-white">
                <HiViewGrid />
              </button>
              <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                ✨ You hover me!
              </span>
            </div>
          </div>
        </div>
        <ProductList />
      </section>
    </div>
  );
};

export default AllProducts;
