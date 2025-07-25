import AddProductForm from "../components/AddProductForm";
import { useProductStore } from "../../../store/productStore";

const AddProductPage = () => {
  const { addProduct } = useProductStore();

  const handleAddProduct = async (formData) => {
    //console.log("addproductpage - formdata :", formData);
    try {
      const data = await addProduct(formData);
      //console.log("addproductpage - data :", data);
    } catch (error) {
      //console.log("addproductpage error :", error);
    }
  };

  return <AddProductForm onSubmit={handleAddProduct} />;
};

export default AddProductPage;
