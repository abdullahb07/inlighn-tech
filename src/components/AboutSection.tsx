
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const AboutSection: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const timelineEvents = [
    { year: '2020', title: 'Company Founded', description: 'Inlighn Tech was established with a vision to bridge the gap between education and industry.' },
    { year: '2021', title: 'First Cohort', description: 'Launched our first internship program with 50 students in Full Stack Development.' },
    { year: '2022', title: 'Expansion', description: 'Added Cybersecurity and Data Science tracks. Graduated 200+ successful interns.' },
    { year: '2023', title: 'Industry Recognition', description: 'Received "Best Tech Education Provider" award. Partnered with 15+ tech companies.' },
    { year: '2024', title: 'Global Reach', description: 'Expanded to serve students worldwide with remote and hybrid programs.' }
  ];

  const teamMembers = [
    { name: 'Dr. Sarah Chen', role: 'CEO & Founder', bio: 'Former Google engineer with 15+ years in tech education.' },
    { name: 'Marcus Rodriguez', role: 'CTO', bio: 'Cybersecurity expert and former Pentagon consultant.' },
    { name: 'Priya Patel', role: 'Head of Data Science', bio: 'AI researcher with publications in top-tier journals.' },
    { name: 'James Wilson', role: 'Full Stack Lead', bio: 'Ex-Netflix engineer specializing in scalable systems.' }
  ];

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
            About Inlighn Tech
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of tech education through innovative internship programs 
            that transform students into industry-ready professionals.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="tech-card"
          >
            <Target className="w-12 h-12 text-neon-teal mb-4" />
            <h3 className="text-2xl font-orbitron font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower the next generation of tech professionals through hands-on, 
              industry-relevant internship programs that bridge the gap between academic 
              learning and real-world application.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="tech-card"
          >
            <Eye className="w-12 h-12 text-neon-teal mb-4" />
            <h3 className="text-2xl font-orbitron font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the global leader in tech education, creating a world where 
              every aspiring technologist has access to world-class mentorship and 
              practical experience.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-teal to-electric-blue"></div>
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="tech-card">
                    <h4 className="text-xl font-orbitron font-bold text-neon-teal mb-2">{event.year}</h4>
                    <h5 className="text-lg font-semibold mb-2">{event.title}</h5>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-teal rounded-full border-4 border-tech-dark"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading ? (
              <SkeletonLoader variant="avatar" count={4} />
            ) : (
              teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="tech-card text-center group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-neon-teal to-electric-blue rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-glow">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-lg font-orbitron font-bold mb-2">{member.name}</h4>
                  <p className="text-neon-teal text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-xs">{member.bio}</p>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Graduates' },
            { number: '95%', label: 'Job Placement' },
            { number: '4.9/5', label: 'Student Rating' },
            { number: '20+', label: 'Partner Companies' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="tech-card text-center"
            >
              <div className="text-3xl font-orbitron font-bold text-neon-teal mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
