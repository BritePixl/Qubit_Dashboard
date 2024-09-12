import React from "react";
import QubitSubCategoryItem from "./QubitSubCategoryItem";

const QubitSubCategoryList = ({ subCategories }) => {
  if (subCategories.length === 0) {
    return <p>No sub-categories available.</p>;
  }

  return (
    <div className="sub-category-list">
      {subCategories.map((subCategory, index) => (
        <QubitSubCategoryItem key={index} subCategory={subCategory} />
      ))}
    </div>
  );
};

export default QubitSubCategoryList;
