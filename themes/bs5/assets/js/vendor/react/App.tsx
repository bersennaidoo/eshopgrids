import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.tsx";
import ProductDetails from "./components/ProductDetails.tsx";
import Products from "./components/Products.tsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/shop" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}
