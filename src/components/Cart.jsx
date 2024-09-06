import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "./required/Navbar";
import Footer from "./required/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { cartItems, removeFromCart,addToCart } = useContext(CartContext);

  

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white">
      <Navbar />

      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          {/* Order Overview */}
          <div className="w-2/3 bg-[#FAFAFA] mr-5 border border-slate-800/10 p-6  ">
            <h2 className="text-2xl font-semibold mb-6">An overview of your order</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        className="px-2 py-1"
                        onClick={() => removeFromCart(item.id, "decrease")}
                      >
                        -
                      </button>
                      <input
                        className="w-8 text-center border-none"
                        type="text"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="px-2 py-1"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded"
                      width="60"
                      height="60"
                    />
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">€{item.price * item.quantity}</span>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-gray-500 cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="w-1/3 bg-[#FAFAFA] border border-slate-800/10 p-6  ">
            <h2 className="text-2xl font-semibold mb-6">Order details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">€{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Shipping</span>
                <span className="text-gray-700">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Estimated Tax <i className="fas fa-info-circle"></i>
                </span>
                <span className="text-gray-700">€ -</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-gray-700">Total</span>
                <span className="text-gray-700">€{totalPrice}</span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg">GO TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
