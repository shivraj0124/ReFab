import { useState } from "react";
import Sidebar from "./SellerSidebar";
const users = [
  {
    id: 1,
    materialId: "M123",
    name: "Rohan Sharma",
    transactionId: "T001",
    amount: "₹100",
    date: "2024-02-08",
  },
  {
    id: 2,
    materialId: "M124",
    name: "Priya Verma",
    transactionId: "T002",
    amount: "₹120",
    date: "2024-02-07",
  },
  {
    id: 3,
    materialId: "M125",
    name: "Amit Kumar",
    transactionId: "T003",
    amount: "₹150",
    date: "2024-02-06",
  },
  {
    id: 4,
    materialId: "M126",
    name: "Sneha Iyer",
    transactionId: "T004",
    amount: "₹180",
    date: "2024-02-05",
  },
  {
    id: 5,
    materialId: "M127",
    name: "Vikram Patil",
    transactionId: "T005",
    amount: "₹90",
    date: "2024-02-04",
  },
  {
    id: 6,
    materialId: "M128",
    name: "Anjali Nair",
    transactionId: "T006",
    amount: "₹110",
    date: "2024-02-03",
  },
  {
    id: 7,
    materialId: "M129",
    name: "Rahul Gupta",
    transactionId: "T007",
    amount: "₹200",
    date: "2024-02-02",
  },
  {
    id: 8,
    materialId: "M130",
    name: "Kavita Joshi",
    transactionId: "T008",
    amount: "₹175",
    date: "2024-02-01",
  },
  {
    id: 9,
    materialId: "M131",
    name: "Sandeep Yadav",
    transactionId: "T009",
    amount: "₹135",
    date: "2024-01-31",
  },
  {
    id: 10,
    materialId: "M132",
    name: "Meera Reddy",
    transactionId: "T010",
    amount: "₹95",
    date: "2024-01-30",
  },
  {
    id: 11,
    materialId: "M133",
    name: "Arjun Singh",
    transactionId: "T011",
    amount: "₹160",
    date: "2024-01-29",
  },
  {
    id: 12,
    materialId: "M134",
    name: "Neha Choudhary",
    transactionId: "T012",
    amount: "₹105",
    date: "2024-01-28",
  },
  {
    id: 13,
    materialId: "M135",
    name: "Manoj Thakur",
    transactionId: "T013",
    amount: "₹140",
    date: "2024-01-27",
  },
  {
    id: 14,
    materialId: "M136",
    name: "Swati Mishra",
    transactionId: "T014",
    amount: "₹185",
    date: "2024-01-26",
  },
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
               
                <th className=" p-2 text-left">Material Id</th>
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
                 
                  <td className="border-b border-gray-200 p-2">{user.materialId}</td>
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
                <strong>Name:</strong> {selectedUser.name}
              </p>
              

              <p>
                <strong>Material Id:</strong> {selectedUser.materialId}
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
