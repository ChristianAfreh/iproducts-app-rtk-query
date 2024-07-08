import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { getDiscountedPrice } from "../../app/utils/HelperFunctions";

const ProductCard = ({
  title,
  price,
  rating,
  discountPercentage,
  thumbnail,
}) => {
  var discountedAmount = getDiscountedPrice(discountPercentage, price);
  return (
    <div className="h-full px-2 mb-4">
      <div className="bg-[#dfdcdc85] h-1/2 mb-2 bg-opacity-50">
        <img src={thumbnail} className="h-full w-full" />
      </div>
      <div className="mb-2 font-semibold">{title}</div>
      <div className="mb-2 flex flex-row items-center gap-1">
      <MdOutlineStar  className="text-[1.2rem] text-yellow-400" />
      <span>{rating}</span>
      </div>
      <div className="flex flex-row items-center gap-1 text-[0.99rem] mb-2">
      <BsCashCoin />
        ${discountedAmount.toFixed(2)}
        <span className=" ml-2 text-[#5352527c] line-through text-">
          ${price}
        </span>
      </div>
      <button
        className="flex flex-row gap-2 items-center justify-center border-2 border-solid border-[#bbb8b82d]  py-1
      w-full rounded-md text-[#636262d7] text-[0.9rem] hover:bg-blue-600
       hover:border-white hover:text-white 
       active:bg-blue active:text-white"
      >
        <FaCartPlus />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
