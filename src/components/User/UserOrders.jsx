import { useState } from "react";
import Sidebar from "./UserSidebar";
const users = [
    {
      id: 1,
      productId: "P123",
      image: "/bags/bags.jpg",
      name: "BagPack",
      transactionId: "T001",
      amount: "₹100",
      date: "2024-02-08",
    },
    {
      id: 2,
      productId: "P124",
      image: "/carpet/carpet_6.jpg",
      name: "Carpet",
      transactionId: "T002",
      amount: "₹250",
      date: "2024-02-08",
    },
    {
      id: 3,
      productId: "P125",
      image: "https://images.squarespace-cdn.com/content/v1/5a802676b7411c2497540b80/1541159002971-5WI4OL2UX1DO7EYVHFIM/DEBBIE-MCKEEGAN-TEXINTEL-HOME-TEXTILES.png",
      name: "Decor",
      transactionId: "T003",
      amount: "₹500",
      date: "2024-02-08",
    },
    {
      id: 4,
      productId: "P126",
      image: "/carpet/carpet_8.jpg",
      name: "Carpet",
      transactionId: "T004",
      amount: "₹300",
      date: "2024-02-08",
    },
    {
      id: 5,
      productId: "P127",
      image: "/bags/bag3.jpg",
      name: "BagPack",
      transactionId: "T005",
      amount: "₹150",
      date: "2024-02-08",
    },
  ];
  


export default function UserOrders() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-grow bg-gray-50 min-h-screen">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="h-[86vh] overflow-y-auto">
          <table className="w-full bg-white border-collapse ">
            <thead>
              <tr className="bg-green-100 top-0 sticky">
                <th className=" p-2 text-left">Sr.No.</th>
                <th className=" p-2 text-left">Product Name</th>
                <th className=" p-2 text-left">Image</th>
               
                <th className=" p-2 text-left">Product Id</th>
                <th className=" p-2 text-left">Transaction Id</th>
                <th className=" p-2 text-left">Amount</th>
                
                <th className=" p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white h-[600px] overflow-y-auto">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="cursor-pointer hover:bg-gray-200"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="border-b border-gray-200 p-2">{user.id}</td>
                  <td className="border-b border-gray-200 p-2">{user.name}</td>
                  <td className="border-b border-gray-200 p-2">
                    <img src={user.image} className="w-[60px] h-[60px]" />
                  </td>
                  <td className="border-b border-gray-200 p-2">{user.productId}</td>
                  <td className="border-b border-gray-200 p-2">
                    {user.transactionId}
                  </td>
                  <td className="border-b border-gray-200 p-2">
                    {user.amount}
                  </td>
                  
                  <td className="border-b border-gray-200 p-2">
                    {user.date}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-1">
            {/* //   <div className="bg-transparent shadow-md rounded-lg p-6 w-full max-w-lg mx-auto mt-8"> */}
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
              <p>
                <strong>Product Name:</strong> {selectedUser.name}
              </p>
              

              <p>
                <strong>Product Id:</strong> {selectedUser.productId}
              </p>
              <p>
                <strong>Transaction Id:</strong> {selectedUser.transactionId}
              </p>
              <p>
                <strong>Amount:</strong> {selectedUser.amount}
              </p>
              <p>
                <strong>Date:</strong> {selectedUser.date}
              </p>
             
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}
