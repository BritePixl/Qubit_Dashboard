// src/components/DistributorCard/DistributorCard.jsx
import React, { useState } from "react";
import DistributorSubCategoryList from "./DistributorSubCategoryList";
import DistributorForm from "../Distributors/DistributorForm";
import Modal from "../Modal/Modal";
import "../../styles/DistributorCard.css";

const DistributorCard = ({ distributor }) => {
  const [subCategories, setSubCategories] = useState(
    distributor.subCategories || []
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSubCategory = (subCategory) => {
    if (selectedSubCategory) {
      setSubCategories(
        subCategories.map((sc) => (sc.id === subCategory.id ? subCategory : sc))
      );
    } else {
      setSubCategories([...subCategories, subCategory]);
    }
    setIsModalOpen(false);
    setSelectedSubCategory(null);
  };

  const deleteSubCategory = (id) => {
    setSubCategories(subCategories.filter((sc) => sc.id !== id));
  };

  const editSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setIsModalOpen(true);
  };

  const openAddSubCategoryModal = () => {
    setSelectedSubCategory(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubCategory(null);
  };

  return (
    <div className="distributor-card">
      <h2>{distributor.name}</h2>
      <button onClick={openAddSubCategoryModal}>Add Sub-Category</button>
      <div className="sub-category-actions">
        {subCategories.length > 0 ? (
          <DistributorSubCategoryList
            subCategories={subCategories}
            onEditSubCategory={editSubCategory}
            onDeleteSubCategory={deleteSubCategory}
          />
        ) : (
          <p>No sub-categories available for this distributor.</p>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DistributorForm
          onAddDistributor={addSubCategory}
          existingDistributor={selectedSubCategory}
        />
      </Modal>
    </div>
  );
};

export default DistributorCard;
