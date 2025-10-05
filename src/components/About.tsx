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
          src="data:image/png;base64,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" 
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
 
