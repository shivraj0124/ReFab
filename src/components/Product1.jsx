import React from "react";

const ProductListing = ({ products, title }) => {
  return (
    <div className="p-4 bg-white shadow-md mt-2">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-gray-100 rounded shadow text-center min-w-[300px]"
            >
              <div className="overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover mb-2 rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
