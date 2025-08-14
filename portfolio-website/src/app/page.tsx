'use client';
import Link from "next/link";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-custom">
        <header>
          <Navbar />
        </header>
        <main className="flex flex-grow items-center justify-center flex-col px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Avatar - slides from top */}
            <div className={`relative transition-all duration-1000 ${isLoaded ? 'animate-slide-in-top' : 'initial-hidden'}`}>
              <Image
                src="/AJAY AVATAR.svg"
                alt="Ajay's Avatar"
                width={200}
                height={200}
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mx-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
                priority
              />
            </div>

            <div className="space-y-2 sm:space-y-4">
              {/* Name - SVG stroke tracing animation */}
              <div className="relative flex justify-center">
                <svg
                  className={`${isLoaded ? '' : 'opacity-0'} w-full max-w-[720px] h-16 sm:h-20 lg:h-24`}
                  viewBox="0 0 1200 200"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Ajay Bharanidhar"
                >
                  <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="name-trace text-gray-900"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '96px' }}
                  >
                    Ajay Bharanidhar
                  </text>
                </svg>
              </div>

              {/* Subtitle - slides from bottom */}
              <p className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-georgia font-medium transition-all duration-1000 ${isLoaded ? 'animate-slide-in-bottom' : 'initial-hidden-bottom'}`}>
                - An Aspiring Software Engineer -
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-gradient-custom">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}



