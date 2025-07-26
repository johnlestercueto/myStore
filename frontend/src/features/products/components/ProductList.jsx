// src/components/ProductList.jsx
import { useEffect } from "react";
import { useProductStore } from "../../../store/productStore";
import { useNavigate } from "react-router-dom";
import "./ProductList.css"; // import mo ang custom CSS file

const ProductList = () => {
  const { products, loading, error, getProducts } = useProductStore();
  const navigate = useNavigate();
  //console.log("productlist products", products);

  useEffect(() => {
    getProducts(); // fetch on mount
  }, [getProducts]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-list-container">
      {products.length === 0 ? (
        <p className="no-products">No products found.</p>
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            className="product-card"
            onClick={() => navigate(`product/${product._id}`)} // navigate on click
            style={{ cursor: "pointer" }}
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              className="product-image"
            />

            <h2 className="product-title">{product.name}</h2>
            <p className="product-price">₱{product.price}</p>
            <p className="product-price">stock : {product.stock}</p>
            <p className="product-description">
              DESCRIPTION - {product.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
