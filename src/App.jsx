import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ProductProvider } from "./context/ProductContext";
import Store from "./components/Store";
import { CartProvider } from "./context/CartContext";
const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
      <CartProvider>
        <Router>
          <Routes>


            <Route path="/" element={<Store />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
