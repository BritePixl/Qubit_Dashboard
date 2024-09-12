import React, { useState } from "react";
import FixedCategoryCard from "../components/FixedProducts/FixedCategoryCard";
import "../styles/FixedProductsPage.css";

const FixedProductsPage = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (name) => {
    setCategories([...categories, { id: Date.now(), name, products: [] }]);
  };

  return (
    <div className="fixed-products-page">
      <h1>Fixed Products</h1>
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
          <FixedCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FixedProductsPage;
