import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Add CSS for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/qubit-products" className="card">
        <h2>Qubit Products</h2>
      </Link>
      <Link to="/distributors" className="card">
        <h2>Distributors</h2>
      </Link>
      <Link to="/customized-products" className="card">
        <h2>Customized Products</h2>
      </Link>
      <Link to="/fixed-products" className="card">
        <h2>Fixed Products</h2>
      </Link>
    </div>
  );
};

export default HomePage;
