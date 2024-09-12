import React, { useState } from "react";
import ProductForm from "../ProductForm";
import Modal from "../Modal/Modal";
import "../../styles/DistributorSubCategoryItem.css";

const DistributorSubCategoryItem = ({ subCategory }) => {
  const [products, setProducts] = useState(subCategory.products || []);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // For viewing products

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
    setProducts(products.filter((p) => p.id !== id));
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };

  const openAddProductModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="distributor-sub-category-item">
      <h3>{subCategory.name}</h3>
      <button onClick={openAddProductModal}>Add Product</button>
      <div className="product-actions">
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - {product.status}
                <button onClick={() => viewProduct(product)}>View</button>{" "}
                {/* View button */}
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

      {/* Modal for Editing Products */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductForm
          onAddProduct={addProduct}
          existingProduct={selectedProduct}
        />
      </Modal>

      {/* Modal for Viewing Products */}
      <Modal isOpen={isViewModalOpen} onClose={closeViewModal}>
        {selectedProduct && (
          <div className="product-details">
            <h3>{selectedProduct.name}</h3>
            <p>Status: {selectedProduct.status}</p>
            <p>Price: {selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
            {selectedProduct.image && (
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DistributorSubCategoryItem;
