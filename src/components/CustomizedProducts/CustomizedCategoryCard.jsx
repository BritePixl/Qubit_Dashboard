import React, { useState } from "react";
import ProductForm from "../ProductForm";
import ProductList from "../ProductList";
import Modal from "../Modal/Modal";

const CustomizedCategoryCard = ({ category }) => {
  const [products, setProducts] = useState(category.products || []);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProduct = (product) => {
    if (selectedProduct) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      setProducts([...products, product]);
    }
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const openAddProductModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="category-card">
      <h2>{category.name}</h2>
      <button onClick={openAddProductModal}>Add Product</button>
      <div className="product-actions">
        {products.length > 0 ? (
          <ProductList
            products={products}
            onEditProduct={editProduct}
            onDeleteProduct={deleteProduct}
          />
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductForm
          onAddProduct={addProduct}
          existingProduct={selectedProduct}
        />
      </Modal>
    </div>
  );
};

export default CustomizedCategoryCard;
