import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaSearch,
  FaShoppingBag,
  FaGlobe,
  FaBars,
} from "react-icons/fa";
function SideNavbar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login"); // Navigates to the "About" page
  };
  const goToSearch = () => {
    navigate("/search");
  };
  const goToCommunity = () => {
    navigate("/community");
  };
  const goToproduct = () => {
    navigate("/Product");
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "w-16" : "w-0"
        } overflow-hidden`}
      >
        <button className="fixed top-4 left-4 p-2 bg-white shadow rounded-full focus:outline-none">
          <FaBars size={24} />
        </button>

        <div className="flex flex-col items-center space-y-8 mt-40">
          <button onClick={goToLogin}>
            <FaUser
              className="text-gray-800 cursor-pointer hover:text-purple-500"
              size={24}
            />
          </button>
          <button onClick={goToSearch}>
            {" "}
            <FaSearch
              className="text-gray-800 cursor-pointer hover:text-purple-500"
              size={24}
            />
          </button>
          <button onClick={goToproduct}>
            {" "}
            <FaShoppingBag
              className="text-gray-800 cursor-pointer hover:text-purple-500"
              size={24}
            />
          </button>

          <button onClick={goToCommunity}>
            {" "}
            <FaGlobe
              className="text-gray-800 cursor-pointer hover:text-purple-500"
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
    </div>
  );
}

export default SideNavbar;
