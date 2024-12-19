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
import Python from '../assets/python-programming-language.webp'

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-r from-blue-500 via-purple-200 to-blue-500 text-gray-300 py-16">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-6 flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className="py-4 text-xl text-black">These are the technologies I've worked with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center">
          {/* Skill Item */}
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={HTML} alt="HTML icon" />
            <p className="mt-4 text-lg font-semibold">HTML</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={CSS} alt="CSS icon" />
            <p className="mt-4 text-lg font-semibold">CSS</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={JavaScript} alt="JavaScript icon" />
            <p className="mt-4 text-lg font-semibold">JavaScript</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={ReactImg} alt="React icon" />
            <p className="mt-4 text-lg font-semibold">React</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Type} alt="TypeScript icon" />
            <p className="mt-4 text-lg font-semibold">TypeScript</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Node} alt="Node.js icon" />
            <p className="mt-4 text-lg font-semibold">Node</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Flask} alt="Flask icon" />
            <p className="mt-4 text-lg font-semibold">Flask</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={FastApi} alt="FastAPI icon" />
            <p className="mt-4 text-lg font-semibold">FastAPI</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Tailwind} alt="TailwindCSS icon" />
            <p className="mt-4 text-lg font-semibold">TailwindCSS</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={GitHub} alt="GitHub icon" />
            <p className="mt-4 text-lg font-semibold">GitHub</p>
          </div>
          <div className="group shadow-lg hover:scale-110 duration-300 transform hover:translate-y-2 p-6 rounded-xl bg-[#112240] hover:bg-blue-500">
            <img className="w-24 mx-auto group-hover:opacity-80" src={Python} alt="GitHub icon" />
            <p className="mt-4 text-lg font-semibold">Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
