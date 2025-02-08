import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import UserSidebar from "./SellerSidebar";
import { FaRegUser } from "react-icons/fa";
export default function SellerProfileCard() {
  const [user, setUser] = useState({
    name: "Vedant",
    email: "vedant@gmail.com",
    address: "123 Main Street, Cityville",
  });

  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex w-[100%] justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
            <BsPencilSquare className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </div>
          <div  className="border p-4 rounded-[50%] w-max" >
            <FaRegUser size={72}/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {user.name}
            </h2>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Address:</strong> {user.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
