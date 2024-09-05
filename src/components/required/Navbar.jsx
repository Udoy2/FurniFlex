import React from 'react'
import { icon } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Navbar = () => {
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
            <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
            <Link to="/login">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-700" />
            </Link>
            </div>
          </div>
        </header>
  )
}

export default Navbar