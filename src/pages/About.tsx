import  { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageTransition>
      <section className="py-20 min-h-screen flex items-center relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="About Me" 
            highlight="Me"
            subtitle="Get to know more about my journey, experience, and the path that led me to become a software developer."
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-screen-xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 glass overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="data:image/jpeg;base64,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" 
                    alt="Augustin Singizimana Portrait" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 to-transparent"></div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-5 -left-5 glass p-4 rounded-lg z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <h4 className="text-lg font-bold text-primary-400">Experience</h4>
                  <p className="text-white/80">5+ Years of Development</p>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-5 -right-5 glass p-4 rounded-lg z-20"
                  initial={{ y: -20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <h4 className="text-lg font-bold text-primary-400">Projects</h4>
                  <p className="text-white/80">25+ Completed</p>
                </motion.div>
                
                <div className="absolute -z-10 w-full h-full top-0 left-0 translate-x-5 translate-y-5 rounded-xl bg-gradient-to-br from-primary-600/30 to-purple-600/30 blur-xl"></div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="glass p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-primary-400">My Journey</h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="p-4 glass rounded-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <h4 className="text-lg font-bold">Early Beginnings</h4>
                      <p className="text-white/70">
                        I started my programming journey when I was 15, experimenting with HTML, CSS, and JavaScript.
                        My passion for creating digital experiences led me to pursue formal education in Computer Science.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 glass rounded-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <h4 className="text-lg font-bold">Professional Growth</h4>
                      <p className="text-white/70">
                        Through my professional experience, I've worked on diverse projects ranging from e-commerce
                        platforms to custom business applications, constantly expanding my skill set and staying
                        current with industry trends.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="p-4 glass rounded-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <h4 className="text-lg font-bold">Current Focus</h4>
                      <p className="text-white/70">
                        Currently, I'm focused on developing scalable web applications using React, Node.js, and
                        modern cloud technologies. I'm particularly interested in performance optimization, accessibility,
                        and creating intuitive user experiences.
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="mt-8">
                    <a href="/contact" className="button-primary">Let's Talk</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
 