// src/pages/DistributorsPage.jsx
import React, { useState } from "react";
import DistributorCard from "../components/Distributors/DistributorCard";
import "../styles/DistributorsPage.css";

const DistributorsPage = () => {
  const [distributors, setDistributors] = useState([]);

  const addDistributor = (name) => {
    setDistributors([...distributors, { id: Date.now(), name, items: [] }]);
  };

  return (
    <div className="distributors-page">
      <h1>Distributors</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add new distributor card"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              addDistributor(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <div className="distributor-card-list">
        {distributors.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>
    </div>
  );
};

export default DistributorsPage;
