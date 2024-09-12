import React from "react";
import CategoryCard from "./QubitProducts/QubitCategoryCard";
import QubitProductCard from "./QubitProductCard";
import DistributorCard from "./DistributorCard";

const Dashboard = () => {
  const categories = [
    { id: 1, name: "Qubit Products", subCategories: [] },
    {
      id: 2,
      name: "Distributors",
      products: [
        { name: "CNLINKO", products: [] },
        { name: "Color Light", products: [] },
        { name: "RE - Film", products: [] },
        { name: "Chip Show", products: [] },
      ],
    },
    { id: 3, name: "Customized Products", subCategories: [] },
    { id: 4, name: "Fixed Products", subCategories: [] },
  ];

  return (
    <div className="dashboard container">
      {categories.map((category) => {
        if (category.name === "Qubit Products") {
          return <QubitProductCard key={category.id} category={category} />;
        }
        if (category.name === "Distributors") {
          return category.products.map((distributor, index) => (
            <DistributorCard key={index} distributor={distributor} />
          ));
        }
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Dashboard;
