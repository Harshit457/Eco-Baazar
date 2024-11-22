import React from "react";

function ProductCard({ image , detail, price }) {
  return (
    <div className="h-[75vh] w-1/3    m-10  shadow-xl shadow-gray-500 ">
      <div
        className="h-5/6   bg-cover bg-no-repeat bg-bottom"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex justify-center">Organic</div>
      <div className=" flex justify-center">{detail}</div>
      <div className="text-lg font-bold flex justify-center">{price}</div>
    </div>
  );
}

export default ProductCard;
