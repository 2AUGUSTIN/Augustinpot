import  { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { SkillBarProps } from '../types';

const SkillBar = ({ level }: SkillBarProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="skill-bar">
      <motion.div 
        className="skill-progress"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
};

export default SkillBar;
 