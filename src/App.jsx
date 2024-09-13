import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import DistributorsPage from "./pages/DistributorsPage";
import CustomizedProductsPage from "./pages/CustomizedProductPage";
import FixedProductsPage from "./pages/FixedProductsPage";
import API from "./utils/API";
import SubCategories from "./pages/SubCategories";

function App() {
  // getting all categories from the API at the start of the app.
  const [refreshCategory, setRefreshCategory] = useState(false);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    API.get('/categories')
    .then((res) => {
      setCategories(res.data);
    }).catch((err) => {
      setCategories([]);
    });
  }, [refreshCategory]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.get('/products/all/1')
    .then((res) => {
      console.log(res.data);
      setProducts(res.data.data);
    }).catch((err) => {
      setProducts([]);
    });
  }, [refreshCategory]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage categories={categories} />} />
        <Route path="/category/:cid" element={<SubCategories
          categories={categories}
          refreshCategory={refreshCategory}
          setRefreshCategory={setRefreshCategory}
          products={products}
           />} />


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
