import React, { useState } from "react";
import QubitCategoryCard from "../components/QubitProducts/QubitCategoryCard";
import "../styles/QubitProductsPage.css";

const QubitProductsPage = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (name) => {
    setCategories([...categories, { id: Date.now(), name, products: [] }]);
  };

  return (
    <div className="qubit-products-page">
      <h1>Qubit Products</h1>
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
          <QubitCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default QubitProductsPage;
