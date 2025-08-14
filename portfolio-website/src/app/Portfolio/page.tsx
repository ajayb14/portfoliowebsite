'use client';
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import ProjectCard from '../components/ProjectCard/projectcard';

const projects = [
  {
    title: 'Meta Coursera Portfolio',
    image: '/Ajay Sample portfolio website.svg',
    github: 'https://github.com/ajayb14/Coursera-Portfolio-1',
  },
  {
    title: 'Meta-Calculator',
    image: '/Ajay calculator react.svg',
    github: 'https://github.com/ajayb14/meta-calculator-1',
  },
  {
    title: 'Calculator',
    image: '/Ajay calculator html css js.svg',
    github: 'https://github.com/ajayb14/Calculator-1',
  },
  {
    title: 'Meta Coursera Webpage',
    image: '/Ajay restaurant website.svg',
    github: 'https://github.com/ajayb14/CourseraFrontEndWebsite',
  },
];

const Portfolio = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

    // Only observe elements that exist
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-custom">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center p-4 flex-grow">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12 pt-32 font-georgia">
          My Recent Work
        </h2>

        {/* Project Cards - 2 column layout with scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-6xl w-full justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="reveal w-full flex justify-center"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;








