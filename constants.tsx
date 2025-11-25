import { 
  Cloud, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Code, 
  Smartphone, 
  Globe, 
  Users, 
  BarChart, 
  Server,
  BookOpen,
  Briefcase,
  CheckCircle,
  Award,
  Zap,
  Layers,
  MonitorPlay,
  Wrench,
  CreditCard,
  Video,
  FileText,
  LayoutList,
  PlayCircle,
  Terminal,
  FolderOpen,
  PenTool,
  UserCheck
} from 'lucide-react';
import { ServiceItem, CourseCategory, StatItem, FeatureItem, Client, Testimonial, TechCategory } from './types';

export const CONTACT_INFO = {
  contactName: "Abhinav",
  phone: "408-614-0468",
  whatsapp: "+91-8106243684",
  email: "techskylineitsolutions20204@gmail.com",
  company: "Techskyline.in",
  tagline: "Premier IT Consulting, Staffing, and Corporate Training Solutions.",
  address: "Marshall St, San Antonio, TX 78212, USA",
  logo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=100&q=80", // Using a tech-abstract logo placeholder
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform"
};

export const HERO_CONTENT = {
  title: "INFORMATION TECHNOLOGY CONSULTING",
  subtitle: "GET YOUR BUSINESS & IT STRATEGIES ALIGN TOGETHER",
  description: "Information technology (IT) consulting services helps you shape a winning IT strategy. For past decades we are into IT consulting and expertly guide your IT and digital transformation initiatives from strategy to implementation.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" // Tech hand touching screen concept
};

export const STATS: StatItem[] = [
  { label: "Professionals Trained", value: "3,000+", icon: Users },
  { label: "Courses Offered", value: "100+", icon: BookOpen },
  { label: "Client Satisfaction", value: "98.8%", icon: CheckCircle },
  { label: "Global Presence", value: "Global", icon: Globe },
];

export const CONSULTING_SERVICES: ServiceItem[] = [
  {
    title: "Cloud Consulting",
    description: "Executing cloud technologies to achieve a rapid speed of IT evolution, reduce costs, and migrate to the cloud. We help you gain max value from cloud computing.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Big Data Consulting",
    description: "Transforming huge volumes of raw data into actionable insights for informed decision-making and accelerated business development.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "IoT Consulting",
    description: "Enhancing business management with IoT. We plan the networking of IoT devices, set up real-time data analytics, and create monitoring apps.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Quality Consulting",
    description: "Safeguarding a high quality of data from ERP, CRM, SMC, and other business critical systems via profiling and cleansing.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Technology Consulting",
    description: "Driving your future with advanced solutions in IT governance, security, data management, applications and compliance.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "IT Staffing",
    description: "Connecting world-class talent with top companies. Permanent, contract, and temporary staffing solutions.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  }
];

export const CLIENTS: Client[] = [
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Workday", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Workday_logo.svg/2560px-Workday_logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "RedHat", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "The placement assistance at Techskyline is outstanding! After completing the Data Science course, the team helped me refine my resume and conducted mock interviews. I landed a job at a top MNC within 3 weeks.",
    author: "Priya Sharma",
    role: "Data Scientist (Placed at Capgemini)",
    rating: 5,
    category: "Student - Placement",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    text: "As a hiring manager, I rely on Techskyline for our IT staffing needs. They provide highly skilled SAP and Cloud consultants who are ready to deliver from day one. A trusted partner for over 5 years.",
    author: "Michael Chen",
    role: "Director of Engineering, Tech Corp",
    rating: 5,
    category: "Client - Consulting",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    text: "The learning experience was immersive. The real-time scenarios in the SAP S/4 HANA training helped me understand complex concepts easily. The instructors are true industry experts.",
    author: "Rahul Verma",
    role: "SAP Consultant",
    rating: 5,
    category: "Student - Learning",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    text: "Techskyline's corporate training for our Cyber Security team was comprehensive and up-to-date with the latest threats. It has significantly strengthened our internal security protocols.",
    author: "Sarah Johnson",
    role: "CISO, Fintech Innovations",
    rating: 5,
    category: "Client - Consulting",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];

export const FEATURED_TECHNOLOGIES: TechCategory[] = [
  {
    title: "SAP S/4 HANA",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    description: "Enterprise Resource Planning"
  },
  {
    title: "Data Science & AI",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=80",
    description: "Machine Learning, Python"
  },
  {
    title: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    description: "Network Defense, Ethical Hacking"
  },
  {
    title: "DevOps & Cloud",
    image: "https://images.unsplash.com/photo-1667372393119-c85c020799a3?auto=format&fit=crop&w=600&q=80",
    description: "CI/CD, AWS, Azure, Docker"
  },
  {
    title: "Cisco Networking",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7f?auto=format&fit=crop&w=600&q=80",
    description: "CCNA, CCNP, Enterprise"
  },
  {
    title: "Power BI & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    description: "Business Intelligence"
  }
];

export const INTERNSHIP_PROGRAM = {
  title: "Internship & Self-Learning Program",
  description: "Designed for College Students and Self Learners. Join our comprehensive program featuring Live Sessions, 24/7 Lab Access, and complete Study Notes & Materials to bridge the gap between academic knowledge and industry requirements.",
  features: [
    { title: "Live Expert Sessions", icon: MonitorPlay, desc: "Interactive live training with industry experts on real-time concepts." },
    { title: "Live Labs Access", icon: Wrench, desc: "24/7 access to pre-configured live labs with all required tools installed." },
    { title: "Class Recordings", icon: Video, desc: "Lifetime access to HD recordings of all live sessions for revision." },
    { title: "Study Notes & Materials", icon: FileText, desc: "Comprehensive study notes, interview questions, and project documentation." },
    { title: "Real-time Projects", icon: Briefcase, desc: "Work on live industry use-cases to build a strong portfolio." },
    { title: "Tools for Practice", icon: Code, desc: "Access to required software tools and practice environments." }
  ],
  programSteps: [
    "Fundamentals & Theory",
    "Advanced Concepts & Tools",
    "Live Labs & Practice",
    "Real-time Projects",
    "Certification & Portfolio"
  ],
  technologies: [
    "Artificial Intelligence (AI)",
    "Generative AI",
    "Agentic AI",
    "Power BI",
    "Tableau",
    "AWS DevOps",
    "Azure DevOps",
    "Internet of Things (IoT)",
    "Robotic Process Automation (RPA)",
    "Cyber Security",
    "Cloud Security",
    "Oracle Primavera Unifier",
    "Oracle Primavera P6",
    "Scrum Master",
    "Python Programming",
    "Python Full Stack",
    "Full Stack Web Development"
  ],
  studentResources: [
    {
      title: "Live Video Archive",
      description: "Direct access to daily live session links and complete HD video recording library.",
      icon: PlayCircle,
      linkText: "Watch Sessions"
    },
    {
      title: "24/7 Lab Dashboard",
      description: "One-click access to your personalized cloud lab environment with all tools installed.",
      icon: Terminal,
      linkText: "Launch Lab"
    },
    {
      title: "Course Materials",
      description: "Repository of PDF notes, datasets, lab manuals, and interview guides.",
      icon: FolderOpen,
      linkText: "Download Docs"
    },
    {
      title: "Live Practice Arena",
      description: "Interactive coding challenges, quizzes, and real-time assessments.",
      icon: PenTool,
      linkText: "Start Practice"
    },
    {
      title: "Portfolio Builder",
      description: "Digital portal to build, host, and showcase your live projects to recruiters.",
      icon: UserCheck,
      linkText: "Create Portfolio"
    }
  ]
};

export const TESTING_SERVICES = [
  "Software Testing",
  "Data Warehouse Testing",
  "Big Data Application Testing",
  "ERP Testing",
  "CRM Testing",
  "Mobile App Testing",
  "IOT Application Testing"
];

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    name: "Cloud, DevOps & Security",
    courses: ["AWS & Cloud", "Azure DevOps", "Red Hat Linux", "Cloud Security", "Cybersecurity", "CCNA", "CCNP", "DevOps"]
  },
  {
    name: "AI & Data Science",
    courses: ["Generative AI", "AI with Data Science", "AI with Python", "Power BI", "Tableau", "Looker & Looker Testing", "CDM/SAS/Clinical SAS"]
  },
  {
    name: "Enterprise & Management",
    courses: ["SAP S4 HANA", "SAP FICO", "SAP Ariba", "SAP ABAP on HANA", "Oracle Unifier", "Oracle Primavera P6", "Workday", "PMP", "Product Management", "Sage Intacct", "Pega", "Salesforce Admin/Developer"]
  },
  {
    name: "Development & Specialized",
    courses: ["Python Full-Stack", "Java/J2EE", "Full-stack Development", "iOS Automation", "RPA", "IoT", "Embedded Systems", "Murex/MXML", "Emerson DeltaV Automation"]
  }
];

export const STAFFING_FEATURES: FeatureItem[] = [
  {
    title: "Contract Staffing",
    description: "Specialized technology staffing services for short-term, seasonal, or project-based support with onsite, offsite, and offshore options.",
    icon: Briefcase
  },
  {
    title: "Permanent Placement",
    description: "Finding the permanent top talent your company needs today by understanding career aspirations and business needs.",
    icon: Users
  },
  {
    title: "Global Recruitment",
    description: "Continual supply of technical resources such as software developers, QA experts, and project managers globally.",
    icon: Globe
  },
  {
    title: "Agility & Quality",
    description: "Over 90% of our business comes from referrals. We use innovative screening processes to ensure the right fit.",
    icon: Zap
  }
];

export const ABOUT_TRAINING_TEXT = `We are the leading IT Online Training hub since a decade in the industry and we are voted as a Leader in online IT Trainings, Placements, Corporate Trainings, and specialized in providing real time training from domain experts. We have trained almost 3,000+ professionals and students each year from USA, UK, CANADA, AUSTRALIA and other countries across the globe.

Our training sessions are mainly targeted on key concepts, hands-on experience and build confidence in candidates from an interview perspective. All our sessions are truly interactive and every concept we discuss is based on real-time scenarios for better experience.`;

export const CERTIFICATION_TEXT = `Software Certification is formal recognition of a level of proficiency in the information technology (IT) quality assurance industry. The recipient is acknowledged as having an overall comprehension of the disciplines and skills represented in a comprehensive body of knowledge for a respective software discipline.

We are conducting certification training programs with highly qualified experienced industry professionals. Certification identifies an individual as a quality assurance leader and earns the candidate the respect of colleagues and managers.`;