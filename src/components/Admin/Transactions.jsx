import { useState } from "react";
import Sidebar from "./AdminSidebar";
const users = [
  {
    id: 1,
    image: "/public/bags/bag3.jpg",
    productId: "P101",
    name: "Rohan Sharma",
    transactionId: "T101",
    amount: "₹450",
    date: "2024-02-07",
    email: "rohan.sharma@example.com",
  },
  {
    id: 2,
    image: "/public/carpet/carpet_5.jpg",
    productId: "P102",
    name: "Priya Verma",
    transactionId: "T102",
    amount: "₹780",
    date: "2024-02-06",
    email: "priya.verma@example.com",
  },

  {
    id: 3,
    image: "/public/home decor/home decor 04.jpg",
    productId: "P104",
    name: "Sneha Iyer",
    transactionId: "T104",
    amount: "₹650",
    date: "2024-02-04",
    email: "sneha.iyer@example.com",
  },
  {
    id: 4,
    image: "/public/horizontal templet/horizontal temple (1).jpg",
    productId: "P105",
    name: "Vikram Patil",
    transactionId: "T105",
    amount: "₹980",
    date: "2024-02-03",
    email: "vikram.patil@example.com",
  },
  {
    id: 5,
    image: "/public/bags/bags 1.jpg",
    productId: "P106",
    name: "Anjali Nair",
    transactionId: "T106",
    amount: "₹850",
    date: "2024-02-02",
    email: "anjali.nair@example.com",
  },
  {
    id: 6,
    image: "/public/suits/image 6.jpg",
    productId: "P107",
    name: "Rahul Gupta",
    transactionId: "T107",
    amount: "₹1500",
    date: "2024-02-01",
    email: "rahul.gupta@example.com",
  },
  {
    id: 7,
    image: "/public/suits/image 1.jpg",
    productId: "P108",
    name: "Kavita Joshi",
    transactionId: "T108",
    amount: "₹1120",
    date: "2024-01-31",
    email: "kavita.joshi@example.com",
  },
  {
    id: 8,
    image: "/public/home decor/home decor 04.jpg",
    productId: "P109",
    name: "Sandeep Yadav",
    transactionId: "T109",
    amount: "₹920",
    date: "2024-01-30",
    email: "sandeep.yadav@example.com",
  }
  
];

console.log(users);


export default function Transactions() {
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
                <th className=" p-2 text-left">Name</th>
                <th className=" p-2 text-left">Image</th>
                <th className=" p-2 text-left">Product Id</th>
                <th className=" p-2 text-left">Transaction Id</th>
                <th className=" p-2 text-left">Amount</th>
                <th className=" p-2 text-left">User</th>
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
                    {user.email}
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
              <h2 className="text-xl font-bold mb-4">Product Details</h2>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Image:</strong>{" "}
                <img src={selectedUser.image} className="w-[200px] h-[200px]" />
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
              <p>
                <strong>User:</strong> {selectedUser.email}
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
