import React, { useState, useEffect, useRef } from 'react';
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
  ArrowUpRight,
  Award,
  Zap,
  Users,
  MapPin,
  Star,
  Quote,
  AlertCircle,
  Globe,
  Briefcase,
  ExternalLink,
  FileText,
  Laptop,
  LayoutList,
  Lock,
  Building,
  MapPinned,
  Heading,
  Headphones,
  Play,
  Volume2,
  Maximize,
  Video as VideoIcon,
  XCircle,
  Terminal,
  Cpu,
  Wifi,
  Maximize2,
  Minimize2,
  Power,
  Filter,
  Briefcase as BriefcaseIcon,
  Brain,
  ShieldCheck,
  Trophy,
  Smile,
  Timer,
  Search,
  Check,
  ClipboardCheck,
  Target,
  Heart,
  RefreshCcw,
  Sparkles,
  Binary
} from 'lucide-react';
import { 
  CONTACT_INFO, 
  HERO_CONTENT, 
  STATS, 
  CONSULTING_SERVICES, 
  TESTING_SERVICES, 
  COURSE_CATEGORIES, 
  STAFFING_FEATURES,
  STAFFING_CONTENT,
  ABOUT_TRAINING_TEXT,
  CERTIFICATION_TEXT,
  CLIENTS,
  TESTIMONIALS,
  FEATURED_TECHNOLOGIES,
  INTERNSHIP_PROGRAM,
  SAMPLE_CLASSES,
  CORPORATE_TRAINING,
  TECH_STACK,
  SOCIAL_MEDIA
} from './constants';
import { TechSkylineLogo } from './Logo';
import { About } from './About';
import { Policies } from './Policies';
import { Corporate360 } from './Corporate360';
import { AIWorkforce } from './AIWorkforce';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [activeClass, setActiveClass] = useState<any>(null);
  const [activeCourseFilter, setActiveCourseFilter] = useState("All");
  const [view, setView] = useState('home'); // 'home', 'about', 'policies', 'corporate-360', 'ai-workforce'
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
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

  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== 'undefined') {
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({ event: eventName, ...params });
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, params);
      }
    }
  };

  useEffect(() => {
    if (activeLab) {
      setLabBootLines([]);
      setIsLabReady(false);
      const bootSequence = [
        `Connecting to ${activeLab.name} Secure Cloud Environment...`,
        "Authenticating user credentials...",
        "Allocating resources (4 vCPU, 16GB RAM)...",
        "Environment Ready."
      ];
      let delay = 0;
      bootSequence.forEach((line, index) => {
        delay += Math.random() * 800 + 200;
        setTimeout(() => {
          setLabBootLines(prev => [...prev, line]);
          if (index === bootSequence.length - 1) setIsLabReady(true);
        }, delay);
      });
    }
  }, [activeLab]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (destination: string) => {
    setIsMenuOpen(false);
    if (destination === 'corporate') {
        setView('corporate-360');
        window.scrollTo(0,0);
        return;
    }
    if (destination === 'ai-workforce') {
        setView('ai-workforce');
        window.scrollTo(0,0);
        return;
    }
    if (['home', 'services', 'training', 'internships', 'staffing', 'reviews', 'contact'].includes(destination)) {
      if (view !== 'home') {
        setView('home');
        setTimeout(() => scrollToSection(destination), 100);
      } else {
        scrollToSection(destination);
      }
    } else {
      setView(destination);
      window.scrollTo(0, 0);
    }
  };

  const openGoogleForm = () => {
    window.open(CONTACT_INFO.googleFormUrl, '_blank');
  };

  const handleClassSelect = (cls: any) => setActiveClass(cls);
  const handleLabLaunch = (tech: any) => setActiveLab(tech);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const text = `*New Inquiry from Techskyline.in*\n\n*Name:* ${formData.name}\n*Interest:* ${formData.interest}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/918106243684?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = `[Inquiry]: ${formData.interest} - ${formData.subject}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative flex flex-col">
      
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
               {activeClass.type === 'Video' ? (
                 <video src={activeClass.videoUrl} poster={activeClass.thumbnail} controls autoPlay className="w-full h-full object-contain"/>
               ) : (
                 <div className="w-full h-full relative flex items-center justify-center">
                    <img src={activeClass.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" alt="Thumbnail"/>
                    <div className="z-10 bg-black/50 p-8 rounded-2xl backdrop-blur-md border border-white/10 w-3/4 max-w-md text-center">
                       <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 animate-pulse">
                          <Headphones size={32} className="text-white"/>
                       </div>
                       <h4 className="text-white font-bold">{activeClass.title}</h4>
                       <p className="text-purple-300 text-sm">{activeClass.author}</p>
                       <audio src={activeClass.audioUrl} controls autoPlay className="w-full mt-4"/>
                    </div>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}

      {/* Lab Simulation Modal */}
      {activeLab && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-5xl bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col h-[80vh]">
              <div className="bg-slate-800 p-2 flex items-center justify-between border-b border-black">
                 <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 ml-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                    <div className="ml-4 px-3 py-1 bg-black/40 rounded-md text-xs font-mono text-slate-400 flex items-center gap-2"><Terminal size={12} /> techskyline-lab-server</div>
                 </div>
                 <button onClick={() => setActiveLab(null)} className="text-slate-400 hover:text-white transition-colors mr-2"><X size={18} /></button>
              </div>
              <div className="flex-1 bg-black p-6 font-mono text-sm overflow-y-auto font-light leading-6">
                 {labBootLines.map((line, idx) => (
                    <div key={idx} className="text-green-500/90 mb-1"><span className="text-blue-500 mr-2">root@techskyline:~#</span>{line}</div>
                 ))}
                 {isLabReady && (
                    <div className="mt-4 p-4 border border-green-500/30 bg-green-900/10 rounded-lg animate-pulse">
                       <div className="text-green-400 font-bold mb-2">ACCESS GRANTED</div>
                       <button onClick={openGoogleForm} className="mt-4 bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 rounded text-xs transition-colors">PROCEED TO LAB DASHBOARD</button>
                    </div>
                 )}
              </div>
           </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavigation('home')}>
              <TechSkylineLogo className="w-12 h-12 text-cyan-400 drop-shadow-lg" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">TECH SKYLINE</h1>
                <p className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] mt-0.5 uppercase">IT Solutions</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => handleNavigation('ai-workforce')}
                className={`text-cyan-400 hover:text-white font-bold transition-all text-xs uppercase tracking-widest flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20 group hover:bg-cyan-500/20 ${view === 'ai-workforce' ? 'bg-cyan-500/30 border-cyan-400' : ''}`}
              >
                <Brain size={14} className="group-hover:animate-pulse" /> AI Training
              </button>
              {['Home', 'Services', 'Training', 'Corporate', 'Internships', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  className={`text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide hover:scale-105 transform duration-200 relative group ${(view === 'corporate-360' && item === 'Corporate') ? 'text-cyan-400' : ''}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${(view === 'corporate-360' && item === 'Corporate') ? 'w-full' : 'w-0'}`}></span>
                </button>
              ))}
              <button onClick={() => handleNavigation('about')} className="text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide">About</button>
              <button 
                onClick={openGoogleForm}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 text-sm uppercase tracking-wide transform hover:-translate-y-0.5 border border-white/10"
              >
                Apply Now <ExternalLink size={14} />
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white hover:text-cyan-400 transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full shadow-2xl h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => handleNavigation('ai-workforce')}
                className="text-left text-cyan-400 font-bold py-3 px-3 rounded flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10"
              >
                <Brain size={18} /> AI-Powered Workforce
              </button>
              {['Home', 'Services', 'Training', 'Corporate', 'Internships', 'Staffing', 'Reviews', 'Contact', 'About'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  className="text-left text-slate-300 font-medium py-3 border-b border-white/10 hover:bg-white/5 px-2 rounded uppercase hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button onClick={openGoogleForm} className="text-left bg-cyan-500 text-white font-bold py-3 px-3 rounded flex items-center justify-center gap-2">
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow">
        {view === 'about' ? (
          <About />
        ) : view === 'policies' ? (
          <Policies />
        ) : view === 'corporate-360' ? (
          <Corporate360 onBack={() => handleNavigation('home')} />
        ) : view === 'ai-workforce' ? (
          <AIWorkforce onBack={() => handleNavigation('home')} />
        ) : (
          /* HOME VIEW CONTENT */
          <>
            <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden flex items-center min-h-[90vh]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
              </div>
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                  <div className="mb-10 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-20 transition-opacity rounded-full"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-2xl">
                      <img src={CONTACT_INFO.heroLogo} alt="Tech Skyline" className="h-32 md:h-48 w-auto object-contain"/>
                      <div className="mt-4 text-center">
                          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 tracking-tighter uppercase">TECH SKYLINE</h1>
                          <p className="text-xl md:text-2xl text-slate-300 font-bold tracking-[0.4em] mt-2 border-t border-white/20 pt-2 inline-block uppercase">IT SOLUTIONS</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 max-w-3xl">
                    <Quote size={40} className="text-cyan-400 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl md:text-4xl font-light italic text-white leading-relaxed tracking-wide drop-shadow-md">"{HERO_CONTENT.quote}"</p>
                  </div>
                  <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-6 text-left bg-black/20 p-4 rounded-r-lg backdrop-blur-sm">{HERO_CONTENT.description}</p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                    <button 
                      onClick={() => handleNavigation('ai-workforce')} 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
                    >
                      <Brain size={20} /> AI Workforce Strategy <ArrowUpRight size={18} />
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                       Contact Experts <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Clients Banner */}
            <section className="py-8 bg-black/30 backdrop-blur-md border-y border-white/10 overflow-hidden">
              <div className="container mx-auto px-4 mb-4 text-center"><p className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em]">Trusted By Industry Leaders</p></div>
              <div className="relative w-full overflow-hidden">
                <div className="flex w-[200%] animate-scroll">
                  <div className="flex justify-around items-center w-1/2 px-4 gap-8">
                    {CLIENTS.map((client, index) => (
                      <div key={index} className="flex items-center justify-center grayscale brightness-200 transition-all opacity-50 hover:opacity-100 hover:scale-110">
                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain max-w-[120px]" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-around items-center w-1/2 px-4 gap-8">
                    {CLIENTS.map((client, index) => (
                      <div key={index} className="flex items-center justify-center grayscale brightness-200 transition-all opacity-50 hover:opacity-100 hover:scale-110">
                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain max-w-[120px]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-16 relative">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {STATS.map((stat, index) => (
                    <div key={index} className="text-center group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white">
                        <stat.icon size={28} />
                      </div>
                      <div className="text-3xl font-black mb-1 text-white">{stat.value}</div>
                      <div className="text-xs text-cyan-200 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Refined Horizontal Carousel for Featured Technologies */}
            <section className="py-20 relative overflow-hidden bg-slate-900/30">
               <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                     <div>
                        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Technologies</h3>
                        <p className="text-slate-400 mt-2 max-w-xl">Explore our specialized tracks in high-demand IT domains. Swipe or use buttons to browse.</p>
                     </div>
                     <div className="flex gap-4">
                        <button 
                           onClick={scrollLeft}
                           className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all shadow-lg"
                           aria-label="Scroll Left"
                        >
                           <ChevronLeft size={24} />
                        </button>
                        <button 
                           onClick={scrollRight}
                           className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all shadow-lg"
                           aria-label="Scroll Right"
                        >
                           <ChevronRight size={24} />
                        </button>
                     </div>
                  </div>

                  {/* Horizontal Scroll Container */}
                  <div 
                     ref={scrollRef}
                     className="flex gap-8 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory"
                  >
                     {FEATURED_TECHNOLOGIES.map((tech, index) => (
                        <div 
                           key={index} 
                           className="flex-shrink-0 w-[280px] sm:w-[350px] snap-center group"
                        >
                           <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800 transition-transform duration-500 group-hover:scale-[0.98]">
                              <img 
                                 src={tech.image} 
                                 alt={tech.title} 
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90"></div>
                              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                 <h4 className="text-2xl font-black text-white mb-2 leading-tight drop-shadow-md">{tech.title}</h4>
                                 <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{tech.description}</p>
                                 <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors uppercase tracking-wider"
                                 >
                                    View Syllabus
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 bg-black/20 backdrop-blur-sm">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Solutions</h2>
                  <h3 className="text-3xl font-bold text-white">IT Consulting Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CONSULTING_SERVICES.map((service, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group">
                      <div className="h-48 overflow-hidden relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"/>
                      </div>
                      <div className="p-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 -mt-16 relative z-10 border-4 border-slate-800">
                          <service.icon size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                        <p className="text-slate-400 leading-relaxed mb-4 text-sm font-light">{service.description}</p>
                        <button onClick={() => scrollToSection('contact')} className="inline-flex items-center text-cyan-400 font-bold text-sm hover:text-cyan-300">Learn more <ChevronRight size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Training */}
            <section id="training" className="py-20 relative">
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/3">
                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Education</h2>
                    <h3 className="text-3xl font-bold mb-6 text-white">Comprehensive IT Training</h3>
                    <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                      <h4 className="font-bold flex items-center gap-2 mb-4 text-white"><Award className="text-yellow-400" size={20} /> Certification Support</h4>
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">{CERTIFICATION_TEXT}</p>
                      <button onClick={() => scrollToSection('contact')} className="text-cyan-400 text-sm font-bold hover:text-cyan-300 flex items-center gap-1">Get Certified Now <ArrowRight size={14} /></button>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {COURSE_CATEGORIES.map((category, index) => (
                        <div key={index} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                          <h4 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/5 group-hover:text-purple-400 transition-colors">{category.name}</h4>
                          <ul className="space-y-3">
                            {category.courses.map((course, cIdx) => (
                              <li key={cIdx} className="flex items-center text-slate-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>{course}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Corporate Summary Link */}
            <section className="py-20 bg-slate-900/50 border-y border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-6">Elevate Your Team's Performance</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Our 360° corporate training approach transforms learning from a checkbox into a competitive lever for your entire organization.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                       <button 
                           onClick={() => handleNavigation('corporate')}
                           className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-2xl border border-white/10 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
                       >
                           Explore 360° Corporate Strategy <ArrowRight size={20} />
                       </button>
                       <button 
                           onClick={() => handleNavigation('ai-workforce')}
                           className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
                       >
                           <Brain size={20} /> Build AI-Powered Workforce <ArrowRight size={20} />
                       </button>
                    </div>
                </div>
            </section>

            {/* Dedicated AI Corporate Training Solutions Section */}
            <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/5">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(6,182,212,0.1),transparent_50%)]"></div>
               <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
               
               <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="text-center mb-20">
                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        <Sparkles size={14} className="animate-pulse" /> The Age of Intelligence
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        AI Corporate Training Solutions
                     </h2>
                     <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Modular, scalable, and business-aligned programs designed to transform your workforce for the AI-first economy.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {/* 1. AI Quotient Assessment */}
                     <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/50 transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg border border-white/5">
                           <Binary size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">AI Quotient Assessment</h4>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                           Measure enterprise AI readiness with role-based assessments. Identify critical skill gaps and benchmark your team's capabilities.
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                           <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-1">Business Impact</div>
                           <p className="text-white text-xs font-bold">Data-Driven Workforce Strategy</p>
                        </div>
                     </div>

                     {/* 2. AI Infinity */}
                     <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg border border-white/5">
                           <Globe size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">AI Infinity</h4>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                           Company-wide AI literacy program providing foundational training for all employees to build awareness and foster a culture of innovation.
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                           <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Business Impact</div>
                           <p className="text-white text-xs font-bold">Organization-Wide AI Literacy</p>
                        </div>
                     </div>

                     {/* 3. AI Skills Academy */}
                     <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/5 hover:border-purple-500/50 transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-lg border border-white/5">
                           <Brain size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">AI Skills Academy</h4>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                           Customized deep-dive upskilling with modular programs ranging from 6 to 180 hours, tailored to specific technical goals.
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                           <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">Business Impact</div>
                           <p className="text-white text-xs font-bold">Accelerated Technical Maturity</p>
                        </div>
                     </div>

                     {/* 4. Certification Programs */}
                     <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-400/50 transition-all group flex flex-col h-full shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all"></div>
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-300 mb-8 group-hover:bg-cyan-400 group-hover:text-white transition-all shadow-lg border border-white/5">
                           <Award size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Certification Programs</h4>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                           Executive-friendly, industry-recognized certification programs for mid-to-senior professionals to lead AI transformation effectively.
                        </p>
                        <div className="pt-6 border-t border-white/5 mt-auto">
                           <div className="text-[10px] font-black text-cyan-300 uppercase tracking-widest mb-1">Business Impact</div>
                           <p className="text-white text-xs font-bold">Future-Ready Leadership</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Internships */}
            <section id="internships" className="py-20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6"><Laptop size={14} /> For Students</div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{INTERNSHIP_PROGRAM.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {INTERNSHIP_PROGRAM.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group">
                            <h5 className="font-bold text-slate-200 mb-4">{tech.name}</h5>
                            <button onClick={() => handleLabLaunch(tech)} className="w-full bg-cyan-600/20 text-cyan-400 py-2 rounded-lg text-xs font-bold border border-cyan-500/20 hover:bg-cyan-600 hover:text-white transition-all"><Terminal size={14} className="inline mr-1"/> Launch Lab</button>
                        </div>
                    ))}
                </div>
                <div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div><h4 className="text-2xl font-bold text-white mb-2">Unlock Student Portal Access</h4><p className="text-slate-400">Get lifetime recordings and pre-configured labs.</p></div>
                    <button onClick={openGoogleForm} className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-all shadow-xl">Join Now</button>
                </div>
              </div>
            </section>

            {/* Staffing Section - Re-enhanced with 'Why Choose' */}
            <section id="staffing" className="py-20 relative bg-slate-900 overflow-hidden">
               <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                     <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                           <BriefcaseIcon size={14} /> Recruitment Excellence
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                           {STAFFING_CONTENT.title}
                        </h2>
                        <p className="text-xl text-slate-300 font-light mb-10 leading-relaxed">
                           {STAFFING_CONTENT.subtitle}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           {STAFFING_CONTENT.features.map((feature, idx) => (
                              <div key={idx} className="flex flex-col p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                 <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg">
                                    <feature.icon size={24} />
                                 </div>
                                 <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                                 <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:w-1/2">
                        <div className="relative group">
                           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-[3rem] blur-2xl opacity-40"></div>
                           <img 
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                              alt="Staffing Expertise" 
                              className="relative rounded-[3rem] shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
                           />
                           <div className="absolute -bottom-10 -left-10 bg-slate-800/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl z-20 max-w-xs">
                              <Trophy className="text-yellow-500 mb-4" size={32} />
                              <div className="text-4xl font-black text-white mb-1">98.8%</div>
                              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Client Retention Rate</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Why Choose Our Staffing Services - Dedicated Sub-section */}
                  <div className="bg-white/5 rounded-[4rem] p-12 md:p-20 border border-white/10 backdrop-blur-sm">
                     <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                           {STAFFING_CONTENT.whyChoose.title}
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                           Beyond just filling seats, we provide the technical intelligence required to scale high-performing IT departments.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {STAFFING_CONTENT.whyChoose.differentiators.map((diff, i) => (
                           <div key={i} className="flex flex-col h-full bg-slate-950 p-8 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
                              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                 <diff.icon size={28} />
                              </div>
                              <h4 className="text-lg font-bold text-white mb-3">{diff.title}</h4>
                              <p className="text-sm text-slate-400 leading-relaxed">{diff.description}</p>
                           </div>
                        ))}
                     </div>

                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/5">
                        {STAFFING_CONTENT.whyChoose.metrics.map((metric, i) => (
                           <div key={i} className="text-center group">
                              <div className="text-cyan-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                                 <metric.icon size={32} strokeWidth={1.5} />
                              </div>
                              <div className="text-3xl font-black text-white mb-1">{metric.value}</div>
                              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{metric.label}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 relative">
              <div className="container mx-auto px-4 md:px-6">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white relative">
                      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4"><Phone size={20} /><div><h4 className="font-bold text-sm">Phone</h4><p className="text-blue-100 text-sm">{CONTACT_INFO.phone}</p></div></div>
                        <div className="flex items-start gap-4"><Mail size={20} /><div><h4 className="font-bold text-sm">Email</h4><p className="text-blue-100 text-sm">{CONTACT_INFO.email}</p></div></div>
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-10">
                      <h3 className="text-2xl font-bold text-white mb-6">Start Your Journey</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none" placeholder="Your Name" />
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none" placeholder="Email Address" />
                        </div>
                        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none" placeholder="Subject" />
                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none resize-none" placeholder="How can we help?"></textarea>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <button onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"><MessageCircle size={20} /> WhatsApp</button>
                          <button onClick={handleEmail} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"><Mail size={20} /> Email</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/10 text-slate-400 text-sm">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
               <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <TechSkylineLogo className="w-8 h-8"/> <span className="text-white font-bold uppercase tracking-widest">TECH SKYLINE</span>
               </div>
               <div className="flex gap-4 flex-wrap justify-center">
                  <span className="text-xs text-slate-500 uppercase self-center mr-2">Powered By:</span>
                  {TECH_STACK.map((tech, i) => (
                     <div key={i} className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-xs text-slate-400">{tech.name}</div>
                  ))}
               </div>
            </div>
            <div className="flex justify-center gap-4 mb-6">
               {SOCIAL_MEDIA.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors border border-white/5"><social.icon size={20}/></a>
               ))}
            </div>
            <p className="max-w-md mx-auto mb-8 text-center">{CONTACT_INFO.tagline}</p>
            <div className="flex justify-center gap-6 mb-8 text-xs uppercase tracking-wide items-center">
               <button onClick={() => handleNavigation('contact')} className="text-cyan-400 hover:text-white font-bold transition-colors">Contact Us</button>
               <button onClick={() => handleNavigation('policies')}>Privacy Policy</button>
               <button onClick={() => handleNavigation('corporate')} className="hover:text-white transition-colors">360° Strategy</button>
               <button onClick={() => handleNavigation('ai-workforce')} className="text-cyan-400 font-bold hover:text-white transition-colors">AI Training</button>
            </div>
            <p className="text-center">&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default App;