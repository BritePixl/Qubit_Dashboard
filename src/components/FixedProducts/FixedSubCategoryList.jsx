import React from "react";
import FixedSubCategoryItem from "./FixedSubCategoryItem";

const FixedSubCategoryList = ({ subCategories }) => {
  if (subCategories.length === 0) {
    return <p>No sub-categories available.</p>;
  }

  return (
    <div className="sub-category-list">
      {subCategories.map((subCategory, index) => (
        <FixedSubCategoryItem key={index} subCategory={subCategory} />
      ))}
    </div>
  );
};

export default FixedSubCategoryList;
