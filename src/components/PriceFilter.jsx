import React from "react";

const PriceFilter = () => {
  return (
    <>
      <h3 className="font-bold tracking-wider">Price</h3>
      <div>
        <div className="text-sm mb-4">
          <div>
            <input className="mr-2 mb-2" type="checkbox" />
            <label>50 - 100</label>
          </div>
          <div>
            <input className="mr-2 mb-2" type="checkbox" />
            <label>100 - 150</label>
          </div>
          <div>
            <input className="mr-2 mb-2" type="checkbox" />
            <label>150 - 200</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
