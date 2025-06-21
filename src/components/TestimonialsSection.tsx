
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer at Google",
      program: "Full Stack Development",
      image: "/placeholder.svg",
      rating: 5,
      text: "Inlighn Tech transformed my career completely. The hands-on projects and expert mentorship gave me the confidence to land my dream job at Google. The curriculum is cutting-edge and the support is unmatched."
    },
    {
      name: "Marcus Rodriguez",
      role: "Cybersecurity Analyst at Microsoft", 
      program: "Cybersecurity",
      image: "/placeholder.svg",
      rating: 5,
      text: "The cybersecurity program here is incredible. I learned ethical hacking, penetration testing, and security architecture from industry experts. Now I'm protecting Microsoft's infrastructure!"
    },
    {
      name: "Priya Singh",
      role: "Data Scientist at Netflix",
      program: "Data Science & Analysis",
      image: "/placeholder.svg",
      rating: 5,
      text: "The data science program opened doors I never imagined. Working with real datasets and building ML models prepared me for the challenges at Netflix. The job placement support was phenomenal."
    },
    {
      name: "James Thompson",
      role: "Security Engineer at Tesla",
      program: "Cybersecurity",
      image: "/placeholder.svg",
      rating: 5,
      text: "From zero to hero in cybersecurity! The practical approach and real-world projects made all the difference. I'm now securing Tesla's autonomous vehicle systems."
    },
    {
      name: "Emily Zhang",
      role: "Frontend Developer at Airbnb",
      program: "Full Stack Development",
      image: "/placeholder.svg",
      rating: 5,
      text: "The mentorship program was game-changing. My mentor guided me through complex projects and helped me build a portfolio that impressed Airbnb's hiring team."
    },
    {
      name: "Alex Kumar",
      role: "ML Engineer at OpenAI",
      program: "Data Science & Analysis",
      image: "/placeholder.svg",
      rating: 5,
      text: "The depth of knowledge and practical experience I gained here is unmatched. Now I'm working on cutting-edge AI models at OpenAI. Dreams do come true!"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-tech-gray/30 to-tech-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 kinetic-text">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our graduates who are now working at top tech companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="tech-card group relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-neon-teal/30 group-hover:text-neon-teal/50 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* User info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-teal to-electric-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-neon-teal transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-neon-teal text-xs font-medium">{testimonial.program}</p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
