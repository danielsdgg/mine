import React, { useState } from 'react';
import { data } from "../data/data";

const Work = () => {
  const projects = data;
  const [filter, setFilter] = useState('All');

  const uniqueTech = ['All', ...new Set(projects.flatMap(p => p.tech || []))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech?.includes(filter));

  return (
    <section 
      name="work" 
      className="w-full bg-gradient-to-b from-[#6F665C] to-[#8C8375] text-[#F5F2ED] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F2ED]">
            My Work
          </h2>
          <div className="w-20 h-1 bg-[#A67C52] mx-auto mt-5 rounded-full opacity-80" />
          <p className="mt-6 text-lg md:text-xl text-[#D9D2C9] max-w-3xl mx-auto leading-relaxed">
            A curated showcase of full-stack applications, interactive tools, and thoughtful digital experiences I've crafted.
          </p>
        </div>

        {/* Filter Pills – muted warm accent */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {uniqueTech.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`
                px-6 py-3 rounded-full text-sm md:text-base font-medium tracking-wide transition-all duration-300
                ${filter === tech 
                  ? 'bg-[#A67C52] text-[#F5F2ED] shadow-lg shadow-[#A67C52]/30 ring-1 ring-[#C19A6B]/40' 
                  : 'bg-[#9A938A]/30 text-[#D9D2C9] border border-[#8C8375]/50 hover:border-[#A67C52]/60 hover:text-[#F5F2ED] hover:shadow-md backdrop-blur-sm'
                }
              `}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Masonry Grid – gallery-like */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group break-inside-avoid rounded-2xl overflow-hidden bg-[#9A938A]/20 backdrop-blur-md border border-[#8C8375]/40 shadow-lg hover:shadow-2xl hover:border-[#A67C52]/50 transition-all duration-400"
            >
              {/* Image – warmer overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-800 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3732]/70 via-[#6F665C]/30 to-transparent group-hover:from-[#3C3732]/50 group-hover:via-[#6F665C]/10 transition-all duration-500" />
                
                {/* Hover reveal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="px-6 py-3 bg-[#A67C52]/90 text-[#F5F2ED] text-sm font-medium rounded-full shadow-lg backdrop-blur-md">
                    Explore Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold text-[#F5F2ED] mb-3 text-center md:text-left">
                  {project.name}
                </h3>
                
                <p className="text-sm md:text-base text-[#D9D2C9] mb-5 line-clamp-3 text-center md:text-left">
                  {project.paragraph}
                </p>

                {/* Tech Badges – desaturated warm */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {project.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1 bg-[#A67C52]/20 text-[#F5F2ED] text-xs font-medium rounded-full border border-[#A67C52]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#3C3732]/80 hover:bg-[#4A443D] text-[#F5F2ED] text-sm font-medium rounded-lg transition-colors border border-[#4A443D]"
                    >
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#A67C52] hover:bg-[#B5895A] text-[#F5F2ED] text-sm font-medium rounded-lg transition-colors shadow-md shadow-[#A67C52]/20"
                    >
                      Live Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#D9D2C9] mt-16 text-lg">
            No projects match this filter — more work coming soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default Work;