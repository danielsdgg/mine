import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-r from-blue-500 via-purple-200 to-blue-500 flex items-center justify-center">
      <div className="text-center text-white px-8">
        {/* Intro Text */}
        <p className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">Hello, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Daniel Muiruri
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold text-black mb-6">
          I'm a Full Stack Developer
        </h2>
        <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto mb-8">
          I specialize in building exceptional digital experiences using technologies like React, Flask, and Tailwind CSS. Let's bring your ideas to life with clean, efficient, and user-centered designs.
        </p>
        <div className="flex justify-center">
          {/* Call to Action Button */}
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white bg-blue-500 border-2 border-blue-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-transparent hover:text-blue-500 hover:border-blue-600 flex items-center">
              View Work
              <span className="ml-3 transform group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
