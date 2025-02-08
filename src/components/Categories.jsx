import { useState } from "react";

const categories = ["Home Decor", "Bags", "Carpets", "Shits"];

const CategoryBar = () => {
  return (
    <div className="bg-white mt-2 shadow-md p-2 w-full flex justify-center">
      <div className="flex space-x-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
          >
            {category}
            <div className="absolute z-20 left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <ul className="p-2">
                <li className="px-4 py-2 hover:bg-gray-200">Subcategory 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Subcategory 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Subcategory 3</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const BottomCategoryBar = () => {
//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-gray-200 p-3 flex justify-around shadow-md">
//       {categories.map((category, index) => (
//         <span key={index} className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
//           {category}
//         </span>
//       ))}
//     </div>
//   );
// };

const Categories = () => {
  return (
    <div>
      <CategoryBar />
      {/* <div className="h-[90vh]">Main Content Placeholder</div> */}
      {/* <BottomCategoryBar /> */}
    </div>
  );
};

export default Categories;