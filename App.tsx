
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Mail, 
  Phone, 
  MessageCircle, 
  CheckCircle2,
  ArrowRight,
  Award,
  Zap,
  Users,
  MapPin,
  Star,
  Quote,
  Briefcase as BriefcaseIcon,
  ExternalLink,
  Laptop,
  LayoutList,
  Lock,
  Headphones,
  Play,
  Video as VideoIcon,
  XCircle,
  Terminal,
  Cpu,
  Wifi,
  Maximize2,
  Power,
  Filter,
  Globe
} from 'lucide-react';
import { 
  CONTACT_INFO, 
  HERO_CONTENT, 
  STATS, 
  CONSULTING_SERVICES, 
  TESTING_SERVICES, 
  COURSE_CATEGORIES, 
  STAFFING_FEATURES,
  ABOUT_TRAINING_TEXT,
  CERTIFICATION_TEXT,
  CLIENTS,
  TESTIMONIALS,
  FEATURED_TECHNOLOGIES,
  INTERNSHIP_PROGRAM,
  SAMPLE_CLASSES,
  CORPORATE_TRAINING
} from './constants';

// --- Custom Logo Component ---
const TechSkylineLogo = ({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) => {
  const isLarge = size === "large";
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-lg" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skylineGrad" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22d3ee" />   {/* cyan-400 */}
            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Building 1 */}
        <path d="M15 45V90H35V45L25 35L15 45Z" fill="url(#skylineGrad)" opacity="0.8" />
        
        {/* Building 2 (Tallest) */}
        <path d="M40 20V90H60V20L50 10L40 20Z" fill="url(#skylineGrad)" />
        
        {/* Building 3 */}
        <path d="M65 35V90H85V35L75 25L65 35Z" fill="url(#skylineGrad)" opacity="0.9" />
        
        {/* Tech Nodes/Connections */}
        <circle cx="25" cy="55" r={isLarge ? 3 : 4} fill="white" />
        <circle cx="50" cy="30" r={isLarge ? 3 : 4} fill="white" />
        <circle cx="75" cy="45" r={isLarge ? 3 : 4} fill="white" />
        
        <path d="M25 55L50 30L75 45" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 2" />
      </svg>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [activeClass, setActiveClass] = useState<any>(null);
  const [activeCourseFilter, setActiveCourseFilter] = useState("All");
  
  // Lab Simulation State
  const [activeLab, setActiveLab] = useState<any>(null);
  const [labBootLines, setLabBootLines] = useState<string[]>([]);
  const [isLabReady, setIsLabReady] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    company: '',
    subject: '',
    interest: 'Corporate Training',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Analytics Helper Function
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined') {
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: eventName,
        ...params
      });
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, params);
      }
    }
  };

  // Lab Boot Sequence Effect
  useEffect(() => {
    if (activeLab) {
      setLabBootLines([]);
      setIsLabReady(false);
      const bootSequence = [
        `Connecting to ${activeLab.name} Secure Cloud Environment...`,
        "Authenticating user credentials...",
        "Allocating resources (4 vCPU, 16GB RAM)...",
        "Mounting volume /data/student-workspace...",
        "Initializing network interfaces... [OK]",
        "Starting services... [OK]",
        `Loading ${activeLab.name} Development Tools...`,
        "Environment Ready."
      ];

      let delay = 0;
      bootSequence.forEach((line, index) => {
        delay += Math.random() * 800 + 200; // Random delay between lines
        setTimeout(() => {
          setLabBootLines(prev => [...prev, line]);
          if (index === bootSequence.length - 1) {
            setIsLabReady(true);
          }
        }, delay);
      });
    }
  }, [activeLab]);

  // Responsive carousel settings
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= FEATURED_TECHNOLOGIES.length - itemsPerSlide ? 0 : prev + 1
    );
    trackEvent('interact_carousel', { action: 'next', slide_index: currentSlide });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? FEATURED_TECHNOLOGIES.length - itemsPerSlide : prev - 1
    );
    trackEvent('interact_carousel', { action: 'prev', slide_index: currentSlide });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      trackEvent('section_view', { section_name: id });
    }
  };

  const openGoogleForm = () => {
    trackEvent('click_apply', { destination: 'google_form', label: 'Apply Now' });
    window.open(CONTACT_INFO.googleFormUrl, '_blank');
  };

  const handleClassSelect = (cls: any) => {
    setActiveClass(cls);
    trackEvent('select_content', { 
      content_type: cls.type, 
      item_id: cls.id.toString(),
      item_name: cls.title
    });
  };
  
  const handleLabLaunch = (tech: any) => {
    setActiveLab(tech);
    trackEvent('launch_lab', { 
      tech_id: tech.id,
      tech_name: tech.name 
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.trim())) {
       newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      trackEvent('form_validation_error', { errors: Object.keys(newErrors).join(',') });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    trackEvent('generate_lead', { 
      method: 'WhatsApp', 
      source: 'Contact Form',
      interest: formData.interest,
      location: formData.location
    });

    const text = `*New Inquiry from Techskyline.in*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Location:* ${formData.location || 'Not Specified'}
*Company/College:* ${formData.company || 'Not Specified'}
*Interest:* ${formData.interest}
*Subject:* ${formData.subject}

*Message:* 
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918106243684?text=${encodedText}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    trackEvent('generate_lead', { 
      method: 'Email', 
      source: 'Contact Form',
      interest: formData.interest,
      location: formData.location
    });

    const subject = `[Inquiry]: ${formData.interest} - ${formData.subject}`;
    const body = `You have received a new inquiry from the website contact form.

CONTACT DETAILS
----------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location || 'Not Specified'}
Organization: ${formData.company || 'Not Specified'}

INQUIRY DETAILS
----------------
Interest: ${formData.interest}
Subject: ${formData.subject}

Message:
${formData.message}

----------------
Sent from Techskyline.in`;

    const targetEmail = "techskylineitsolutions20204@gmail.com";
    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative">
      
      {/* Media Player Modal */}
      {activeClass && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col relative">
             <div className="flex justify-between items-center p-4 border-b border-white/10 bg-slate-800">
               <h3 className="text-white font-bold flex items-center gap-2">
                 {activeClass.type === 'Video' ? <VideoIcon size={20} className="text-cyan-400"/> : <Headphones size={20} className="text-purple-400"/>}
                 {activeClass.title}
               </h3>
               <button onClick={() => setActiveClass(null)} className="text-slate-400 hover:text-white transition-colors">
                 <XCircle size={24}/>
               </button>
             </div>
             
             <div className="aspect-video bg-black relative flex items-center justify-center group overflow-hidden">
               {/* Real Player */}
               {activeClass.type === 'Video' ? (
                 <video 
                   src={activeClass.videoUrl} 
                   poster={activeClass.thumbnail}
                   controls 
                   autoPlay 
                   className="w-full h-full object-contain"
                 />
               ) : (
                 <div className="w-full h-full relative flex items-center justify-center">
                    <img src={activeClass.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" alt="Thumbnail"/>
                    <div className="z-10 bg-black/50 p-8 rounded-2xl backdrop-blur-md border border-white/10 w-3/4 max-w-md">
                       <div className="text-center mb-6">
                          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 animate-pulse">
                             <Headphones size={32} className="text-white"/>
                          </div>
                          <h4 className="text-white font-bold">{activeClass.title}</h4>
                          <p className="text-purple-300 text-sm">{activeClass.author}</p>
                       </div>
                       <audio 
                         src={activeClass.audioUrl} 
                         controls 
                         autoPlay
                         className="w-full"
                       />
                    </div>
                 </div>
               )}
             </div>
             
             <div className="p-6 bg-slate-800/50">
                <div className="flex justify-between items-start">
                   <div>
                      <h4 className="font-bold text-white mb-1">Session Recording Preview</h4>
                      <p className="text-cyan-400 text-sm mb-3">Instructor: {activeClass.author}</p>
                   </div>
                   <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-bold transition-colors">Download Notes</button>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  This is a sample recording from our digital library. Students enrolled in our internship program get full access to high-definition recordings of every live session, downloadable audio tracks for offline learning, and synchronized transcriptions to ensure no concept is missed.
                </p>
             </div>
          </div>
        </div>
      )}

      {/* Lab Simulation Modal */}
      {activeLab && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-5xl bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col h-[80vh]">
              {/* Terminal Header */}
              <div className="bg-slate-800 p-2 flex items-center justify-between border-b border-black">
                 <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 ml-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 px-3 py-1 bg-black/40 rounded-md text-xs font-mono text-slate-400 flex items-center gap-2">
                       <Terminal size={12} />
                       techskyline-lab-server :: {activeLab.id}-env
                    </div>
                 </div>
                 <div className="flex items-center gap-3 mr-2">
                    <span className="text-[10px] text-green-400 font-mono flex items-center gap-1">
                       <Wifi size={10} /> Connected
                    </span>
                    <button onClick={() => setActiveLab(null)} className="text-slate-400 hover:text-white transition-colors">
                       <X size={18} />
                    </button>
                 </div>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 bg-black p-6 font-mono text-sm overflow-y-auto font-light leading-6">
                 {labBootLines.map((line, idx) => (
                    <div key={idx} className="text-green-500/90 mb-1">
                       <span className="text-blue-500 mr-2">root@techskyline:~#</span>
                       {line}
                    </div>
                 ))}
                 {isLabReady && (
                    <div className="mt-4 p-4 border border-green-500/30 bg-green-900/10 rounded-lg animate-pulse">
                       <div className="text-green-400 font-bold mb-2">ACCESS GRANTED</div>
                       <p className="text-slate-300">
                          Welcome to the <strong>{activeLab.name}</strong> interactive lab environment.
                          <br/>
                          All tools and dependencies have been pre-loaded.
                       </p>
                       <button onClick={openGoogleForm} className="mt-4 bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 rounded text-xs transition-colors">
                          PROCEED TO LAB DASHBOARD
                       </button>
                    </div>
                 )}
                 {!isLabReady && (
                    <div className="inline-block w-2.5 h-5 bg-green-500 animate-pulse mt-1"></div>
                 )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-slate-800/50 p-2 border-t border-slate-700 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                 <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Cpu size={12}/> CPU: 12%</span>
                    <span className="flex items-center gap-1"><Maximize2 size={12}/> RAM: 4.2GB / 16GB</span>
                 </div>
                 <div className="flex items-center gap-1">
                    <Power size={12} className={isLabReady ? "text-green-500" : "text-yellow-500"} /> 
                    {isLabReady ? "SYSTEM ACTIVE" : "BOOTING..."}
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
              {/* Logo Replaced Here */}
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-600/10 flex items-center justify-center group-hover:shadow-cyan-500/50 transition-all duration-300 border border-white/10">
                 <TechSkylineLogo className="