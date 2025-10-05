import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home = () => {
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
    <PageTransition>
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Link to="/projects" className="button-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="button-outline">
                  Contact Me
                </Link>
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative max-w-[250px]">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-500 to-purple-600 blur opacity-70 animate-pulse"></div>
                <div className="relative bg-dark-300 rounded-lg p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="data:image/png;base64,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" 
                      alt="Augustin Singizimana" 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-40"></div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 glass p-2 rounded-lg flex items-center gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Code className="text-primary-500" size={16} />
                  <span className="text-xs font-medium">Software Development</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 1.5 } 
          }}
        >
          <Link to="/about" className="flex flex-col items-center">
            <span className="mb-2 text-sm">Learn More</span>
            <ArrowDown size={20} />
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;
 
