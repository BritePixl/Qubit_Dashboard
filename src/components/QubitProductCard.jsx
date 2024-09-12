import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const QubitProductCard = ({ category }) => {
  const [subCategories, setSubCategories] = useState(
    category.subCategories || []
  );
  const [newSubCategory, setNewSubCategory] = useState("");
  const [products, setProducts] = useState({}); // Store products by subcategory

  const addSubCategory = () => {
    if (
      newSubCategory.trim() !== "" &&
      !subCategories.includes(newSubCategory)
    ) {
      setSubCategories([...subCategories, newSubCategory]);
      setProducts({ ...products, [newSubCategory]: [] });
      setNewSubCategory("");
    }
  };

  const addProductToSubCategory = (subCategory, product) => {
    setProducts({
      ...products,
      [subCategory]: [...(products[subCategory] || []), product],
    });
  };

  return (
    <div className="card">
      <h2>{category.name}</h2>
      <div className="form-group">
        <input
          type="text"
          value={newSubCategory}
          onChange={(e) => setNewSubCategory(e.target.value)}
          placeholder="Add new sub-category"
        />
        <button onClick={addSubCategory}>Add Sub-Category</button>
      </div>
      {subCategories.map((subCategory, index) => (
        <div key={index} className="subcategory">
          <h3>{subCategory}</h3>
          <ProductForm
            onAddProduct={(product) =>
              addProductToSubCategory(subCategory, product)
            }
          />
          <ProductList products={products[subCategory]} />
        </div>
      ))}
    </div>
  );
};

export default QubitProductCard;
