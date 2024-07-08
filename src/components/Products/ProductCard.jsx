import React from "react";
import pic from "../../assets/photos/desk-concept-cyber-monday.jpg";
import { FaCartPlus } from "react-icons/fa";
import { getDiscountedPrice } from "../../app/utils/HelperFunctions";

const ProductCard = ({
  title,
  price,
  rating,
  discountPercentage,
  thumbnail,
}) => {

  var discountedAmount = getDiscountedPrice(discountPercentage,price);
  return (
    <div className="h-full px-2 mb-4">
      <div className="bg-[#dfdcdc85] h-1/2 mb-2 bg-opacity-50">
        <img src={thumbnail} className="h-full w-full" />
      </div>
      <div className="mb-2 font-semibold">{title}</div>
      <div className="mb-2">{rating}</div>
      <div className="text-[0.9rem] mb-2">
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
