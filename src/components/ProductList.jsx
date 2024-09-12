import React, { useState } from "react";
import Modal from "./Modal/Modal";

const ProductList = ({ products, onEditProduct, onDeleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const viewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.status}
              <button onClick={() => onEditProduct(product)}>Edit</button>
              <button onClick={() => onDeleteProduct(product.id)}>
                Delete
              </button>
              <button onClick={() => viewProduct(product)}>View</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <div className="product-details">
            <h2>{selectedProduct.name}</h2>
            <p>
              <strong>Specification:</strong> {selectedProduct.specification}
            </p>
            <p>
              <strong>Status:</strong> {selectedProduct.status}
            </p>
            {selectedProduct.image && (
              <img
                src={URL.createObjectURL(selectedProduct.image)}
                alt={selectedProduct.name}
                className="product-image"
              />
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProductList;
