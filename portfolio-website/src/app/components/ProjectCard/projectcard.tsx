import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

// Interface for project data
interface Project {
  title: string;
  image: string;
  github: string;
}

// Props for the component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative group w-full sm:w-80 lg:w-96 p-4">
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative w-full aspect-square">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            priority={false}
          />
        </div>

        {/* Project Title */}
        <div className="p-4 bg-white">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-georgia text-center">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay with improved GitHub button */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="text-center">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 font-georgia">
              {project.title}
            </h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 ease-in-out transform hover:scale-110 hover:rotate-3"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="text-white text-xl sm:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



