import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 text-white z-50'>
      {/* Personal Image in the top left */}
      <div className='flex items-center space-x-2'>
        <img 
          src='https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg' 
          alt='Personal Avatar' 
          className='w-10 h-10 rounded-full' // Circle avatar style
        />
        <p className='text-2xl font-bold'>DANIEL</p> {/* Optional text next to the image */}
      </div>

      {/* Menu */}
      <ul className='hidden md:flex space-x-8'>
        <li>
          <ScrollLink to='home' smooth={true} duration={500} className='hover:text-gray-300'>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='about' smooth={true} duration={500} className='hover:text-gray-300'>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='skills' smooth={true} duration={500} className='hover:text-gray-300'>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='work' smooth={true} duration={500} className='hover:text-gray-300'>
            Work
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='contact' smooth={true} duration={500} className='hover:text-gray-300'>
            Contact
          </ScrollLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 flex flex-col justify-center items-center z-40'
        }`}
      >
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>

        {/* Social icons for mobile */}
        <li className='py-6 text-3xl'>
          <a href='https://www.linkedin.com/in/daniel-muiruri-541a701a3/' className='text-white'>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className='py-6 text-3xl'>
          <a href='https://github.com/danielsdgg' className='text-white'>
            <FaGithub size={30} />
          </a>
        </li>
        <li className='py-6 text-3xl'>
          <a href='mailto:gathigigidg26@gmail.com' className='text-white'>
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='py-6 text-3xl'>
          <a href='https://drive.google.com/file/d/13bzX4w8KEN-lgbB2Z7H-PDityj3RASwe/view?usp=sharing' className='text-white'>
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      {/* Social icons for desktop */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-blue-600'>
            <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/daniel-muiruri-541a701a3/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-white' href='https://github.com/danielsdgg'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-white' href='mailto:gathigigidg26@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-white' href='https://drive.google.com/file/d/1BoGa9k4uKu9zyu5GSbGyPZYCDSJ_tiWB/view?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
