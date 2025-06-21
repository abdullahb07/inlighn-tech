
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Database, BarChart3, Clock, Users, Trophy } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const ProgramsSection: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const programs = [
    {
      id: 1,
      title: 'Cybersecurity',
      icon: Shield,
      duration: '16 weeks',
      students: '25-30',
      level: 'Intermediate',
      description: 'Master the art of digital defense with hands-on experience in threat detection, incident response, and security architecture.',
      features: [
        'Ethical Hacking & Penetration Testing',
        'Network Security & Firewall Configuration',
        'Incident Response & Forensics',
        'Security Compliance & Risk Assessment'
      ],
      tools: ['Kali Linux', 'Wireshark', 'Metasploit', 'Nessus', 'Splunk'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Full Stack Development',
      icon: Code,
      duration: '20 weeks',
      students: '30-35',
      level: 'Beginner to Advanced',
      description: 'Build modern web applications from frontend to backend using cutting-edge technologies and industry best practices.',
      features: [
        'React.js & Next.js Frontend Development',
        'Node.js & Express.js Backend APIs',
        'Database Design & Management',
        'Cloud Deployment & DevOps'
      ],
      tools: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Data Science',
      icon: Database,
      duration: '18 weeks',
      students: '20-25',
      level: 'Intermediate',
      description: 'Unlock insights from data using machine learning, statistical analysis, and advanced visualization techniques.',
      features: [
        'Machine Learning & Deep Learning',
        'Statistical Analysis & Modeling',
        'Data Visualization & Storytelling',
        'Big Data Processing & Analytics'
      ],
      tools: ['Python', 'TensorFlow', 'Pandas', 'Jupyter', 'Tableau'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Data Analysis',
      icon: BarChart3,
      duration: '12 weeks',
      students: '25-30',
      level: 'Beginner',
      description: 'Transform raw data into actionable business insights using industry-standard tools and methodologies.',
      features: [
        'Excel & Google Sheets Mastery',
        'SQL Database Querying',
        'Business Intelligence & Dashboards',
        'Statistical Analysis & Reporting'
      ],
      tools: ['Excel', 'SQL', 'Power BI', 'Tableau', 'R'],
      gradient: 'from-purple-500 to-violet-500'
    }
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
          <motion.h1
            className="text-4xl sm:text-6xl font-orbitron font-bold mb-6 kinetic-text"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Our Programs
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our industry-leading internship programs designed to transform 
            you into a sought-after tech professional.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {loading ? (
            <SkeletonLoader variant="card" count={4} />
          ) : (
            programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="tech-card group cursor-pointer"
              >
                {/* Program Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center mr-4 group-hover:animate-glow`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold mb-1 group-hover:text-neon-teal transition-colors">
                      {program.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {program.students}
                      </span>
                      <span className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        {program.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-neon-teal">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-neon-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-neon-teal">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-tech-gray rounded-full text-xs font-medium text-gray-300 border border-neon-teal/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full liquid-button py-3 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))
          )}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-orbitron font-bold mb-12">Why Choose Our Programs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Mentorship',
                description: 'Learn from experienced professionals currently working at top tech companies.',
                icon: '🚀'
              },
              {
                title: 'Real Projects',
                description: 'Work on actual client projects and build a portfolio that stands out.',
                icon: '💼'
              },
              {
                title: 'Job Placement',
                description: '95% of our graduates secure jobs within 3 months of completion.',
                icon: '🎯'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="tech-card text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-orbitron font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
