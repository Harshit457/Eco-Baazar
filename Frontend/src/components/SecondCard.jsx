import React from "react";

function SecondCard({ image, detail }) {
  return (
    <div className="h-[80vh] w-1/3    m-10   shadow-xl shadow-gray-500 ">
      <button className="h-full w-full ">
        <div
          className="h-5/6   bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className=" flex justify-center">{detail}</div>
      </button>
    </div>
  );
}

export default SecondCard;
