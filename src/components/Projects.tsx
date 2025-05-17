import  { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing products, orders, and customer data with advanced analytics and reporting features.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/2AUGUSTIN",
      demo: "#",
      image: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwZGV2ZWxvcGVyJTIwY29kaW5nJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0NzQ4Nzc5NHww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=1200"
    },
    {
      title: "Cloud File Storage Service",
      description: "A secure cloud-based file storage solution with features like file sharing, access controls, and version history.",
      technologies: ["React", "Firebase", "Cloud Functions", "Storage", "Authentication"],
      github: "https://github.com/2AUGUSTIN",
      demo: "#",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx0ZWNoJTIwZGV2ZWxvcGVyJTIwY29kaW5nJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0NzQ4Nzc5NHww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=1200"
    },
    {
      title: "Healthcare Patient Portal",
      description: "A patient management system that allows secure access to medical records, appointment scheduling, and communication with healthcare providers.",
      technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/2AUGUSTIN",
      demo: "#",
      image: "https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGNvZGUlMjBkaWdpdGFsJTIwYmFja2dyb3VuZCUyMDNkfGVufDB8fHx8MTc0NzQ4ODE1M3ww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern messaging platform with features like real-time updates, read receipts, media sharing, and group conversations.",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Redux"],
      github: "https://github.com/2AUGUSTIN",
      demo: "#",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBkaWdpdGFsJTIwYmFja2dyb3VuZCUyMDNkfGVufDB8fHx8MTc0NzQ4ODE1M3ww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
    },
    {
      title: "Fitness Tracking Platform",
      description: "A comprehensive fitness app for tracking workouts, nutrition, progress, and generating personalized fitness plans.",
      technologies: ["React Native", "GraphQL", "Node.js", "MongoDB", "Auth0"],
      github: "https://github.com/2AUGUSTIN",
      demo: "#"
    },
    {
      title: "Content Management System",
      description: "A flexible CMS with a visual builder for creating and managing content with custom workflows and publishing rules.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
      github: "https://github.com/2AUGUSTIN",
      demo: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-200 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBkaWdpdGFsJTIwYmFja2dyb3VuZCUyMDNkfGVufDB8fHx8MTc0NzQ4ODE1M3ww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
          alt="Abstract background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My <span className="text-primary-500">Projects</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-primary-500 mx-auto rounded"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>
            <motion.p 
              className="max-w-2xl mx-auto mt-6 text-white/70"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Here are some of my recent projects that showcase my skills and experience. 
              Each project reflects my passion for building innovative solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                image={project.image}
              />
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="https://github.com/2AUGUSTIN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-outline glow"
            >
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
 