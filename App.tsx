
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
  XCircle
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
  SAMPLE_CLASSES
} from './constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [activeClass, setActiveClass] = useState<any>(null);
  
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
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        ...params,
        send_to: 'G-F2RRW778DV'
      });
    }
  };

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
    // Updated Root Background: Vibrant Dark Multi-Color Gradient
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
             
             <div className="aspect-video bg-black relative flex items-center justify-center group">
               {/* Simulation of player */}
               <img src={activeClass.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Thumbnail"/>
               <div className="z-10 bg-cyan-500/90 backdrop-blur-sm p-4 rounded-full shadow-lg shadow-cyan-500/40 cursor-pointer hover:scale-110 transition-transform">
                 <Play size={48} className="text-white fill-white ml-1"/>
               </div>
               
               {/* Simulated Controls */}
               <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="h-1 bg-slate-600/50 rounded-full mb-4 overflow-hidden cursor-pointer">
                     <div className="h-full w-1/3 bg-cyan-500 relative">
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                     </div>
                  </div>
                  <div className="flex justify-between text-white items-center">
                     <div className="flex gap-4 items-center">
                       <Play size={20} className="fill-white"/>
                       <Volume2 size={20}/>
                       <span className="text-xs self-center font-mono">12:30 / {activeClass.duration}</span>
                     </div>
                     <Maximize size={20}/>
                  </div>
               </div>
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

      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                 <img src={CONTACT_INFO.logo} alt="Logo" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">TECH SKYLINE</h1>
                <p className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] mt-0.5">IT SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {['Home', 'Services', 'Training', 'Internships', 'Library', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide hover:scale-105 transform duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </button>
              ))}
              <button 
                onClick={openGoogleForm}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 text-sm uppercase tracking-wide transform hover:-translate-y-0.5 border border-white/10"
              >
                Apply Now <ExternalLink size={14} />
              </button>
            </div>

            {/* Mobile Menu Button */}
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
              {['Home', 'Services', 'Training', 'Internships', 'Library', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-slate-300 font-medium py-3 border-b border-white/10 hover:bg-white/5 px-2 rounded uppercase hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openGoogleForm}
                className="text-left bg-cyan-500/20 text-cyan-400 font-bold py-3 px-3 rounded flex items-center gap-2 border border-cyan-500/30"
              >
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned with Large Logo & Quote */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden flex items-center min-h-[90vh]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            
            {/* Broad Way Bigger Logo Image */}
            <div className="mb-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
              <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={CONTACT_INFO.heroLogo} 
                  alt="Tech Skyline IT Solutions" 
                  className="h-32 md:h-48 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
                <div className="mt-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 tracking-tighter drop-shadow-sm uppercase">
                      TECH SKYLINE
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-bold tracking-[0.4em] mt-2 border-t border-white/20 pt-2 inline-block">
                      IT SOLUTIONS
                    </p>
                </div>
              </div>
            </div>

            {/* Quotation */}
            <div className="mb-12 max-w-3xl">
              <Quote size={40} className="text-cyan-400 mx-auto mb-4 opacity-80" />
              <p className="text-2xl md:text-4xl font-light italic text-white leading-relaxed tracking-wide drop-shadow-md">
                "{HERO_CONTENT.quote}"
              </p>
            </div>
            
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-6 text-left bg-black/20 p-4 rounded-r-lg backdrop-blur-sm">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Scrolling Banner - Glass Effect */}
      <section className="py-8 bg-black/30 backdrop-blur-md border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em]">Trusted By Industry Leaders</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-[200%] animate-scroll">
            <div className="flex justify-around items-center w-1/2 px-4 gap-8">
              {CLIENTS.map((client, index) => (
                <div key={`c1-${index}`} className="flex items-center justify-center grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300 opacity-50 hover:opacity-100 transform hover:scale-110">
                  <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
            <div className="flex justify-around items-center w-1/2 px-4 gap-8">
              {CLIENTS.map((client, index) => (
                <div key={`c2-${index}`} className="flex items-center justify-center grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-300 opacity-50 hover:opacity-100 transform hover:scale-110">
                  <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Translucent Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-black mb-1 text-white">{stat.value}</div>
                <div className="text-xs text-cyan-200 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Dark Glass */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team Collaboration" 
                    className="rounded-2xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02] border border-white/10"
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl z-0 hidden md:block opacity-50 blur-xl"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-3">Who We Are</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Leading IT Online Training Hub & Consulting Partner</h3>
                <div className="prose prose-invert text-slate-300 mb-8">
                  {ABOUT_TRAINING_TEXT.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed font-light">{paragraph}</p>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { title: "Real-time Scenarios", desc: "Training based on actual industry projects" },
                    { title: "Hands-on Experience", desc: "Practical interactive sessions" },
                    { title: "Expert Instructors", desc: "Learn from industry veterans" },
                    { title: "Placement Support", desc: "Mock interviews & resume building" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all">
                      <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Featured Technologies Section (Carousel) */}
       <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Technologies</h3>
            <p className="text-slate-400 mt-2">Swipe to explore our top-rated courses</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-slate-800/80 backdrop-blur-md p-3 rounded-full shadow-lg text-white hover:bg-cyan-600 transition-all focus:outline-none border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-slate-800/80 backdrop-blur-md p-3 rounded-full shadow-lg text-white hover:bg-cyan-600 transition-all focus:outline-none border border-white/10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Content */}
            <div className="overflow-hidden px-2 py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}
              >
                {FEATURED_TECHNOLOGIES.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerSlide}%` }}
                  >
                    <div className="group relative overflow-hidden rounded-2xl bg-slate-800 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 h-full border border-white/10">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img 
                          src={tech.image} 
                          alt={tech.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md text-cyan-50">{tech.title}</h4>
                        <p className="text-cyan-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(FEATURED_TECHNOLOGIES.length - itemsPerSlide + 1) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === idx ? 'bg-cyan-500 w-8 shadow-lg shadow-cyan-500/50' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Glass Cards */}
      <section id="services" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Solutions</h2>
            <h3 className="text-3xl font-bold text-white">IT Consulting Services</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Expertly guiding your IT and digital transformation initiatives from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-white/10 group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white mb-6 -mt-16 relative z-10 border-4 border-slate-800 transform group-hover:rotate-6 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-4 text-sm font-light">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors">
                    Learn more <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section - Deep Background */}
      <section id="training" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/3">
               <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Education</h2>
               <h3 className="text-3xl font-bold mb-6 text-white">Comprehensive IT Training</h3>
               <p className="text-slate-300 mb-8 leading-relaxed font-light">
                 We provide 100+ courses online with interactive training. Our courses are designed by industry experts to equip students with skills they can immediately apply in the workplace.
               </p>
               <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-8 hover:bg-white/5 transition-colors shadow-lg">
                 <h4 className="font-bold flex items-center gap-2 mb-4 text-white">
                   <Award className="text-yellow-400" size={20} /> Certification Support
                 </h4>
                 <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                   {CERTIFICATION_TEXT.substring(0, 150)}...
                 </p>
                 <button onClick={() => scrollToSection('contact')} className="text-cyan-400 text-sm font-bold hover:text-cyan-300 flex items-center gap-1">
                   Get Certified Now <ArrowRight size={14} />
                 </button>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide">Specialized Testing Expertise</h4>
                 <div className="flex flex-wrap gap-2">
                   {TESTING_SERVICES.map((test, idx) => (
                     <span key={idx} className="bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg text-xs border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all cursor-default font-medium">
                       {test}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
             
             <div className="lg:w-2/3">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {COURSE_CATEGORIES.map((category, index) => (
                   <div key={index} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group hover:-translate-y-1 shadow-lg">
                     <h4 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/5 group-hover:text-purple-400 transition-colors">{category.name}</h4>
                     <ul className="space-y-3">
                       {category.courses.map((course, cIdx) => (
                         <li key={cIdx} className="flex items-center text-slate-300 text-sm group-hover:text-white transition-colors">
                           <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                           {course}
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Internship & Self-Learning Section - Bright Pop */}
      <section id="internships" className="py-20 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
               <Laptop size={14} /> For Students & Self-Learners
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">{INTERNSHIP_PROGRAM.title}</h2>
             <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">{INTERNSHIP_PROGRAM.description}</p>
          </div>

          <div className="flex flex-col gap-12 items-start">
             {/* Main Content Area */}
             <div className="w-full">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                 {INTERNSHIP_PROGRAM.features.map((feat, idx) => (
                   <div key={idx} className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/5 hover:border-cyan-500/30 transition-all flex gap-4 items-start group">
                     <div className="bg-slate-800 p-3 rounded-xl shrink-0 shadow-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 transition-all">
                       <feat.icon size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-white mb-2">{feat.title}</h4>
                       <p className="text-sm text-slate-400 font-light">{feat.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               {/* Program Structure Flow */}
               <div className="mb-10 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <h4 className="font-bold text-white mb-8 flex items-center gap-3 text-xl">
                    <LayoutList className="text-purple-400" size={24} /> Program Structure
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {INTERNSHIP_PROGRAM.programSteps.map((step, idx) => (
                       <div key={idx} className="bg-slate-800/50 p-5 rounded-2xl border border-white/5 text-center relative group hover:bg-slate-800 hover:border-purple-500/50 hover:shadow-xl transition-all hover:-translate-y-1">
                          <div className="text-4xl font-black text-white/10 mb-2 group-hover:text-purple-500 transition-colors">0{idx+1}</div>
                          <div className="font-bold text-slate-200 text-sm leading-tight">{step}</div>
                          {idx < INTERNSHIP_PROGRAM.programSteps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-3 text-slate-600 transform -translate-y-1/2 z-10">
                              <ChevronRight size={20} />
                            </div>
                          )}
                       </div>
                    ))}
                  </div>
               </div>

                {/* Technologies List */}
               <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 mb-10">
                 <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-3">
                   <Zap className="text-yellow-400 fill-yellow-400" /> Technologies Covered
                 </h4>
                 <div className="flex flex-wrap gap-3">
                   {INTERNSHIP_PROGRAM.technologies.map((tech, idx) => (
                     <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-xl font-medium text-sm hover:bg-cyan-600 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-default">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Student Portal Resources Access - Glass Card */}
               <div className="bg-gradient-to-r from-slate-900/90 to-indigo-900/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative mb-10">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Laptop size={200} className="text-white" />
                 </div>
                 <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 relative z-10">
                    <div>
                        <h4 className="font-bold text-2xl text-white mb-2 flex items-center gap-3">
                            <Lock size={24} className="text-cyan-400" /> Student Portal & Resource Access
                        </h4>
                        <p className="text-slate-400 text-sm max-w-xl font-light">
                            Unlock instant access to our comprehensive digital learning ecosystem including labs, projects, and portfolio tools.
                        </p>
                    </div>
                    <button 
                        onClick={openGoogleForm}
                        className="mt-6 md:mt-0 bg-white text-slate-900 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2 transition-all transform hover:-translate-y-1"
                    >
                        Register for Access <ExternalLink size={16} />
                    </button>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                   {INTERNSHIP_PROGRAM.studentResources?.map((res, idx) => (
                     <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-cyan-400/30 transition-all group cursor-pointer h-full hover:-translate-y-1 shadow-lg">
                        <div className="flex flex-col gap-3 h-full justify-between">
                           <div>
                                <div className="bg-slate-800 p-2.5 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors text-cyan-400 w-fit mb-4 shadow-inner">
                                    <res.icon size={22} />
                                </div>
                                <h5 className="font-bold text-white text-sm mb-2">{res.title}</h5>
                                <p className="text-xs text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300">{res.description}</p>
                           </div>
                           <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1 mt-auto group-hover:text-white transition-colors">
                               {res.linkText} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                           </span>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Digital Class Library Section - Moved out of Internships */}
      <section id="library" className="py-20 relative bg-black/20 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">On-Demand Learning</h2>
            <h3 className="text-3xl font-bold text-white">Digital Class Library</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Access our repository of recorded video sessions and audio lectures. Learn at your own pace with high-quality material.</p>
          </div>
          
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {SAMPLE_CLASSES.map((cls) => (
                <div 
                  key={cls.id} 
                  onClick={() => handleClassSelect(cls)}
                  className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all cursor-pointer group hover:-translate-y-1"
                >
                   <div className="h-40 relative overflow-hidden bg-black">
                      <img src={cls.thumbnail} alt={cls.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"/>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors shadow-lg">
                            {cls.type === 'Video' ? <Play size={24} className="fill-white text-white pl-1"/> : <Headphones size={24} className="text-white"/>}
                         </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-mono border border-white/10">
                        {cls.duration}
                      </span>
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${cls.type === 'Video' ? 'bg-purple-600' : 'bg-emerald-600'}`}>
                        {cls.type}
                      </span>
                   </div>
                   <div className="p-5">
                      <h5 className="font-bold text-white text-sm line-clamp-2 leading-tight mb-3 group-hover:text-cyan-400 transition-colors h-10">{cls.title}</h5>
                      <div className="flex justify-between items-center border-t border-white/5 pt-3">
                         <p className="text-xs text-slate-400">{cls.author}</p>
                         <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">Play Now</span>
                      </div>
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Staffing Section - Dark Theme */}
      <section id="staffing" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Recruitment</h2>
                 <h3 className="text-3xl font-bold text-white mb-6">IT Staffing Solutions</h3>
                 <p className="text-slate-300 mb-8 leading-relaxed font-light">
                   We enable you to achieve and optimize the most strategic and variable component to business success—right people, with right skills, competencies, and attitudes.
                 </p>
                 
                 <div className="space-y-6">
                   {STAFFING_FEATURES.map((feature, index) => (
                     <div key={index} className="flex gap-4 group">
                       <div className="mt-1 bg-slate-800 p-3 rounded-xl text-cyan-400 h-fit group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-lg">
                         <feature.icon size={20} />
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                         <p className="text-slate-400 text-sm mt-1 leading-relaxed">{feature.description}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-40"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Staffing" 
                    className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                  />
                  <div className="absolute bottom-8 left-8 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-xs hidden sm:block border border-white/20 z-20">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="text-cyan-400" />
                      <span className="font-bold text-white text-2xl">98.8%</span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">Client satisfaction and retention in IT contract staffing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Glass Cards */}
      <section id="reviews" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Testimonials</h2>
            <h3 className="text-3xl font-bold text-white">Success Stories</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-purple-500/20 transition-all border border-white/5 hover:border-purple-500/30 relative group hover:-translate-y-1">
                <Quote className="absolute top-6 right-6 text-white/10 rotate-180 group-hover:text-purple-500/50 transition-colors" size={48} />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 italic relative z-10 leading-relaxed font-light">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.author} className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-500/50" />
                  <div>
                    <h5 className="font-bold text-white text-lg">{item.author}</h5>
                    <p className="text-xs text-slate-400 font-semibold uppercase">{item.role}</p>
                    <span className="text-[10px] text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full mt-2 inline-block border border-purple-500/30">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Clean Dark Glass */}
      <section id="contact" className="py-20 bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Get In Touch</h2>
              <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Ready to transform your business or career? Reach out to us for a consultation.
              </p>
              
              <div className="space-y-6 mb-10">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-cyan-400/30 group">
                  <div className="bg-slate-800 p-3 rounded-full text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Call Us</h4>
                    <p className="text-slate-400 group-hover:text-cyan-300 transition-colors">{CONTACT_INFO.contactName}: {CONTACT_INFO.phone}</p>
                  </div>
                </a>
                
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-green-400/30 group">
                  <div className="bg-slate-800 p-3 rounded-full text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">WhatsApp</h4>
                    <p className="text-slate-400 group-hover:text-green-300 transition-colors">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </a>
                
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-blue-400/30 group">
                  <div className="bg-slate-800 p-3 rounded-full text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email Us</h4>
                    <p className="text-slate-400 group-hover:text-blue-300 transition-colors break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                   <div className="bg-slate-800 p-3 rounded-full text-red-400">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">Location</h4>
                     <p className="text-slate-400">{CONTACT_INFO.address}</p>
                   </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/20 shadow-lg">
                 <h4 className="font-bold text-white mb-2 text-xl">Student Registration</h4>
                 <p className="text-sm text-slate-300 mb-6 font-light">Are you a student or candidate looking to register?</p>
                 <button 
                  onClick={openGoogleForm}
                  className="w-full bg-white text-slate-900 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/40"
                 >
                   <FileText size={18} /> Fill Online Application Form
                 </button>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-8">Send us a Message</h4>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50'} text-white focus:outline-none focus:ring-2 transition-all placeholder-slate-600`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.phone ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50'} text-white focus:outline-none focus:ring-2 transition-all placeholder-slate-600`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50'} text-white focus:outline-none focus:ring-2 transition-all placeholder-slate-600`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Current Location</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder-slate-600 pl-10"
                        placeholder="City, Country"
                      />
                      <MapPinned size={16} className="absolute left-3 top-3.5 text-slate-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Company / College</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder-slate-600 pl-10"
                        placeholder="Organization Name"
                      />
                      <Building size={16} className="absolute left-3 top-3.5 text-slate-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Interested In</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                    >
                      <option className="bg-slate-800">Structured Courses (Job Oriented)</option>
                      <option className="bg-slate-800">Internship & Live Projects</option>
                      <option className="bg-slate-800">Corporate Training</option>
                      <option className="bg-slate-800">Individual Training</option>
                      <option className="bg-slate-800">IT Staffing</option>
                      <option className="bg-slate-800">Consulting Services</option>
                      <option className="bg-slate-800">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Subject / Course Name *</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.subject ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50'} text-white focus:outline-none focus:ring-2 transition-all placeholder-slate-600 pl-10`}
                      placeholder="e.g. SAP HANA Training / Java Internship"
                    />
                    <Heading size={16} className="absolute left-3 top-3.5 text-slate-500" />
                    {errors.subject && <p className="text-xs text-red-400 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.subject}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/50 border ${errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-cyan-500/50 focus:border-cyan-500/50'} text-white focus:outline-none focus:ring-2 transition-all placeholder-slate-600`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
                   >
                     <MessageCircle size={18} /> WhatsApp
                   </button>
                   <button 
                    onClick={handleEmail}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
                   >
                     <Mail size={18} /> Send via Email
                   </button>
                </div>
                <p className="text-[10px] text-center text-slate-500 mt-2">
                   Clicking buttons will open WhatsApp or your Email client directly.
                </p>
              </form>
              <div className="mt-8 rounded-xl overflow-hidden h-48 border border-white/10 shadow-lg relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.636683833246!2d-98.4981144!3d29.4475591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f590499092b%3A0x6280436270517596!2sMarshall%20St%2C%20San%20Antonio%2C%20TX%2078212%2C%20USA!5e0!3m2!1sen!2sin!4v1714828192031!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-slate-400 py-12 border-t border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-sm shadow-lg">TS</div>
                <span className="font-bold text-xl tracking-tight">TECH SKYLINE</span>
              </div>
              <p className="text-sm mb-4 font-light">
                {CONTACT_INFO.tagline}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-cyan-400 transition-colors hover:scale-110 transform"><Globe size={20} /></a>
                <a href="#" className="hover:text-cyan-400 transition-colors hover:scale-110 transform"><MessageCircle size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('training')} className="hover:text-cyan-400 transition-colors">Training</button></li>
                <li><button onClick={() => scrollToSection('staffing')} className="hover:text-cyan-400 transition-colors">Staffing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm font-light">
                <li>IT Consulting</li>
                <li>Corporate Training</li>
                <li>Staff Augmentation</li>
                <li>Cloud Solutions</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm font-light">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-cyan-400" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-400 transition-colors break-all">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm font-light">
            <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
