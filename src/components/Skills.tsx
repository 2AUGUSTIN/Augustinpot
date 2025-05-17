import  { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white/90">{name}</span>
        <span className="text-xs font-semibold">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          initial={{ width: '0%' }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'SQL', 'HTML', 'CSS', 
    'Tailwind CSS', 'Git', 'REST API', 'GraphQL',
    'Testing', 'CI/CD', 'AWS'
  ];

  const skillLevels = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "CSS/Tailwind", level: 85 },
    { name: "Database Management", level: 70 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 min-h-screen flex items-center relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-300 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBjb2RlJTIwYmFja2dyb3VuZCUyMHByb2dyYW1taW5nfGVufDB8fHx8MTc0NzQ4ODk5NXww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
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
              My <span className="text-primary-500">Skills</span>
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
              Expertise and technologies I work with to deliver exceptional software solutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Skill Levels</h3>
              <div className="space-y-6">
                {skillLevels.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">Technical Skills</h3>
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={container}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                >
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="skill-badge"
                      variants={item}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div className="mt-6 glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">Education & Experience</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="p-4 glass rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h4 className="text-lg font-bold">Bachelor of Computer Science</h4>
                    <p className="text-white/70">University of Technology - 2018-2022</p>
                  </motion.div>
                  <motion.div 
                    className="p-4 glass rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h4 className="text-lg font-bold">Software Developer</h4>
                    <p className="text-white/70">Tech Solutions Inc. - 2022-Present</p>
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

export default Skills;
 