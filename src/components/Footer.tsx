
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@inlighntech.com', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About Us', section: 'about' },
    { label: 'Programs', section: 'programs' },
    { label: 'Verify Certificate', section: 'verify' },
    { label: 'Contact', section: 'contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate('home');
  };

  return (
    <footer className="relative bg-tech-dark border-t border-neon-teal/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-neon-teal to-electric-blue bg-clip-text text-transparent mb-4">
              Inlighn Tech
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering the next generation of tech professionals through innovative 
              internship programs and hands-on learning experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-orbitron font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-300 hover:text-neon-teal transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-orbitron font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              {['Cybersecurity', 'Full Stack Development', 'Data Science', 'Data Analysis'].map((program, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-orbitron font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-tech-gray border border-neon-teal/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-neon-teal hover:border-neon-teal transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Follow us for updates and tech insights
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-teal/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 sm:mb-0"
          >
            © 2024 Inlighn Tech. All rights reserved.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-neon-teal text-tech-dark rounded-lg flex items-center justify-center hover:bg-electric-blue transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
