import React from "react";

const StockFilter = () => {
  return (
    <>
      <h3 className="font-bold tracking-wider">Availability</h3>
      <div>
        <div className="text-sm mb-4 cursor-pointer">
          <div>
            <input className="mr-2 mb-2 cursor-pointer" type="checkbox" />
            <label>In-Stock</label>
          </div>
          <div>
            <input className="mr-2 mb-2 cursor-pointer" type="checkbox" />
            <label>Out of Stock</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockFilter;
