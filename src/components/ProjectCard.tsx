import  { motion } from 'framer-motion';
import { Eye, Github } from 'lucide-react';
import { Project } from '../types';

const ProjectCard = ({ title, description, technologies, github, demo, image }: Project) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {image && (
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-400/90 to-transparent" />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-white/70 mb-4 text-sm">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 bg-primary-700/30 text-primary-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between mt-auto">
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white/70 hover:text-primary-500 transition-colors"
            whileHover={{ x: -2 }}
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>
        )}
        
        {demo && (
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white/70 hover:text-primary-500 transition-colors"
            whileHover={{ x: 2 }}
          >
            <span>Live Demo</span>
            <Eye size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
 