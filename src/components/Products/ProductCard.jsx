import React from "react";
import pic from "../../assets/photos/desk-concept-cyber-monday.jpg";

const ProductCard = () => {
  return (
    <div className="h-full px-2 mb-4">
      <div className="bg-[#dfdcdc85] h-1/2 mb-2 bg-black bg-opacity-50">
        <img src={pic} className="h-full w-full" />
      </div>
      <div className="mb-2">Name of Product</div>
      <div className="mb-2">Rating</div>
      <div className="text-[0.9rem] mb-2">
        $ 9.99{" "}
        <span className=" ml-2 text-[#5352527c] line-through text-">
          $ 11.99
        </span>
      </div>
      <button
        className="border-2 border-solid border-[#bbb8b82d]  py-1
      w-full rounded-md text-[#636262d7] text-[0.9rem] hover:bg-blue-600
       hover:border-white hover:text-white 
       active:bg-blue active:text-white"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
