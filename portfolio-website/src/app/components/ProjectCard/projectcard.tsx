import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

// Define the interface
interface Project {
  title: string;
  image: string;
  github: string;
}

// Define the props type for the component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative group w-full md:w-1/3 p-4">
      <div className="bg-gradient-custom bg-opacity-50 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
        <div className="relative w-[350px] h-[350px] md:w-[440px] md:h-[440px]"> 
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


