
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
  UserCheck,
  Settings,
  TrendingUp,
  ClipboardCheck,
  Target,
  Presentation,
  Download,
  FileCode,
  Trophy,
  Activity,
  Lock,
  Heart,
  Lightbulb,
  Compass,
  Users2,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Github,
  Mic,
  Calendar,
  BookMarked,
  Clock,
  MessageSquare,
  PieChart,
  BarChart2,
  List,
  CheckSquare
} from 'lucide-react';
import { ServiceItem, CourseCategory, StatItem, FeatureItem, Client, Testimonial, TechCategory, ValueItem, TeamMember } from './types';

export const CONTACT_INFO = {
  contactName: "Abhinav",
  phone: "408-614-0468",
  whatsapp: "+91-8106243684",
  email: "techskylineitsolutions20204@gmail.com",
  company: "Techskyline.in",
  tagline: "Premier IT Consulting, Staffing, and Corporate Training Solutions.",
  address: "Marshall St, San Antonio, TX 78212, USA",
  logo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=100&q=80", // Small logo for nav
  heroLogo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=500&q=80", // Large logo placeholder
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform"
};

export const SOCIAL_MEDIA = [
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/company/techskyline-it-soluions/?viewAsMember=true", 
    icon: Linkedin 
  },
  { 
    name: "YouTube", 
    url: "https://www.youtube.com/@FreelanceRecuriter", 
    icon: Youtube 
  },
  { 
    name: "GitHub", 
    url: "https://github.com", 
    icon: Github 
  },
  { 
    name: "Medium", 
    url: "https://medium.com", 
    icon: BookMarked 
  }
];

export const HERO_CONTENT = {
  quote: "Technology brings everything closer and connected",
  subtitle: "GET YOUR BUSINESS & IT STRATEGIES ALIGN TOGETHER",
  description: "Information technology (IT) consulting services helps you shape a winning IT strategy. For past decades we are into IT consulting and expertly guide your IT and digital transformation initiatives from strategy to implementation.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
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
    { name: "Artificial Intelligence (AI)", id: "ai", type: "AI/ML" },
    { name: "Generative AI", id: "genai", type: "AI/ML" },
    { name: "Agentic AI", id: "agentic-ai", type: "AI/ML" },
    { name: "Power BI", id: "powerbi", type: "Data" },
    { name: "Tableau", id: "tableau", type: "Data" },
    { name: "AWS DevOps", id: "aws", type: "Cloud" },
    { name: "Azure DevOps", id: "azure", type: "Cloud" },
    { name: "Internet of Things (IoT)", id: "iot", type: "Embedded" },
    { name: "Robotic Process Automation (RPA)", id: "rpa", type: "Automation" },
    { name: "Cyber Security", id: "cyber", type: "Security" },
    { name: "Cloud Security", id: "cloudsec", type: "Security" },
    { name: "Oracle Primavera Unifier", id: "oracle-u", type: "Enterprise" },
    { name: "Oracle Primavera P6", id: "oracle-p6", type: "Enterprise" },
    { name: "Scrum Master", id: "scrum", type: "Management" },
    { name: "Python Programming", id: "python", type: "Dev" },
    { name: "Python Full Stack", id: "python-fs", type: "Dev" },
    { name: "Full Stack Web Development", id: "web", type: "Dev" }
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

export const CORPORATE_TRAINING = {
  title: "Corporate Training Solutions",
  subtitle: "Transform Your Workforce",
  description: "We partner with organizations to build high-performance technical teams. From fresh graduate onboarding to niche upskilling for senior architects, our training programs are customized to meet specific business objectives.",
  benefits: [
    { title: "Customized Curriculum", description: "Training modules tailored specifically to your project requirements and tech stack.", icon: Settings },
    { title: "Flexible Delivery Models", description: "Choose from Virtual Instructor-Led (VILT), Classroom, or Hybrid learning modes.", icon: Presentation },
    { title: "Hands-on Labs", description: "24/7 access to cloud-based labs for practical coding and implementation experience.", icon: Cloud },
    { title: "Skill Gap Analysis", description: "Pre-training assessments to identify areas of improvement and track progress.", icon: BarChart },
    { title: "Project-Based Learning", description: "Employees work on real-time PoCs and capstone projects relevant to your business.", icon: Layers },
    { title: "ROI Measurement", description: "Detailed post-training reports and performance analytics to measure impact.", icon: TrendingUp }
  ],
  process: [
    { step: "01", title: "Assessment", desc: "We analyze skill gaps and business goals.", icon: ClipboardCheck },
    { step: "02", title: "Design", desc: "SMEs curate a syllabus aligned with your projects.", icon: PenTool },
    { step: "03", title: "Delivery", desc: "Expert-led sessions with interactive labs.", icon: MonitorPlay },
    { step: "04", title: "Practice", desc: "Real-world case studies and capstone projects.", icon: Code },
    { step: "05", title: "Evaluation", desc: "Performance tracking and impact reporting.", icon: Target }
  ],
  technologies: [
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins"] },
    { category: "Data & AI", items: ["Generative AI", "Machine Learning", "Data Engineering", "Power BI", "Tableau", "Snowflake", "Databricks"] },
    { category: "Enterprise Apps", items: ["SAP S/4 HANA", "Salesforce", "ServiceNow", "Workday", "Oracle Cloud", "Microsoft Dynamics 365"] },
    { category: "Cybersecurity", items: ["Ethical Hacking", "Cloud Security", "CISSP", "Network Security", "IAM", "DevSecOps", "SIEM"] },
    { category: "Modern Web", items: ["React/Node.js", "Java Spring Boot", "Python Django", ".NET Core", "Angular", "Microservices", "GraphQL"] }
  ],
  sla: [
    { title: "Response Time", value: "< 2 Hours", desc: "For all corporate inquiries during business hours.", icon: Clock },
    { title: "Proposal Delivery", value: "24 Hours", desc: "Customized training proposal with module breakdown.", icon: FileText },
    { title: "Trainer Matching", value: "48 Hours", desc: "Profile sharing of industry-expert trainers tailored to your needs.", icon: UserCheck }
  ],
  workflow: [
    { title: "Inquiry Received", desc: "Logged in CRM", active: true },
    { title: "Needs Analysis", desc: "Call with L&D Lead", active: true },
    { title: "Solution Design", desc: "SME Curates Syllabus", active: true },
    { title: "Proposal Sent", desc: "Commercials & Timeline", active: false },
    { title: "Onboarding", desc: "Kickoff & LMS Access", active: false }
  ]
};

export const SAMPLE_CLASSES = [
  {
    id: 1,
    title: "Gen AI: Prompt Engineering Fundamentals",
    type: "Video",
    duration: "1h 15m",
    author: "Dr. Sarah Smith",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    id: 2,
    title: "AWS Security Specialist Interview Guide",
    type: "Audio",
    duration: "45m",
    author: "James Wilson",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 3,
    title: "Python API Development: Live Coding",
    type: "Video",
    duration: "55m",
    author: "Tech Skyline Team",
    thumbnail: "https://images.unsplash.com/photo-1526379623606-b3097339e75e?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 4,
    title: "Project Management: Scrum Daily Standup",
    type: "Audio",
    duration: "30m",
    author: "Agile Coach Dave",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    audioUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  }
];

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

export const ABOUT_US_CONTENT = {
  mission: "To empower individuals and organizations by bridging the gap between talent and technology through world-class training, innovative consulting, and strategic staffing solutions.",
  vision: "To be the global leader in IT workforce transformation, recognized for integrity, excellence, and the ability to unlock human potential in the digital age.",
  story: `Founded with a simple yet ambitious goal, Techskyline IT Solutions began as a response to the growing disconnect between academic learning and industry demands. Over the last decade, we have evolved from a specialized training institute into a comprehensive IT solutions provider.

Today, we stand at the intersection of education and enterprise. We don't just teach technology; we implement it. Our dual focus on consulting and training creates a unique ecosystem where our instructors are practicing consultants, and our consultants are lifelong learners. This synergy ensures that our clients receive the most current, practical, and effective solutions available in the market.`,
  values: [
    { title: "Excellence", description: "We set high standards for ourselves and our students, striving for perfection in every code we write and every class we teach.", icon: Award },
    { title: "Integrity", description: "Transparency and honesty are the foundations of our relationships with clients, students, and partners.", icon: ShieldCheck },
    { title: "Innovation", description: "We embrace change and continuously adapt to the evolving technology landscape to stay ahead of the curve.", icon: Lightbulb },
    { title: "Collaboration", description: "We believe in the power of teamwork and community, fostering an environment where knowledge is shared freely.", icon: Users2 },
    { title: "Student-Centric", description: "Your success is our success. We are dedicated to providing the support and resources needed for your growth.", icon: Heart },
    { title: "Results-Driven", description: "We focus on tangible outcomes—whether it's a successful project delivery or a student landing their dream job.", icon: Target }
  ],
  team: [
    {
      name: "Abhinav",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in the IT industry, Abhinav leads Techskyline with a passion for technology and education. His vision drives the company's strategic growth and commitment to quality.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Sarah Smith",
      role: "Head of Training",
      bio: "A veteran educator and technologist, Dr. Smith oversees our curriculum development and instructor quality assurance. She ensures our training programs remain cutting-edge.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "James Wilson",
      role: "Chief Technology Officer",
      bio: "James brings deep expertise in Cloud Computing and Cybersecurity. He leads our consulting division, helping enterprise clients navigate their digital transformation journeys.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
     {
      name: "Priya Sharma",
      role: "Director of Staffing",
      bio: "Priya specializes in talent acquisition and resource management. Her team connects top-tier tech talent with our global client base.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

// --- NEW MARKETING CONSTANTS ---

export const WEBINARS = [
  {
    id: 1,
    title: "Cloud Skills Hiring Trends 2025",
    date: "Dec 15, 2024",
    time: "10:00 AM EST",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbc7f?auto=format&fit=crop&w=800&q=80",
    description: "Discover what top MNCs are looking for in cloud engineers. From AWS to Azure, we break down the most in-demand certifications.",
    host: "Abhinav & Tech Team"
  },
  {
    id: 2,
    title: "How Corporates Can Upskill Without Attrition",
    date: "Dec 22, 2024",
    time: "2:00 PM EST",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    description: "Strategies for L&D managers to retain talent while upgrading their tech stack.",
    host: "James Wilson"
  }
];

export const PODCASTS = [
  {
    id: 1,
    title: "The Tech Skyline Show: Ep 01 - The Future of GenAI",
    duration: "25 min",
    guest: "Dr. Sarah Smith",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Ep 02 - Migrating Legacy Monoliths to Microservices",
    duration: "32 min",
    guest: "James Wilson",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Ep 03 - Cybersecurity in the Age of Remote Work",
    duration: "28 min",
    guest: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

export const COMMUNITY_RESOURCES = [
  {
    title: "cloud-career-roadmap-2025",
    description: "Complete step-by-step guide to becoming a Cloud Architect in 2025. Includes free resources and tool lists.",
    stars: 124,
    forks: 45,
    language: "Markdown"
  },
  {
    title: "aws-devops-learning-path",
    description: "Zero to Hero guide for AWS DevOps. Hands-on labs, Terraform scripts, and CI/CD pipelines.",
    stars: 89,
    forks: 32,
    language: "HCL"
  },
  {
    title: "data-science-certification-guide",
    description: "Curated list of best Data Science certifications, free datasets, and project ideas for beginners.",
    stars: 210,
    forks: 67,
    language: "Python"
  }
];

// --- ADMIN DASHBOARD & TECH STACK ---

export const ADMIN_DASHBOARD_DATA = {
  sources: [
    { platform: "LinkedIn", leads: 45, color: "bg-blue-600" },
    { platform: "Google Search", leads: 32, color: "bg-green-500" },
    { platform: "GitHub", leads: 18, color: "bg-gray-700" },
    { platform: "Webinar", leads: 28, color: "bg-red-500" },
    { platform: "Referral", leads: 12, color: "bg-yellow-500" }
  ],
  conversions: [
    { stage: "Webinar Registration", count: 150, rate: "100%" },
    { stage: "Attended", count: 85, rate: "56%" },
    { stage: "Booked Consultation", count: 22, rate: "26%" },
    { stage: "Enrolled", count: 8, rate: "36%" }
  ],
  corporatePipeline: [
    { stage: "Inquiry", count: 12, value: "$60k" },
    { stage: "Proposal Sent", count: 5, value: "$125k" },
    { stage: "Negotiation", count: 2, value: "$80k" },
    { stage: "Closed Won", count: 3, value: "$150k" }
  ],
  recentLeads: [
    { name: "John Doe", role: "CTO", company: "FinTech Corp", score: 85, status: "Hot" },
    { name: "Sarah Lee", role: "Student", company: "MIT", score: 40, status: "Nurture" },
    { name: "Mike Ross", role: "HR Manager", company: "Law Firm LLC", score: 72, status: "Warm" },
  ]
};

export const TECH_STACK = [
  { name: "HubSpot", category: "CRM & Forms" },
  { name: "Zoom", category: "Webinars" },
  { name: "Slack", category: "Communication" },
  { name: "Google Analytics 4", category: "Tracking" },
  { name: "AWS", category: "Cloud Hosting" },
  { name: "Stripe", category: "Payments" }
];
