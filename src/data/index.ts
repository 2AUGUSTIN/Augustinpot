import  { Project } from '../types';

export const skills = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React.js', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Next.js', level: 82 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Database Management', level: 78 },
];

export const otherSkills = [
  'TailwindCSS',
  'SASS',
  'Redux',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Git & GitHub',
  'REST API',
  'GraphQL',
  'Figma',
  'WebSockets',
  'Jest',
  'AWS',
  'Docker',
  'CI/CD',
  'Agile',
];

export const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'API Development',
  'Database Design',
  'E-commerce Solutions',
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern E-commerce Platform',
    description:
      'A full-featured e-commerce platform with cart functionality, user authentication, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    longDescription: `
      This e-commerce platform offers a comprehensive shopping experience, combining modern design with robust functionality.
      
      Key Features:
      - User authentication and profile management
      - Product search and filtering capabilities
      - Shopping cart with persistence
      - Secure payment processing with Stripe
      - Order history and tracking
      - Admin dashboard for product and order management
      - Responsive design for all devices
      
      The frontend is built with React and Redux for state management, while the backend uses Node.js with Express and MongoDB.
      This combination allows for fast, scalable performance while maintaining a flexible database structure.
    `,
  },
  {
    id: '2',
    title: 'Task Management Application',
    description:
      'A collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    longDescription: `
      This task management application helps teams collaborate efficiently and keep track of progress on projects.
      
      Key Features:
      - Real-time updates using Firebase
      - Team workspaces and collaboration tools
      - Task assignments and deadlines
      - Progress tracking and reporting
      - File attachments and comments
      - Customizable workflows and boards
      - Email notifications and reminders
      
      The application is built with React and TypeScript for type safety, with Firebase handling the backend
      operations including authentication, database, and storage.
    `,
  },
  {
    id: '3',
    title: 'Personal Finance Tracker',
    description:
      'A financial management application that helps users track expenses, create budgets, and visualize spending patterns.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Chart.js', 'PostgreSQL', 'Prisma', 'Auth0'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    longDescription: `
      This personal finance tracker helps users take control of their financial life with powerful tracking and visualization tools.
      
      Key Features:
      - Expense and income tracking
      - Budget creation and monitoring
      - Spending patterns visualization
      - Financial goal setting
      - Recurring transaction management
      - Secure authentication with Auth0
      - Data export for tax purposes
      
      Built with Next.js for server-side rendering and optimized performance, with PostgreSQL as the database
      and Prisma as the ORM. Chart.js provides beautiful data visualizations of spending patterns and budget progress.
    `,
  },
  {
    id: '4',
    title: 'Weather Forecast App',
    description:
      'A weather application that provides current conditions and forecasts with interactive maps and severe weather alerts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'OpenWeatherAPI', 'MapboxGL', 'PWA'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    longDescription: `
      This weather forecast application provides users with accurate and timely weather information in an intuitive interface.
      
      Key Features:
      - Current weather conditions
      - 7-day forecast with detailed hourly breakdowns
      - Interactive maps with radar data
      - Severe weather alerts and notifications
      - Location-based automatic weather updates
      - Favorite locations saving
      - Offline functionality as a Progressive Web App
      
      The app uses React for the frontend and integrates with OpenWeatherAPI for weather data and MapboxGL for
      interactive mapping features. It's built as a PWA for offline functionality and installability.
    `,
  },
  {
    id: '5',
    title: 'Social Media Dashboard',
    description:
      'A comprehensive dashboard for social media management with analytics, scheduling, and content planning features.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    longDescription: `
      This social media dashboard provides a centralized platform for managing multiple social media accounts with powerful analytics.
      
      Key Features:
      - Multi-platform social media account management
      - Post scheduling and content calendar
      - Performance analytics and reporting
      - Audience insights and engagement metrics
      - Content creation tools and templates
      - Team collaboration features
      - Custom notification settings
      
      The application uses React with Redux for state management on the frontend, while a Node.js/Express backend
      handles API calls to various social platforms and stores data in MongoDB.
    `,
  },
  {
    id: '6',
    title: 'Fitness Tracking Application',
    description:
      'A comprehensive fitness application for tracking workouts, nutrition, and progress with personalized plans and analytics.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    longDescription: `
      This fitness tracking application helps users achieve their health and fitness goals with comprehensive tracking and personalized guidance.
      
      Key Features:
      - Workout tracking and exercise library
      - Nutrition and meal planning
      - Progress photos and measurements
      - Custom workout plan creation
      - Integration with wearable devices
      - Social sharing and community features
      - Detailed analytics and progress reports
      
      Built with React Native for cross-platform compatibility, the app uses Firebase for backend operations
      and integrates with health platforms like Apple HealthKit and Google Fit for comprehensive health data collection.
    `,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Product Manager at TechCorp',
    content:
      'Working with Augustin was a fantastic experience. His technical skills and understanding of our business needs helped deliver a solution that exceeded our expectations.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CTO at StartupX',
    content:
      'Augustin is not just a skilled developer but also a brilliant problem solver. He transformed our complex requirements into an elegant, user-friendly application.',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: '3',
    name: 'Jessica Williams',
    position: 'E-commerce Director',
    content:
      'The e-commerce platform Augustin built for us has significantly increased our conversion rates. His attention to detail and focus on performance made all the difference.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];
 