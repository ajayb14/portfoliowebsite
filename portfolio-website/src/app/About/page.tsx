'use client';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const element = skillsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-custom">
        <header>
          <Navbar />
        </header>
        <main className="flex flex-col items-center text-center flex-grow px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
          <div className="max-w-4xl w-full space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Hero Section */}
            <div className="space-y-8 sm:space-y-10 min-h-[85vh] flex flex-col justify-center">
              <div className="relative flex justify-center">
                {/* SVG stroke tracing heading */}
                <svg
                  className={`w-full max-w-[720px] h-12 sm:h-16 lg:h-20 ${isLoaded ? '' : 'opacity-0'}`}
                  viewBox="0 0 1200 200"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Hi, I'm Ajay"
                >
                  <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="name-trace text-gray-900"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '80px' }}
                  >
                    Hi, I'm Ajay
                  </text>
                </svg>
              </div>

              {/* About Me Description Card */}
              <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto border border-white/20 ${isLoaded ? 'animate-card-in' : 'initial-card-hidden'}`}>
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-purple-500 rounded-full opacity-20"></div>

                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-georgia leading-relaxed relative z-10">
                    I'm an incoming freshman at Purdue University with a passion for technology and development. I started my journey as a developer 1 year ago and have worked on various projects that have taught me valuable lessons in responsive design, user experience, and problem-solving. When I'm not coding, I enjoy playing ping pong and tennis, watching football, and playing piano.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section - reveal on scroll */}
            <div ref={skillsRef} className="reveal bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto w-full">
              <div className="flex flex-col items-center space-y-8 sm:space-y-10">
                {/* Icon and Title */}
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gray-600"
                    >
                      <path d="M6 9l6-6 6 6M6 15l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-georgia">
                  Developer Skills
                </h2>

                {/* Skills Grid */}
                <div className="w-full space-y-8 sm:space-y-10">
                  {/* Languages */}
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-georgia border-b-2 border-gray-200 pb-2">
                      Languages
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {['JavaScript', 'TypeScript', 'HTML/CSS', 'Java', 'C++', 'Python'].map((lang) => (
                        <div key={lang} className="bg-gray-50 rounded-xl px-4 py-3 text-sm sm:text-base font-medium text-gray-700 shadow-sm">
                          {lang}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools and Frameworks */}
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 font-georgia border-b-2 border-gray-200 pb-2">
                      Tools & Frameworks
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        'Visual Studio Code', 'Git', 'Figma', 'React',
                        'Next.js', 'Tailwind', 'Bootstrap', 'Jupyter Notebooks'
                      ].map((tool) => (
                        <div key={tool} className="bg-gray-50 rounded-xl px-4 py-3 text-sm sm:text-base font-medium text-gray-700 shadow-sm">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}



