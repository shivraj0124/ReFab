import React from "react";
import Carousel from "./Top";
import ProductsPage from "./Products";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Footer from "./Footer";
import ProductListing from "./Product1";

function Home() {
  // const products = [
 
  //   { id: 2, name: "Table Cloth", price: "₹499", image: "https://indoweave.in/wp-content/uploads/2022/02/Untitled-design-15-1024x576.png" },
  //   { id: 3, name: "Tablet", price: "₹599", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_ZRZ_myGQ4nlr1sYO1JVcPFiSau28K36Ug&s" },
  //   { id: 4, name: "Smartwatch", price: "₹299", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 5, name: "Camera", price: "₹499", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 6, name: "Tablet", price: "₹599", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 7, name: "Rug", price: "₹299", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  // ];
  const homeDecor = [
 
    { id: 2, name: "Table Cloth", price: "₹499", image: "https://e2768ktp78o.exactdn.com/wp-content/uploads/2023/03/M80951.jpg?strip=all&lossy=1&resize=1000%2C563&ssl=1" },
    { id: 3, name: "Samples", price: "₹599", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OmjED588OH7b9shzrSrVUUbKETv211bVgA&s" },
    { id: 4, name: "Decor", price: "₹299", image: "https://image.made-in-china.com/202f0j00jGTkyHRtOIqb/Wholesale-Custom-Design-Home-Decor-Digital-Printing-Wall-Fabric-Tapestry-for-Wall-Hanging.webp" },
    { id: 5, name: "Sofa Cover", price: "₹499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83WfDd4rrXUZW1Y3rrE9Xfxm7KVy2jYb76Q&s" },
    { id: 6, name: "Hanker Chef", price: "₹599", image: "https://indoweave.in/wp-content/uploads/2022/02/Untitled-design-15-1024x576.png" },
    { id: 1, name: "Rug", price: "₹799", image: "https://images.squarespace-cdn.com/content/v1/5a802676b7411c2497540b80/1541159002971-5WI4OL2UX1DO7EYVHFIM/DEBBIE-MCKEEGAN-TEXINTEL-HOME-TEXTILES.png" },
  ];
  const Bags = [
 
    { id: 1, name: "Laundry Bag", price: "₹299", image: "https://falajgarden.com/wp-content/uploads/2023/11/2303.jpg" },
    { id: 2, name: "Purse", price: "₹499", image: "/bags/bag2.jfif" },
    { id: 3, name: "Carry Bag", price: "₹599", image: "/bags/bags.jpg" },
    // { id: 4, name: "Smartwatch", price: "₹299", image: "https://img.freepik.com/premium-photo/fabric-travel-bag-with-straps-png-file-isolated-cutout-object-with-transparent-background_1153121-12150.jpg" },
    { id: 5, name: "bag", price: "₹499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_ZRZ_myGQ4nlr1sYO1JVcPFiSau28K36Ug&s" },
    { id: 6, name: "Net Bag", price: "₹599", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Lc4mnrG3kUZnotIxl4Q-4x9H1Nkz6aG4hg&s" }
  ];
  const carpets = [
 
    { id: 1, name: "Industrial Carpet", price: "₹2999", image: "/carpet/carpet_6.jpg" },
    { id: 2, name: "Floor carpet", price: "₹999", image: "/carpet/carpet_7.jpg" },
    { id: 3, name: "Office Carpet", price: "₹2999", image: "/carpet/carpet_8.jpg" },
    { id: 6, name: "Carpet C5", price: "₹599", image: "/carpet/carpet_4.jpg" },
    { id: 5, name: "Foot Cleaning Carpet", price: "₹499", image: "/carpet/carpet_5.jpg" },
    // { id: 4, name: "Smartwatch", price: "₹299", image: "/carpet/carpet_9.jpg" },
  ];
  // const shits = [
 
  //   { id: 4, name: "Smartwatch", price: "₹299", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 5, name: "Camera", price: "₹499", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 6, name: "Tablet", price: "₹599", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 4, name: "Smartwatch", price: "₹299", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 5, name: "Camera", price: "₹499", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" },
  //   { id: 6, name: "Tablet", price: "₹599", image: "https://cdn.pixabay.com/photo/2018/09/12/12/37/cloth-3672088_1280.jpg" }
  // ];
  return (
    <div className="hide-scrollbar">
      <Navbar />
      <div className="bg-gray-100 p-2">
        <Carousel />
        {/* <ProductsPage /> */}
        <Categories />
        {/* <ProductListing products={products} title={"Product Listing"} /> */}
        <ProductListing products={homeDecor} title={"Home Decor"} />
        <ProductListing products={Bags} title={"Bags"} />
        <ProductListing products={carpets} title={"Carpets"} />
        {/* <ProductListing products={shits} title={"Shits"} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
