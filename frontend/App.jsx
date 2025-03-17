import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./src/assets/navbar/navbar";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Category banner={men_banner} cate="men" />} />
          <Route path="/women" element={<Category banner={women_banner} cate="women" />} />
          <Route path="/kid" element={<Category banner={kid_banner} cate="kid" />} />
          <Route path="/product/:productid" element={<Product />} /> 
          <Route path="/cart" element={<Cart />}  />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
