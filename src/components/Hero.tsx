import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden flex items-center">
      {/* Overlay image for additional texture */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBjb2RlJTIwYmFja2dyb3VuZCUyMHByb2dyYW1taW5nfGVufDB8fHx8MTc0NzQ4ODk5NXww&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
          alt="Abstract digital background" 
          className="absolute object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-primary-500 text-xl md:text-2xl font-mono mb-2">Hello, my name is</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Augustin Singizimana
            </h1>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl text-white/80 font-bold mb-8">
            {text}<span className="cursor"></span>
          </h2>
          
          <motion.p 
            className="text-xl text-white/70 mb-8 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build exceptional digital experiences with clean code and modern technologies.
            Let's bring your vision to life with innovative solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-16 floating glass p-4 rounded-lg w-48 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="text-sm font-mono text-white/70">// code snippet</div>
            <pre className="text-xs text-green-400">
              {`function hello() {
  return "Welcome!";
}`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 1.5 } 
        }}
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
 