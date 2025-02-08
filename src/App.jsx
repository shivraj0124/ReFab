import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./components/Products";
import Home from "./components/Home";
import About from "./components/About";
import LoginPage from "./components/LoginSignUp/login";
import BecomeSellerPage from "./components/LoginSignUp/Becomeseller";
import SignupPage from "./components/LoginSignUp/signup";
import SellerDashboard from "./components/Seller/SellerDashboard";
import SellerMaterial from "./components/Seller/Material";
import SellerTransaction from "./components/Seller/SellerTransaction";
import AdminDashboard from "./components/Admin/AdminDash";
import Users from "./components/Admin/Users";
import SellerTable from "./components/Admin/Sellers";
import ProductTable from "./components/Admin/Products";
import Transactions from "./components/Admin/Transactions";
import Materials from "./components/Admin/Material";
import UserDashboard from "./components/User/Userdashboard";
import UserOrders from "./components/User/UserOrders";
import UserProfileCard from "./components/User/UserProfile";
import SellerProfileCard from "./components/Seller/SellerProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/becomeSeller" element={<BecomeSellerPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/sellerDashboard" element={<SellerDashboard />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/sellers" element={<SellerTable />}></Route>
          <Route path="/products" element={<ProductTable />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/materials" element={<Materials />}></Route>
          <Route path="/sellerMaterials" element={<SellerMaterial />}></Route>
          <Route path="/sellerTransaction" element={<SellerTransaction />}></Route>
          <Route path="/sellerProfile" element={<SellerProfileCard />}></Route>
          <Route path="/userDashboard" element={<UserDashboard />}></Route>
          <Route path="/UserOrders" element={<UserOrders />}></Route>
          <Route path="/userProfile" element={<UserProfileCard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
