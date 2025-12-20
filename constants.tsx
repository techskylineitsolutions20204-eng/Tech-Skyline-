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
  Verified
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
  logo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=64&q=75", 
  heroLogo: "https://images.unsplash.com/photo-1614741118868-b4ab0a27ffe2?auto=format&fit=crop&w=400&q=75", 
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfcG6IKVRWZg0qi0V7eBRvRDozo0HRifzhEM5vEfLtFLvADbA/viewform"
};

export const STAFFING_CONTENT = {
  title: "IT Staffing Solutions",
  subtitle: "Connecting High-Performance Talent with Visionary Companies",
  description: "We enable you to achieve and optimize the most strategic and variable component to business success—right people, with right skills, competencies, and attitudes.",
  features: [
    { title: "Contract Staffing", description: "Specialized technology staffing services for short-term projects and peak capacity needs.", icon: Timer },
    { title: "Permanent Placement", description: "Finding long-term talent by understanding career aspirations and organizational culture.", icon: Users2 },
    { title: "Executive Search", description: "Discreet and targeted search for C-suite and senior leadership roles.", icon: Search }
  ],
  whyChoose: {
    title: "Why Choose Tech Skyline Staffing?",
    description: "Beyond just filling seats, we provide the technical intelligence required to scale high-performing IT departments.",
    differentiators: [
      {
        title: "Rigid Multi-Tier Screening",
        description: "Our proprietary 5-step technical vetting ensures only the top 3% of applicants reach your interview stage.",
        icon: ClipboardCheck
      },
      {
        title: "Domain-Centric Sourcing",
        description: "Recruiters specialized in high-demand domains: SAP S/4HANA, GenAI, Cloud Infrastructure, and Data Engineering.",
        icon: Target
      },
      {
        title: "Rapid Deployment",
        description: "Average turnaround time of 15 days for critical roles, leveraging our vast pre-vetted talent pool.",
        icon: Zap
      },
      {
        title: "Cultural Alignment",
        description: "We evaluate more than just code. We ensure every candidate aligns with your team's communication and work style.",
        icon: Heart
      }
    ],
    metrics: [
      { label: "Client Satisfaction", value: "98.8%", icon: Smile },
      { label: "Talent Pool size", value: "50K+", icon: Users },
      { label: "Repeat Business", value: "90%", icon: RefreshCcw },
      { label: "Placement Success", value: "96%", icon: Trophy }
    ]
  }
};

export const AI_WORKFORCE_CONTENT = {
  hero: {
    title: "AI-Powered Workforce",
    subtitle: "Future-Ready Enterprise",
    tagline: "AI is no longer optional. It is delivering real, measurable business value for organizations worldwide."
  },
  whyMatters: {
    title: "Why AI Matters for Your Business",
    stats: [
      { label: "Higher revenue growth", value: "20%", icon: TrendingUp },
      { label: "Reduction in operational costs", value: "44%", icon: BarChart3 },
      { label: "Improvement in productivity", value: "62%", icon: Zap },
      { label: "Better customer experience", value: "74%", icon: Smile },
      { label: "Faster innovation cycles", value: "75%", icon: Sparkles }
    ]
  },
  readiness: {
    title: "Is Your Workforce Ready for the AI Economy?",
    impact: "$10.3 Trillion",
    impactDesc: "enterprise value can be unlocked with a responsible, people-first AI strategy",
    marketTrend: "The global Agentic AI market is growing exponentially in enterprise IT"
  },
  skillsGap: {
    title: "The AI Skills Gap Is Real",
    points: [
      { label: "Employees need GenAI skills", value: "94%", color: "cyan" },
      { label: "Workforce will need retraining by 2027", value: "61%", color: "purple" },
      { label: "CEOs have future-ready strategy", value: "26%", color: "orange" },
      { label: "Organizations can reskill at scale", value: "5%", color: "red" }
    ]
  },
  solutions: [
    {
      id: "01",
      name: "AI Quotient Assessment",
      tagline: "Measure Enterprise AI Readiness",
      features: [
        "Role-based AI readiness assessment",
        "Identifies skill gaps across teams and departments",
        "Covers Python, AI/ML, GenAI, Agentic AI, and Responsible AI",
        "Instant analytics for workforce planning",
        "Supports strategic AI reskilling decisions"
      ],
      icon: Binary
    },
    {
      id: "02",
      name: "AI Infinity",
      tagline: "Company-Wide AI Literacy Program",
      features: [
        "Foundation-level AI training for all employees",
        "Live expert-led sessions + self-paced learning",
        "Covers Generative AI, Agentic AI, and Responsible AI",
        "Practical assignments and real-world use cases",
        "Continuous content upgrades for evolving AI trends"
      ],
      icon: Globe
    },
    {
      id: "03",
      name: "AI Skills Academy",
      tagline: "Customized AI Upskilling for Business Impact",
      features: [
        "Tailored training aligned to your business goals",
        "Modular programs from 6 to 180 hours",
        "Live, online, and on-demand delivery formats",
        "Hands-on projects using enterprise-grade tools",
        "Scalable for enterprise-wide deployment"
      ],
      icon: Brain
    },
    {
      id: "04",
      name: "Certification Programs",
      tagline: "Executive-Friendly, Industry-Recognized",
      features: [
        "Live, cohort-based learning from top institutions",
        "Designed for mid-to-senior professionals",
        "Certifications in AI, Leadership, Data, and Transformation",
        "Strengthens leadership capability in the Age of AI",
        "Enhances employer brand and talent retention"
      ],
      icon: Award
    }
  ],
  whyChoose: [
    "Business-aligned AI training strategy",
    "Custom programs, not generic courses",
    "Practical, application-driven learning",
    "Scalable solutions for teams and leaders",
    "Focus on responsible and ethical AI adoption"
  ]
};

export const SOCIAL_MEDIA = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/techskyline-it-soluions/?viewAsMember=true", icon: Linkedin },
  { name: "YouTube", url: "https://www.youtube.com/@FreelanceRecuriter", icon: Youtube },
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "Slack Community", url: "#slack-invite", icon: MessageSquare }
];

export const HERO_CONTENT = {
  quote: "Technology brings everything closer and connected",
  subtitle: "GET YOUR BUSINESS & IT STRATEGIES ALIGN TOGETHER",
  description: "Information technology (IT) consulting services helps you shape a winning IT strategy. For past decades we are into IT consulting and expertly guide your IT and digital transformation initiatives from strategy to implementation.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=75"
};

export const STATS: StatItem[] = [
  { label: "Professionals Trained", value: "3,000+", icon: Users },
  { label: "Courses Offered", value: "100+", icon: BookOpen },
  { label: "Client Satisfaction", value: "98.8%", icon: CheckCircle },
  { label: "Global Presence", value: "Global", icon: Globe },
];

export const CONSULTING_SERVICES: ServiceItem[] = [
  { title: "Cloud Consulting", description: "Executing cloud technologies to achieve a rapid speed of IT evolution, reduce costs, and migrate to the cloud.", icon: Cloud, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=75" },
  { title: "Big Data Consulting", description: "Transforming huge volumes of raw data into actionable insights for informed decision-making.", icon: Database, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75" },
  { title: "IoT Consulting", description: "Enhancing business management with IoT networking, real-time data analytics, and monitoring apps.", icon: Cpu, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=75" },
  { title: "Data Quality Consulting", description: "Safeguarding high quality data from ERP, CRM, and SMC systems via profiling and cleansing.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=75" },
  { title: "Technology Consulting", description: "Driving your future with advanced solutions in IT governance, security, and compliance.", icon: Layers, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=75" },
  { title: "IT Staffing", description: "Connecting world-class talent with top companies via permanent and contract staffing.", icon: Briefcase, image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=75" }
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

export const CORPORATE_360_STRATEGY = {
  hero: {
    headline: "Corporate Training Isn’t Just a Checkbox – It’s Your Competitive Edge.",
    subheadline: "Discover how a 360° approach can turn complex training into engaging, role-specific learning experiences at scale and speed.",
    points: [
      "Align learning with business goals",
      "Boost employee performance and engagement",
      "Drive measurable ROI from every training initiative",
      "Support career growth and retention",
      "Enable scalable, modern learning experiences"
    ]
  },
  perspective: {
    title: "Why Should Organizations Rethink Corporate Training Today?",
    description: "Corporate training is no longer a support function—it is a strategic business enabler. At Tech Skyline IT Solutions, we observe organizations navigating rapid technology shifts, hybrid work models, and increasingly diverse, multi-generational workforces. These demand a 360° corporate training strategy that is agile, data-driven, and directly aligned with business outcomes.",
    drivers: [
      { title: "Accelerated digital transformation", icon: Zap },
      { title: "Remote and hybrid work environments", icon: Globe },
      { title: "AI-driven workflows and automation", icon: Cpu },
      { title: "Personalized, continuous learning", icon: UserCheck }
    ],
    stats: [
      { label: "Lost productivity globally (Gallup, 2025)", value: "$438B", icon: TrendingDown },
      { label: "HR Leaders Integrating AI effectively", value: "12%", icon: AlertCircle }
    ]
  },
  method: {
    title: "Aligning Training with Business Strategy: The TechSkyline Method",
    supports: [
      { title: "Revenue growth", icon: TrendingUp },
      { title: "Operational efficiency", icon: Settings },
      { title: "Innovation and digital readiness", icon: Lightbulb },
      { title: "Talent retention & leadership", icon: Users2 }
    ]
  },
  framework: {
    title: "The TechSkyline 360° Training Framework",
    steps: [
      { step: "01", title: "Training Needs Analysis", desc: "Identify role-based and future skill gaps aligned with business objectives.", icon: ClipboardCheck },
      { step: "02", title: "Program Design", desc: "Custom-built learning paths using blended, digital-first methodologies.", icon: PenTool },
      { step: "03", title: "Implementation & Delivery", desc: "Instructor-led, virtual, self-paced, and experiential learning models.", icon: MonitorPlay },
      { step: "04", title: "Measurement & Optimization", desc: "ROI tracking through performance metrics, analytics, and business impact indicators.", icon: Target }
    ]
  },
  definition: {
    title: "What Is Corporate Training? (TechSkyline Definition)",
    content: "Corporate training refers to structured learning initiatives designed to enhance employee skills, knowledge, and competencies to meet both current and future organizational needs.",
    verticals: [
      "Technical and digital skills",
      "Leadership and management development",
      "Compliance and regulatory training",
      "Product, sales, and customer enablement",
      "AI, cloud, data, and emerging technology upskilling"
    ]
  },
  evolution: {
    title: "How Corporate Training Has Evolved",
    milestones: [
      { year: "2000s", title: "LMS-driven eLearning", desc: "Standard digital catalogs." },
      { year: "2010+", title: "Blended Learning Models", desc: "Classroom mixed with online." },
      { year: "2015+", title: "Mobile & Microlearning", desc: "Bite-sized learning on the go." },
      { year: "2018+", title: "AI-powered adaptive learning", desc: "Personalized paths via algorithms." },
      { year: "Today", title: "Immersive Learning", desc: "VR/AR and high-fidelity simulations." }
    ]
  },
  distinction: {
    title: "Training vs. Development: A Strategic Distinction",
    rows: [
      { aspect: "Focus", training: "Current job performance", development: "Future roles & leadership" },
      { aspect: "Timeframe", training: "Short-term", development: "Long-term" },
      { aspect: "Nature", training: "Structured, task-oriented", development: "Holistic, experiential" },
      { aspect: "Outcome", training: "Measurable skills", development: "Strategic capability" }
    ]
  },
  scaling: {
    title: "Scaling Corporate Training Globally",
    features: [
      { title: "Centralized LMS platforms", icon: Server },
      { title: "Multilingual content localization", icon: Globe },
      { title: "Blended and virtual delivery", icon: MonitorPlay },
      { title: "Data-driven performance tracking", icon: BarChart2 }
    ]
  },
  roi: {
    title: "Measuring ROI in Corporate Training",
    methods: [
      { title: "Linking learning to business KPIs", icon: Target },
      { title: "Performance analytics & feedback", icon: BarChart2 },
      { title: "Kirkpatrick & ROI models", icon: Scale },
      { title: "Translating data into insights", icon: Lightbulb }
    ]
  },
  holisticServices: [
    { title: "ILT to eLearning Conversion", desc: "Save time and cost of in-person training. Make learning available on-demand.", icon: RefreshCcw },
    { title: "Virtual Instructor-led (VILT)", desc: "Replicate collaboration of physical classrooms in a virtual set up.", icon: MonitorPlay },
    { title: "Webinar to eLearning", desc: "10X the impact of technical training by converting SME inputs to courses.", icon: MousePointer2 },
    { title: "Video Creation", desc: "Scale and volume using AI tools such as Synthesia and Vyond Go.", icon: Video },
    { title: "Microlearning Solutions", desc: "Learning in the flow of work with bite-sized nuggets in appealing formats.", icon: Smartphone },
    { title: "AI Tools Expertise", desc: "Think big and deliver faster with AI tools that make design agile.", icon: Cpu }
  ],
  trainingTypes: [
    "Technical & IT Skills Training",
    "Soft Skills & Professional Skills",
    "Compliance & Regulatory Training",
    "Leadership & Management Development",
    "Onboarding & Orientation",
    "Product & Service Enablement",
    "Sales & Customer Success Training",
    "Health, Safety & Sustainability Training",
    "DEI & Workplace Culture Programs"
  ],
  whyChoose: [
    "25 years of experience in enterprise training transformation",
    "Preferred learning partner for top U.S. companies",
    "3-5-week turnaround speed",
    "Licensed usage of leading authoring and AI tools",
    "Trusted by 300+ global companies"
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "Most of our customers have been with us for 10+ years, and 90% of our business is repeat. The placement assistance is outstanding!", author: "Priya Sharma", role: "Data Scientist (Placed at Capgemini)", rating: 5, category: "Student - Placement", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=75" },
  { id: 2, text: "Empowering high-performing U.S. L&D teams with custom corporate eLearning solutions that turn complex training into engaging experiences.", author: "Michael Chen", role: "Director of Engineering, Tech Corp", rating: 5, category: "Client - Consulting", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=75" }
];

export const FEATURED_TECHNOLOGIES: TechCategory[] = [
  { title: "SAP S/4 HANA", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=75", description: "Enterprise Resource Planning" },
  { title: "Data Science & AI", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=500&q=75", description: "Machine Learning, Python" },
  { title: "Cyber Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=75", description: "Network Defense, Ethical Hacking" },
  { title: "DevOps & Cloud", image: "https://images.unsplash.com/photo-1667372393119-c85c020799a3?auto=format&fit=crop&w=500&q=75", description: "CI/CD, AWS, Azure, Docker" },
  { title: "Full Stack Web", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=75", description: "React, Node.js, MongoDB, Express" },
  { title: "Cloud Security", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=75", description: "Zero Trust, Identity, Threat Detection" }
];

export const INTERNSHIP_PROGRAM = {
  title: "Internship & Self-Learning Program",
  description: "Designed for College Students and Self Learners. Join our comprehensive program featuring Live Sessions, 24/7 Lab Access, and complete Study Notes & Materials.",
  features: [
    { title: "Live Expert Sessions", icon: MonitorPlay, desc: "Interactive live training with industry experts on real-time concepts." },
    { title: "Live Labs Access", icon: Wrench, desc: "24/7 access to pre-configured live labs with all required tools installed." },
    { title: "Class Recordings", icon: Video, desc: "Lifetime access to HD recordings of all live sessions for revision." }
  ],
  programSteps: ["Fundamentals & Theory", "Advanced Concepts & Tools", "Live Labs & Practice", "Real-time Projects", "Certification & Portfolio"],
  technologies: [
    { name: "Artificial Intelligence (AI)", id: "ai", type: "AI/ML" },
    { name: "Generative AI", id: "genai", type: "AI/ML" },
    { name: "Power BI", id: "powerbi", type: "Data" },
    { name: "AWS DevOps", id: "aws", type: "Cloud" }
  ],
  studentResources: [
    { title: "Live Video Archive", description: "Direct access to daily live session links and video library.", icon: PlayCircle, linkText: "Watch Sessions" },
    { title: "24/7 Lab Dashboard", description: "One-click access to personalized cloud labs.", icon: Terminal, linkText: "Launch Lab" }
  ]
};

export const SAMPLE_CLASSES = [
  { id: 1, title: "Gen AI: Prompt Engineering Fundamentals", type: "Video", duration: "1h 15m", author: "Dr. Sarah Smith", thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=500&q=75", videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { id: 2, title: "AWS Security Specialist Interview Guide", type: "Audio", duration: "45m", author: "James Wilson", thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&w=500&q=75", audioUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }
];

export const TESTING_SERVICES = ["Software Testing", "Data Warehouse Testing", "Big Data Application Testing", "ERP Testing", "CRM Testing", "Mobile App Testing"];

export const COURSE_CATEGORIES: CourseCategory[] = [
  { name: "Cloud, DevOps & Security", courses: ["AWS & Cloud", "Azure DevOps", "Red Hat Linux", "Cybersecurity", "CCNA"] },
  { name: "AI & Data Science", courses: ["Generative AI", "AI with Data Science", "AI with Python", "Power BI", "Tableau"] },
  { name: "Enterprise & Management", courses: ["SAP S4 HANA", "SAP FICO", "SAP Ariba", "Oracle Unifier", "Workday", "PMP"] }
];

export const STAFFING_FEATURES: FeatureItem[] = [
  { title: "Contract Staffing", description: "Specialized technology staffing services for short-term support.", icon: Briefcase },
  { title: "Permanent Placement", description: "Finding top talent by understanding career aspirations and needs.", icon: Users }
];

export const ABOUT_TRAINING_TEXT = `We are the leading IT Online Training hub since a decade in the industry and we are voted as a Leader in online IT Trainings, Placements, and Corporate Trainings.`;
export const CERTIFICATION_TEXT = `Software Certification is formal recognition of a level of proficiency in the information technology (IT) quality assurance industry.`;

export const ABOUT_US_CONTENT = {
  story: `Founded with a simple yet ambitious goal, Techskyline IT Solutions began as a response to the growing disconnect between academic learning and industry demands.`,
  mission: "To empower individuals and organizations through world-class training and innovative consulting.",
  vision: "To be the global leader in IT workforce transformation.",
  values: [
    { title: "Excellence", description: "High standards in every code and class.", icon: Award },
    { title: "Integrity", description: "Transparency and honesty in relationships.", icon: ShieldCheck }
  ],
  team: [
    { name: "Abhinav", role: "Founder & CEO", bio: "With 15+ years in IT, Abhinav leads with a passion for education.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=75" }
  ]
};

export const CORPORATE_TRAINING = {
    title: "Corporate Training Solutions",
    subtitle: "Transform Your Workforce with Custom IT Training",
    description: "We partner with organizations to build high-performance technical teams.",
    benefits: [
        { title: "Customized Curriculum", description: "Modules tailored to your project requirements.", icon: Settings },
        { title: "Hands-on Labs", description: "Secure, cloud-based sandbox environments.", icon: Cloud }
    ],
    process: [
        { step: "01", title: "Discovery", desc: "Analyze business goals & skill gaps." }
    ],
    technologies: [
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker"] }
    ]
};

export const TECH_STACK = [
  { name: "HubSpot", category: "CRM" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Analytics 4", category: "Tracking" }
];