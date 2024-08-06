import React from 'react';
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

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
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








