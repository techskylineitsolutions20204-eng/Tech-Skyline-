
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
  AlertCircle,
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
  Network,
  ArrowUpRight,
  TrendingDown,
  Scale,
  RefreshCcw,
  MousePointer2,
  Smile,
  Brain,
  Bot,
  Sparkles,
  Binary,
  Workflow,
  ShieldAlert,
  BarChart3,
  Timer,
  Search,
  UserPlus,
  UserMinus,
  Verified,
  Rocket
} from 'lucide-react';

export const CONTACT_INFO = {
  contactName: "Abhinav",
  phone: "408-614-0468",
  whatsapp: "+91-8106243684",
  email: "techskylineitsolutions20204@gmail.com",
  company: "Techskyline.in",
  tagline: "Global Leader in IT Consulting, Workforce Transformation, and Digital Strategy.",
  address: "San Antonio, TX, USA | Hyderabad, India",
  logo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=64&q=70",
  heroLogo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=400&q=70",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform"
};

export const HERO_CONTENT = {
  quote: "Empowering the digital skyline through intelligence and innovation.",
  subtitle: "ARCHITECTING THE FUTURE OF ENTERPRISE",
  description: "Bespoke IT consulting and deep-dive corporate training programs designed to bridge the gap between today's talent and tomorrow's technology.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70"
};

export const STATS = [
  { label: "Global Talent Trained", value: "3,500+", icon: Users },
  { label: "Enterprise Partnerships", value: "85+", icon: Briefcase },
  { label: "Course Satisfaction", value: "99.2%", icon: Heart },
  { label: "Global Locations", value: "4", icon: Globe }
];

export const CONSULTING_SERVICES = [
  { title: "Cloud Strategy", description: "Multi-cloud architecture, migration strategies, and cost optimization for AWS, Azure, and GCP.", icon: Cloud },
  { title: "AI & Data Labs", description: "Transforming raw data into predictive intelligence using custom LLMs and RAG architectures.", icon: Database },
  { title: "IoT Ecosystems", description: "End-to-end sensor integration, edge computing, and real-time dashboarding.", icon: Cpu },
  { title: "Cyber Governance", description: "Proactive threat modeling, compliance auditing (SOC2, GDPR), and zero-trust security.", icon: ShieldCheck },
  { title: "DevOps Excellence", description: "Continuous integration, infrastructure as code, and automated delivery pipelines.", icon: Workflow },
  { title: "Talent Staffing", description: "Strategic placement of high-caliber engineers for contract and permanent roles.", icon: UserCheck }
];

export const CORPORATE_TRAINING_MODULES = [
  {
    category: "Cloud & Infrastructure",
    modules: [
      { name: "AWS Solutions Architect Professional", duration: "8 Weeks", features: ["Hands-on Labs", "VPC Design", "Migration Pro"] },
      { name: "Azure Enterprise Administration", duration: "6 Weeks", features: ["Active Directory", "Sentinel", "Kubernetes"] },
      { name: "Cloud Cost Management (FinOps)", duration: "4 Weeks", features: ["Tagging Strategy", "Reserved Instances", "Reporting"] }
    ]
  },
  {
    category: "AI & Future Tech",
    modules: [
      { name: "Generative AI for Executives", duration: "2 Days", features: ["Strategic ROI", "Risk Management", "Vendor Selection"] },
      { name: "Full-Stack AI Engineering", duration: "12 Weeks", features: ["Python", "PyTorch", "OpenAI API", "Vector DBs"] },
      { name: "MLOps & Data Engineering", duration: "10 Weeks", features: ["Data Pipelines", "Model Versioning", "Spark"] }
    ]
  },
  {
    category: "Enterprise Software",
    modules: [
      { name: "SAP S/4HANA Transformation", duration: "16 Weeks", features: ["Fiori", "Finance", "Supply Chain"] },
      { name: "Workday HCM Optimization", duration: "8 Weeks", features: ["Payroll", "Recruitment", "Benefits"] },
      { name: "Oracle Cloud Applications", duration: "12 Weeks", features: ["ERP Cloud", "CX Cloud", "HCM"] }
    ]
  }
];

export const ABOUT_EXTENDED = {
  history: "Founded in 2020, Tech Skyline began as a boutique consulting firm in Texas. Recognizing the critical skill gap in emerging technologies, we pivoted to an integrated 'Consult-and-Train' model that ensures businesses not only get the tech they need but the people who know how to lead it.",
  values: [
    { title: "Integrity", desc: "Honesty in every consultation and commitment to client success.", icon: ShieldCheck },
    { title: "Innovation", desc: "Always staying 18 months ahead of the technology curve.", icon: Zap },
    { title: "Impact", desc: "Measuring our success by the tangible ROI of our training programs.", icon: BarChart3 }
  ],
  team: [
    { name: "Abhinav K.", role: "CEO & Founder", bio: "15+ years of enterprise architecture experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { name: "Sarah L.", role: "Head of AI Strategy", bio: "Former Silicon Valley lead engineer.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
    { name: "Michael R.", role: "Lead Cloud Consultant", bio: "Multi-certified AWS/Azure Professional.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" }
  ]
};

export const CLIENTS = [
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Workday", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Workday_logo.svg/2560px-Workday_logo.svg.png" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
];

export const TECH_STACK = [
  { name: "AWS Cloud" },
  { name: "TensorFlow" },
  { name: "Docker/K8s" },
  { name: "SAP S/4HANA" }
];

// Corporate 360 Strategy Content
export const CORPORATE_360_STRATEGY = {
  hero: {
    subheadline: "Empowering your workforce with future-ready skills through strategic alignment and continuous learning ecosystems.",
    points: [
      "Customized Learning Paths",
      "Scalable Training Ecosystems",
      "ROI-Driven Methodologies",
      "Global Workforce Resilience"
    ]
  },
  perspective: {
    title: "Navigating the New Era of Enterprise Learning",
    description: "In an era of rapid disruption, organizations must move beyond reactive training toward a proactive, 360-degree talent development strategy.",
    drivers: [
      { title: "Digital Transformation", icon: Zap },
      { title: "AI Integration", icon: Brain },
      { title: "Remote Collaboration", icon: Globe },
      { title: "Skill Obsolescence", icon: TrendingDown }
    ],
    stats: [
      { label: "Skill Gap Priority", value: "87%", icon: BarChart2 },
      { label: "Retention Impact", value: "94%", icon: Users },
      { label: "Productivity Gain", value: "2.5x", icon: Zap }
    ]
  },
  method: {
    title: "Our Strategic Alignment Method",
    supports: [
      { title: "Business Strategy", icon: Target },
      { title: "Talent Lifecycle", icon: Layers },
      { title: "Technology Stack", icon: Cpu },
      { title: "Cultural Shift", icon: Smile }
    ]
  },
  framework: {
    title: "The 360-Degree Training Framework",
    steps: [
      { step: "01", icon: Search, title: "Discovery", desc: "In-depth audit of current skills and business goals." },
      { step: "02", icon: Lightbulb, title: "Design", desc: "Curating bespoke learning journeys for every tier." },
      { step: "03", icon: Code, title: "Delivery", desc: "Seamless deployment across platforms and regions." },
      { step: "04", icon: BarChart3, title: "Analytics", desc: "Measuring impact and refining strategies in real-time." }
    ]
  },
  definition: {
    title: "Defining Corporate Training & Development",
    content: "We view corporate training not as a one-time event, but as a continuous loop of learning, application, and growth.",
    verticals: [
      "Leadership and Executive Coaching",
      "Technical Upskilling (Cloud, AI, Data)",
      "Compliance and Governance Mastery",
      "Soft Skills and Cultural Alignment",
      "Operational Excellence Training",
      "Sales and Customer Success Enablement"
    ]
  },
  evolution: {
    title: "The Evolution of Learning",
    milestones: [
      { year: "2010s", title: "Standardized eLearning", desc: "Focus on mass-produced video content and static quizzes." },
      { year: "2020s", title: "Personalized Ecosystems", desc: "Shift to AI-driven, byte-sized learning integrated into workflows." },
      { year: "Future", title: "Continuous Intelligence", desc: "Real-time skill augmentation through immersive AI mentors." }
    ]
  },
  distinction: {
    title: "Training vs Development: The TechSkyline Distinction",
    rows: [
      { aspect: "Orientation", training: "Job-focused / Short-term", development: "Career-focused / Long-term" },
      { aspect: "Objective", training: "Task Proficiency", development: "Leadership & Resilience" },
      { aspect: "Scope", training: "Specific Skill Gaps", development: "Holistic Growth" },
      { aspect: "Timeline", training: "Immediate Application", development: "Future Readiness" }
    ]
  },
  holisticServices: [
    { title: "Custom Content Development", icon: FileText, desc: "Bespoke modules tailored to your brand and technology stack." },
    { title: "Managed Learning Services", icon: ClipboardCheck, desc: "End-to-end administration of your enterprise learning programs." },
    { title: "Strategic Advisory", icon: Target, desc: "Consulting on L&D strategy and tech stack optimization." }
  ],
  roi: {
    title: "Measuring the ROI of Learning",
    methods: [
      { title: "KPI Alignment", icon: BarChart2 },
      { title: "Performance Uplift", icon: TrendingUp },
      { title: "Employee NPS", icon: Smile },
      { title: "Efficiency Metrics", icon: Activity }
    ]
  },
  scaling: {
    title: "Scaling Your Global Workforce",
    features: [
      { title: "Localization Expertise", icon: Globe },
      { title: "Cloud-Native Delivery", icon: Server },
      { title: "24/7 Support", icon: Clock },
      { title: "Universal Standards", icon: ShieldCheck }
    ]
  },
  whyChoose: [
    "Proven track record with Fortune 500 companies.",
    "Integrated AI tools for personalized learning.",
    "Data-driven insights into workforce readiness.",
    "Global reach with local expertise."
  ],
  trainingTypes: [
    "Enterprise AI Strategy",
    "Full-Stack Engineering",
    "Cloud Architecture (AWS/Azure)",
    "Agile Project Management",
    "Data Science & Analytics",
    "Cybersecurity Awareness",
    "Leadership in the Digital Age",
    "Customer Experience Mastery"
  ]
};

// AI Workforce Content
export const AI_WORKFORCE_CONTENT = {
  hero: {
    title: "Workforce Strategy",
    subtitle: "Navigating the Intelligence Revolution",
    tagline: "Empowering organizations to thrive in the age of generative AI through strategic reskilling and human-centric integration."
  },
  whyMatters: {
    title: "Why AI Readiness Matters Now",
    stats: [
      { label: "Potential GDP Growth", value: "$15.7T", icon: Globe },
      { label: "Efficiency Boost", value: "40%", icon: Zap },
      { label: "Workplace Adoption", value: "72%", icon: TrendingUp },
      { label: "Skill Obsolescence", value: "50%", icon: AlertCircle },
      { label: "ROI Expectation", value: "5x", icon: Award }
    ]
  },
  readiness: {
    title: "Strategic Impact",
    impact: "80%",
    impactDesc: "of tasks will be augmented by AI tools by 2026.",
    marketTrend: "The 'AI Divide' is separating market leaders from laggards."
  },
  skillsGap: {
    title: "Closing the AI Skills Gap",
    points: [
      { label: "Basic AI Literacy", value: "35%", color: "cyan" },
      { label: "Prompt Engineering", value: "20%", color: "purple" },
      { label: "AI Governance", value: "15%", color: "orange" },
      { label: "Technical Integration", value: "10%", color: "red" }
    ]
  },
  solutions: [
    { 
      id: "01", 
      icon: Brain, 
      name: "AI Literacy for All", 
      tagline: "Building the Foundation", 
      features: ["Understanding LLMs", "AI Ethics", "Everyday Productivity Tools"] 
    },
    { 
      id: "02", 
      icon: Code, 
      name: "Engineering for AI", 
      tagline: "Building the Future", 
      features: ["Fine-tuning Models", "RAG Architecture", "AI-First Development"] 
    },
    { 
      id: "03", 
      icon: ShieldCheck, 
      name: "Strategic Governance", 
      tagline: "Leading with Responsibility", 
      features: ["Policy Design", "Bias Mitigation", "Security Frameworks"] 
    }
  ],
  whyChoose: [
    "Deep technical roots in Silicon Valley standards.",
    "Focus on ethical and responsible AI adoption.",
    "Hands-on labs with real-world enterprise models.",
    "Continuous updates as technology evolves weekly."
  ]
};
