import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JavaScript.png';
import ReactImg from '../assets/images.png';
import Node from '../assets/nodejs.jpg';
import FastApi from '../assets/FastAPI.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Flask from '../assets/flask.png';
import Type from '../assets/type.png';
import Python from '../assets/python-programming-language.webp';

const Skills = () => {
  const skills = [
    { src: HTML, alt: 'HTML', name: 'HTML' },
    { src: CSS, alt: 'CSS', name: 'CSS' },
    { src: JavaScript, alt: 'JavaScript', name: 'JavaScript' },
    { src: ReactImg, alt: 'React', name: 'React' },
    { src: Type, alt: 'TypeScript', name: 'TypeScript' },
    { src: Node, alt: 'Node.js', name: 'Node.js' },
    { src: Flask, alt: 'Flask', name: 'Flask' },
    { src: FastApi, alt: 'FastAPI', name: 'FastAPI' },
    { src: Tailwind, alt: 'Tailwind CSS', name: 'Tailwind CSS' },
    { src: GitHub, alt: 'GitHub', name: 'GitHub' },
    { src: Python, alt: 'Python', name: 'Python' },
  ];

  return (
    <div name="skills" className="w-full bg-white text-slate-900 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid - smaller, cleaner cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 md:p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-400 transition-colors duration-200"
            >
              <img
                src={skill.src}
                alt={`${skill.alt} icon`}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3 md:mb-4"
              />
              <p className="text-sm md:text-base font-medium text-slate-800 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;