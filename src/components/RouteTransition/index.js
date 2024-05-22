import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RouteTransition = ({ children }) => {
  return (
<AnimatePresence exit={{ opacity: 0 }} mode="wait">
      <motion.div
        key={Math.random()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RouteTransition;
