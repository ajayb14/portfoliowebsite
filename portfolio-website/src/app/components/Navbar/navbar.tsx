'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative h-20 py-5 px-10 fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Ajay logo.svg"
            alt="Ajay's Logo"
            width={200}
            height={200}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 transition-all duration-300 hover:scale-105"
            priority
            quality={100}
          />
        </Link>
      </div>
      {/* Menu Toggle Button for Mobile */}
      <button
        className="block md:hidden text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
        >
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg border border-gray-200 transition-all duration-300 ease-in-out transform origin-top"
          aria-hidden={!isMenuOpen}
        >
          <nav>
            <ul className="flex flex-col py-3">
              <li className="w-full">
                <Link href="/Portfolio" onClick={closeMenu}>
                  <button className="text-base sm:text-lg text-gray-700 hover:text-gray-900 bg-transparent px-4 py-3 rounded-lg font-georgia w-full text-left transition-all duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none">
                    Portfolio
                  </button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/About" onClick={closeMenu}>
                  <button className="text-base sm:text-lg text-gray-700 hover:text-gray-900 bg-transparent px-4 py-3 rounded-lg font-georgia w-full text-left transition-all duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none">
                    About
                  </button>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/" onClick={closeMenu}>
                  <button className="text-base sm:text-lg text-gray-700 hover:text-gray-900 bg-transparent px-4 py-3 rounded-lg font-georgia w-full text-left transition-all duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none">
                    Home
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex md:items-center md:justify-end">
        <ul className="flex space-x-4">
          <li>
            <Link href="/Portfolio">
              <button className={`${styles.buttonHover} text-lg text-gray-700 hover:text-gray-900 bg-transparent px-3 py-1 rounded font-georgia`}>
                Portfolio
              </button>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <button className={`${styles.buttonHover} text-lg text-gray-700 hover:text-gray-900 bg-transparent px-3 py-1 rounded font-georgia`}>
                About
              </button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <button className={`${styles.buttonHover} text-lg text-gray-700 hover:text-gray-900 bg-transparent px-3 py-1 rounded font-georgia`}>
                Home
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;





