import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 1.5 }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    stiffness: 80, 
    damping: 20,
    duration: duration * 1000
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
