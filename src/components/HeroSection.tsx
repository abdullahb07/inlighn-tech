
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingParticles />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-gray/20 to-tech-dark opacity-90"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-orbitron font-bold mb-6 kinetic-text"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Shape Your Tech Future
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter"
          >
            Join Inlighn Tech's cutting-edge internship programs and transform your career with 
            hands-on experience in Cybersecurity, Full Stack Development, Data Science & Analysis.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('programs')}
              className="liquid-button px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-neon-teal/50 transition-all duration-300"
            >
              Explore Programs
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('about')}
              className="px-8 py-4 text-lg font-semibold text-neon-teal border-2 border-neon-teal rounded-lg hover:bg-neon-teal hover:text-tech-dark transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-neon-teal cursor-pointer"
            onClick={() => onNavigate('about')}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
