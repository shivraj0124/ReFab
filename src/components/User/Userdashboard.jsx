import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { FaRegUserCircle } from "react-icons/fa";
import UserSidebar from './UserSidebar';

const UserDashboard = () => {
  const [seller, setSeller] = useState(localStorage.getItem('user') ? localStorage.getItem('user') : 'Vedant');

  const orderUpdates = [
    { icon: '🛒', label: 'Total Orders', value: 5 },
    // { icon: '🚚', label: 'Average Shipments', value: 200 },
    // { icon: '📦', label: 'Return to Origin', value: 20 }
  ];

  const performanceDetails = [
    { label: 'Calls per Hour Received', value: '10/15', color: 'yellow' },
    { label: 'Refund Initiated', value: '1/10', color: 'green' },
    { label: 'Discount Initiated', value: '2/10', color: 'orange' }
  ];

  const salesData = [
    { category: 'Apparels', percentage: 25, color: '#3B82F6' },
    { category: 'Denims', percentage: 24, color: '#22D3EE' },
    { category: 'Upholestry', percentage: 30, color: '#34D399' },
    { category: 'Knitted', percentage: 11, color: '#FBBF24' },
    { category: 'Others', percentage: 10, color: '#EF4444' }
  ];

  const shippingData = [
    { name: 'Out for Delivery', value: 32, color: '#3B82F6' },
    { name: 'In-Transit', value: 25, color: '#22D3EE' },
    { name: 'Ready to Ship', value: 16, color: '#34D399' }
  ];

  return (
    <div className="flex">
      <UserSidebar />
      
      {/* Main Dashboard */}
      <div className="flex-grow p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <select className="border rounded p-1">
              <option>India</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center space-x-2">
              <span className="cursor-pointer font-semibold">{seller}</span>
              <FaRegUserCircle size={24} />
            </div>
          </div>
        </div>

        {/* Order Updates */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {orderUpdates.map((update, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
              <div className="mr-4 text-2xl">{update.icon}</div>
              <div>
                <div className="text-gray-500">{update.label}</div>
                <div className="text-2xl font-bold">{update.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Details */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {performanceDetails.map((detail, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="text-gray-500 mb-2">{detail.label}</div>
              <div className={`text-2xl font-bold text-${detail.color}-600`}>{detail.value}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          {/* Sales Details */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Sales Details</h3>
            <div className="flex items-center">
              <BarChart width={300} height={200} data={salesData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage">
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
              <div>
                {salesData.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2" style={{ backgroundColor: item.color }} />
                    <span>{item.category}: {item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
            <div className="flex items-center">
              <PieChart width={250} height={250}>
                <Pie
                  data={shippingData}
                  cx={120}
                  cy={120}
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {shippingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div>
                {shippingData.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <div className="w-4 h-4 mr-2" style={{ backgroundColor: item.color }} />
                    <span>{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;