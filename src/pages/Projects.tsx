import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import { projects } from '../data';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageTransition>
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="My Projects" 
            highlight="Projects"
            subtitle="Here are some of my recent projects that showcase my skills and experience. Each project reflects my passion for building innovative solutions."
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies || project.tags || []}
                    github={project.github}
                    demo={project.demo}
                    image={project.image}
                  />
                </Link>
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
    </PageTransition>
  );
};

export default Projects;