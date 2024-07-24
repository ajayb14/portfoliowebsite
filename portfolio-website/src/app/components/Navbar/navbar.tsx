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

  return (
    <div className="relative h-20 py-5 px-10 fixed top-0 left-0 w-full z-50 bg-white bg-opacity-50 shadow-md flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Ajay logo.svg" 
            alt="Ajay's Logo"
            width={250} 
            height={40} 
            className="h-auto md:w-64 md:h-24" 
          />
        </Link>
      </div>
      {/* Menu Toggle Button for Mobile */}
      <button
        className="block md:hidden text-gray-700"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      <div
        className={`md:hidden absolute right-0 top-20 w-full bg-gradient-custom shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!isMenuOpen}
      >
        <nav>
          <ul className="flex flex-col items-center py-2">
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





