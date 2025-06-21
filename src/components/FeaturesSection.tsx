
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, BarChart, Users, Award, Briefcase } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Real World Projects",
      description: "Work on live projects used by thousands of users. Build your portfolio with actual production code and experience the full development lifecycle.",
      color: "from-neon-teal to-electric-blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Learn directly from industry veterans with 10+ years of experience. Get personalized guidance and career advice from tech leaders.",
      color: "from-soft-purple to-neon-teal"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Programs",
      description: "Earn industry-recognized certificates that boost your resume. Our certifications are valued by top tech companies worldwide.",
      color: "from-electric-blue to-soft-purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Focus",
      description: "Master the most in-demand security skills. Learn ethical hacking, penetration testing, and security architecture from experts.",
      color: "from-neon-teal to-electric-blue"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Science Mastery",
      description: "Dive deep into machine learning, AI, and big data analytics. Work with real datasets and build predictive models.",
      color: "from-soft-purple to-neon-teal"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job Placement Support",
      description: "95% of our graduates land their dream jobs within 3 months. Get resume reviews, interview prep, and direct company connections.",
      color: "from-electric-blue to-soft-purple"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-tech-dark to-tech-gray/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 kinetic-text">
            Why Choose Inlighn Tech?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your career with cutting-edge technology training and real-world experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="tech-card group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-white group-hover:text-neon-teal transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
