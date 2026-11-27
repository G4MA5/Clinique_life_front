import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.4,
  direction = 'up',
  className = ''
}) => {
  const getInitialY = () => {
    if (direction === 'up') return 16;
    if (direction === 'down') return -16;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return 16;
    if (direction === 'right') return -16;
    return 0;
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: getInitialY(), 
        x: getInitialX()
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0
      }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
