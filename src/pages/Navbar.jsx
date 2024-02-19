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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <p>DM</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <ScrollLink to='home' smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='about' smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='skills' smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='work' smooth={true} duration={500}>
            Work
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='contact' smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <ScrollLink onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <ScrollLink onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <ScrollLink onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <ScrollLink onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </ScrollLink>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <ScrollLink onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/daniel-muiruri-541a701a3/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/danielsdgg'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:gathigigidg26@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1uBEpMS2gJMLD6nfUBRWbSe2kXzNuVI3x/view?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
