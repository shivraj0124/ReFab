import { useState } from "react";
import Sidebar from "./AdminSidebar";
const users = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amitsharma@gmail.com",
    address: "123 MG Road, Delhi",
    contact: "9876543210",
    createdOn: "2024-02-08",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priyaverma@gmail.com",
    address: "456 Park Street, Mumbai",
    contact: "8765432109",
    createdOn: "2024-01-15",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    email: "ravikumar@gmail.com",
    address: "789 Nehru Nagar, Bengaluru",
    contact: "7654321098",
    createdOn: "2024-03-22",
  },
  {
    id: 4,
    name: "Neha Joshi",
    email: "nehajoshi@gmail.com",
    address: "159 Gandhi Marg, Pune",
    contact: "6543210987",
    createdOn: "2024-03-22",
  },
  {
    id: 5,
    name: "Suresh Patil",
    email: "sureshpatil@gmail.com",
    address: "753 Laxmi Road, Hyderabad",
    contact: "5432109876",
    createdOn: "2024-03-22",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    email: "ananyaiyer@gmail.com",
    address: "963 Mount Road, Chennai",
    contact: "4321098765",
    createdOn: "2024-03-22",
  },
  {
    id: 7,
    name: "Vikram Singh",
    email: "vikramsingh@gmail.com",
    address: "852 Rajpath, Jaipur",
    contact: "3210987654",
    createdOn: "2024-03-22",
  },
  {
    id: 8,
    name: "Meera Reddy",
    email: "meerareddy@gmail.com",
    address: "741 Jubilee Hills, Hyderabad",
    contact: "2109876543",
    createdOn: "2024-03-22",
  },
  {
    id: 9,
    name: "Arjun Deshmukh",
    email: "arjundeshmukh@gmail.com",
    address: "369 FC Road, Pune",
    contact: "1098765432",
    createdOn: "2024-03-22",
  },
  {
    id: 10,
    name: "Pooja Malhotra",
    email: "poojamalhotra@gmail.com",
    address: "258 CP, New Delhi",
    contact: "9988776655",
    createdOn: "2024-03-22",
  },
  {
    id: 11,
    name: "Rahul Nair",
    email: "rahulnair@gmail.com",
    address: "147 MG Road, Kochi",
    contact: "8877665544",
    createdOn: "2024-03-22",
  },
  {
    id: 12,
    name: "Shruti Kulkarni",
    email: "shrutikulkarni@gmail.com",
    address: "369 Jayanagar, Bengaluru",
    contact: "7766554433",
    createdOn: "2024-03-22",
  },
  {
    id: 13,
    name: "Karthik Menon",
    email: "karthikmenon@gmail.com",
    address: "951 Marine Drive, Mumbai",
    contact: "6655443322",
    createdOn: "2024-03-22",
  },
  {
    id: 14,
    name: "Ayesha Khan",
    email: "ayeshakhan@gmail.com",
    address: "789 Banjara Hills, Hyderabad",
    contact: "5544332211",
    createdOn: "2024-03-22",
  },
  {
    id: 15,
    name: "Manoj Pandey",
    email: "manojpandey@gmail.com",
    address: "852 Gomti Nagar, Lucknow",
    contact: "4433221100",
    createdOn: "2024-03-22",
  },
  {
    id: 16,
    name: "Deepika Rajput",
    email: "deepikarajput@gmail.com",
    address: "963 Civil Lines, Bhopal",
    contact: "3322110099",
    createdOn: "2024-03-22",
  },
  {
    id: 17,
    name: "Rohan Bhatia",
    email: "rohanbhatia@gmail.com",
    address: "357 Andheri West, Mumbai",
    contact: "2211009988",
    createdOn: "2024-03-22",
  },
];

export default function SellerTable() {
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
              <th className=" p-2 text-left">Phone</th>
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
                <td className="border-b border-gray-200 p-2">{user.contact}</td>
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
              <h2 className="text-xl font-bold mb-4">Seller Details</h2>
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
