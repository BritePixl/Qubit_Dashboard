// src/components/DistributorForm/DistributorForm.jsx
import React, { useState, useEffect } from "react";
import "../../styles/DistributorsForm.css";

const DistributorForm = ({ onAddDistributor, existingDistributor }) => {
  const [distributor, setDistributor] = useState({
    id: existingDistributor?.id || Date.now(),
    name: existingDistributor?.name || "",
    location: existingDistributor?.location || "",
  });

  useEffect(() => {
    if (existingDistributor) {
      setDistributor(existingDistributor);
    }
  }, [existingDistributor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDistributor({ ...distributor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDistributor(distributor);
    setDistributor({
      id: Date.now(),
      name: "",
      location: "",
    });
  };

  return (
    <form className="distributor-form" onSubmit={handleSubmit}>
      <label>Distributor Name</label>
      <input
        type="text"
        name="name"
        value={distributor.name}
        onChange={handleChange}
        required
      />

      <label>Location</label>
      <input
        type="text"
        name="location"
        value={distributor.location}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Distributor</button>
    </form>
  );
};

export default DistributorForm;
