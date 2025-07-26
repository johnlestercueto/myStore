import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import SignUpPage from "../features/auth/pages/SignUpPage";
import HomePage from "../pages/Homepage";
import AddProductPage from "../features/products/pages/AddProductPage";
import ProductDetails from "../features/products/pages/ProductDetails";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import Setting from "../pages/SettingPage";
import ProtectedRoute from "../components/ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route
        path="/setting"
        element={
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
        }
      />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="addproduct" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
