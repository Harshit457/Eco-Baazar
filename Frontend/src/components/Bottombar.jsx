import React from "react";
import FirstCard from "./FirstCard";
import Ecobazar from "./Ecobazar";
function Bottombar() {
  return (
    <div>
      <div className="pl-32 h-screen pr-14 mt-14 ">
        <div className="bg-white  h-2/5 rounded-2xl shadow-lg shadow-gray-400 flex gap-3">
          <div className="w-1/2  p-10">
            <div className="text-blue-900 text-xl ">
              SIGN UP FOR EcoBazaar UPDATES
            </div>
            <div className="mt-3">
              Be in the know about what's happening at the EcoBazaar: never miss
              out on the latest trends, newest collections and exciting special
              projects from EcoBazaar.
            </div>
            <div className="text-gray-500">
              EcoBazaar processes the data collected to send you our newsletter.
              To find out more about how we manage your personal data and to
              exercise your rights, please refer to our{" "}
              <u className="font-semibold">privacy policy.</u>
            </div>
            <div className="text-gray-500">
              *Mandatory information: If you choose not to give your consent for
              the collection of mandatory data you will not be able to subscribe
              to the newsletter.
            </div>
          </div>
          <div className="w-1/2  p-10">
            <div>Gender *</div>
            <div className="flex gap-4 mt-6">
              <input type="checkbox" />
              Male
              <input type="checkbox" />
              Female
            </div>
            <div className="mt-6">Email sign-up*</div>
            <div>
              <input
                type="text"
                className="w-full border-b-2 border-b-grey mt-6"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="flex h-3/5 gap-6 ">
          <FirstCard
            heading={"Community"}
            content={
              "Explore our sustainable products at EcoBazaar Together, let’s make a difference! "
            }
            bt={"Visit our Community"}
            abt={"community"}
          ></FirstCard>
          <FirstCard
            heading={"Contact Us"}
            content={
              "How can we help you today? We’re here to provide you with the best service possible"
            }
            bt={"Get in touch"}
            abt={"contact"}
          ></FirstCard>
          <FirstCard
            heading={"About Us"}
            content={
              "We are a team of eco-enthusiasts who want to make a difference in the world"
            }
            bt={"know about us"}
            abt={"privacy"}
          ></FirstCard>
        </div>
      </div>
      <Ecobazar></Ecobazar>
    </div>
  );
}

export default Bottombar;
