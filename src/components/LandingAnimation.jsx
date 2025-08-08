import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData.jsx';

const LandingAnimation = ({ onComplete }) => {
  const [isSkipped, setIsSkipped] = useState(false);
  const chars = personalInfo.name.split('');

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete && onComplete();
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      rotateX: 180,
      rotateY: -90,
      z: -1000,
      scale: 0.3,
    },
    animate: (i) => ({
      opacity: 1,
      rotateX: [180, 0, 10, 0],
      rotateY: [-90, 0, 5, 0],
      z: [-1000, 50, 0],
      scale: [0.3, 1.1, 1],
      transition: {
        duration: isSkipped ? 0 : 1.5,
        delay: isSkipped ? 0 : i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.6, 0.8, 1],
      },
    }),
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: isSkipped ? 0 : 0.08,
        delayChildren: isSkipped ? 0 : 0.2,
      },
    },
  };

  const backgroundVariants = {
    initial: {
      background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 100%)',
    },
    animate: {
      background: isSkipped ? 
        'radial-gradient(circle at center, #1a1a2e 0%, #16213e 100%)' :
        [
          'radial-gradient(circle at center, #1a1a2e 0%, #16213e 100%)',
          'radial-gradient(circle at center, #16213e 0%, #0f3460 100%)',
          'radial-gradient(circle at center, #0f3460 0%, #1a1a2e 100%)',
        ],
      transition: {
        duration: isSkipped ? 0 : 3,
        ease: 'easeInOut',
      },
    },
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: isSkipped ? 0 : [0, 1, 0],
      scale: isSkipped ? 0 : [0, 1, 0],
      x: isSkipped ? 0 : [0, Math.random() * 400 - 200],
      y: isSkipped ? 0 : [0, Math.random() * 400 - 200],
      transition: {
        duration: isSkipped ? 0 : 2,
        repeat: isSkipped ? 0 : Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: isSkipped ? 0 : [0, 0.6, 0],
      scale: isSkipped ? 0.8 : [0.8, 2, 0.8],
      transition: {
        duration: isSkipped ? 0 : 2,
        repeat: isSkipped ? 0 : Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  };

  if (isSkipped) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden cursor-pointer"
      style={{ 
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      onClick={handleSkip}
      onAnimationComplete={() => {
        if (!isSkipped) {
          setTimeout(() => {
            onComplete && onComplete();
          }, 1000);
        }
      }}
    >
      {/* Click to skip hint */}
      <motion.p
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-secondary text-sm font-mono opacity-60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 2 }}
      >
      </motion.p>

      {/* Animated Background Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: Math.random() * 2 }}
        />
      ))}

      {/* Glowing Background Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
        }}
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      {/* Main Text Container */}
      <motion.div
        className="relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-blue-400 to-purple-400 text-center"
          style={{ 
            textShadow: '0 0 30px rgba(100, 255, 218, 0.5)',
            transformStyle: 'preserve-3d',
          }}
        >
          {chars.map((ch, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              custom={idx}
              variants={letterVariants}
              style={{ 
                transformStyle: 'preserve-3d',
                textShadow: `0 0 20px rgba(100, 255, 218, 0.8)`,
              }}
              whileHover={{
                rotateY: 360,
                scale: 1.2,
                transition: { duration: 0.6 }
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with 3D effect */}
        <motion.p
          className="text-lg sm:text-xl text-text-secondary text-center mt-8 font-mono"
          initial={{ 
            opacity: 0, 
            y: 50, 
            rotateX: -90,
            transformOrigin: 'top center'
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
          }}
          transition={{ 
            delay: isSkipped ? 0 : 1.5, 
            duration: isSkipped ? 0 : 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          Full Stack Developer
        </motion.p>

        {/* 3D Loading Ring */}
        <motion.div
          className="absolute -inset-20 border border-accent-1 rounded-full opacity-30"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateX: isSkipped ? 0 : [0, 360],
            rotateY: isSkipped ? 0 : [0, 360],
            scale: isSkipped ? 1 : [1, 1.2, 1],
          }}
          transition={{
            duration: isSkipped ? 0 : 4,
            repeat: isSkipped ? 0 : Infinity,
            ease: 'linear',
          }}
        />

        {/* Inner rotating ring */}
        <motion.div
          className="absolute -inset-10 border-2 border-accent-1 rounded-full opacity-20"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            rotateX: isSkipped ? 0 : [360, 0],
            rotateZ: isSkipped ? 0 : [0, 360],
            scale: isSkipped ? 1 : [1, 0.8, 1],
          }}
          transition={{
            duration: isSkipped ? 0 : 3,
            repeat: isSkipped ? 0 : Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Fade out overlay */}
      <motion.div
        className="absolute inset-0 bg-primary-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSkipped ? 1 : 1 }}
        transition={{ 
          delay: isSkipped ? 0 : 3,
          duration: isSkipped ? 0 : 1,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
};

export default LandingAnimation;
