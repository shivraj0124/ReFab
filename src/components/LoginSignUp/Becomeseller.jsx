import React, { useState } from "react";
// import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import sellerAnimation from "./Seller1.json"; // Replace with your Lottie animation

const BecomeSellerPage = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    gstNumber: "",
    address: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { businessName, email, phone, gstNumber, address, document } = formData;

    if (!businessName || !email || !phone || !gstNumber || !address || !document) {
      toast.error("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("businessName", businessName);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("gstNumber", gstNumber);
    formDataToSend.append("address", address);
    formDataToSend.append("document", document);

    try {
      const response = await fetch("http://localhost:5000/become-seller", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({
          businessName: "",
          email: "",
          phone: "",
          gstNumber: "",
          address: "",
          document: null,
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting seller request:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full bg-blue-50">
      {/* Left Side - Animation */} 
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="w-3/4">
          <Lottie animationData={sellerAnimation} loop />
        </div>
      </div>
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-5">Become a Seller</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business Name Field */}
            <div>
              <label className="block text-sm font-medium text-blue-700">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-blue-600 rounded-lg shadow-sm"
                placeholder="Your Business Name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-blue-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-blue-600 rounded-lg shadow-sm"
                placeholder="Your Email"
                required
              />
            </div>
            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-blue-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-blue-600 rounded-lg shadow-sm"
                placeholder="Your Phone Number"
                required
              />
            </div>
            {/* GST Number Field */}
            <div>
              <label className="block text-sm font-medium text-blue-700">GST Number</label>
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-blue-600 rounded-lg shadow-sm"
                placeholder="GST Number"
                required
              />
            </div>
            {/* Address Field */}
            <div>
              <label className="block text-sm font-medium text-blue-700">Business Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-blue-600 rounded-lg shadow-sm"
                placeholder="Business Address"
                rows="3"
                required
              ></textarea>
            </div>
            {/* Upload Document Field */}
            <div>
              <label className="block text-sm font-medium text-blue-700">Upload Business Document</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full px-4 py-2 mt-1 border border-blue-600 rounded-lg shadow-sm"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-md hover:shadow-lg"
            >
              Apply as Seller
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeSellerPage;
