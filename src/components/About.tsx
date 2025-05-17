import  { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-300 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBjb2RlJTIwYmFja2dyb3VuZCUyMHByb2dyYW1taW5nfGVufDB8fHx8MTc0NzQ4ODk5NXww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
          alt="Abstract code background" 
          className="absolute object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About <span className="text-primary-500">Me</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-primary-500 mx-auto rounded"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-xl"
            >
              <motion.div
                className="card-3d"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-400">Get to know me</h3>
                <div className="space-y-4 text-white/90">
                  <p>
                    I'm a passionate <span className="text-primary-400 font-semibold">Software Developer</span> with 
                    expertise in creating dynamic and responsive web applications. With a strong foundation in modern 
                    development frameworks and libraries, I strive to build efficient, scalable, and user-friendly solutions.
                  </p>
                  <p>
                    My approach combines creative problem-solving with technical excellence to deliver 
                    applications that not only meet but exceed expectations. I enjoy working on challenging projects 
                    that push me to learn and grow as a developer.
                  </p>
                  <p>
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                    and sharing knowledge with the developer community.
                  </p>
                </div>
              </motion.div>
              <div className="mt-8">
                <a href="#contact" className="button-primary">Let's Talk</a>
              </div>
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
 