import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const DistributorCard = ({ distributor }) => {
  const [products, setProducts] = useState(distributor.products || []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (index, updatedProduct) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>{distributor.name}</h2>
      <ProductForm onAddProduct={addProduct} />
      <ProductList
        products={products}
        onUpdateProduct={updateProduct}
        onDeleteProduct={deleteProduct}
      />
    </div>
  );
};

export default DistributorCard;
