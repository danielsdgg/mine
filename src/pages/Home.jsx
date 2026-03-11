import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: Text + CTAs */}
        <div className="text-center md:text-left space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl font-medium text-slate-400">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Daniel Muiruri
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-300">
            Software Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed text-slate-300">
            I build clean, performant, user-focused web applications using React, Python (Flask), Java (Spring Boot), Tailwind CSS, and modern tools. Passionate about transforming ideas into reliable, scalable digital solutions that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start pt-4">
            {/* Primary CTA: View Work */}
            <ScrollLink
              to="work"
              smooth={true}
              duration={500}
              className="inline-block w-full sm:w-auto"
            >
              <button className="group w-full sm:w-auto bg-white text-slate-950 px-7 py-4 rounded-lg text-lg font-semibold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg">
                View My Work
                <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </ScrollLink>

            <a
              href="/Daniel-Muiruri-Resume-2026.pdf"  
              download="Daniel-Muiruri-Resume-2026.pdf"  
              className="inline-block w-full sm:w-auto"
            >
              <button className="group w-full sm:w-auto bg-transparent text-white px-7 py-4 rounded-lg text-lg font-semibold border-2 border-slate-500 hover:border-slate-300 hover:bg-slate-800/50 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg">
                <BsDownload className="mr-3" size={20} />
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right: Profile Photo Card */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg"
              alt="Daniel Muiruri - Software Developer"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-700 shadow-2xl shadow-black/50"
            />
            <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 bg-slate-800 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg font-medium text-sm sm:text-base border border-slate-600">
              Open to Work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;