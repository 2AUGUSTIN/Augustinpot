import  { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { SectionHeadingProps } from '../types';

const SectionHeading = ({ title, subtitle, highlight }: SectionHeadingProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle highlights in the title
  const titleParts = highlight 
    ? title.split(highlight) 
    : [title];

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16 max-w-3xl mx-auto"
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-primary-500">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      <motion.div 
        className="h-1 w-20 bg-primary-500 mx-auto rounded"
        initial={{ width: 0 }}
        animate={inView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>

      {subtitle && (
        <motion.p 
          className="mt-6 text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
 