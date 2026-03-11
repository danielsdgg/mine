import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  // Change navbar style after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'skills', label: 'Skills' },
    { to: 'work', label: 'Work' },
    { to: 'contacts', label: 'Contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo + Avatar */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg"
                alt="Daniel Muiruri"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-indigo-500/40 shadow-sm flex-shrink-0"
              />

              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                DANIEL
              </span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="!text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                    className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer text-base lg:text-lg"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={handleClick}
              className="md:hidden text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
              aria-label="Toggle navigation menu"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={28} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out md:hidden ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={handleClick}
        />

        {/* Drawer Panel */}
        <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-slate-900 shadow-2xl flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-700">
            <span className="text-xl font-semibold text-slate-900 dark:text-white">
              
            </span>

            <button
              onClick={handleClick}
              aria-label="Close menu"
              className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <FaTimes size={10} className="text-slate-700 dark:text-slate-300" />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col px-6 py-8 gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  onClick={handleClick}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block text-xl font-medium text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;