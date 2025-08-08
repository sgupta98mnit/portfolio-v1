import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData.jsx';

const LandingAnimation = ({ onComplete }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-primary-bg z-50"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
    onAnimationComplete={onComplete}
  >
    <motion.h1
      className="text-4xl sm:text-6xl font-bold text-accent-1"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {personalInfo.name}
    </motion.h1>
  </motion.div>
);

export default LandingAnimation;
