import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Cart } from "./pages/cart";
import { AppLayout } from "./layout/app-layout";
import { ProductDetail } from "./pages/product-detail";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;