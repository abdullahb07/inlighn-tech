
import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'avatar' | 'testimonial';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ variant = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <div className="tech-card animate-pulse">
            <div className="shimmer-effect h-48 bg-gray-700 rounded-lg mb-4"></div>
            <div className="shimmer-effect h-6 bg-gray-700 rounded mb-2"></div>
            <div className="shimmer-effect h-4 bg-gray-700 rounded mb-2"></div>
            <div className="shimmer-effect h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="mt-4">
              <div className="shimmer-effect h-10 bg-gray-700 rounded-lg w-32"></div>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="animate-pulse space-y-2">
            <div className="shimmer-effect h-4 bg-gray-700 rounded"></div>
            <div className="shimmer-effect h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="shimmer-effect h-4 bg-gray-700 rounded w-4/6"></div>
          </div>
        );
      
      case 'avatar':
        return (
          <div className="tech-card animate-pulse text-center">
            <div className="shimmer-effect w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
            <div className="shimmer-effect h-6 bg-gray-700 rounded mb-2"></div>
            <div className="shimmer-effect h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
          </div>
        );
      
      case 'testimonial':
        return (
          <div className="tech-card animate-pulse">
            <div className="flex items-center mb-4">
              <div className="shimmer-effect w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="shimmer-effect h-4 bg-gray-700 rounded mb-2"></div>
                <div className="shimmer-effect h-3 bg-gray-700 rounded w-2/3"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="shimmer-effect h-3 bg-gray-700 rounded"></div>
              <div className="shimmer-effect h-3 bg-gray-700 rounded"></div>
              <div className="shimmer-effect h-3 bg-gray-700 rounded w-4/5"></div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {renderSkeleton()}
        </motion.div>
      ))}
    </>
  );
};

export default SkeletonLoader;
