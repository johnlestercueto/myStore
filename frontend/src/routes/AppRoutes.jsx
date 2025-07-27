import { Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import SignUpPage from "../features/auth/pages/SignUpPage";

import AddProductPage from "../features/products/pages/AddProductPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import AdminSetting from "../pages/AdminSetting";

import ProductDetails from "../features/products/pages/ProductDetails";
import UserLayout from "../layouts/UserLayout";
import ProductList from "../features/products/components/ProductList";
import Setting from "../pages/SettingPage";

import Unauthorized from "../pages/Unauthorized"; // 🔥 add this

import RedirectHandler from "../pages/RedirectHandler"; // <-- import this

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RedirectHandler />} /> {/* 👈 redirect root */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="addproduct" element={<AddProductPage />} />
        <Route path="adminsetting" element={<AdminSetting />} />
      </Route>
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
