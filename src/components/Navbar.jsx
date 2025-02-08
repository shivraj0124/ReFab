import { useState } from "react";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { AiTwotoneShop } from "react-icons/ai";
import logoBlack from "../assets/logoBlack2.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex  justify-between w-[100%] items-center  space-x-5">
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img src={logoBlack} className="h-[60px] w-[60px] " />
        </Link>
        <input type="text" className="w-[100%] p-2  bg-blue-50  rounded-md text-black focus:outline-0" placeholder="Search for products..." />
        </div>
        <div className="flex justify-end gap-4 px-2 w-[40%]">
          {/* <div className="hidden md:flex space-x-6 text-xl">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div> */}
          
          <div className="flex items-center space-x-4">
            {/* <Link to="/profile">
              <span className="">Login</span>
              {/* <User className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            </Link> */}
            
            <Link to="/login">
              <span className="border  px-4 p-2 border-gray-200 hover:bg-transparent hover:border-blue-600 hover:text-black bg-blue-600 text-white">
                Login
              </span>
              {/* <User className="w-6 h-6 text-gray-700 hover:text-blue-600" /> */}
            </Link>
            <div className="flex justify-center items-center hover:text-blue-700 space-x-2 text-xl">
              <AiTwotoneShop size={24} />
              <Link to="/becomeSeller">
                <span className="  ">
                  Become a Seller
                </span>
                {/* <User className="w-6 h-6 text-gray-700 hover:text-blue-600" /> */}
              </Link>
            </div>
            <Link to="/" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                3
              </span> */}
            </Link>
            {/* <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button> */}
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-3">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-blue-600">
            Shop
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
