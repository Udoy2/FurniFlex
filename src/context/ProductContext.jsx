import React, { createContext, useState, useEffect } from "react";
import { productData } from "../data/products"; // Import the product data
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setProducts(productData);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
