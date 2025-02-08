import { Facebook, Instagram, Linkedin } from "lucide-react";
// import img1 from "../assets/logoBlack2.png"
import img1 from "../assets/logoWhite.jpeg"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Options Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Options</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
          </ul>
        </div>
        
        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Categories</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home Decor</a></li>
            <li><a href="#" className="hover:text-blue-400">Composite Shits</a></li>
            <li><a href="#" className="hover:text-blue-400">Home & Furniture</a></li>
            <li><a href="#" className="hover:text-blue-400">Carpets</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact</h2>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Email: support@refab.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-blue-400"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
        
        {/* Logo Section */}
        <div className="text-center md:text-left">
          {/* <h2 className="text-lg font-bold mb-3">ReFab</h2> */}
          <img className="w-[50px] h-[50px] " src={img1}/>
          <p className="text-gray-400">Your one-stop solution for all shopping needs.</p>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-4">
        &copy; 2025 Refab. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
