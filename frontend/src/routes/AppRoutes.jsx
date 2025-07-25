import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import SignUpPage from "../features/auth/pages/SignUpPage";
import HomePage from "../pages/Homepage";
import AddProductPage from "../features/products/pages/AddProductPage";
import ProductDetails from "../features/products/pages/ProductDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/addproduct" element={<AddProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
