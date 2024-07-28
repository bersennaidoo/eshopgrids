import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <Routes>
        <Route path="/shop" element={<Layout />}>
          <Route path="details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}