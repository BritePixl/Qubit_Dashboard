import React from "react";
import CustomizedSubCategoryItem from "./CustomizedSubCategoryItem";

const CustomizedSubCategoryList = ({ subCategories }) => {
  if (subCategories.length === 0) {
    return <p>No sub-categories available.</p>;
  }

  return (
    <div className="sub-category-list">
      {subCategories.map((subCategory, index) => (
        <CustomizedSubCategoryItem key={index} subCategory={subCategory} />
      ))}
    </div>
  );
};

export default CustomizedSubCategoryList;
