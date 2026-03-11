import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs'; // For resume icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left side: Social + Resume CTA */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Social Icons – larger, more breathing room */}
            <div className="flex items-center gap-8 md:gap-10">
              <a
                href="https://www.linkedin.com/in/daniel-muiruri-541a701a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/danielsdgg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="mailto:gathigigidg26@gmail.com"
                className="text-slate-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Email me"
              >
                <HiOutlineMail size={32} />
              </a>
            </div>

            {/* Resume Download – standout button */}
            <a
              href="/Daniel-Muiruri-Resume.pdf" // ← adjust path if subfolder (e.g. /resume/...)
              download="Daniel-Muiruri-Resume.pdf"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-base rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Download my resume as PDF"
            >
              <BsDownload size={20} className="transition-transform group-hover:rotate-12" />
              Download Resume (PDF)
            </a>
          </div>

          {/* Right side: Text + Copyright */}
          <div className="text-center md:text-right space-y-3">
            <p className="text-slate-600 font-medium text-lg">
              Let's build something great together
            </p>
            <p className="text-slate-500 text-sm">
              © {currentYear} Daniel Muiruri. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs mt-4">
              Built with React, Tailwind CSS & lots of coffee ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;