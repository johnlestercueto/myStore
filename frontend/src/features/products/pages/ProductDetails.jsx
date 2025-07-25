import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../../store/productStore";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { singleProduct, loading, error, getSingleProduct } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(id);
  }, [id, getSingleProduct]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!singleProduct) return <p>No product found.</p>;

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
      <button className="btn-add-to-cart">Add to Cart</button>
      <button className="btn-buy-now">Buy Now</button>
    </div>
  );
};

export default ProductDetails;
