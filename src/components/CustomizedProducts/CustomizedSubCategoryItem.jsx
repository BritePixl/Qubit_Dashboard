import React, { useState } from "react";
import ProductForm from "../ProductForm";
import Modal from "../Modal/Modal";
import ProductList from "../ProductList";

const CustomizedSubCategoryItem = ({ subCategory }) => {
  const [products, setProducts] = useState(subCategory.products || []);
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
    <div className="sub-category-item">
      <h3>{subCategory.name}</h3>
      <button onClick={openAddProductModal}>Add Product</button>
      <ProductList
        products={products}
        onEditProduct={editProduct}
        onDeleteProduct={deleteProduct}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductForm
          onAddProduct={addProduct}
          existingProduct={selectedProduct}
        />
      </Modal>
    </div>
  );
};

export default CustomizedSubCategoryItem;
