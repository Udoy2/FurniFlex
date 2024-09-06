import React, { useContext, useEffect } from 'react'
import { icon } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const {cartQuantity} = useContext(CartContext);
  const {isAuthenticated} = useContext(AuthContext);
  useEffect(() => {
    console.log(isAuthenticated);
    
  }, [])
  
  return (
    <header className="bg-white border border-slate-800/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={icon} alt="FurniFlex Logo" width="40" />
          <span className="text-xl font-bold text-blue-600">FurniFlex</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Categories</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Custom</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
        </nav>
        <div className="flex items-center space-x-4 mr-5">
          <div className="relative">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.15865 21.6925L2.5539 12.1197C2.31126 10.6724 2.18995 9.94869 2.57843 9.47435C2.96693 9 3.68094 9 5.10898 9H24.8807C26.3087 9 27.0227 9 27.4112 9.47435C27.7996 9.94869 27.6783 10.6724 27.4357 12.1197L25.8309 21.6925C25.2991 24.8655 25.0331 26.4519 23.9472 27.3927C22.8615 28.3333 21.2961 28.3333 18.1657 28.3333H11.8239C8.69341 28.3333 7.12816 28.3333 6.04232 27.3927C4.95648 26.4519 4.69054 24.8655 4.15865 21.6925Z" stroke="#323232" strokeWidth="3" />
              <path d="M22.3385 8.99935C22.3385 4.94926 19.0553 1.66602 15.0052 1.66602C10.9551 1.66602 7.67188 4.94926 7.67188 8.99935" stroke="#323232" strokeWidth="3" />
            </svg>

            <div className="absolute top-4 left-3.5 right-0 w-4 h-4 bg-[#323232] rounded-full">
              <div className="w-full h-full text-white">
              <span className='text-xs absolute top-0 left-1 right-0 font-medium'>{cartQuantity}</span>
              </div>
            </div>
          </div>
          <Link to="/login">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-700 text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar