import React, { useState } from "react";
import ProductForm from "../ProductForm";
import ProductList from "../ProductList";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const QubitCategoryCard = ({ category, refreshCategory, setRefreshCategory, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



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

  
  // Delete category logic
  const deleteCategory = (categoryId) => {
    // Implement delete category logic here
    // For example, you can use the categoryId to filter out the category from the parent component's state
    API.delete('/categories/' + categoryId).then(() => {
      console.log('Category deleted successfully');
      // Update the parent component's state to reflect the deletion
      setRefreshCategory(!refreshCategory);
    }).catch(err => {
      console.error('Error deleting category:', err);
      // Handle error appropriately (e.g., display an error message)
    })
  };
  return (
    <div className="category-card">
      <h2>
        {category.name} 
        <button onClick={() => deleteCategory(category.id)} className="danger_button">Delete</button>
      </h2>


      {
        category.hasProducts? (
          <>
            <button className="category_card_button" onClick={openAddProductModal}>Add Product</button>
            <div className="product-actions">
              {products.length > 0 ? (
                <ProductList
                  products={products}
                  category={category}
                  refreshCategory={refreshCategory}
                  setRefreshCategory={setRefreshCategory}
                />
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>
          </>
        ) : (
          <Link to={`/category/${category.id}`}>
            <button className="category_card_button_sec">Show Category</button>
          </Link>
        )
      }


      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductForm
          category={category.name}
          onAddProduct={isModalOpen}
          existingProduct={selectedProduct}
          refreshCategory={refreshCategory}
          setRefreshCategory={setRefreshCategory}
        />
      </Modal>
    </div>
  );
};

export default QubitCategoryCard;
