// src/services/productService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/product"; // adjust based sa backend mo

// CREATE
export const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" }, // kung may image
  });
  return response.data;
};

// READ ALL
export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  console.log("✅ API response:", response.data);
  return response.data.product;
};

// READ ONE
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log("API response:", response.data);
  return response.data;
};

// UPDATE
export const updateProduct = async (id, formData) => {
  const response = await axios.put(`${API_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" }, // optional kung may image
  });
  return response.data;
};

// DELETE
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
