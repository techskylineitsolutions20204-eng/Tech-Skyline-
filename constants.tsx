
// ... existing imports ...
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
  CheckSquare,
  GraduationCap,
  Network
} from 'lucide-react';
import { ServiceItem, CourseCategory, StatItem, FeatureItem, Client, Testimonial, TechCategory, ValueItem, TeamMember } from './types';

// ... (CONTACT_INFO, SOCIAL_MEDIA remain the same)

export const CONTACT_INFO = {
  contactName: "Abhinav",
  phone: "408-614-0468",
  whatsapp: "+91-8106243684",
  email: "techskylineitsolutions20204@gmail.com",
  company: "Techskyline.in",
  tagline: "Premier IT Consulting, Staffing, and Corporate Training Solutions.",
  address: "Marshall St, San Antonio, TX 78212, USA",
  logo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=100&q=80", 
  heroLogo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=500&q=80", 
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
    name: "Slack Community", 
    url: "#slack-invite", 
    icon: MessageSquare 
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
  subtitle: "Transform Your Workforce with Custom IT Training",
  description: "We partner with organizations to build high-performance technical teams. From fresh graduate onboarding to niche upskilling for senior architects, our training programs are customized to meet specific business objectives.",
  benefits: [
    { title: "Customized Curriculum", description: "Modules tailored specifically to your project requirements and tech stack.", icon: Settings },
    { title: "Flexible Delivery Models", description: "Virtual Instructor-Led (VILT), Classroom, or Hybrid modes.", icon: Presentation },
    { title: "Hands-on Labs", description: "Secure, cloud-based sandbox environments for risk-free practice.", icon: Cloud },
    { title: "Skill Gap Analysis", description: "Pre-training assessments to identify areas of improvement.", icon: BarChart },
    { title: "Project-Based Learning", description: "Employees work on real-time PoCs relevant to your business.", icon: Layers },
    { title: "ROI Measurement", description: "Post-training analytics to measure impact and performance.", icon: TrendingUp }
  ],
  deepDive: [
    {
        title: "Role-Based Learning Paths",
        content: "We define clear learning trajectories for every role. For Freshers, we offer intensive 'Bootcamps' covering fundamentals to advanced coding. For Senior Developers, we focus on Architecture, Cloud Migration patterns, and Security compliance.",
        icon: GraduationCap
    },
    {
        title: "Subject Matter Experts (SMEs)",
        content: "Our trainers are not just academicians; they are practicing industry consultants with 10+ years of experience in deploying solutions for Fortune 500 companies.",
        icon: UserCheck
    },
    {
        title: "Cloud-Native Lab Infrastructure",
        content: "We provide instant-provisioning labs for AWS, Azure, GCP, and DevOps tools. No local installation required. Dashboards for managers to track lab usage and completion.",
        icon: Server
    }
  ],
  supportAndSLA: [
    { title: "LMS Access", desc: "Lifetime access to session recordings and digital courseware.", icon: BookOpen },
    { title: "Mentor Support", desc: "Dedicated technical mentors for project guidance during and after training.", icon: Heart },
    { title: "Attendance Tracking", desc: "Automated daily attendance and engagement reports sent to L&D managers.", icon: ClipboardCheck },
    { title: "Certification Prep", desc: "Guidance and vouchers for global certifications (AWS, Microsoft, Google).", icon: Award }
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Analyze business goals & skill gaps.", icon: ClipboardCheck },
    { step: "02", title: "Blueprint", desc: "Design custom syllabus & lab topology.", icon: PenTool },
    { step: "03", title: "Delivery", desc: "Expert-led interactive training sessions.", icon: MonitorPlay },
    { step: "04", title: "Capstone", desc: "Real-world project implementation.", icon: Code },
    { step: "05", title: "Impact", desc: "Assessment, feedback & ROI report.", icon: Target }
  ],
  technologies: [
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins"] },
    { category: "Data & AI", items: ["Generative AI", "Machine Learning", "Data Engineering", "Power BI", "Tableau", "Snowflake", "Databricks"] },
    { category: "Enterprise Apps", items: ["SAP S/4 HANA", "Salesforce", "ServiceNow", "Workday", "Oracle Cloud", "Microsoft Dynamics 365"] },
    { category: "Cybersecurity", items: ["Ethical Hacking", "Cloud Security", "CISSP", "Network Security", "IAM", "DevSecOps", "SIEM"] },
    { category: "Modern Web", items: ["React/Node.js", "Java Spring Boot", "Python Django", ".NET Core", "Angular", "Microservices", "GraphQL"] }
  ],
  sla: [
    { title: "Response Time", value: "< 2 Hours", desc: "Immediate acknowledgment of training inquiries.", icon: Clock },
    { title: "Proposal Turnaround", value: "24 Hours", desc: "Detailed technical & commercial proposal.", icon: FileText },
    { title: "Trainer Matching", value: "48 Hours", desc: "Trainer profiles shared for client interview.", icon: Users2 }
  ],
  workflow: [
    { title: "Inquiry Received", desc: "Logged in CRM", active: true },
    { title: "Needs Analysis", desc: "Call with L&D Lead", active: true },
    { title: "Solution Design", desc: "SME Curates Syllabus", active: true },
    { title: "Proposal Sent", desc: "Commercials & Timeline", active: false },
    { title: "Onboarding", desc: "Kickoff & LMS Access", active: false }
  ],
  caseStudies: [
    {
      client: "Global Fintech Giant",
      challenge: "Migrating legacy monolithic applications to microservices architecture on AWS.",
      solution: "Customized 12-week upskilling program for 50+ Java developers on Spring Boot, Docker, Kubernetes, and AWS implementation.",
      outcome: "40% reduction in deployment time, successful migration within 6 months.",
      icon: TrendingUp
    },
    {
      client: "Retail Chain (Fortune 500)",
      challenge: "Skill gap in Data Analytics for decision making.",
      solution: "Power BI and Tableau workshops for non-technical managers and advanced SQL/Python for data teams.",
      outcome: "Data-driven decision making adoption increased by 70%.",
      icon: BarChart2
    },
    {
      client: "Healthcare Provider",
      challenge: "Ensuring HIPAA compliance and cybersecurity awareness.",
      solution: "Role-based security training for 200+ employees, phishing simulations, and secure coding practices.",
      outcome: "Zero security breaches in the following audit cycle.",
      icon: ShieldCheck
    }
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

// ... (WEBINARS, PODCASTS, COMMUNITY_RESOURCES, ADMIN_DASHBOARD_DATA, TECH_STACK, STRIPE_PLANS, ZOOM_SLOTS remain the same)

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
  ],
  leadScoring: [
    { criteria: "Budget > $10k", points: "+30" },
    { criteria: "Timeline < 1 Month", points: "+25" },
    { criteria: "Role: Decision Maker", points: "+20" },
    { criteria: "Downloaded Whitepaper", points: "+10" },
    { criteria: "Email Opened", points: "+5" }
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

export const STRIPE_PLANS = [
  { id: 'cloud-mastery', name: 'Cloud Mastery Bundle', price: 499, currency: 'USD' },
  { id: 'devops-pro', name: 'DevOps Professional', price: 599, currency: 'USD' },
  { id: 'data-science', name: 'Data Science Bootcamp', price: 699, currency: 'USD' }
];

export const ZOOM_SLOTS = [
  "10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"
];

// --- EXTENDED DATA FOR COURSE DETAILS ---
export const DETAILED_COURSE_DATA: Record<string, any> = {
  // --- Cloud, DevOps & Security ---
  "AWS & Cloud": {
    title: "AWS Certified Solutions Architect",
    description: "Master the world's leading cloud platform. This comprehensive course takes you from cloud basics to designing complex, scalable, and secure applications on Amazon Web Services. You will gain hands-on experience with core AWS services and prepare for the SAA-C03 certification exam.",
    whoShouldLearn: ["System Administrators", "Software Developers", "Network Engineers", "IT Managers", "Solutions Architects"],
    keyPoints: [
      "Deep dive into IAM, EC2, S3, RDS, and VPC.",
      "Designing resilient and high-performing architectures.",
      "Cost optimization strategies.",
      "Security best practices and compliance.",
      "Real-world case studies and labs."
    ],
    outline: [
      { module: "Module 1", topic: "Introduction to Cloud Computing & AWS Global Infrastructure" },
      { module: "Module 2", topic: "Identity and Access Management (IAM) & Security Groups" },
      { module: "Module 3", topic: "Compute: EC2, Lambda, and Elastic Beanstalk" },
      { module: "Module 4", topic: "Storage: S3, EBS, EFS, and Glacier" },
      { module: "Module 5", topic: "Networking: VPC, Route 53, CloudFront" },
      { module: "Module 6", topic: "Databases: RDS, DynamoDB, Aurora, Redshift" },
      { module: "Module 7", topic: "High Availability & Fault Tolerance (ELB & ASG)" },
      { module: "Module 8", topic: "Application Services: SQS, SNS, SWF" },
      { module: "Module 9", topic: "AWS Security & Encryption" },
      { module: "Module 10", topic: "Exam Preparation & Mock Tests" }
    ]
  },
  "Azure DevOps": {
    title: "Microsoft Azure DevOps Engineer",
    description: "Bridge the gap between development and operations. Learn to implement DevOps practices using Azure DevOps services, including CI/CD pipelines, version control, and agile planning tools.",
    whoShouldLearn: ["DevOps Engineers", "Build & Release Engineers", "Cloud Architects", "Developers"],
    keyPoints: [
      "Implementing CI/CD pipelines with Azure Pipelines.",
      "Infrastructure as Code (IaC) with ARM templates and Terraform.",
      "Managing source control with Azure Repos.",
      "Containerization with Docker and Kubernetes (AKS).",
      "Monitoring and feedback loops."
    ],
    outline: [
      { module: "Module 1", topic: "Introduction to DevOps Principles & Azure Ecosystem" },
      { module: "Module 2", topic: "Source Control Management (Git & Azure Repos)" },
      { module: "Module 3", topic: "Continuous Integration (CI) with Azure Pipelines" },
      { module: "Module 4", topic: "Continuous Deployment (CD) Strategies" },
      { module: "Module 5", topic: "Dependency Management & Artifacts" },
      { module: "Module 6", topic: "Infrastructure as Code (IaC) & Configuration Management" },
      { module: "Module 7", topic: "Monitoring & Logging with Azure Monitor" }
    ]
  },
  "Red Hat Linux": {
    title: "Red Hat Enterprise Linux (RHEL) Administration",
    description: "Become a proficient Linux System Administrator. This course covers the core skills required to administer Red Hat Enterprise Linux systems, from installation to command-line proficiency and security.",
    whoShouldLearn: ["System Administrators", "Linux Engineers", "Network Administrators"],
    keyPoints: ["Command Line expertise", "User & Group Management", "File System Permissions", "Process Management", "Security & SELinux"],
    outline: [
      { module: "Module 1", topic: "Getting Started with Red Hat Enterprise Linux" },
      { module: "Module 2", topic: "Accessing the Command Line" },
      { module: "Module 3", topic: "Managing Files from the Command Line" },
      { module: "Module 4", topic: "Creating, Viewing, and Editing Text Files" },
      { module: "Module 5", topic: "Managing Local Linux Users and Groups" },
      { module: "Module 6", topic: "Controlling Access to Files (Permissions & ACLs)" },
      { module: "Module 7", topic: "Managing Processes & Services" },
      { module: "Module 8", topic: "Configuring & Securing SSH" }
    ]
  },
  "Cloud Security": {
    title: "Certified Cloud Security Professional (CCSP)",
    description: "Secure your cloud infrastructure. This course delves into cloud architecture, data security, platform and infrastructure security, application security, and legal/compliance issues.",
    whoShouldLearn: ["Security Architects", "Security Administrators", "Systems Engineers", "Enterprise Architects"],
    keyPoints: ["Cloud Data Security", "Cloud Platform & Infrastructure Security", "Cloud Application Security", "Operations Security", "Legal, Risk, and Compliance"],
    outline: [
      { module: "Module 1", topic: "Cloud Concepts, Architecture and Design" },
      { module: "Module 2", topic: "Cloud Data Security" },
      { module: "Module 3", topic: "Cloud Platform & Infrastructure Security" },
      { module: "Module 4", topic: "Cloud Application Security" },
      { module: "Module 5", topic: "Cloud Security Operations" },
      { module: "Module 6", topic: "Legal, Risk and Compliance" }
    ]
  },
  "Cybersecurity": {
    title: "Advanced Cybersecurity & Ethical Hacking",
    description: "Defend against modern cyber threats. Learn the techniques used by hackers to penetrate systems and how to secure them. Covers network security, cryptography, and vulnerability assessment.",
    whoShouldLearn: ["Security Analysts", "Network Administrators", "System Administrators", "Ethical Hackers"],
    keyPoints: ["Penetration Testing methodologies", "Network Defense", "Cryptography basics", "Incident Response", "Compliance standards (GDPR, HIPAA)"],
    outline: [
      { module: "Module 1", topic: "Introduction to Ethical Hacking" },
      { module: "Module 2", topic: "Footprinting and Reconnaissance" },
      { module: "Module 3", topic: "Scanning Networks" },
      { module: "Module 4", topic: "Enumeration" },
      { module: "Module 5", topic: "Vulnerability Analysis" },
      { module: "Module 6", topic: "System Hacking" },
      { module: "Module 7", topic: "Malware Threats" },
      { module: "Module 8", topic: "Sniffing & Social Engineering" }
    ]
  },
  "CCNA": {
    title: "Cisco Certified Network Associate (CCNA 200-301)",
    description: "Build a solid foundation in networking. This course covers network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
    whoShouldLearn: ["Network Support Engineers", "Network Administrators", "Help Desk Technicians"],
    keyPoints: ["Network Fundamentals", "Network Access", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation and Programmability"],
    outline: [
      { module: "Module 1", topic: "Network Fundamentals (Routers, Switches, Cabling)" },
      { module: "Module 2", topic: "Network Access (VLANs, Trunking, STP)" },
      { module: "Module 3", topic: "IP Connectivity (OSPF, Routing Tables)" },
      { module: "Module 4", topic: "IP Services (DHCP, DNS, NAT, NTP)" },
      { module: "Module 5", topic: "Security Fundamentals (VPNs, ACLs, Port Security)" },
      { module: "Module 6", topic: "Automation and Programmability (SDN, APIs, Chef, Puppet)" }
    ]
  },
  "CCNP": {
    title: "Cisco Certified Network Professional (CCNP Enterprise)",
    description: "Advance your networking career. Focuses on implementing and operating Cisco Enterprise Network Core Technologies (ENCOR 350-401).",
    whoShouldLearn: ["Network Engineers", "System Engineers", "Network Administrators"],
    keyPoints: ["Dual Stack (IPv4 & IPv6) Architecture", "Virtualization", "Infrastructure", "Network Assurance", "Security", "Automation"],
    outline: [
      { module: "Module 1", topic: "Architecture (Enterprise Design, WLAN, SD-WAN)" },
      { module: "Module 2", topic: "Virtualization (VRF, GRE, Hypervisors)" },
      { module: "Module 3", topic: "Infrastructure (Layer 2, Layer 3, Wireless)" },
      { module: "Module 4", topic: "Network Assurance (Diagnose, Ping, Traceroute, SNMP)" },
      { module: "Module 5", topic: "Security (ACLs, AAA, REST API Security)" },
      { module: "Module 6", topic: "Automation (Python, JSON, EEM)" }
    ]
  },
  "DevOps": {
    title: "DevOps Master Program",
    description: "Master the culture and tools of DevOps. Learn Jenkins, Docker, Kubernetes, Ansible, Terraform, and monitoring tools to automate the software delivery lifecycle.",
    whoShouldLearn: ["System Administrators", "Developers", "Operations Staff"],
    keyPoints: ["CI/CD Pipelines", "Containerization", "Orchestration", "Configuration Management", "Infrastructure as Code"],
    outline: [
      { module: "Module 1", topic: "DevOps Overview & Linux Basics" },
      { module: "Module 2", topic: "Version Control with Git" },
      { module: "Module 3", topic: "Build Automation with Maven/Gradle" },
      { module: "Module 4", topic: "CI with Jenkins" },
      { module: "Module 5", topic: "Configuration Management with Ansible" },
      { module: "Module 6", topic: "Containerization with Docker & Kubernetes" },
      { module: "Module 7", topic: "Infrastructure as Code with Terraform" },
      { module: "Module 8", topic: "Monitoring with Prometheus & Grafana" }
    ]
  },

  // --- AI & Data Science ---
  "Generative AI": {
    title: "Generative AI: LLMs & Prompt Engineering",
    description: "Unlock the power of Generative AI. Learn how Large Language Models (LLMs) work, how to engineer effective prompts, and how to build applications using OpenAI API and LangChain.",
    whoShouldLearn: ["Developers", "Data Scientists", "Product Managers", "Content Creators"],
    keyPoints: ["Understanding Transformers & LLMs", "Prompt Engineering Techniques", "Fine-tuning models", "Building RAG applications", "AI Ethics & Safety"],
    outline: [
      { module: "Module 1", topic: "Introduction to Generative AI & LLMs" },
      { module: "Module 2", topic: "Prompt Engineering Best Practices" },
      { module: "Module 3", topic: "Using OpenAI API & Embeddings" },
      { module: "Module 4", topic: "Building Applications with LangChain" },
      { module: "Module 5", topic: "Retrieval Augmented Generation (RAG)" },
      { module: "Module 6", topic: "Fine-Tuning & Custom Models" }
    ]
  },
  "AI with Data Science": {
    title: "Artificial Intelligence & Data Science Masterclass",
    description: "A complete journey from data analysis to building intelligent agents. Covers Statistics, Machine Learning, Deep Learning, and NLP.",
    whoShouldLearn: ["Aspiring Data Scientists", "Analysts", "Developers"],
    keyPoints: ["Statistics & Probability", "Machine Learning Algorithms", "Deep Learning with TensorFlow/Keras", "Natural Language Processing (NLP)", "Computer Vision"],
    outline: [
      { module: "Module 1", topic: "Introduction to AI & Data Science" },
      { module: "Module 2", topic: "Statistical Analysis & Hypothesis Testing" },
      { module: "Module 3", topic: "Supervised Learning (Regression, Classification)" },
      { module: "Module 4", topic: "Unsupervised Learning (Clustering)" },
      { module: "Module 5", topic: "Deep Learning Neural Networks" },
      { module: "Module 6", topic: "Natural Language Processing (NLP)" }
    ]
  },
  "AI with Python": {
    title: "Applied AI with Python",
    description: "Learn to implement AI algorithms using Python. Focuses on libraries like Scikit-learn, TensorFlow, and PyTorch for solving real-world problems.",
    whoShouldLearn: ["Python Developers", "Students", "Researchers"],
    keyPoints: ["Python for AI", "NumPy & Pandas", "Data Visualization", "Building AI Models", "Model Deployment"],
    outline: [
      { module: "Module 1", topic: "Python Advanced Concepts for AI" },
      { module: "Module 2", topic: "Data Manipulation with Pandas" },
      { module: "Module 3", topic: "Machine Learning with Scikit-Learn" },
      { module: "Module 4", topic: "Deep Learning with TensorFlow" },
      { module: "Module 5", topic: "Building a Chatbot" },
      { module: "Module 6", topic: "Deployment with Flask/Streamlit" }
    ]
  },
  "Power BI": {
    title: "Microsoft Power BI Data Analyst",
    description: "Turn unrelated sources of data into coherent, visually immersive, and interactive insights. Master Power Query, DAX, and report creation.",
    whoShouldLearn: ["Business Analysts", "Data Analysts", "BI Professionals", "Managers"],
    keyPoints: ["Data Connectivity & Transformation", "Data Modeling", "DAX Formulas", "Visualizations & Dashboards", "Power BI Service"],
    outline: [
      { module: "Module 1", topic: "Introduction to Power BI Desktop" },
      { module: "Module 2", topic: "Connecting to Data Sources & Power Query" },
      { module: "Module 3", topic: "Data Modeling & Relationships" },
      { module: "Module 4", topic: "DAX Functions & Measures" },
      { module: "Module 5", topic: "Creating Visualizations & Reports" },
      { module: "Module 6", topic: "Sharing & Collaboration in Power BI Service" }
    ]
  },
  "Tableau": {
    title: "Tableau Desktop Specialist",
    description: "Visualize your data like a pro. Learn to create interactive dashboards, connect to various data sources, and share insights across your organization.",
    whoShouldLearn: ["Data Analysts", "Business Intelligence Professionals", "Reporting Analysts"],
    keyPoints: ["Connecting to Data", "Visual Analytics", "Dashboards & Stories", "Calculations", "Mapping"],
    outline: [
      { module: "Module 1", topic: "Introduction to Tableau & Interface" },
      { module: "Module 2", topic: "Connecting to & Preparing Data" },
      { module: "Module 3", topic: "Building Basic Charts (Bar, Line, Pie)" },
      { module: "Module 4", topic: "Advanced Charts (Scatter, Map, Dual Axis)" },
      { module: "Module 5", topic: "Calculated Fields & Parameters" },
      { module: "Module 6", topic: "Creating Dashboards & Stories" }
    ]
  },
  "Looker & Looker Testing": {
    title: "Looker Business Analyst & Testing",
    description: "Master Google Cloud's Looker platform for data exploration and visualization. Also covers testing methodologies for BI reports.",
    whoShouldLearn: ["BI Developers", "Data Analysts", "QA Engineers"],
    keyPoints: ["LookML Basics", "Explores & Views", "Dashboard Creation", "Report Testing Strategies", "Data Validation"],
    outline: [
      { module: "Module 1", topic: "Introduction to Looker Platform" },
      { module: "Module 2", topic: "LookML Fundamentals" },
      { module: "Module 3", topic: "Creating Looks & Dashboards" },
      { module: "Module 4", topic: "Advanced LookML Concepts" },
      { module: "Module 5", topic: "BI Testing Methodologies" },
      { module: "Module 6", topic: "Automating Looker Tests" }
    ]
  },
  "CDM/SAS/Clinical SAS": {
    title: "Clinical Data Management & SAS Programming",
    description: "Specialized training for the pharmaceutical industry. Learn Clinical Data Management processes and SAS programming for clinical trials analysis.",
    whoShouldLearn: ["Life Science Graduates", "Clinical Research Associates", "Statisticians"],
    keyPoints: ["Clinical Trial Process", "Base SAS & Advanced SAS", "CDISC Standards (SDTM, ADaM)", "TLF Generation", "Regulatory Submission"],
    outline: [
      { module: "Module 1", topic: "Introduction to Clinical Research & CDM" },
      { module: "Module 2", topic: "Base SAS Programming" },
      { module: "Module 3", topic: "Advanced SAS (Macros, SQL)" },
      { module: "Module 4", topic: "CDISC Standards: SDTM Implementation" },
      { module: "Module 5", topic: "CDISC Standards: ADaM Implementation" },
      { module: "Module 6", topic: "Generating Tables, Listings, and Figures (TLFs)" }
    ]
  },

  // --- Enterprise & Management ---
  "SAP S4 HANA": {
    title: "SAP S/4 HANA Finance & Logistics",
    description: "Learn the next generation of SAP Business Suite. This course covers the key modules of S/4 HANA, focusing on financial accounting, controlling, and logistics processes.",
    whoShouldLearn: ["SAP Consultants", "Finance Professionals", "Accountants", "Business Process Owners"],
    keyPoints: ["Universal Journal", "New Asset Accounting", "Fiori UX", "Business Partners", "Material Ledger"],
    outline: [
      { module: "Module 1", topic: "Introduction to SAP S/4 HANA & Fiori" },
      { module: "Module 2", topic: "Enterprise Structure & Global Settings" },
      { module: "Module 3", topic: "General Ledger Accounting (New GL)" },
      { module: "Module 4", topic: "Accounts Payable & Receivable" },
      { module: "Module 5", topic: "Asset Accounting" },
      { module: "Module 6", topic: "Controlling & Cost Center Accounting" }
    ]
  },
  "SAP FICO": {
    title: "SAP FICO (Financial Accounting & Controlling)",
    description: "Become an expert in SAP Financial Accounting and Controlling. Learn to configure and manage financial data for reporting and decision making.",
    whoShouldLearn: ["Finance Executives", "Accountants", "Aspiring SAP Consultants"],
    keyPoints: ["General Ledger", "AP/AR", "Asset Accounting", "Cost Element Accounting", "Internal Orders"],
    outline: [
      { module: "Module 1", topic: "Introduction to ERP & SAP" },
      { module: "Module 2", topic: "Enterprise Structure Definition" },
      { module: "Module 3", topic: "General Ledger (GL) Configuration" },
      { module: "Module 4", topic: "Accounts Payable (AP) & Accounts Receivable (AR)" },
      { module: "Module 5", topic: "Bank Accounting & Asset Accounting" },
      { module: "Module 6", topic: "Controlling (Cost Center, Profit Center)" }
    ]
  },
  "SAP Ariba": {
    title: "SAP Ariba Procurement",
    description: "Streamline procurement processes with SAP Ariba. Learn upstream and downstream modules including Sourcing, Contracts, Buying, and Invoicing.",
    whoShouldLearn: ["Procurement Professionals", "Supply Chain Managers", "SAP Consultants"],
    keyPoints: ["Strategic Sourcing", "Contract Management", "Procure-to-Pay (P2P)", "Supplier Management", "Ariba Network"],
    outline: [
      { module: "Module 1", topic: "Overview of SAP Ariba & Ariba Network" },
      { module: "Module 2", topic: "Supplier Performance Management (SPM)" },
      { module: "Module 3", topic: "Sourcing & Contract Management" },
      { module: "Module 4", topic: "Procure-to-Pay (P2P) Process" },
      { module: "Module 5", topic: "Catalogs & Ariba Buying" },
      { module: "Module 6", topic: "Invoicing & Integration" }
    ]
  },
  "SAP ABAP on HANA": {
    title: "SAP ABAP on HANA",
    description: "Upgrade your ABAP skills for the HANA database. Learn code pushdown techniques, CDS views, AMDP, and how to optimize ABAP code for HANA.",
    whoShouldLearn: ["ABAP Developers", "SAP Technical Consultants"],
    keyPoints: ["HANA Architecture", "New Open SQL", "Core Data Services (CDS)", "ABAP Managed Database Procedures (AMDP)", "Code Inspector"],
    outline: [
      { module: "Module 1", topic: "Introduction to SAP HANA & In-Memory Computing" },
      { module: "Module 2", topic: "ABAP Development Tools (ADT) in Eclipse" },
      { module: "Module 3", topic: "Advanced Open SQL" },
      { module: "Module 4", topic: "Core Data Services (CDS) Views" },
      { module: "Module 5", topic: "ABAP Managed Database Procedures (AMDP)" },
      { module: "Module 6", topic: "Performance Tuning & ALV on HANA" }
    ]
  },
  "Oracle Unifier": {
    title: "Oracle Primavera Unifier",
    description: "Manage capital projects and facilities. Learn to configure and use Unifier for project controls, cost management, and business process automation.",
    whoShouldLearn: ["Project Control Engineers", "Construction Managers", "System Administrators"],
    keyPoints: ["uDesigner Configuration", "Business Process Design", "Cost Sheet Management", "Workflow Setup", "Reports & Dashboards"],
    outline: [
      { module: "Module 1", topic: "Introduction to Primavera Unifier" },
      { module: "Module 2", topic: "Navigation & User Administration" },
      { module: "Module 3", topic: "Company & Project Workspace Setup" },
      { module: "Module 4", topic: "uDesigner & Business Process Creation" },
      { module: "Module 5", topic: "Cost Manager & Cash Flow" },
      { module: "Module 6", topic: "Schedule Manager & Integration" }
    ]
  },
  "Oracle Primavera P6": {
    title: "Oracle Primavera P6 EPPM",
    description: "The gold standard in project management software. Learn to plan, schedule, and control large-scale programs and individual projects.",
    whoShouldLearn: ["Project Managers", "Planners/Schedulers", "Civil Engineers"],
    keyPoints: ["EPS & OBS Setup", "WBS & Activity Creation", "Resource Loading", "Baselines", "Progress Updating & Reporting"],
    outline: [
      { module: "Module 1", topic: "Introduction to Project Management & P6" },
      { module: "Module 2", topic: "Creating EPS, OBS, and Projects" },
      { module: "Module 3", topic: "Defining WBS & Activities" },
      { module: "Module 4", topic: "Scheduling & Critical Path Method (CPM)" },
      { module: "Module 5", topic: "Resource & Cost Management" },
      { module: "Module 6", topic: "Baselines, Tracking & Reporting" }
    ]
  },
  "Workday": {
    title: "Workday HCM & Finance",
    description: "Master Workday's unified suite. Learn Core HCM, business process configuration, security, reporting, and basic financial concepts.",
    whoShouldLearn: ["HR Professionals", "ERP Consultants", "System Analysts"],
    keyPoints: ["Supervisory Organizations", "Staffing Models", "Compensation", "Business Processes", "Report Writer"],
    outline: [
      { module: "Module 1", topic: "Workday Core Concepts & Navigation" },
      { module: "Module 2", topic: "Organizations & Staffing Models" },
      { module: "Module 3", topic: "Job Profiles & Compensation" },
      { module: "Module 4", topic: "Security Groups & Roles" },
      { module: "Module 5", topic: "Business Process Configuration" },
      { module: "Module 6", topic: "Reporting & Calculated Fields" }
    ]
  },
  "PMP": {
    title: "Project Management Professional (PMP) Prep",
    description: "Prepare for the global standard in project management certification. Covers the PMBOK Guide 7th Edition and Agile Practice Guide.",
    whoShouldLearn: ["Project Managers", "Team Leads", "Project Coordinators"],
    keyPoints: ["Project Integration", "Scope, Schedule, Cost", "Agile & Hybrid Methodologies", "Risk Management", "Stakeholder Engagement"],
    outline: [
      { module: "Module 1", topic: "Creating a High-Performance Team" },
      { module: "Module 2", topic: "Starting the Project" },
      { module: "Module 3", topic: "Doing the Work (Waterfall & Agile)" },
      { module: "Module 4", topic: "Keeping the Team on Track" },
      { module: "Module 5", topic: "Keeping the Business in Mind" },
      { module: "Module 6", topic: "Exam Simulation & Tips" }
    ]
  },
  "Product Management": {
    title: "Product Management Bootcamp",
    description: "Learn to build products customers love. Covers the full product lifecycle from ideation and user research to roadmap planning and launch.",
    whoShouldLearn: ["Aspiring Product Managers", "Entrepreneurs", "Business Analysts"],
    keyPoints: ["Market Research", "User Personas", "MVP Definition", "Agile/Scrum for PMs", "Go-to-Market Strategy"],
    outline: [
      { module: "Module 1", topic: "Introduction to Product Management" },
      { module: "Module 2", topic: "Identifying User Needs & Market Research" },
      { module: "Module 3", topic: "Product Strategy & Roadmapping" },
      { module: "Module 4", topic: "Defining MVP & Requirements" },
      { module: "Module 5", topic: "Agile Development & Working with Engineering" },
      { module: "Module 6", topic: "Product Launch & Metrics" }
    ]
  },
  "Sage Intacct": {
    title: "Sage Intacct Financial Management",
    description: "Master the cloud financial management platform. Learn general ledger, accounts payable/receivable, cash management, and reporting.",
    whoShouldLearn: ["Accountants", "Financial Controllers", "CFOs"],
    keyPoints: ["Multi-Entity Management", "Core Financials", "Dimensional Reporting", "Dashboards", "Purchasing & Order Entry"],
    outline: [
      { module: "Module 1", topic: "Introduction & Administration" },
      { module: "Module 2", topic: "General Ledger & Dimensions" },
      { module: "Module 3", topic: "Accounts Payable & Receivable" },
      { module: "Module 4", topic: "Cash Management" },
      { module: "Module 5", topic: "Purchasing & Order Entry" },
      { module: "Module 6", topic: "Financial Reporting & Dashboards" }
    ]
  },
  "Pega": {
    title: "Pega Certified System Architect (PCSA)",
    description: "Learn to build enterprise applications using Pega's low-code platform. Covers case management, data modeling, UI design, and integration.",
    whoShouldLearn: ["Developers", "Business Analysts", "System Architects"],
    keyPoints: ["Case Lifecycle Management", "Data Modeling", "User Interface Design", "Report Definition", "SLA & Routing"],
    outline: [
      { module: "Module 1", topic: "Introduction to Pega Platform" },
      { module: "Module 2", topic: "Case Management & Lifecycle" },
      { module: "Module 3", topic: "Data Modeling" },
      { module: "Module 4", topic: "User Interface Configuration" },
      { module: "Module 5", topic: "Business Logic & Validation" },
      { module: "Module 6", topic: "Application Integration & Reporting" }
    ]
  },
  "Salesforce Admin/Developer": {
    title: "Salesforce Administrator & Developer",
    description: "Comprehensive training on the world's #1 CRM. Start with Admin concepts (configuration, security) and move to Development (Apex, Visualforce, LWC).",
    whoShouldLearn: ["Administrators", "Developers", "Sales Operations"],
    keyPoints: ["Standard & Custom Objects", "Security Model", "Process Automation (Flows)", "Apex Programming", "Lightning Web Components"],
    outline: [
      { module: "Module 1", topic: "CRM Fundamentals & Salesforce Setup" },
      { module: "Module 2", topic: "Data Modeling & Management" },
      { module: "Module 3", topic: "Security & Access Control" },
      { module: "Module 4", topic: "Process Automation (Flow Builder)" },
      { module: "Module 5", topic: "Introduction to Apex & Triggers" },
      { module: "Module 6", topic: "Lightning Web Components (LWC)" }
    ]
  },

  // --- Development & Specialized ---
  "Python Full-Stack": {
    title: "Full Stack Development with Python (Django/Flask)",
    description: "Become a versatile developer. Learn to build robust backend APIs with Python and dynamic frontends with modern JavaScript frameworks.",
    whoShouldLearn: ["Aspiring Developers", "Frontend Developers", "Backend Developers", "Students"],
    keyPoints: ["Python Syntax & OOPS", "Django/Flask Frameworks", "REST API Development", "Database Management (SQL)", "Frontend Basics (HTML/CSS/JS)"],
    outline: [
      { module: "Module 1", topic: "Python Core & Advanced Concepts" },
      { module: "Module 2", topic: "Web Fundamentals (HTML, CSS, JS)" },
      { module: "Module 3", topic: "Backend Development with Django" },
      { module: "Module 4", topic: "RESTful APIs with Django REST Framework" },
      { module: "Module 5", topic: "Database Design & SQL" },
      { module: "Module 6", topic: "Deployment & CI/CD" }
    ]
  },
  "Java/J2EE": {
    title: "Java Full Stack Developer",
    description: "Comprehensive training in Java development. Covers Core Java, J2EE, Spring Boot, Hibernate, and frontend integration with Angular/React.",
    whoShouldLearn: ["Computer Science Graduates", "Software Engineers"],
    keyPoints: ["Core Java & Collections", "Spring Framework & Spring Boot", "Hibernate/JPA", "Microservices Architecture", "RESTful Web Services"],
    outline: [
      { module: "Module 1", topic: "Core Java & OOPS Concepts" },
      { module: "Module 2", topic: "Advanced Java (Collections, Streams, Multithreading)" },
      { module: "Module 3", topic: "J2EE, Servlets & JSP" },
      { module: "Module 4", topic: "Spring Framework & Spring Boot" },
      { module: "Module 5", topic: "Hibernate & JPA" },
      { module: "Module 6", topic: "Microservices with Spring Cloud" }
    ]
  },
  "Full-stack Development": {
    title: "MERN Stack Developer",
    description: "Master the JavaScript stack. Learn MongoDB, Express.js, React.js, and Node.js to build modern single-page applications.",
    whoShouldLearn: ["Web Developers", "Students", "Designers"],
    keyPoints: ["React Hooks & Redux", "Node.js Runtime", "Express Middleware", "NoSQL Database (MongoDB)", "JWT Authentication"],
    outline: [
      { module: "Module 1", topic: "JavaScript ES6+ Fundamentals" },
      { module: "Module 2", topic: "Frontend with React.js" },
      { module: "Module 3", topic: "State Management (Redux/Context API)" },
      { module: "Module 4", topic: "Backend with Node.js & Express" },
      { module: "Module 5", topic: "Database with MongoDB" },
      { module: "Module 6", topic: "Full Stack Integration & Deployment" }
    ]
  },
  "iOS Automation": {
    title: "Mobile App Testing & Automation (iOS/Android)",
    description: "Learn to automate mobile application testing using Appium and XCUITest. Covers testing strategies for iOS and Android.",
    whoShouldLearn: ["QA Engineers", "Mobile Developers"],
    keyPoints: ["Appium Architecture", "Locators Strategies", "TestNG Framework", "XCUITest for iOS", "Real Device Testing"],
    outline: [
      { module: "Module 1", topic: "Introduction to Mobile Testing" },
      { module: "Module 2", topic: "Appium Architecture & Setup" },
      { module: "Module 3", topic: "Locating Elements & Gestures" },
      { module: "Module 4", topic: "Building a Framework with TestNG" },
      { module: "Module 5", topic: "iOS Specific Automation (XCUITest)" },
      { module: "Module 6", topic: "CI/CD Integration for Mobile" }
    ]
  },
  "RPA": {
    title: "Robotic Process Automation (UiPath/Automation Anywhere)",
    description: "Automate repetitive tasks. Learn to build software bots using leading RPA tools like UiPath or Automation Anywhere.",
    whoShouldLearn: ["Business Process Analysts", "Developers", "Operations Managers"],
    keyPoints: ["RPA Lifecycle", "Workflow Design", "Selectors & UI Interaction", "Data Manipulation", "Orchestrator/Control Room"],
    outline: [
      { module: "Module 1", topic: "Introduction to RPA" },
      { module: "Module 2", topic: "UiPath Studio/AA Client Setup" },
      { module: "Module 3", topic: "Variables, Arguments & Control Flow" },
      { module: "Module 4", topic: "Data Scraping & UI Automation" },
      { module: "Module 5", topic: "Excel & Email Automation" },
      { module: "Module 6", topic: "Orchestrator & Deployment" }
    ]
  },
  "IoT": {
    title: "Internet of Things (IoT) Solutions Architect",
    description: "Connect the physical world to the digital. Learn about sensors, microcontrollers (Arduino/Raspberry Pi), communication protocols, and cloud IoT platforms.",
    whoShouldLearn: ["Electronics Engineers", "Software Developers", "Solution Architects"],
    keyPoints: ["IoT Architecture", "Sensors & Actuators", "Protocols (MQTT, CoAP)", "Edge Computing", "Cloud IoT Core (AWS/Azure)"],
    outline: [
      { module: "Module 1", topic: "Introduction to IoT Ecosystem" },
      { module: "Module 2", topic: "Embedded Systems (Arduino/Raspberry Pi)" },
      { module: "Module 3", topic: "Sensors, Actuators & Interfacing" },
      { module: "Module 4", topic: "IoT Communication Protocols (MQTT, HTTP)" },
      { module: "Module 5", topic: "Cloud IoT Platforms" },
      { module: "Module 6", topic: "IoT Security & Edge Computing" }
    ]
  },
  "Embedded Systems": {
    title: "Embedded Systems Design",
    description: "Design and program embedded systems. Covers microcontroller architecture, C programming for embedded systems, and RTOS.",
    whoShouldLearn: ["Electronics Engineers", "Firmware Developers"],
    keyPoints: ["Microcontroller Arch (ARM/AVR)", "Embedded C Programming", "Peripherals (ADC, UART, I2C, SPI)", "RTOS Fundamentals", "Hardware Debugging"],
    outline: [
      { module: "Module 1", topic: "Introduction to Embedded Systems" },
      { module: "Module 2", topic: "C Programming for Embedded Systems" },
      { module: "Module 3", topic: "Microcontroller Architecture" },
      { module: "Module 4", topic: "Interfacing Peripherals" },
      { module: "Module 5", topic: "Communication Protocols" },
      { module: "Module 6", topic: "Real-Time Operating Systems (RTOS)" }
    ]
  },
  "Murex/MXML": {
    title: "Murex MX.3 Functional & Technical",
    description: "Specialized training for the Murex trading platform. Covers front-office, back-office, risk management, and MXML exchange workflows.",
    whoShouldLearn: ["Financial Software Developers", "Business Analysts", "Support Analysts"],
    keyPoints: ["Murex Architecture", "Trade Lifecycle", "MXML Exchange", "Datamart & Reporting", "Workflows"],
    outline: [
      { module: "Module 1", topic: "Introduction to Capital Markets & Murex" },
      { module: "Module 2", topic: "Front Office (Pricing, Booking)" },
      { module: "Module 3", topic: "Back Office (Validation, Settlement)" },
      { module: "Module 4", topic: "MXML Exchange & Integration" },
      { module: "Module 5", topic: "Reporting & Datamart" },
      { module: "Module 6", topic: "Environment Management" }
    ]
  },
  "Emerson DeltaV Automation": {
    title: "Emerson DeltaV Distributed Control System (DCS)",
    description: "Master industrial automation. Learn configuration, maintenance, and operation of the DeltaV DCS used in process industries.",
    whoShouldLearn: ["Automation Engineers", "Control System Technicians", "Process Engineers"],
    keyPoints: ["Hardware Configuration", "Control Modules", "Graphics Configuration", "Alarms & History", "System Maintenance"],
    outline: [
      { module: "Module 1", topic: "Overview of Process Control & DeltaV" },
      { module: "Module 2", topic: "DeltaV Explorer & Hardware Setup" },
      { module: "Module 3", topic: "Control Studio & Module Configuration" },
      { module: "Module 4", topic: "DeltaV Operate (HMI) Design" },
      { module: "Module 5", topic: "Alarm Management & Historian" },
      { module: "Module 6", topic: "Diagnostics & Troubleshooting" }
    ]
  }
};
