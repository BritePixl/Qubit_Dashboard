import React, { useState } from "react";
import Modal from "./Modal/Modal";
import API from "../utils/API";

const ProductList = ({ products, onEditProduct, onDeleteProduct, category, refreshCategory, setRefreshCategory }) => {
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

  const deleteProduct = (productId) => {
    API.delete(`/products/${productId}`)
    .then((res) => {
      console.log('Product deleted successfully', res.data);
      setRefreshCategory(!refreshCategory);
    })
  }

  const availableToggler = (proId, status) => {
    API.put(`/products/status/${proId}`, { status:  status })
    .then((res) => {
      setRefreshCategory(!refreshCategory);
    })

  }

  return (
    <div>
      {products.length > 0 ? (
        <ol>
          {products.map((product) => (
            <>
            {JSON.parse(product.categories)[0] === category.name? (
                <li key={product.id}>
                  {product.name} <button onClick={() => deleteProduct(product.id)}> Delete </button>
                  {
                    product.status == "in stock"? (
                      <button onClick={() => availableToggler(product.id, "not in stock")}> Available </button>
                    ) : (
                      <button onClick={() => availableToggler(product.id, "in stock")}> Not Available </button>
                    )
                  }
                  {/* <button onClick={() => onEditProduct(product)}>Edit</button> */}
                  {/* <button onClick={() => viewProduct(product)}>View</button> */}
                </li>
              ):null} 
            </>
          ))}
        </ol>
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
