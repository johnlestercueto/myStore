import useForm from "../../../hooks/useForm";

const AddProductform = ({ onSubmit }) => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let key in values) {
      formData.append(key, values[key]);
    }

    onSubmit(formData); // ← Make sure backend accepts multipart/form-data
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="number"
        name="price"
        value={values.price}
        onChange={handleChange}
        placeholder="price"
      />
      <input
        type="number"
        name="stock"
        value={values.stock}
        onChange={handleChange}
        placeholder="stock"
      />
      <input
        type="text"
        name="category"
        value={values.category}
        onChange={handleChange}
        placeholder="category"
      />
      <input
        type="text"
        name="description"
        value={values.description}
        onChange={handleChange}
        placeholder="description"
      />
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleChange}
      />

      <button type="submit">ADD PRODUCT</button>
    </form>
  );
};

export default AddProductform;
