import { useState } from "react";
import Sidebar from "./SellerSidebar";
const users = [
  {
    id: 1,
    materialId: "M101",
    name: "Cotton Waste",
    weight: "15kg",
    amount: "₹250",
    date: "2024-02-01",
  },
  {
    id: 2,
    materialId: "M102",
    name: "Silk Scrap",
    weight: "10kg",
    amount: "₹400",
    date: "2024-02-02",
  },
  {
    id: 3,
    materialId: "M103",
    name: "Denim Cuttings",
    weight: "20kg",
    amount: "₹500",
    date: "2024-02-03",
  },
  {
    id: 4,
    materialId: "M104",
    name: "Polyester Scraps",
    weight: "18kg",
    amount: "₹300",
    date: "2024-02-04",
  },
  {
    id: 5,
    materialId: "M105",
    name: "Woolen Fabric Waste",
    weight: "12kg",
    amount: "₹450",
    date: "2024-02-05",
  },
  {
    id: 6,
    materialId: "M106",
    name: "Rayon Textile Scraps",
    weight: "22kg",
    amount: "₹550",
    date: "2024-02-06",
  },
  {
    id: 7,
    materialId: "M107",
    name: "Nylon Waste",
    weight: "25kg",
    amount: "₹600",
    date: "2024-02-07",
  },
  {
    id: 8,
    materialId: "M108",
    name: "Jute Fiber Waste",
    weight: "30kg",
    amount: "₹700",
    date: "2024-02-08",
  },
  {
    id: 9,
    materialId: "M109",
    name: "Velvet Scraps",
    weight: "8kg",
    amount: "₹350",
    date: "2024-02-09",
  },
  {
    id: 10,
    materialId: "M110",
    name: "Linen Offcuts",
    weight: "14kg",
    amount: "₹500",
    date: "2024-02-10",
  },
];



export default function Materials() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-grow bg-gray-50 min-h-screen">
      <div className="flex w-[100%] space-x-2 justify-center items-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-[80%] p-2  border border-gray-300 rounded focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setIsOpen(true)} className="p-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 w-[20%] cursor-pointer">Add Material</button>
        </div>
        <div className="mt-5 h-[86vh] overflow-y-auto">
          <table className="w-full bg-white border-collapse ">
            <thead>
              <tr className="bg-green-100 top-0 sticky">
                <th className=" p-2 text-left">Sr.No.</th>
                <th className=" p-2 text-left">Name</th>
                <th className=" p-2 text-left">Material Id</th>
                <th className=" p-2 text-left">Weight</th>
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
                  <td className="border-b border-gray-200 p-2">{user.weight}</td>
                  
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
              <h2 className="text-xl font-bold mb-4">Material Details</h2>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              

              <p>
                <strong>Material Id:</strong> {selectedUser.materialId}
              </p>
              <p>
                <strong>Stock:</strong> {selectedUser.weight}
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

{isOpen && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Material</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {/* <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              ></textarea>
              {/* <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
