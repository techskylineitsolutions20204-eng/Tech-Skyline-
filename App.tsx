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
  Lock
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
  INTERNSHIP_PROGRAM
} from './constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Corporate Training',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? FEATURED_TECHNOLOGIES.length - itemsPerSlide : prev - 1
    );
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openGoogleForm = () => {
    window.open(CONTACT_INFO.googleFormUrl, '_blank');
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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = `*New Inquiry from Techskyline.in*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Interest:* ${formData.interest}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918106243684?text=${encodedText}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = `Inquiry: ${formData.interest} - ${formData.name}`;
    const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Interest: ${formData.interest}

Message:
${formData.message}`;

    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-white/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-primary-600 to-indigo-700 flex items-center justify-center text-white shadow-lg">
                 <span className="font-bold text-xl">TS</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-800 leading-none tracking-tight">TECH SKYLINE</h1>
                <p className="text-xs text-primary-600 font-bold tracking-[0.2em] mt-0.5">IT SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {['Home', 'Services', 'Training', 'Internships', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-primary-600 font-semibold transition-colors text-sm uppercase tracking-wide hover:scale-105 transform duration-200"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openGoogleForm}
                className="bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2 text-sm uppercase tracking-wide transform hover:-translate-y-0.5"
              >
                Apply Now <ExternalLink size={14} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-primary-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute w-full shadow-lg h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex flex-col p-4 space-y-4">
              {['Home', 'Services', 'Training', 'Internships', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-slate-600 font-medium py-3 border-b border-slate-100 hover:bg-slate-50 px-2 rounded uppercase"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openGoogleForm}
                className="text-left bg-primary-50 text-primary-600 font-bold py-3 px-3 rounded flex items-center gap-2"
              >
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-indigo-950/80 to-purple-900/80 z-10"></div>
          <img 
            src={HERO_CONTENT.image} 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-md text-cyan-300 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
              <Zap size={16} className="fill-current" /> TRANSFORMING BUSINESS THROUGH TECHNOLOGY
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 font-light drop-shadow-md">
              {HERO_CONTENT.subtitle}
            </p>
            <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-primary-500 to-indigo-500 hover:from-primary-600 hover:to-indigo-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Scrolling Banner */}
      <section className="py-10 bg-white/80 backdrop-blur-sm border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Our Students Work At & We Consult For</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-[200%] animate-scroll">
            <div className="flex justify-around items-center w-1/2 px-4 gap-8">
              {CLIENTS.map((client, index) => (
                <div key={`c1-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 transform hover:scale-110">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
            <div className="flex justify-around items-center w-1/2 px-4 gap-8">
              {CLIENTS.map((client, index) => (
                <div key={`c2-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 transform hover:scale-110">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Colorful Gradient */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center group p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100 font-bold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - White/Clean */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team Collaboration" 
                  className="rounded-2xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl z-0 hidden md:block opacity-80"></div>
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-slate-200 rounded-2xl z-0 hidden md:block"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">About Us</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-800">Leading IT Online Training Hub & Consulting Partner</h3>
              <div className="prose prose-slate text-slate-600 mb-8">
                 {ABOUT_TRAINING_TEXT.split('\n').map((paragraph, idx) => (
                   <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                 ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { title: "Real-time Scenarios", desc: "Training based on actual industry projects" },
                  { title: "Hands-on Experience", desc: "Practical interactive sessions" },
                  { title: "Expert Instructors", desc: "Learn from industry veterans" },
                  { title: "Placement Support", desc: "Mock interviews & resume building" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Featured Technologies Section (Carousel) - Transparent/Gradient */}
       <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Expertise</h2>
            <h3 className="text-3xl font-bold text-slate-900">Featured Technologies</h3>
            <p className="text-slate-600 mt-2">Swipe to explore our top-rated courses</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg text-slate-700 hover:text-primary-600 hover:scale-110 transition-all focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg text-slate-700 hover:text-primary-600 hover:scale-110 transition-all focus:outline-none"
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
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={tech.image} 
                          alt={tech.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h4 className="text-2xl font-bold mb-1 shadow-black drop-shadow-md">{tech.title}</h4>
                        <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.description}</p>
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
                    currentSlide === idx ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Glass/Light */}
      <section id="services" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Our Solutions</h2>
            <h3 className="text-3xl font-bold text-slate-900">IT Consulting Services</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Expertly guiding your IT and digital transformation initiatives from strategy to implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 -mt-16 relative z-10 border-4 border-white transform group-hover:rotate-6 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors">
                    Learn more <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section - Deep Color Gradient */}
      <section id="training" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/3">
               <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Education</h2>
               <h3 className="text-3xl font-bold mb-6">Comprehensive IT Training</h3>
               <p className="text-slate-300 mb-8 leading-relaxed">
                 We provide 100+ courses online with interactive training. Our courses are designed by industry experts to equip students with skills they can immediately apply in the workplace.
               </p>
               <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-8 hover:bg-white/15 transition-colors">
                 <h4 className="font-bold flex items-center gap-2 mb-4 text-white">
                   <Award className="text-yellow-400" size={20} /> Certification Support
                 </h4>
                 <p className="text-sm text-slate-300 mb-4">
                   {CERTIFICATION_TEXT.substring(0, 150)}...
                 </p>
                 <button onClick={() => scrollToSection('contact')} className="text-cyan-400 text-sm font-bold hover:text-cyan-300 flex items-center gap-1">
                   Get Certified Now <ArrowRight size={14} />
                 </button>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-bold mb-4 text-white">Software Testing Expertise</h4>
                 <div className="flex flex-wrap gap-2">
                   {TESTING_SERVICES.map((test, idx) => (
                     <span key={idx} className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-default">
                       {test}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
             
             <div className="lg:w-2/3">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {COURSE_CATEGORIES.map((category, index) => (
                   <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all group">
                     <h4 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2 group-hover:text-cyan-400 transition-colors">{category.name}</h4>
                     <ul className="space-y-2">
                       {category.courses.map((course, cIdx) => (
                         <li key={cIdx} className="flex items-center text-slate-300 text-sm group-hover:text-slate-200">
                           <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
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

      {/* Internship & Self-Learning Section - Vibrant Light Gradient */}
      <section id="internships" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 shadow-sm text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
               <Laptop size={14} /> For Students & Self-Learners
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{INTERNSHIP_PROGRAM.title}</h2>
             <p className="text-slate-600 max-w-3xl mx-auto text-lg">{INTERNSHIP_PROGRAM.description}</p>
          </div>

          <div className="flex flex-col gap-12 items-start">
             {/* Main Content Area */}
             <div className="w-full">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                 {INTERNSHIP_PROGRAM.features.map((feat, idx) => (
                   <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white hover:border-blue-200 hover:shadow-md transition-all flex gap-4 items-start">
                     <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-3 rounded-lg shrink-0 shadow-lg shadow-blue-500/20">
                       <feat.icon size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 mb-1">{feat.title}</h4>
                       <p className="text-sm text-slate-600">{feat.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               {/* Program Structure Flow */}
               <div className="mb-10 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-8 flex items-center gap-2 text-xl">
                    <LayoutList className="text-indigo-600" size={24} /> Program Structure
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {INTERNSHIP_PROGRAM.programSteps.map((step, idx) => (
                       <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center relative group hover:border-indigo-300 hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="text-3xl font-black text-slate-200 mb-2 group-hover:text-indigo-500 transition-colors">0{idx+1}</div>
                          <div className="font-bold text-slate-800 text-sm leading-tight">{step}</div>
                          {idx < INTERNSHIP_PROGRAM.programSteps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-3 text-slate-300 transform -translate-y-1/2 z-10">
                              <ChevronRight size={20} />
                            </div>
                          )}
                       </div>
                    ))}
                  </div>
               </div>

                {/* Technologies List */}
               <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-100 mb-10">
                 <h4 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                   <Zap className="text-yellow-500 fill-yellow-500" /> Technologies Covered
                 </h4>
                 <div className="flex flex-wrap gap-3">
                   {INTERNSHIP_PROGRAM.technologies.map((tech, idx) => (
                     <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all shadow-sm">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Student Portal Resources Access */}
               <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Laptop size={150} />
                 </div>
                 <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 relative z-10">
                    <div>
                        <h4 className="font-bold text-2xl mb-2 flex items-center gap-3">
                            <Lock size={24} className="text-cyan-400" /> Student Portal & Resource Access
                        </h4>
                        <p className="text-slate-300 text-sm max-w-xl">
                            Unlock instant access to our comprehensive digital learning ecosystem including labs, projects, and portfolio tools.
                        </p>
                    </div>
                    <button 
                        onClick={openGoogleForm}
                        className="mt-6 md:mt-0 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2 transition-all transform hover:-translate-y-1"
                    >
                        Register for Access <ExternalLink size={16} />
                    </button>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                   {INTERNSHIP_PROGRAM.studentResources?.map((res, idx) => (
                     <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-white/20 transition-all group cursor-pointer h-full hover:-translate-y-1 shadow-lg">
                        <div className="flex flex-col gap-3 h-full justify-between">
                           <div>
                                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors text-cyan-400 w-fit mb-4">
                                    <res.icon size={22} />
                                </div>
                                <h5 className="font-bold text-white text-sm mb-2">{res.title}</h5>
                                <p className="text-xs text-slate-300 mb-4 leading-snug group-hover:text-slate-200">{res.description}</p>
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

      {/* Staffing Section - White/Clean */}
      <section id="staffing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
               <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Recruitment</h2>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">IT Staffing Solutions</h3>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 We enable you to achieve and optimize the most strategic and variable component to business success—right people, with right skills, competencies, and attitudes.
               </p>
               
               <div className="space-y-6">
                 {STAFFING_FEATURES.map((feature, index) => (
                   <div key={index} className="flex gap-4 group">
                     <div className="mt-1 bg-primary-50 p-3 rounded-xl text-primary-600 h-fit group-hover:bg-primary-600 group-hover:text-white transition-colors">
                       <feature.icon size={20} />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary-600 transition-colors">{feature.title}</h4>
                       <p className="text-slate-600 text-sm mt-1">{feature.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Staffing" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs hidden sm:block border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-primary-600" />
                    <span className="font-bold text-slate-900 text-2xl">98.8%</span>
                  </div>
                  <p className="text-slate-600 text-sm font-medium">Client satisfaction and retention in IT contract staffing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Warm Gradient */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-2">Testimonials</h2>
            <h3 className="text-3xl font-bold text-slate-900">Success Stories</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-100 relative group">
                <Quote className="absolute top-6 right-6 text-purple-100 rotate-180 group-hover:text-purple-200 transition-colors" size={48} />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic relative z-10 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100" />
                  <div>
                    <h5 className="font-bold text-slate-900">{item.author}</h5>
                    <p className="text-xs text-slate-500 font-semibold uppercase">{item.role}</p>
                    <span className="text-xs text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full mt-1 inline-block">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Clean Gradient to White */}
      <section id="contact" className="py-20 bg-gradient-to-t from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">Get In Touch</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h3>
              <p className="text-slate-600 mb-8">
                Ready to transform your business or career? Reach out to us for a consultation.
              </p>
              
              <div className="space-y-6 mb-10">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-slate-600 group-hover:text-primary-600 transition-colors">{CONTACT_INFO.contactName}: {CONTACT_INFO.phone}</p>
                  </div>
                </a>
                
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp</h4>
                    <p className="text-slate-600 group-hover:text-green-600 transition-colors">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </a>
                
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-600 group-hover:text-blue-600 transition-colors break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                   <div className="bg-red-100 p-3 rounded-full text-red-600">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Location</h4>
                     <p className="text-slate-600">{CONTACT_INFO.address}</p>
                   </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h4 className="font-bold text-slate-900 mb-2">Student Registration</h4>
                 <p className="text-sm text-slate-600 mb-4">Are you a student or candidate looking to register?</p>
                 <button 
                  onClick={openGoogleForm}
                  className="w-full bg-white border border-slate-300 text-slate-700 hover:text-white hover:bg-primary-600 hover:border-transparent font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                 >
                   <FileText size={18} /> Fill Online Application Form
                 </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-primary-100 focus:border-primary-500'} focus:outline-none focus:ring-4 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-primary-100 focus:border-primary-500'} focus:outline-none focus:ring-4 transition-all`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</p>}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-primary-100 focus:border-primary-500'} focus:outline-none focus:ring-4 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Interested In</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all bg-white"
                  >
                    <option>Corporate Training</option>
                    <option>Individual Training</option>
                    <option>Internship & Self-Learning</option>
                    <option>IT Staffing</option>
                    <option>Consulting Services</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-primary-100 focus:border-primary-500'} focus:outline-none focus:ring-4 transition-all`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                   <button 
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                   >
                     <MessageCircle size={18} /> WhatsApp
                   </button>
                   <button 
                    onClick={handleEmail}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                   >
                     <Mail size={18} /> Email
                   </button>
                </div>
                <p className="text-xs text-center text-slate-400 mt-2">
                   Clicking buttons will open WhatsApp or your Email client directly.
                </p>
              </form>
              <div className="mt-8 rounded-lg overflow-hidden h-48 border border-slate-200 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.636683833246!2d-98.4981144!3d29.4475591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f590499092b%3A0x6280436270517596!2sMarshall%20St%2C%20San%20Antonio%2C%20TX%2078212%2C%20USA!5e0!3m2!1sen!2sin!4v1714828192031!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
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
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-white">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary-600 to-indigo-700 flex items-center justify-center font-bold text-sm">TS</div>
                <span className="font-bold text-xl">TECH SKYLINE</span>
              </div>
              <p className="text-sm mb-4">
                {CONTACT_INFO.tagline}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors hover:scale-110 transform"><Globe size={20} /></a>
                <a href="#" className="hover:text-white transition-colors hover:scale-110 transform"><MessageCircle size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('training')} className="hover:text-primary-400 transition-colors">Training</button></li>
                <li><button onClick={() => scrollToSection('staffing')} className="hover:text-primary-400 transition-colors">Staffing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>IT Consulting</li>
                <li>Corporate Training</li>
                <li>Staff Augmentation</li>
                <li>Cloud Solutions</li>
                <li>Data Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-400 transition-colors">{CONTACT_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-400 transition-colors break-all">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;