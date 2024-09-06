import React, { createContext, useState } from "react";

// Create the context for the cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If it exists, update the quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's a new product, add it to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setCartQuantity((cartQuantity)=>cartQuantity+=1);
    console.log(cartItems);
    
  };

  const removeFromCart = (productId, type) => {
    if (type === 'decrease') {
      setCartItems((prevItems) => {
        return prevItems
          .map((item) => {
            if (item.id === productId) {
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return null; // Remove the item entirely when quantity is 1
              }
            }
            return item;
          })
          .filter(Boolean); // Filter out null values
      });
      setCartQuantity((cartQuantity) => Math.max(cartQuantity - 1, 0)); // Ensure quantity doesn't go below zero
    } else {
      setCartItems((prevItems) => {
        const itemToRemove = prevItems.find((item) => item.id === productId);
        const updatedItems = prevItems.filter((item) => item.id !== productId);
        
        setCartQuantity((cartQuantity) => {
          return Math.max(cartQuantity - (itemToRemove ? itemToRemove.quantity : 0), 0); // Prevent negative quantity
        });
        return updatedItems; // Update the cart with the item removed
      });
    }
  };
  
  

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems,cartQuantity, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
