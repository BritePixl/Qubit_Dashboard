import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProductForm.css";
import API from "../utils/API";

const ProductForm = ({existingProduct, category, refreshCategory, setRefreshCategory }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [product, setProduct] = useState({
    id: existingProduct?.id || Date.now(),
    name: existingProduct?.name || "",
    specification: existingProduct?.specification || "",
    status: existingProduct?.status || "in stock",
    images: existingProduct?.images || [], // changed from image to images array
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
        images: [],
      });
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating FormData object
    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("specification", product.specification);
    formData.append("status", product.status);
    formData.append("categories", JSON.stringify([category]));
    
    // Append all selected images to FormData
    product.images.forEach((image, i) => {
      formData.append("images", image); // use "images[]" for multiple files
    });

    try {
      const response = await API.post("/products/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // handle close modal
      setRefreshCategory(!refreshCategory);
      setIsAdded(true);

    } catch (error) {
      //
    }
  };

  return (
    <>
      {
        isAdded? (
          <div className="added-message">Product added successfully!</div>
        ):(
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
            {/* <label>Product Status</label>
            <select name="status" value={product.status} onChange={handleChange}>
              <option value="in stock">In Stock</option>
              <option value="out of stock">Out of Stock</option>
            </select> */}
            <label>Product Images</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
            />
            <button type="submit">Save Product</button>
          </form>
        )
      }
    </>
  );
};

export default ProductForm;
