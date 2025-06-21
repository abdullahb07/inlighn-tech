
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Building } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "2,847",
      label: "Active Interns",
      description: "Currently enrolled students"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "1,234",
      label: "Projects Completed",
      description: "Real-world applications built"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "95%",
      label: "Job Placement Rate",
      description: "Within 3 months of completion"
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: "150+",
      label: "Partner Companies",
      description: "Ready to hire our graduates"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-tech-gray/20 to-tech-dark relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-teal rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-300 text-lg">
            Join thousands of successful tech professionals who started their journey with us
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-neon-teal/20 to-electric-blue/20 rounded-2xl p-6 backdrop-blur-sm border border-neon-teal/20 group-hover:border-neon-teal/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-neon-teal mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-lg font-semibold text-neon-teal mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
