import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Package, Wallet,LayoutDashboard } from 'lucide-react';
import logo from '../../assets/logoBlack2.png'
import { MdHistory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToHome = () => {
    navigate('/');
  };

  const menuItems = [
    // { 
    //   path: "/login", 
    //   icon: <LayoutDashboard className={`w-5 h-5 ${location?.pathname === '/sellerDashboard' ? 'text-green-700' : ''}`} />, 
    //   label: "Home" 
    // },
    { 
      path: "/userProfile", 
      icon: <FaRegUser className="w-5 h-5" />, 
      label: "Profile" 
    },
    { 
      path: "/userOrders", 
      icon: <MdHistory className="w-5 h-5" />, 
      label: "Order History" 
    },
    // { 
    //   path: "/sellerTransaction", 
    //   icon: <Wallet className="w-5 h-5" />, 
    //   label: "Wallet", 
    //   value: "₹5000" 
    // },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center mb-8">
        <img 
          src={logo}
          alt="Logo" 
          className="mr-2 h-[70px] w-[70px] cursor-pointer" 
          onClick={handleGoToHome} 
        />
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

export default UserSidebar;