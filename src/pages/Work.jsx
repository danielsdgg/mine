import React, { useState } from "react";
import { data } from "../data/data";

const Work = () => {
  const projects = data;
  const [filter] = useState("All");

  // const uniqueTech = ["All", ...new Set(projects.flatMap((p) => p.tech || []))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech?.includes(filter));

  return (
    <section
      name="work"
      className="w-full py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Work
          </h2>

          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-5 rounded-full" />

          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A collection of applications and digital products I’ve built —
            combining clean design, scalable architecture, and thoughtful user
            experience.
          </p>
        </div>

        {/* Filter Pills */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-14">
          {uniqueTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-5 py-2.5 text-sm md:text-base rounded-full transition-all duration-300 font-medium
              ${
                filter === tech
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/60 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 backdrop-blur-sm"
              }`}
            >
              {tech}
            </button>
          ))}
        </div> */}

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 line-clamp-3">
                  {project.paragraph}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 transition"
                    >
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-slate-600 dark:text-slate-300 mt-16 text-lg">
            No projects match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Work;