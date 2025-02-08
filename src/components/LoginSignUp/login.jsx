import React, { useState } from "react";
// import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import loginAnimation from "./Login.json"; // Replace with your Lottie animation
import logo from "../../assets/logoBlack2.png";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      if (email === "admin@refab.com" && password === "admin@123") {
        navigate("/adminDashboard");
      }
      else if(email === "seller@gmail.com" && password === "seller@123") {
        navigate("/sellerDashboard");
      }
      else{
        navigate('/userDashboard')
      }
      // const response = await fetch("http://localhost:5000/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // const data = await response.json();

      // if (response.ok) {
      //   toast.success(data.message);
      // } else {
      //   toast.error(data.message);
      // }
    } catch (error) {
      console.error("Error logging in:", error);
      // toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full bg-green-50">
      {/* Left Side - Animation */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300">
        <div className="w-3/4">
          <Lottie animationData={loginAnimation} loop />
        </div>
      </div>
      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white">
        <img src={logo} className="h-[80px] w-[80px]" />
        <div className="bg-white px-10 pb-5 pt-2 rounded-lg shadow-lg w-full max-w-lg">
          <p className="text-xl  text-black mb-5 text-center">
            Welcome back to <br />
            <span className="text-green-600 text-3xl font-bold">
              ReFab!
            </span>{" "}
          </p>
          {/* <h1 className="text-3xl font-bold text-black mb-5">Login</h1> */}
          <form onSubmit={handleSubmit} className="space-y-5 mt-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-black">
                Email
              </label>
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
              <label className="block text-sm font-medium text-black">
                Password
              </label>
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
            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full px-4 py-2 text-white bg-gradient-to-r from-green-500 to-green-300 rounded-lg shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>
          <p className="mt-5">Don't have an account ? <span className="text-blue-600 cursor-pointer" onClick={()=>{
            navigate('/signup')
          }} >signup</span></p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
