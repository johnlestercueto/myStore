import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../../store/productStore";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useAuthStore } from "../../../store/authStore"; //

const ProductDetails = () => {
  const { id } = useParams();
  const { singleProduct, loading, error, getSingleProduct } = useProductStore();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    getSingleProduct(id);
  }, [id, getSingleProduct]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!singleProduct) return <p>No product found.</p>;

  const handleAddToCart = () => {
    if (!user) {
      alert("Kailangan mo munang mag-login para makapag-add to cart.");
      navigate("/login");
      return;
    }
    // Logic to add to cart here
    alert("Product added to cart!");
  };

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        ← Back
      </button>
      <img
        src={`http://localhost:5000/uploads/${singleProduct.image}`}
        alt={singleProduct.name}
        style={{ width: "300px" }}
      />
      <h2>{singleProduct.name}</h2>
      <p>₱{singleProduct.price}</p>
      <p>Stock: {singleProduct.stock}</p>
      <p>{singleProduct.description}</p>

      {/* ✅ Buttons with conditional behavior */}
      <button
        className={`btn-add-to-cart ${!user ? "disabled" : ""}`}
        onClick={handleAddToCart}
        disabled={!user}
      >
        Add to Cart
      </button>

      <button className="btn-buy-now">Buy Now</button>
    </div>
  );
};

export default ProductDetails;
