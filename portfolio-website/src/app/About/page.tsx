import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

export default function About() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-custom">
        <header>
          <Navbar />
        </header>
        <main className="flex flex-col items-center text-center flex-grow mt-40">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Hi, I'm Ajay</h1>
          <p className="text-base md:text-lg mb-8 max-w-xl">
            I started my journey as a developer 1 year ago. I've done many different small projects such as this one. Each project has taught me valuable lessons in responsive design, user experience, and problem-solving.
          </p>
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-20 mb-8 max-w-md w-full">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 mb-4 text-gray-700"
              >
                <path d="M6 9l6-6 6 6M6 15l6 6 6-6" />
              </svg>
              <h2 className="text-lg md:text-xl font-semibold mb-4">Front-End Developer</h2>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2">Languages:</h3>
                <ul className="list-inside mb-4">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML/CSS</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Python</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Dev Tools and Frameworks/Libraries:</h3>
                <ul className="list-inside">
                  <li>Visual Studio Code</li>
                  <li>Git</li>
                  <li>Figma</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}



