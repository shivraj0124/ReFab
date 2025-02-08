import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Wallet } from 'lucide-react';
import { FaRegUser,FaBoxOpen } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import logo from '../../assets/logoBlack2.png'
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoToHome=async()=>{
    navigate('/')
  }
  const menuItems = [
    { 
      path: "/adminDashboard", 
      icon: <LayoutDashboard className={`w-5 h-5 ${location?.pathname === '/adminDashboard' ? 'text-green-700' :''}`} />, 
      label: "Dashboard" 
    },
    { 
      path: "/products", 
      icon: <FaBoxOpen className={`w-5 h-5 ${location?.pathname === '/products' ? 'text-green-700' :''}`} />, 
      label: "Products" 
    },
    { 
      path: "/users", 
      icon: <FaRegUser className="w-5 h-5" />, 
      label: "Users" 
    },
    { 
      path: "/sellers", 
      icon: <AiTwotoneShop className="w-5 h-5" />, 
      label: "Sellers" 
    },
    { 
      path: "/materials", 
      icon: <Package className="w-5 h-5" />, 
      label: "Material" 
    },
    { 
      path: "/transactions", 
      icon: <Wallet className="w-5 h-5" />, 
      label: "Transactions", 
    },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center mb-8">
        <img src={logo} alt="Logo" className="mr-2 h-[70px] w-[70px] cursor-pointer" onClick={handleGoToHome} />
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`mt-2 flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer ${
              location?.pathname === item?.path 
                ? 'text-green-800 bg-green-100 hover:bg-green-100'
                : ''
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
            {item.value && <span className="ml-auto text-gray-500">{item.value}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;