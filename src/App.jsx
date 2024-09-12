import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import QubitProductsPage from "./pages/QubitProductsPage";
import DistributorsPage from "./pages/DistributorsPage";
import CustomizedProductsPage from "./pages/CustomizedProductPage";
import FixedProductsPage from "./pages/FixedProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qubit-products" element={<QubitProductsPage />} />
        <Route path="/distributors" element={<DistributorsPage />} />
        <Route
          path="/customized-products"
          element={<CustomizedProductsPage />}
        />
        <Route path="/fixed-products" element={<FixedProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
