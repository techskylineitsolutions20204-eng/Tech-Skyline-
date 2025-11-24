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
  Layers
} from 'lucide-react';
import { ServiceItem, CourseCategory, StatItem, FeatureItem } from './types';

export const CONTACT_INFO = {
  contactName: "Abhinav",
  phone: "408-614-0468",
  whatsapp: "+91-8106243684",
  email: "techskylineitsolutions20204@gmail.com",
  company: "Tech Skyline IT Solutions",
  tagline: "Premier IT Consulting, Staffing, and Corporate Training Solutions.",
  address: "Marshall St, San Antonio, TX 78212, USA"
};

export const HERO_CONTENT = {
  title: "INFORMATION TECHNOLOGY CONSULTING",
  subtitle: "GET YOUR BUSINESS & IT STRATEGIES ALIGN TOGETHER",
  description: "Information technology (IT) consulting services helps you shape a winning IT strategy. For past decades we are into IT consulting and expertly guide your IT and digital transformation initiatives from strategy to implementation."
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
    icon: Cloud
  },
  {
    title: "Big Data Consulting",
    description: "Transforming huge volumes of raw data into actionable insights for informed decision-making and accelerated business development.",
    icon: Database
  },
  {
    title: "IoT Consulting",
    description: "Enhancing business management with IoT. We plan the networking of IoT devices, set up real-time data analytics, and create monitoring apps.",
    icon: Cpu
  },
  {
    title: "Data Quality Consulting",
    description: "Safeguarding a high quality of data from ERP, CRM, SMC, and other business critical systems via profiling and cleansing.",
    icon: ShieldCheck
  },
  {
    title: "Technology Consulting",
    description: "Driving your future with advanced solutions in IT governance, security, data management, applications and compliance.",
    icon: Layers
  },
  {
    title: "IT Staffing",
    description: "Connecting world-class talent with top companies. Permanent, contract, and temporary staffing solutions.",
    icon: Briefcase
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