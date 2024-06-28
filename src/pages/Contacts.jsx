import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        method='POST'
        action='https://getform.io/f/18381752-9c4d-4b0a-80f5-92fcd2c3c828'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8' data-aos='fade-down'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'> To reach me, submit the form below or shoot me an email - gathigidg26@gmail.com</p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
          data-aos='fade-up'
          data-aos-delay='100'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email or Tel'
          name='email'
          data-aos='fade-up'
          data-aos-delay='200'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          data-aos='fade-up'
          data-aos-delay='300'
        ></textarea>
        <button
          className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
