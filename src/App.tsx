import  { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark-300 relative overflow-hidden">
      {/* Single animated background for whole site */}
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <div
            key="loader"
            className="h-screen w-full flex items-center justify-center relative z-10"
          >
            <Loader />
          </div>
        ) : (
          <div
            key="main"
            className="relative z-10"
          >
            <Navbar />
            
            <Suspense fallback={
              <div className="h-screen flex items-center justify-center">
                <Loader />
              </div>
            }>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
            
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
 