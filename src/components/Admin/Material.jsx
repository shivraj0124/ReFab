import { useState } from "react";
import Sidebar from "./AdminSidebar";
const users = [
  {
    id: 1,
    materialId: "M123",
    name: "Fabric Waste",
    transactionId: "T001",
    amount: "₹100",
    date: "2024-02-01",
    email: "amit.kumar@example.in",
  },
  {
    id: 2,
    materialId: "M124",
    name: "Cotton Waste",
    transactionId: "T002",
    amount: "₹120",
    date: "2024-02-02",
    email: "priya.sharma@example.in",
  },
  {
    id: 3,
    materialId: "M125",
    name: "Silk Scrap",
    transactionId: "T003",
    amount: "₹150",
    date: "2024-02-03",
    email: "rahul.verma@example.in",
  },
  {
    id: 4,
    materialId: "M126",
    name: "Denim Cuttings",
    transactionId: "T004",
    amount: "₹130",
    date: "2024-02-04",
    email: "neha.mishra@example.in",
  },
  {
    id: 5,
    materialId: "M127",
    name: "Polyester Scraps",
    transactionId: "T005",
    amount: "₹110",
    date: "2024-02-05",
    email: "sanjay.patel@example.in",
  },
  {
    id: 6,
    materialId: "M128",
    name: "Woolen Fabric Waste",
    transactionId: "T006",
    amount: "₹140",
    date: "2024-02-06",
    email: "deepika.singh@example.in",
  },
  {
    id: 7,
    materialId: "M129",
    name: "Rayon Textile Scraps",
    transactionId: "T007",
    amount: "₹160",
    date: "2024-02-07",
    email: "vikas.nair@example.in",
  },
  {
    id: 8,
    materialId: "M130",
    name: "Nylon Waste",
    transactionId: "T008",
    amount: "₹170",
    date: "2024-02-08",
    email: "anita.iyer@example.in",
  },
  {
    id: 9,
    materialId: "M131",
    name: "Jute Waste",
    transactionId: "T009",
    amount: "₹180",
    date: "2024-02-09",
    email: "rohit.shah@example.in",
  },
  {
    id: 10,
    materialId: "M132",
    name: "Linen Scraps",
    transactionId: "T010",
    amount: "₹190",
    date: "2024-02-10",
    email: "meena.das@example.in",
  },
  {
    id: 11,
    materialId: "M133",
    name: "Velvet Waste",
    transactionId: "T011",
    amount: "₹200",
    date: "2024-02-11",
    email: "karthik.reddy@example.in",
  },
  {
    id: 12,
    materialId: "M134",
    name: "Canvas Cuttings",
    transactionId: "T012",
    amount: "₹210",
    date: "2024-02-12",
    email: "pallavi.chopra@example.in",
  },
  {
    id: 13,
    materialId: "M135",
    name: "Chiffon Waste",
    transactionId: "T013",
    amount: "₹220",
    date: "2024-02-13",
    email: "arjun.malhotra@example.in",
  },
  {
    id: 14,
    materialId: "M136",
    name: "Khadi Scraps",
    transactionId: "T014",
    amount: "₹230",
    date: "2024-02-14",
    email: "sunita.jha@example.in",
  },
];
export default function Materials() {
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
                 
                  <td className="border-b border-gray-200 p-2">{user.materialId}</td>
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
