import { useState } from "react";
import Sidebar from "./AdminSidebar";
const users = [
  {
    id: 1,
    image: "/bags/bags.jpg",
    name: "BagPack",
    category: "Bags",
    createdOn: "2024-02-08",
  },
  {
    id: 2,
    image: "/carpet/carpet_6.jpg",
    name: "Carpet",
    category: "Carpet",
    createdOn: "2024-02-08",
  },
  {
    id: 3,
    image: "https://images.squarespace-cdn.com/content/v1/5a802676b7411c2497540b80/1541159002971-5WI4OL2UX1DO7EYVHFIM/DEBBIE-MCKEEGAN-TEXINTEL-HOME-TEXTILES.png",
    name: "Decor",
    category: "Home Decor",
    createdOn: "2024-02-08",
  },
  {
    id: 4,
    image: "/carpet/carpet_8.jpg",
    name: "Carpet",
    category: "Carpets",
    createdOn: "2024-02-08",
  },
  {
    id: 5,
    image: "/carpet/carpet_7.jpg",
    name: "Carpet",
    category: "Carpets",
    createdOn: "2024-02-08",
  },
  {
    id: 6,
    image: "/bags/bag3.jpg",
    name: "BagPack",
    category: "Bags",
    createdOn: "2024-02-08",
  },
  {
    id: 7,
    image: "/bags/bag2.jfif",
    name: "BagPack",
    category: "Bags",
    createdOn: "2024-02-08",
  },
  {
    id: 8,
    image: "/carpet/carpet_4.jpg",
    name: "Carpet",
    category: "Carpets",
    createdOn: "2024-02-08",
  },
  
];

export default function ProductTable() {
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
          <button onClick={() => setIsOpen(true)} className="p-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 w-[20%] cursor-pointer">Add Product</button>
        </div>
        <div className="mt-5 h-[86vh] overflow-y-auto">
          <table className="w-full bg-white border-collapse ">
            <thead>
              <tr className="bg-green-100 top-0 sticky">
                <th className=" p-2 text-left">Sr.No.</th>
                <th className=" p-2 text-left">Image</th>
                <th className=" p-2 text-left">Name</th>
                <th className=" p-2 text-left">Category</th>
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
                  <td className="border-b border-gray-200 p-2">
                    <img src={user.image} className="w-[60px] h-[60px]" />
                  </td>
                  <td className="border-b border-gray-200 p-2">{user.name}</td>
                  <td className="border-b border-gray-200 p-2">
                    {user.category}
                  </td>
                  <td className="border-b border-gray-200 p-2">
                    {user.createdOn}
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
                <strong>Category:</strong> {selectedUser.category}
              </p>
              <p>
                <strong>Date: </strong> {selectedUser.createdOn}
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
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              ></textarea>
              <input
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
              />
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
