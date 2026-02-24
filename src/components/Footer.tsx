import  { motion } from 'framer-motion';
import { Code, Heart, ChevronUp, Mail, Github, Linkedin, Facebook, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary-500" />,
      label: 'Email',
      value: 'allanaugustin58@gmail.com',
      link: 'mailto:allanaugustin58@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-500" />,
      label: 'Phone',
      value: '0737538600',
      link: 'tel:0737538600'
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-500" />,
      label: 'Location',
      value: 'Kigali, Rwanda ,Ngororero/Rususa',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      link: 'https://github.com/2AUGUSTI',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      link: 'https://linkedin.com/in/allan-augustin',
      label: 'LinkedIn'
    },
    {
      icon: <Facebook size={20} />,
      link: 'https://facebook.com/NII.Aug_ustin',
      label: 'Facebook'
    }
    
  ];
  
  return (
    <footer className="pt-16 pb-8 border-t border-white/10 relative bg-dark-400/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="h-6 w-6 text-primary-500 mr-2" />
              <span className="text-xl font-bold">Augustin</span>
            </motion.div>
            <p className="text-white/70 mb-4">
              Software developer focused on creating clean, efficient, and user-friendly solutions.
              Passionate about modern technologies and continuous learning.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon glass inline-flex items-center justify-center"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 hover:text-primary-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-white/70 hover:text-primary-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <div className="text-white/70 hover:text-primary-400 transition-colors">
                      <a href={item.link}>{item.value}</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-center md:text-left text-white/60 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="flex items-center justify-center md:justify-start">
                © {currentYear} Augustin Singizimana. All rights reserved.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-white/60 flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and modern web technologies
              </p>
              <motion.button
                onClick={scrollToTop}
                className="ml-4 p-2 rounded-full glass hover:bg-primary-700 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronUp className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
