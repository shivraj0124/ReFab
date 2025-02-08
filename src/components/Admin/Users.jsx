import { useState } from "react";
import Sidebar from "./AdminSidebar";
const users = [
  {
    id: 1,
    name: "Rajesh Sharma",
    email: "rajesh.sharma@gmail.com",
    address: "12 MG Road, Delhi",
    contact: "9876543210",
    createdOn: "2024-02-08",
  },
  {
    id: 2,
    name: "Ananya Iyer",
    email: "ananya.iyer@gmail.com",
    address: "45 Gandhi Nagar, Chennai",
    contact: "8765432109",
    createdOn: "2024-01-15",
  },
  {
    id: 3,
    name: "Vikram Patel",
    email: "vikram.patel@gmail.com",
    address: "78 Nehru Street, Ahmedabad",
    contact: "9123456789",
    createdOn: "2024-03-22",
  },
  {
    id: 4,
    name: "Sneha Nair",
    email: "sneha.nair@gmail.com",
    address: "90 MG Road, Kochi",
    contact: "9988776655",
    createdOn: "2024-03-22",
  },
  {
    id: 5,
    name: "Amit Verma",
    email: "amit.verma@gmail.com",
    address: "55 Civil Lines, Lucknow",
    contact: "9234567890",
    createdOn: "2024-03-22",
  },
  {
    id: 6,
    name: "Pooja Reddy",
    email: "pooja.reddy@gmail.com",
    address: "23 Banjara Hills, Hyderabad",
    contact: "9345678901",
    createdOn: "2024-03-22",
  },
  {
    id: 7,
    name: "Rohan Deshmukh",
    email: "rohan.deshmukh@gmail.com",
    address: "88 FC Road, Pune",
    contact: "9456789012",
    createdOn: "2024-03-22",
  },
  {
    id: 8,
    name: "Neha Mehta",
    email: "neha.mehta@gmail.com",
    address: "19 Park Street, Kolkata",
    contact: "9567890123",
    createdOn: "2024-03-22",
  },
  {
    id: 9,
    name: "Suresh Yadav",
    email: "suresh.yadav@gmail.com",
    address: "67 Lajpat Nagar, Delhi",
    contact: "9678901234",
    createdOn: "2024-03-22",
  },
  {
    id: 10,
    name: "Kiran Joshi",
    email: "kiran.joshi@gmail.com",
    address: "102 Jayanagar, Bangalore",
    contact: "9789012345",
    createdOn: "2024-03-22",
  },
  {
    id: 11,
    name: "Manoj Singh",
    email: "manoj.singh@gmail.com",
    address: "76 Lalpur, Ranchi",
    contact: "9890123456",
    createdOn: "2024-03-22",
  },
  {
    id: 12,
    name: "Swati Kulkarni",
    email: "swati.kulkarni@gmail.com",
    address: "21 Kothrud, Pune",
    contact: "9901234567",
    createdOn: "2024-03-22",
  },
  {
    id: 13,
    name: "Deepak Choudhary",
    email: "deepak.choudhary@gmail.com",
    address: "34 Rajendra Nagar, Indore",
    contact: "9012345678",
    createdOn: "2024-03-22",
  },
  {
    id: 14,
    name: "Meera Shah",
    email: "meera.shah@gmail.com",
    address: "47 Navrangpura, Ahmedabad",
    contact: "9123456780",
    createdOn: "2024-03-22",
  },
  {
    id: 15,
    name: "Rahul Bhatt",
    email: "rahul.bhatt@gmail.com",
    address: "16 Model Town, Ludhiana",
    contact: "9234567801",
    createdOn: "2024-03-22",
  },
  {
    id: 16,
    name: "Priya Das",
    email: "priya.das@gmail.com",
    address: "89 Salt Lake, Kolkata",
    contact: "9345678012",
    createdOn: "2024-03-22",
  },
  {
    id: 17,
    name: "Arun Bansal",
    email: "arun.bansal@gmail.com",
    address: "28 Sadar Bazaar, Agra",
    contact: "9456780123",
    createdOn: "2024-03-22",
  },
];


export default function UserTable() {
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
              <th className=" p-2 text-left">Email</th>
              <th className=" p-2 text-left">Created On</th>
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
                <td className="border-b border-gray-200 p-2">{user.email}</td>
                <td className="border-b border-gray-200 p-2">{user.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-1">
        {/* //   <div className="bg-transparent shadow-md rounded-lg p-6 w-full max-w-lg mx-auto mt-8"> */}
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">User Details</h2>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Address:</strong> {selectedUser.address}
              </p>
              <p>
                <strong>Contact:</strong> {selectedUser.contact}
              </p>
              <p>
                <strong>Created On:</strong> {selectedUser.createdOn}
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
