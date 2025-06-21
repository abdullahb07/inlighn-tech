
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import VerifyCertificateSection from '../components/VerifyCertificateSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <FeaturesSection />
            <StatsSection />
            <TestimonialsSection />
            <CTASection onNavigate={handleNavigate} />
          </>
        );
      case 'about':
        return <AboutSection />;
      case 'programs':
        return <ProgramsSection />;
      case 'verify':
        return <VerifyCertificateSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <FeaturesSection />
            <StatsSection />
            <TestimonialsSection />
            <CTASection onNavigate={handleNavigate} />
          </>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-tech-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-neon-teal border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl font-orbitron text-neon-teal"
          >
            Loading Inlighn Tech...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-dark text-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="pt-16"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
      
      {activeSection === 'home' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
};

export default Index;
