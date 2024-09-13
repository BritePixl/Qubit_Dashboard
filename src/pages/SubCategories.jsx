import React, { useState } from "react";
import QubitCategoryCard from "../components/QubitProducts/QubitCategoryCard";
import "../styles/QubitProductsPage.css";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import AddSubCategoryForm from "../components/AddSubCategoryForm";

const SubCategories = ({categories, refreshCategory, setRefreshCategory, products}) => {
  const cid = useParams().cid
  const [showModal, setShowModal] = useState(false);



  return (
    <div className="qubit-products-page">
      {
        categories.map((category) => (
          <i key={category.id}>
            { category.id === Number(cid) &&( <h1>{category.name}</h1>) }
          </i>
        ))
      }
      <div className="form-group">
        <button onClick={() => setShowModal(true)}>Add Subcategory</button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <AddSubCategoryForm refreshCategory={refreshCategory} setRefreshCategory={setRefreshCategory} parent={cid} />
        </Modal>

      </div>
      {categories.map((category) => (
        <div className="category-list"  key={category.id}>
            {
              category.parent === Number(cid) && (
                <QubitCategoryCard products={products} refreshCategory={refreshCategory} setRefreshCategory={setRefreshCategory} key={category.id} category={category} />
              )
            }
        </div>
      ))}
    </div>
  );
};

export default SubCategories;
