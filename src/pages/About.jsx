import React from "react";
import { Element } from "react-scroll";
import { Link as ScrollLink } from 'react-scroll'; // Corrected import for react-scroll
import { HiArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <Element
      name="about"
      className="w-full bg-gray-300 text-black py-20" // Retained the gray background here
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-600 border-b-4 border-blue-600 inline-block">
            About Me
          </h1>
        </div>

        {/* Card Container */}
        <div className="relative bg-white shadow-xl rounded-lg p-6 md:p-12 flex flex-col md:flex-row gap-6">
          {/* Profile Picture */}
          <div className="absolute top-[-60px] left-[-60px] w-32 h-32 md:w-48 md:h-48">
            <img
              src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg"
              alt="Daniel Muiruri"
              className="rounded-full border-4 border-gray-300 shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="mt-20 md:mt-0 flex-1 pl-0 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
              Hi! I'm Daniel Muiruri
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm a passionate software developer with expertise in creating
              impactful digital solutions. I specialize in full-stack development,
              using technologies like React, Flask, and Tailwind CSS to bring your
              ideas to life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My goal is to create user-centric, high-performance software that
              solves real-world problems. Whether you're a startup or an enterprise,
              I'm here to help you build the perfect solution for your needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Let's connect and build something amazing together!
            </p>

            {/* View Work Button */}
            <ScrollLink to="work" smooth={true} duration={500}>
              <button className='text-white group bg-blue-500 border-3 px-6 py-3 my-2 flex items-center hover:bg-blue-700'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
