import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <div className="bg-purple-600 h-16 flex items-center justify-between px-4 text-white relative">
      
      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <FaEnvelope title="Email" />
          <span className="font-josefin font-semibold">mhhasanul@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt title="Phone" />
          <span className="font-josefin font-semibold">(12345)67890</span>
        </div>
      </div>

      <div className="hidden sm:flex items-center space-x-6 text-sm">
        <select
          className="bg-purple-600 border-none text-sm font-josefin text-white cursor-pointer outline-none focus:ring focus:ring-purple-400"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
          <option value="French">French</option>
        </select>

        <select
          className="bg-purple-600 border-none text-sm font-josefin text-white cursor-pointer outline-none focus:ring focus:ring-purple-400"
          defaultValue="USD"
        >
          <option value="USD">USD</option>
          <option value="TK">BDT</option>
          <option value="Euro">Euro</option>
        </select>

        <span className="font-josefin font-semibold text-sm cursor-pointer">Login</span>

        <div className="flex items-center space-x-2 cursor-pointer">
          <FaHeart title="Wishlist" />
          <span className="font-josefin font-semibold text-sm">Wishlist</span>
        </div>

        <FaShoppingCart className="text-sm cursor-pointer" title="Shopping Cart" />
      </div>

      <div className="sm:hidden flex items-center space-x-4">
        <button
          className="ml-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-purple-600 text-white p-4 sm:hidden z-10 transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <select
          className="bg-purple-600 border-none text-sm font-josefin text-white cursor-pointer outline-none focus:ring focus:ring-purple-400 mb-2"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
     
        </select>

        <select
          className="bg-purple-600 border-none text-sm font-josefin text-white cursor-pointer outline-none focus:ring focus:ring-purple-400 mb-2"
          defaultValue="USD"
        >
          <option value="USD">USD</option>
          <option value="TK">BDT</option>
         
        </select>

        <div className="font-josefin font-semibold text-sm cursor-pointer mb-2">Login</div>

        <div className="flex items-center space-x-2 cursor-pointer mb-2">
          <FaHeart title="Wishlist" />
          <span className="font-josefin font-semibold text-sm">Wishlist</span>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <FaShoppingCart title="Shopping Cart" />
          <span className="font-josefin font-semibold text-sm">Shopping Cart</span>
        </div>
      </div>
    </div>
  );
};



export default TopBar
