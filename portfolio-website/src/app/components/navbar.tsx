import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="h-20 py-5 px-10 fixed top-0 left-0 w-full z-50 bg-white bg-opacity-50 shadow-md">
          <nav className="flex justify-between items-center h-full">
            <ul className="flex space-x-4 ml-auto">
              <li>
                <Link href="/Portfolio" className="text-lg text-white-700 hover:text-white-900">
                  <button className="bg-transparent hover:bg-white-100 px-3 py-1 rounded">
                    Portfolio
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-lg text-white-700 hover:text-white-900">
                  <button className="bg-transparent hover:bg-white-100 px-3 py-1 rounded">
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-white-700 hover:text-white-900">
                  <button className="bg-transparent hover:bg-white-100 px-3 py-1 rounded">
                    Home
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Navbar;
