import React from "react";
import { useNavigate } from "react-router-dom";
function ProductCard({ image, detail, price ,link }) {
  const navigate = useNavigate();
  const gotoshoppage = ()=>{
    navigate("/Shoppage")
  }
  return (
    
    <div className="h-[80vh] w-1/3    m-10  shadow-xl shadow-gray-500 ">
        <button onClick={gotoshoppage} className="h-full w-full">
        <div
          className="h-5/6   bg-cover bg-no-repeat bg-bottom"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex justify-center">Organic</div>
        <div className=" flex justify-center">{detail}</div>
        <div className="text-lg font-bold flex justify-center">{price}</div>
        </button>
    </div>
  );
}

export default ProductCard;
