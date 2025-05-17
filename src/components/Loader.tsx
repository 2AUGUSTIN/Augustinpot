import  { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="mb-6"
      >
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 opacity-75 blur animate-pulse"></div>
          <div className="relative bg-dark-200 p-4 rounded-full">
            <Code className="h-10 w-10 text-primary-500" />
          </div>
        </div>
      </motion.div>
      
      <motion.h2
        className="text-xl font-bold mb-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Augustin Singizimana
      </motion.h2>
      
      <div className="flex space-x-2 mb-4">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, delay: 0, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-primary-500"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-primary-500"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-primary-500"
        ></motion.div>
      </div>
      
      <motion.p
        className="text-white/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
 