import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Eye, ChevronRight } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Find the current project
    const currentProject = projects.find(p => p.id === id) || null;
    setProject(currentProject);
    
    // Get related projects (excluding current one)
    if (currentProject) {
      const related = projects
        .filter(p => p.id !== id)
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 3); // Get first 3 projects
      setRelatedProjects(related);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-t-2 border-primary-500 rounded-full"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="button-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white/70 hover:text-primary-500 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-8 rounded-xl mb-12">
              {project.image && (
                <div className="h-64 sm:h-96 mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.technologies || project.tags || []).map((tech, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 bg-primary-700/30 text-primary-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Project Overview</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.description}
                </p>
                <p className="text-white/80 text-lg leading-relaxed mt-4">
                  This project was built with a focus on modern development practices, clean architecture, and responsive design.
                  The implementation includes advanced features, robust error handling, and comprehensive testing to ensure reliability.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-outline"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div>
                <SectionHeading 
                  title="Related Projects" 
                  highlight="Projects"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((relatedProject) => (
                    <motion.div
                      key={relatedProject.id}
                      className="glass p-6 rounded-xl"
                      whileHover={{ y: -10 }}
                    >
                      {relatedProject.image && (
                        <div className="h-40 mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2">{relatedProject.title}</h3>
                      
                      <Link 
                        to={`/projects/${relatedProject.id}`}
                        className="flex items-center mt-4 text-primary-500 hover:text-primary-400 transition-colors"
                      >
                        View Project <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetail;
