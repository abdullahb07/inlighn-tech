
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, XCircle, Award, Calendar, User } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const VerifyCertificateSection: React.FC = () => {
  const [certificateId, setCertificateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = async () => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification results
      const mockResults = {
        'CERT001': {
          valid: true,
          studentName: 'Alex Johnson',
          programName: 'Full Stack Development',
          completionDate: '2024-03-15',
          grade: 'A+',
          instructorName: 'Dr. Sarah Chen'
        },
        'CERT002': {
          valid: true,
          studentName: 'Maria Garcia',
          programName: 'Cybersecurity',
          completionDate: '2024-02-28',
          grade: 'A',
          instructorName: 'Marcus Rodriguez'
        },
        'CERT003': {
          valid: true,
          studentName: 'David Kim',
          programName: 'Data Science',
          completionDate: '2024-01-20',
          grade: 'A+',
          instructorName: 'Priya Patel'
        }
      };

      const result = mockResults[certificateId as keyof typeof mockResults];
      
      if (result) {
        setVerificationResult(result);
      } else {
        setVerificationResult({ valid: false });
      }
      
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-orbitron font-bold mb-6 kinetic-text"
            style={{
              filter: 'blur(0px)',
              animation: 'none'
            }}
            animate={{
              filter: ['blur(2px)', 'blur(0px)', 'blur(2px)'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Verify Certificate
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enter a certificate ID to verify the authenticity of Inlighn Tech certificates 
            and view graduate information.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="progressive-blur p-8 rounded-2xl mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="certificateId" className="block text-sm font-medium text-gray-300 mb-2">
                Certificate ID
              </label>
              <input
                type="text"
                id="certificateId"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                placeholder="Enter certificate ID (try CERT001, CERT002, or CERT003)"
                className="w-full px-4 py-3 bg-tech-gray border border-neon-teal/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-teal focus:ring-2 focus:ring-neon-teal/20 transition-all duration-300"
              />
            </div>
            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVerify}
                disabled={!certificateId || isLoading}
                className="liquid-button px-8 py-3 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                {isLoading ? 'Verifying...' : 'Verify'}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <SkeletonLoader variant="card" count={1} />
          </motion.div>
        )}

        {/* Verification Results */}
        {!isLoading && hasSearched && verificationResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`tech-card ${
              verificationResult.valid 
                ? 'border-green-500/50 bg-green-500/5' 
                : 'border-red-500/50 bg-red-500/5'
            }`}
          >
            <div className="flex items-center mb-6">
              {verificationResult.valid ? (
                <CheckCircle className="w-12 h-12 text-green-500 mr-4" />
              ) : (
                <XCircle className="w-12 h-12 text-red-500 mr-4" />
              )}
              <div>
                <h2 className="text-2xl font-orbitron font-bold mb-2">
                  {verificationResult.valid ? 'Certificate Valid' : 'Certificate Invalid'}
                </h2>
                <p className={`text-lg ${
                  verificationResult.valid ? 'text-green-400' : 'text-red-400'
                }`}>
                  {verificationResult.valid 
                    ? 'This certificate is authentic and verified.' 
                    : 'This certificate ID was not found in our records.'
                  }
                </p>
              </div>
            </div>

            {verificationResult.valid && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-neon-teal mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Graduate Name</p>
                      <p className="text-lg font-semibold">{verificationResult.studentName}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-neon-teal mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Program</p>
                      <p className="text-lg font-semibold">{verificationResult.programName}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-neon-teal mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Completion Date</p>
                      <p className="text-lg font-semibold">
                        {new Date(verificationResult.completionDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-neon-teal mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Final Grade</p>
                      <p className="text-lg font-semibold text-green-400">{verificationResult.grade}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Sample Certificate IDs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-orbitron font-bold mb-4">Try these sample certificate IDs:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['CERT001', 'CERT002', 'CERT003'].map((id) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCertificateId(id)}
                className="px-4 py-2 bg-tech-gray border border-neon-teal/30 rounded-lg text-neon-teal hover:bg-neon-teal hover:text-tech-dark transition-all duration-300"
              >
                {id}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerifyCertificateSection;
