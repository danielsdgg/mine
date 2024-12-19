import React from 'react';
import { data } from "../data/data";

const Work = () => {
  const projects = data;

  return (
    <div name="work" className="w-full bg-gray-300 py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-600 border-b-4 border-blue-600 inline-block">
            Work
          </h2>
          <p className="mt-4 text-lg">Showcasing my best projects</p>
        </div>

        {/* Projects Carousel */}
        <div className="relative flex overflow-x-scroll scrollbar-hide space-x-8 py-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] md:min-w-[400px] bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div
                className="relative h-48 md:h-60 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Removed hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Details Section */}
              <div className="p-6">
                <h3 className="text-2xl text-center font-bold text-blue-500 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-center text-gray-400 mb-4">{project.paragraph}</p>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg flex">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Instructions */}
        <p className="text-center mt-6 text-black">
          Scroll sideways to explore all projects →
        </p>
      </div>
    </div>
  );
};

export default Work;
