import React from "react";
import first from "../assets/1.jpeg";
import SideNavbar from "../components/SideNavbar";
import seven from "../assets/7.jpeg";
import eight from "../assets/8.jpeg";

import ss from "../assets/ss.png";
import fourteen from "../assets/14.jpeg";
function Home() {
  return (
    <div className=" bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Side Navbar */}
        <div className="w-14 sticky">
          <SideNavbar />
        </div>

        {/* Background Image Section */}
        <div
          id="first"
          className="w-full  bg-center bg-no-repeat bg-cover text-white text-7xl flex justify-center items-center flex-col "
          style={{ backgroundImage: `url(${first})` }}
        >
          <div>
            <span className="font-colombo text-white">Eco</span>
            <span className="font-yatra">बाज़ार</span>
            <br />
          </div>

          <button className="text-3xl flex justify-center items-center bg-white text-green-800 w-72 h-16 rounded-full mt-8">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full pt-20  bg-center bg-no-repeat bg-cover  flex justify-center items-center flex-col overflow-hidden bg-gray-100">
        <div className="font-poppins text-tealCustom text-4xl ml-10 ">
          Because you deserve Better
        </div>
        <div className="mt-3 font-bold text-2xl ml-10 ">
          <span className="underline">Better Products</span> <span>+</span>{" "}
          <span className="underline">Better Planet</span>
        </div>
        <div
          className="w-full h-40 bg-center bg-no-repeat bg-cover text-7xl   items-center flex-col ml-3 mt-20 "
          style={{ backgroundImage: `url(${ss})` }}
        ></div>
      </div>

      <div className="pl-20 pt-10 bg-gray-100 h-auto overflow-y-hidden ">
        <div className="grid grid-cols-2 grid-rows-2 border-2 border-red-600  w-full ">
          {/* Men's Section */}
          <div
            className="relative bg-cover bg-center bg-no-repeat row-span-1  "
            style={{ backgroundImage: `url(${eight})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center  items-baseline px-6">
              <div className="mt-72">
                <h2 className="text-white text-xl md:text-3xl font-semibold ">
                  MEN'S NEW IN
                </h2>
                <button className="bg-white text-black px-6 py-2 font-medium rounded-full mt-8">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Women's Section */}
          <div
            className="relative bg-cover border-2 border-black bg-top bg-no-repeat row-span-1   "
            style={{ backgroundImage: `url(${seven})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start px-6">
              <div className="mt-72">
                <h2 className="text-white text-xl md:text-3xl font-semibold ">
                  WOMEN'S NEW IN
                </h2>
                <button className="bg-white text-black px-6 py-2 font-medium rounded-full mt-8">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Accessories Section (Spanning full width) */}
          <div
            className="relative bg-cover bg-center bg-no-repeat row-span-1 col-span-2 h-[60vh] "
            style={{ backgroundImage: `url(${fourteen})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-start items-start px-6">
              <div className="mt-10">
                <h2 className="text-white text-3xl md:text-3xl font-semibold mb-4">
                  ACCESSORIES NEW IN
                </h2>
                <button className="bg-white text-black px-6 py-2 font-medium rounded-full">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center h-40 text-2xl text-blue-900 font-semibold italic">
          “My approach to sustainability is first and foremost about quality ”
        </div>
        <div className="pl-32 h-screen  grid grid-rows-3 grid-cols-3 gap-3 p-14 ">
          <div
            className="bg-gray-100 row-span-2 col-span-1 bg-cover   "
            style={{ backgroundImage: `url(${seven})` }}
          >
            <div className="inset-0 bg-black/40 transition-opacity duration-500 opacity-0 hover:opacity-100 w-full h-full flex justify-center  items-center">
              <div>
                <div className="text-3xl flex justify-center">Quality</div>
                <div className="text-xl flex justify-center mt-2 pl-20 pr-20">
                  Made with the mindset or keeping the highest quality standards
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-400 row-span-1 col-span-1 ">
            <div className="inset-0 bg-black/40 transition-opacity duration-500 opacity-0 hover:opacity-100 w-full h-full flex justify-center items-center text-xl ">
              <div>
                <div className="text-3xl flex justify-center">Quality</div>
                <div className="text-xl flex justify-center mt-2 pl-20 pr-20">
                  Made with the mindset or keeping the highest quality standards
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-400 row-span-3 col-span-1 ">
            <div className="inset-0 bg-black/40 transition-opacity duration-500 opacity-0 hover:opacity-100 w-full h-full flex justify-center  items-center">
              <div>
                <div className="text-3xl flex justify-center">Quality</div>
                <div className="text-xl flex justify-center mt-2 pl-20 pr-20">
                  Made with the mindset or keeping the highest quality standards
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-1 col-span-1 flex justify-center items-center text-3xl  ">
            Why Choose Us?
          </div>
          <div className="bg-cyan-300 row-span-1 col-span-2 ">
            <div className="inset-0 bg-black/40 transition-opacity duration-500 opacity-0 hover:opacity-100 w-full h-full flex justify-center  items-center">
              <div>
                <div className="text-3xl flex justify-center">Quality</div>
                <div className="text-xl flex justify-center mt-2 pl-20 pr-20">
                  Made with the mindset or keeping the highest quality standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
