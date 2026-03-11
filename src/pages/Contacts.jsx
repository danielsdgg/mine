import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => formBody.append(key, value));
      formBody.append('form-name', 'contact');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', 'bot-field': '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section
      name="contact"
      className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden py-16 md:py-24"
    >
      {/* Subtle diagonal accent line */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rotate-12 transform translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left side - headline & contact info */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            >
              Let's Talk
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Got a project idea, question, or just want to say hi?  
              Drop me a message — I usually reply within 24–48 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start gap-4 text-slate-300"
            >
              <a
                href="mailto:danieldeploys@gmail.com"
                className="inline-flex items-center gap-2 text-lg font-medium hover:text-white transition-colors group"
              >
                <span className="text-cyan-400 group-hover:text-cyan-300">→</span>
                danieldeploys@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right side - compact form card */}
          <motion.div
            className="lg:col-span-7 bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl max-w-lg lg:max-w-none mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Status messages - more compact */}
            {status === 'success' && (
              <div className="mb-5 p-4 bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 rounded-xl text-center text-sm font-medium">
                Message sent! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="mb-5 p-4 bg-red-950/50 border border-red-800/50 text-red-300 rounded-xl text-center text-sm">
                {errorMessage}
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="hidden">
                <label>
                  Don’t fill this out:
                  <input name="bot-field" value={formData['bot-field']} onChange={handleChange} />
                </label>
              </div>

              {/* Floating label style inputs */}
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all text-white placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-1 text-xs text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400 transition-all pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all text-white placeholder-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1 text-xs text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400 transition-all pointer-events-none"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 pt-6 pb-2 bg-slate-800/50 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all text-white placeholder-transparent resize-y"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-1 text-xs text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400 transition-all pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                    status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;