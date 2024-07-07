import React from "react";

const StockFilter = () => {
  return (
    <>
      <h3 className="font-bold tracking-wider">Availability</h3>
      <div>
        <div className="text-sm mb-4">
          <div>
            <input className="mr-2 mb-2" type="checkbox" />
            <label>In-Stock</label>
          </div>
          <div>
            <input className="mr-2 mb-2" type="checkbox" />
            <label>Out of Stock</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockFilter;
