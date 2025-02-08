import React, { useState } from "react";
// import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import signupAnimation from "./Login.json"; // Replace with your Lottie animation
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full bg-green-50">
      {/* Left Side - Animation */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300">
        <div className="w-3/4">
          <Lottie animationData={signupAnimation} loop />
        </div>
      </div>
      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-bold text-green-600 mb-5">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-green-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-green-600 rounded-lg shadow-sm"
                placeholder="Your Name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-green-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-green-600 rounded-lg shadow-sm"
                placeholder="Your Email"
                required
              />
            </div>
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-green-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-green-600 rounded-lg shadow-sm"
                placeholder="Your Password"
                required
              />
            </div>
            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-green-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-1 border border-green-600 rounded-lg shadow-sm"
                placeholder="Confirm Password"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-md hover:shadow-lg"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-5">Already have an account ? <span className="text-blue-600 cursor-pointer" onClick={()=>{
          
            navigate('/login')
          }} >login</span></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;