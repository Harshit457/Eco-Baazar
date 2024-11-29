import React from "react";
import SideNavbar from "../components/SideNavbar";
import twentyfour from "../assets/24.jpeg";
import twentyfive from "../assets/25.jpeg";
import twentysix from "../assets/26.jpeg";
import twentyeight from "../assets/28.jpeg";
import twentynine from "../assets/29.jpeg";
import thirty from "../assets/30.jpeg";
import thirtyone from "../assets/31.jpeg";
import thirtytwo from "../assets/32.jpeg";
import thirtythree from "../assets/33.jpeg";
import twentythree from "../assets/23.jpeg";
import four from "../assets/4.jpeg";
import five from "../assets/5.jpeg";
import six from "../assets/6.jpeg";
import SecondCard from "../components/SecondCard";
import Ecobazar from "../components/Ecobazar";
import { useNavigate } from "react-router-dom";
function ShopPage() {
  const navigate = useNavigate();
  const goTopurchase = () => {
    navigate("/payment");
  };
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <SideNavbar></SideNavbar>
      <div className="w-screen h-7   items-center pl-10 flex justify-center bg-cyan-900 text-gray-200 ">
        Free shipping for all recycled fashion orders from Friday 21st March to
        midnight Sunday 25th March!
      </div>

      <div className="flex w-screen h-[120vh] gap-10 pr-10 pl-28 mt-20">
        <div className=" w-1/2 h-5/6 grid grid-cols-2 grid-rows-2 ">
          <div
            className="col-span-1 row-span-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${twentyfour})` }}
          ></div>
          <div
            className="col-span-1 row-span-1 bg-cover bg-top"
            style={{ backgroundImage: `url(${twentyfive})` }}
          ></div>
          <div
            className="col-span-1 row-span-1 bg-cover bg-top"
            style={{ backgroundImage: `url(${twentysix})` }}
          ></div>
          <div
            className="col-span-1 row-span-1 bg-cover bg-center"
            style={{ backgroundImage: `url(${twentyfour})` }}
          ></div>
        </div>
        <div className=" w-1/2 h-5/6 flex flex-col">
          <div className="font-bold">EcoBazaar Exclusive</div>
          <div className="text-4xl flex  items-center text-gray-700 mt-5">
            Men's Organic Staple <br /> Cotton Solid Printed <br /> T-Shirt
          </div>
          <div className="font-bold mt-5"> ₹819</div>
          <div className="mt-5 text-red-500">30% 5 hours left</div>
          <div className="border-2 border-gray-200 w-11/12 mt-5"></div>
          <div className="mt-5">Color: Navy Blue </div>
          <div className="w-96 h-10 flex gap-4 pl-3 mt-5 ">
            <div className="bg-cyan-200 w-1/12 h-8 rounded-full border-2 border-cyan-400"></div>
            <div className="bg-cyan-700 border-cyan-950 w-1/12 h-8 rounded-full"></div>
          </div>
          <div className="flex justify-between pl-2 pr-2">
            <div>Size:</div>
            <div>Fit Chart</div>
          </div>
          <div className="flex gap-4 mt-2 pl-2">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>1X</div>
            <div>2X</div>
            <div>3X</div>
          </div>
          <div className="mt-5 ml-2">Quantity:</div>
          <div className="border border-black flex w-1/6 p-1 justify-between ml-2 mt-3 pl-4 pr-4">
            <button className="">-</button>
            <div>1</div>
            <button>+</button>
          </div>
          <div className="w-2/5 bg-cyan-900 text-gray-200 flex justify-center items-center mt-6 ml-2 h-10">
            <button onClick={goTopurchase}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="pl-28 pr-16">
        {" "}
        <div>Description</div>
        <div className="flex ">
          <div className="w-10/12 ">
            <div className="border border-black  mt-5"></div>
            <div className="text-2xl mt-5">
              This organic cotton T-Shirt is ideal if you love the softness of
              cotton. At EcoBazaar, our focus is on organic basics. That means
              high quality, yet timeless. With five magnificent shades, you'll
              be able to blend this T-Shirt into any outfit.
            </div>
            <ul className="ml-5 mt-7" style={{ listStyleType: "disc" }}>
              <li>Materials: 100% GOTS-certified organic cotton.</li>
              <li>300gsm (g/m2) - perfect for all seasons.</li>
              <li>Relaxed/loose/oversized fit</li>
              <li>Made from GMO-free and GOTS-certified organic cotton.</li>
              <li>
                Not tested on animals and doesn't contain any animal-derived
                products.
              </li>
              <li>
                Made with little to zero waste, and designed with circularity in
                mind: send your used clothing back to be recycled by following
                the instructions on the QR code on the care label.
              </li>
            </ul>
          </div>

          <div
            className="w-2/12 h-72 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${twentyeight})` }}
          ></div>
        </div>
      </div>
      <div className="pl-28 pt-20">
        <div className="text-2xl mb-5">Pair It Up With</div>
        <div className="grid grid-rows-2 grid-cols-4 h-[110vh] gap-20  pr-20">
          <div
            className="col-span-2 row-span-2  bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: `url(${twentynine})` }}
          ></div>
          <div
            className="col-span-1 row-span-1  bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${thirty})` }}
          ></div>
          <div
            className="col-span-1 row-span-1  bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${thirtyone})` }}
          ></div>
          <div
            className="col-span-1 row-span-1  bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${thirtytwo})` }}
          ></div>
          <div
            className="col-span-1 row-span-1  bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${thirtythree})` }}
          ></div>
        </div>
      </div>
      <div className="pl-28 pt-20 flex gap-5 ">
        <div className="p-6 w-1/2  bg-white rounded-lg shadow-md">
          {/* Ratings Header */}
          <h2 className="text-lg font-bold text-gray-800 mb-4">RATINGS</h2>

          {/* Main Rating Section */}
          <div className="flex w-full gap-20 ">
            <div className=" mb-6">
              {" "}
              <div className="text-4xl font-bold ">4.4 ★</div>
              <div className="mt-5 text-gray-600 text-sm">
                2.1k Verified Buyers
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="space-y-2">
                {[
                  { stars: 5, count: 1319, width: "80%" },
                  { stars: 4, count: 499, width: "60%" },
                  { stars: 3, count: 175, width: "30%" },
                  { stars: 2, count: 41, width: "10%" },
                  { stars: 1, count: 87, width: "15%" },
                ].map((item) => (
                  <div key={item.stars} className="flex items-center">
                    <span className="text-gray-600 text-sm">{item.stars}★</span>
                    <div className="relative w-full h-2 ml-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-600"
                        style={{ width: item.width }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-600">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rating Bars */}

          {/* What Customers Said Section */}
          <h2 className="mt-6 text-lg font-bold text-gray-800">
            WHAT CUSTOMERS SAID
          </h2>
          <div className="space-y-4 mt-4 w-1/2">
            {[
              {
                category: "Fit",
                description: "Just Right (85%)",
                width: "85%",
              },
              {
                category: "Length",
                description: "Just Right (88%)",
                width: "88%",
              },
              {
                category: "Thickness",
                description: "Medium (64%)",
                width: "64%",
              },
            ].map((item) => (
              <div key={item.category}>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{item.category}</span>
                  <span>{item.description}</span>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-cyan-600"
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* View Details Link */}
          <div className="mt-6">
            <a
              href="#"
              className="text-sm font-semibold text-red-500 hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="w-1/2 h-[50vh]  pr-20">
          <div className="font-semibold">Customers Photos</div>
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-6 mt-5 ">
            <div
              className="col-span-1 row-span-1 bg-cover bg-center  bg-no-repeat"
              style={{ backgroundImage: `url(${twentyfour})` }}
            ></div>
            <div
              className="col-span-1 row-span-1 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${twentyfive})` }}
            ></div>
            <div
              className="col-span-1 row-span-1 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${twentysix})` }}
            ></div>
            <div
              className="col-span-1 row-span-1 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${twentyfour})` }}
            ></div>
          </div>
        </div>
      </div>
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
      <div className="pl-28">
        <div className="text-xl font-semibold">You may also Like</div>
        <div className="flex w-full">
          <SecondCard
            image={six}
            detail={"Men's & Women's sustainable Shirts"}
          ></SecondCard>
          <SecondCard
            image={five}
            detail={"Women's sustainable essential T-Shirts"}
          ></SecondCard>
          <SecondCard
            image={four}
            detail={"Men's sustainable essential sweatshirt"}
          ></SecondCard>
        </div>
      </div>
      <Ecobazar></Ecobazar>
    </div>
  );
}

export default ShopPage;
