import React, { useState } from "react";
import ProductForm from "../ProductForm";
import ProductList from "../ProductList";

const FixedSubCategoryItem = ({ subCategory }) => {
  const [products, setProducts] = useState(subCategory.products || []);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (product) => {
    if (selectedProduct) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
      setSelectedProduct(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="sub-category-item">
      <h3>{subCategory.name}</h3>
      <ProductForm
        onAddProduct={addProduct}
        existingProduct={selectedProduct}
      />
      <div className="product-actions">
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - {product.status}
                <button onClick={() => editProduct(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available in this sub-category.</p>
        )}
      </div>
    </div>
  );
};

export default FixedSubCategoryItem;
