import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

  return (
    <footer className="w-full bg-white text-slate-800 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Social Links + Resume CTA */}
          <div className="flex flex-col items-center md:items-start gap-10 md:gap-12">
            {/* Social Icons */}
            <div className="flex items-center gap-10 md:gap-12">
              <a
                href="https://www.linkedin.com/in/daniel-muiruri-541a701a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={36} />
              </a>
              <a
                href="https://github.com/danielsdgg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label="GitHub Profile"
              >
                <FaGithub size={36} />
              </a>
              <a
                href="mailto:danieldeploys@gmail.com"
                className="text-slate-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label="Email me"
              >
                <HiOutlineMail size={36} />
              </a>
            </div>

            {/* Prominent Resume CTA */}
            <a
              href="/Daniel-Muiruri-Resume-2026.pdf"
              download="Daniel-Muiruri-Resume-2026.pdf"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Download my resume as PDF"
            >
              <BsDownload size={22} className="transition-transform group-hover:rotate-12" />
              Download Resume (PDF)
            </a>
          </div>

          {/* Right: Tagline + Copyright */}
          <div className="text-center md:text-right space-y-4">
            <p className="text-slate-700 font-medium text-xl md:text-2xl">
              Let's create something meaningful together
            </p>
            <p className="text-slate-500 text-base">
              © {currentYear} Daniel Muiruri. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm italic mt-6">
              Crafted with React, Tailwind CSS & endless curiosity
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top – floating, elegant */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="Back to top"
      >
        <BsArrowUp size={24} />
      </button> */}
    </footer>
  );
};

export default Footer;