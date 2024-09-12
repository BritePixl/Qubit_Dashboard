import React, { useState } from "react";
import CustomizedProductCard from "../components/CustomizedProducts/CustomizedCategoryCard";
import "../styles/CustomizedProductsPage.css";

const CustomizedProductsPage = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (name) => {
    setCategories([...categories, { id: Date.now(), name, products: [] }]);
  };

  return (
    <div className="customized-products-page">
      <h1>Customized Products</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add new category"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              addCategory(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <CustomizedProductCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CustomizedProductsPage;
