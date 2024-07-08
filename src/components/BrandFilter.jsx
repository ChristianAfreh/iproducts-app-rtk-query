import React from "react";

const BrandFilter = () => {
  return (
    <>
      <h3 className="font-bold tracking-wider">Brand</h3>
      <div className="text-sm mb-4">
        <div>
          <input className="mr-2 mb-2 cursor-pointer" type="checkbox" />
          <label>Luis Vuitton</label>
        </div>
        <div>
          <input className="mr-2 mb-2 cursor-pointer" type="checkbox" />
          <label>Dolce & Gabbana</label>
        </div>
        <div>
          <input className="mr-2 mb-2 cursor-pointer" type="checkbox" />
          <label>Michael Kors</label>
        </div>
      </div>
    </>
  );
};

export default BrandFilter;
