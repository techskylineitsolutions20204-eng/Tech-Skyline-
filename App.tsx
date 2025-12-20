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
  const [view, setView] = useState('home'); // home, about, policies, corporate-360, ai-workforce
  
  const scrollRef = useRef<HTMLDivElement>(null);
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = `*New Inquiry from Techskyline.in*\n\n*Name:* ${formData.name}\n*Interest:* ${formData.interest}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/918106243684?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
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
               <button onClick={() => setActiveClass(null)} className="text-slate-400 hover:text-white transition-colors" aria-label="Close modal">
                 <XCircle size={24}/>
               </button>
             </div>
             <div className="aspect-video bg-black relative flex items-center justify-center group overflow-hidden">
               {activeClass.type === 'Video' ? (
                 <video src={activeClass.videoUrl} poster={activeClass.thumbnail} controls autoPlay className="w-full h-full object-contain"/>
               ) : (
                 <div className="w-full h-full relative flex items-center justify-center">
                    <img src={activeClass.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" alt="Thumbnail Preview" loading="lazy" />
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavigation('home')}>
              <TechSkylineLogo className="w-12 h-12 text-cyan-400 drop-shadow-lg" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors uppercase">TECH SKYLINE</h1>
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
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-cyan-400 transition-colors" aria-label="Toggle Navigation">
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

      {/* Main View Area */}
      <main className="flex-grow">
        {view === 'about' ? (
          <About />
        ) : view === 'policies' ? (
          <Policies />
        ) : view === 'corporate-360' ? (
          <Corporate360 onBack={() => handleNavigation('home')} />
        ) : view === 'ai-workforce' ? (
          <AIWorkforce onBack={() => handleNavigation('home')} />
        ) : (
          /* HOME CONTENT */
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
                      <img src={CONTACT_INFO.heroLogo} alt="Tech Skyline Hero" className="h-32 md:h-48 w-auto object-contain" />
                      <div className="mt-4 text-center">
                          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 tracking-tighter uppercase">TECH SKYLINE</h1>
                          <p className="text-xl md:text-2xl text-slate-300 font-bold tracking-[0.4em] mt-2 border-t border-white/20 pt-2 inline-block uppercase">IT SOLUTIONS</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 max-w-3xl">
                    <Quote size={40} className="text-cyan-400 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl md:text-4xl font-light italic text-white leading-relaxed tracking-wide drop-shadow-md uppercase">"{HERO_CONTENT.quote}"</p>
                  </div>
                  <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-6 text-left bg-black/20 p-4 rounded-r-lg backdrop-blur-sm uppercase">{HERO_CONTENT.description}</p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                    <button 
                      onClick={() => handleNavigation('ai-workforce')} 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 transform hover:-translate-y-1 uppercase"
                    >
                      <Brain size={20} /> AI Workforce Strategy <ArrowUpRight size={18} />
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 uppercase">
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
                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain max-w-[120px]" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-around items-center w-1/2 px-4 gap-8">
                    {CLIENTS.map((client, index) => (
                      <div key={index} className="flex items-center justify-center grayscale brightness-200 transition-all opacity-50 hover:opacity-100 hover:scale-110">
                        <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain max-w-[120px]" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Block */}
            <section className="py-16 relative">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {STATS.map((stat, index) => (
                    <div key={index} className="text-center group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white">
                        <stat.icon size={28} />
                      </div>
                      <div className="text-3xl font-black mb-1 text-white uppercase">{stat.value}</div>
                      <div className="text-[10px] text-cyan-200 font-bold uppercase tracking-wider uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Technologies Carousel */}
            <section className="py-20 relative overflow-hidden bg-slate-900/30">
               <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                     <div>
                        <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 uppercase">Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">Featured Technologies</h3>
                        <p className="text-slate-400 mt-2 max-w-xl uppercase">Explore our specialized tracks in high-demand IT domains. Swipe or use buttons to browse.</p>
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
                                 loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90"></div>
                              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                 <h4 className="text-2xl font-black text-white mb-2 leading-tight drop-shadow-md uppercase">{tech.title}</h4>
                                 <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity uppercase">{tech.description}</p>
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

            {/* Services Grid */}
            <section id="services" className="py-20 bg-black/20 backdrop-blur-sm">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 uppercase">Our Solutions</h2>
                  <h3 className="text-3xl font-bold text-white uppercase">IT Consulting Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CONSULTING_SERVICES.map((service, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group">
                      <div className="h-48 overflow-hidden relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" loading="lazy" />
                      </div>
                      <div className="p-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 -mt-16 relative z-10 border-4 border-slate-800">
                          <service.icon size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 uppercase">{service.title}</h4>
                        <p className="text-slate-400 leading-relaxed mb-4 text-sm font-light uppercase">{service.description}</p>
                        <button onClick={() => scrollToSection('contact')} className="inline-flex items-center text-cyan-400 font-bold text-sm hover:text-cyan-300 uppercase">Learn more <ChevronRight size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Training Block */}
            <section id="training" className="py-20 relative">
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/3">
                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2 uppercase">Education</h2>
                    <h3 className="text-3xl font-bold mb-6 text-white uppercase">Comprehensive IT Training</h3>
                    <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                      <h4 className="font-bold flex items-center gap-2 mb-4 text-white uppercase"><Award className="text-yellow-400" size={20} /> Certification Support</h4>
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed uppercase">{CERTIFICATION_TEXT}</p>
                      <button onClick={() => scrollToSection('contact')} className="text-cyan-400 text-sm font-bold hover:text-cyan-300 flex items-center gap-1 uppercase">Get Certified Now <ArrowRight size={14} /></button>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {COURSE_CATEGORIES.map((category, index) => (
                        <div key={index} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                          <h4 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/5 group-hover:text-purple-400 transition-colors uppercase">{category.name}</h4>
                          <ul className="space-y-3">
                            {category.courses.map((course, cIdx) => (
                              <li key={cIdx} className="flex items-center text-slate-300 text-sm uppercase"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>{course}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Corporate/AI CTA Block */}
            <section className="py-20 bg-slate-900/50 border-y border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">Elevate Your Team's Performance</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10 uppercase">
                        Our 360° corporate training approach transforms learning from a checkbox into a competitive lever for your entire organization.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                       <button 
                           onClick={() => handleNavigation('corporate')}
                           className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-2xl border border-white/10 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 uppercase"
                       >
                           Explore 360° Corporate Strategy <ArrowRight size={20} />
                       </button>
                       <button 
                           onClick={() => handleNavigation('ai-workforce')}
                           className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 uppercase"
                       >
                           <Brain size={20} /> Build AI-Powered Workforce <ArrowRight size={20} />
                       </button>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-20 relative">
              <div className="container mx-auto px-4 md:px-6">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white relative uppercase">
                      <h3 className="text-2xl font-bold mb-6 uppercase">Get In Touch</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4 uppercase"><Phone size={20} /><div><h4 className="font-bold text-sm uppercase">Phone</h4><p className="text-blue-100 text-sm uppercase">{CONTACT_INFO.phone}</p></div></div>
                        <div className="flex items-start gap-4 uppercase"><Mail size={20} /><div><h4 className="font-bold text-sm uppercase">Email</h4><p className="text-blue-100 text-sm uppercase">{CONTACT_INFO.email}</p></div></div>
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-10">
                      <h3 className="text-2xl font-bold text-white mb-6 uppercase">Start Your Journey</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label htmlFor="user-name" className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                            <input id="user-name" type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none uppercase" placeholder="Your Name" />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="user-email" className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                            <input id="user-email" type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none uppercase" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="msg-subject" className="text-xs font-bold text-slate-400 uppercase">Subject</label>
                          <input id="msg-subject" type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none uppercase" placeholder="Subject" />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="msg-text" className="text-xs font-bold text-slate-400 uppercase">Your Message</label>
                          <textarea id="msg-text" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none resize-none uppercase" placeholder="How can we help?"></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <button onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg uppercase"><MessageCircle size={20} /> WhatsApp</button>
                          <button onClick={handleEmail} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg uppercase"><Mail size={20} /> Email</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer Block */}
      <footer className="bg-slate-950 py-12 border-t border-white/10 text-slate-400 text-sm">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
               <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <TechSkylineLogo className="w-8 h-8"/> <span className="text-white font-bold uppercase tracking-widest">TECH SKYLINE</span>
               </div>
               <div className="flex gap-4 flex-wrap justify-center">
                  <span className="text-xs text-slate-500 uppercase self-center mr-2">Powered By:</span>
                  {TECH_STACK.map((tech, i) => (
                     <div key={i} className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-xs text-slate-400 uppercase">{tech.name}</div>
                  ))}
               </div>
            </div>
            <div className="flex justify-center gap-4 mb-6">
               {SOCIAL_MEDIA.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors border border-white/5" aria-label={social.name}><social.icon size={20}/></a>
               ))}
            </div>
            <p className="max-w-md mx-auto mb-8 text-center uppercase">{CONTACT_INFO.tagline}</p>
            <div className="flex justify-center gap-6 mb-8 text-xs uppercase tracking-wide items-center">
               <button onClick={() => handleNavigation('contact')} className="text-cyan-400 hover:text-white font-bold transition-colors uppercase">Contact Us</button>
               <button onClick={() => handleNavigation('policies')} className="uppercase">Privacy Policy</button>
               <button onClick={() => handleNavigation('corporate')} className="hover:text-white transition-colors uppercase">360° Strategy</button>
               <button onClick={() => handleNavigation('ai-workforce')} className="text-cyan-400 font-bold hover:text-white transition-colors uppercase">AI Training</button>
            </div>
            <p className="text-center uppercase">&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default App;