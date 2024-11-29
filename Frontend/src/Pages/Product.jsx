import React from "react";
import ProductCard from "../components/ProductCard";
import SideNavbar from "../components/SideNavbar";
import sixteen from "../assets/16.jpeg";
import seventeen from "../assets/17.jpeg";
import eighteen from "../assets/18.jpeg";
import nineteen from "../assets/19.jpeg";
import twenty from "../assets/20.jpeg";
import twentyone from "../assets/21.jpeg";
import twentytwo from "../assets/22.jpeg";
import { useNavigate } from "react-router-dom";
import twentythree from "../assets/23.jpeg";
import Ecobazar from "../components/Ecobazar";

function Product() {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };
  return (
    <div className=" w-screen h-screen overflow-x-hidden bg-gray-100">
      <SideNavbar></SideNavbar>
      <div className="w-screen h-5 items-center pl-10 flex justify-center bg-cyan-900 text-gray-200 ">
        Free shipping for all recycled fashion orders from Friday 21st March to
        midnight Sunday 25th March!
      </div>
      <div className="flex pl-36 text-lg mt-4">
        <button onClick={gotohome} className="">
          <img
            className="w-8 h-8 mr-3 font-bold"
            src="https://img.icons8.com/?size=100&id=7811&format=png&color=000000"
            alt=""
          />
        </button>
        <button className="text-gray-600">Home </button>
        <div className="flex justify-center items-center mr-1 ml-1"> / </div>
        <button className="font-semibold">Shop</button>
      </div>
      <div className="pl-36 mt-10 flex justify-between pr-20 font-semibold text-sm  ">
        <div className="flex">
          <button className="w-6 h-6 flex justify-center items-center ">
            <img
              src="https://img.icons8.com/?size=100&id=15637&format=png&color=000000"
              alt=""
            />
          </button>
          <div className="ml-2 flex justify-center items-center">
            FILTER AND SORT
          </div>
        </div>
        <div className="flex gap-4">
          <div>FEATURED PRODUCT</div>
          <div>98 PRODUCTS</div>
        </div>
      </div>
      <div className="flex w-screen h-auto pl-36 pr-10 mt-10 ">
        
        <ProductCard
          image={sixteen}
          detail={"Unisex Handbag"}
          price={"₹ 329"}
        ></ProductCard>
        <ProductCard 
          image={twentyone}
          detail={"Unisex T shirt"}
          price={"₹ 899"}
        ></ProductCard>
        <ProductCard
          image={twenty}
          detail={"Flower Port"}
          price={"₹ 499"}
        ></ProductCard>
      </div>
      <div className="flex w-screen h-auto pl-36 pr-10">
        <ProductCard
          image={nineteen}
          detail={"Unique Sitting Chair"}
          price={"₹ 819"}
        ></ProductCard>
        <ProductCard
          image={eighteen}
          detail={"Beauty Products"}
          price={"₹ 439"}
        ></ProductCard>
        <ProductCard
          image={seventeen}
          detail={"Coffee Mugs"}
          price={"₹ 249"}
        ></ProductCard>
      </div>
      <div
        className="h-[300vh]  bg-cover bg-no-repeat mt-10"
        style={{ backgroundImage: `url(${twentytwo})` }}
      ></div>
      <div className="w-full flex flex-col items-center py-10 px-4 mt-10">
        {/* Heading */}
        <h2 className="text-xl font-bold mb-6">What our customers say</h2>

        {/* Google Rating Section */}
        <div className="w-full max-w-4xl  rounded-lg p-6 flex justify-between items-center bg-gray-200 ">
          <div>
            <div className="flex items-center gap-2 ">
              {/* Google Logo and Rating Text */}

              <div
                style={{ backgroundImage: `url(${twentythree})` }}
                className="w-14 h-14 bg-contain bg-no-repeat bg-center "
              />
              <span className="text-gray-700 font-medium ml-2 ">Rating</span>
            </div>
            <div className="text-center  flex">
              {/* Rating Number and Stars */}
              <p className="text-2xl font-bold">5.0</p>
              <div className="flex items-center text-yellow-500">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index} className="text-lg">
                    {star}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm flex justify-center items-center">
                6 reviews
              </p>
            </div>
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            WRITE A REVIEW
          </button>
        </div>

        {/* Customer Reviews Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Review Card 1 */}
          <div className=" rounded-lg p-4 bg-gray-200">
            <div className="flex items-center text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-lg">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-2">
              I ordered 2 100% cotton hoodies over the weekend and needed them
              before a particular...
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-2 block"
            >
              Read more
            </a>
          </div>

          {/* Review Card 2 */}
          <div className=" rounded-lg p-4 bg-gray-200">
            <div className="flex items-center text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-lg">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-2">
              Excellent product at a refreshingly affordable price. Just
              received a hoodie, a couple...
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-2 block"
            >
              Read more
            </a>
          </div>

          {/* Review Card 3 */}
          <div className=" rounded-lg p-4 bg-gray-200">
            <div className="flex items-center text-yellow-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-lg">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-2">
              Ordered a custom t-shirt after contacting them over email. Also
              got one of their Show Your...
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium mt-2 block"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <Ecobazar></Ecobazar>
    </div>
  );
}

export default Product;
