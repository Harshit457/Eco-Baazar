import React from "react";

function FirstCard({ heading, content, bt }) {
  return (
    <div className="bg-white flex justify-center items-center  mt-20  rounded-2xl shadow-lg shadow-gray-400">
      <div>
        <div className="flex justify-center text-2xl text-green-950">
          {heading}
        </div>
        <div className="flex justify-center text-lg text-gray-500 pl-14 pr-14 mt-6">
          {content}
        </div>
        <div className="flex justify-center">
          <button className="flex justify-center  bg-green-950 text-white w-3/6 h-8 items-center rounded-2xl mt-6">
            {bt}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
