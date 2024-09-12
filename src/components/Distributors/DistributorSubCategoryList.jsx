// src/components/DistributorCard/DistributorSubCategoryList.jsx
import React from "react";
import DistributorSubCategoryItem from "./DistributorSubCategoryItem";

const DistributorSubCategoryList = ({ subCategories }) => {
  if (subCategories.length === 0) {
    return <p>No sub-categories available.</p>;
  }

  return (
    <div className="distributor-sub-category-list">
      {subCategories.map((subCategory) => (
        <DistributorSubCategoryItem
          key={subCategory.id}
          subCategory={subCategory}
        />
      ))}
    </div>
  );
};

export default DistributorSubCategoryList;
