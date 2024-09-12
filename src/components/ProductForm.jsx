import React, { useState, useEffect } from "react";
import "../styles/ProductForm.css";

const ProductForm = ({ onAddProduct, existingProduct }) => {
  const [product, setProduct] = useState({
    id: existingProduct?.id || Date.now(),
    name: existingProduct?.name || "",
    specification: existingProduct?.specification || "",
    status: existingProduct?.status || "in stock",
    image: existingProduct?.image || null,
  });

  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct);
    } else {
      setProduct({
        id: Date.now(),
        name: "",
        specification: "",
        status: "in stock",
        image: null,
      });
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <label>Product Specification</label>
      <textarea
        name="specification"
        value={product.specification}
        onChange={handleChange}
        required
      />
      <label>Product Status</label>
      <select name="status" value={product.status} onChange={handleChange}>
        <option value="in stock">In Stock</option>
        <option value="out of stock">Out of Stock</option>
      </select>
      <label>Product Image</label>
      <input
        type="file"
        name="image"
        multiple={true}
        onChange={handleFileChange}
      />
      <button type="submit">Save Product</button>
    </form>
  );
};

export default ProductForm;
