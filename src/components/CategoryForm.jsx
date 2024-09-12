import React, { useState } from "react";

const CategoryForm = ({ category, onSave }) => {
  const [name, setName] = useState(category ? category.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: category ? category.id : Date.now(),
      name,
      products: category ? category.products : [],
    });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default CategoryForm;
