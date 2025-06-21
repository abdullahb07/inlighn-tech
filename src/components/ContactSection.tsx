
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', program: '', message: '' });
    }, 2000);
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-orbitron font-bold mb-6 kinetic-text">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your tech journey? Contact us to learn more about our programs 
            or get answers to your questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Globe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Animated Globe/Map */}
            <div className="relative h-64 tech-card flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Globe className="w-32 h-32 text-neon-teal opacity-20" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-32 h-32 border-2 border-neon-teal rounded-full"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/10 to-electric-blue/10 rounded-lg"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-teal to-electric-blue rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold">contact@inlighntech.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-teal to-electric-blue rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg font-semibold">+1 (555) 123-TECH</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-teal to-electric-blue rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-lg font-semibold">123 Tech Hub Drive<br />Silicon Valley, CA 94043</p>
                </div>
              </motion.div>
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="tech-card"
            >
              <h3 className="text-xl font-orbitron font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="tech-card space-y-6">
              <h2 className="text-2xl font-orbitron font-bold mb-6">Send us a message</h2>
              
              {/* Name Field */}
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-tech-gray border border-neon-teal/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-neon-teal focus:ring-2 focus:ring-neon-teal/20 transition-all duration-300 peer"
                  placeholder="Your Name"
                />
                <label className="absolute left-4 -top-2.5 bg-tech-dark px-2 text-sm text-neon-teal transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-teal">
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-tech-gray border border-neon-teal/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-neon-teal focus:ring-2 focus:ring-neon-teal/20 transition-all duration-300 peer"
                  placeholder="your.email@example.com"
                />
                <label className="absolute left-4 -top-2.5 bg-tech-dark px-2 text-sm text-neon-teal transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-teal">
                  Email Address
                </label>
              </div>

              {/* Program Interest */}
              <div className="relative">
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-tech-gray border border-neon-teal/30 rounded-lg text-white focus:outline-none focus:border-neon-teal focus:ring-2 focus:ring-neon-teal/20 transition-all duration-300"
                >
                  <option value="">Select a program</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="datascience">Data Science</option>
                  <option value="dataanalysis">Data Analysis</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="relative">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-tech-gray border border-neon-teal/30 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-neon-teal focus:ring-2 focus:ring-neon-teal/20 transition-all duration-300 peer resize-none"
                  placeholder="Your message..."
                />
                <label className="absolute left-4 -top-2.5 bg-tech-dark px-2 text-sm text-neon-teal transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-teal">
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full liquid-button py-3 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
