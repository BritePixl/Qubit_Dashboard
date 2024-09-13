import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Add CSS for styling

const HomePage = ({categories}) => {
  return (
    <div >
      {categories.map((category) => (
        <div key={category.id} className="home-page">
          {
            category.parent === 0 && (
              <Link to={`/category/${category.id}`} className="card">
                <h2>{category.name}</h2>
              </Link>
            )
          }
        </div>
      ))}
    </div>
  );
};

export default HomePage;
