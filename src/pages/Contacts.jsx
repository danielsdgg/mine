import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Implement email sending logic here
    setNotification('Thank you for reaching out! I will get back to you as soon as possible.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-r from-blue-500 via-purple-200 to-blue-500 flex justify-center items-center p-4">
      <motion.div
        className="w-full max-w-[600px] bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }} // Initial state
        animate={{ opacity: 1, x: 0 }} // Final state
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="pb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            To contact us, please fill out the form below or send an email to{' '}
            <a href="mailto:morgantechnical72@gmail.com" className="text-blue-500">
              morgantechnical72@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Notification Section */}
        {notification && (
          <div className="mb-4 p-4 text-center bg-green-100 text-green-800 rounded-lg">
            {notification}
          </div>
        )}

        <form onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="block text-gray-700">Name</label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Email</label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              type="email"
              placeholder="...@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contacts;
