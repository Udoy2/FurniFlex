import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Footer from "./required/Footer";

import { CartContext } from "../context/CartContext";
import Navbar from "./required/Navbar";
const Store = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext); 
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <div className="flex">
            <aside className="w-1/4 pr-4">
              <div className="bg-black text-white p-4 rounded-md mb-4">Rocking chair</div>
              <div className="text-gray-700 p-4 rounded-md mb-4">Side chair</div>
              <div className="text-gray-700 p-4 rounded-md mb-4">Lounge chair</div>
            </aside>

            <section className="w-3/4 grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-md  border border-slate-800/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-50 object-cover mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <div className="flex items-center mb-2">
                    <span className="text-xl font-bold text-gray-900">€{product.price}</span>
                    <span className="text-sm line-through text-gray-500 ml-2">€{product.originalPrice}</span>
                    <span className="text-sm text-red-600 ml-2">{product.discount}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    className="w-full bg-black text-white py-2 rounded-md"
                    onClick={() => addToCart(product)}
                    >Add to cart</button>
                </div>
              ))}
            </section>
          </div>

          {/* pagination */}
              <div className="m-auto">
              <div className="flex justify-center mt-8">
                <nav className="flex space-x-2">
                  <a className="px-3 py-1 bg-white border border-gray-300 rounded-md" href="#">
                    1
                  </a>
                  <a className="px-3 py-1 bg-white border border-gray-300 rounded-md" href="#">
                    2
                  </a>
                  <span className="px-3 py-1">
                    —
                  </span>
                  <a className="px-3 py-1 bg-white border border-gray-300 rounded-md" href="#">
                    9
                  </a>
                  <a className="px-3 py-1 bg-white border border-gray-300 rounded-md" href="#">
                    10
                  </a>
                  <a className="px-3 py-1 bg-white border border-gray-300 rounded-md" href="#">
                    &gt;
                  </a>
                </nav>
              </div>
              </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Store;
