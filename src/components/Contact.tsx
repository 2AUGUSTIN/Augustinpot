import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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
      value: 'Kigali, Ngororero, Rwanda,',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      link: 'https://github.com/2AUGUSTIN',
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
    <section id="contact" className="py-20 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-300 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0Zm9saW8lMjBzb2Z0d2FyZSUyMGNvZGUlMjAzZCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzQ3NDkwNTIyfDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
          alt="Abstract background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get In <span className="text-primary-500">Touch</span>
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
              Feel free to reach out if you have any questions or would like to collaborate on a project. 
              I'm always open to discussing new opportunities.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary-400">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 bg-dark-100 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{item.label}</p>
                      <div className="text-lg hover:text-primary-500 transition-colors">
                        <a href={item.link}>{item.value}</a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-primary-400">Follow Me</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon glass inline-flex items-center justify-center"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 p-4 glass rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-lg font-bold mb-2">Working Hours</h4>
                <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-white/70">Weekend: By Appointment</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Send Me a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-500/20 border border-green-500/30 text-green-400 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                  <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="contact-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="contact-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="contact-input"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="contact-input resize-none"
                      placeholder="I'd like to discuss a project..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
 
