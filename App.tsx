import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
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
  FileText
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
  FEATURED_TECHNOLOGIES
} from './constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Corporate Training',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    // Clear error for this field when user starts typing
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-primary-600 flex items-center justify-center text-white">
                 {/* Placeholder for actual Logo if available, using styled initials as backup */}
                 <span className="font-bold text-xl">TS</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-slate-900 leading-none tracking-tight">TECH SKYLINE</h1>
                <p className="text-xs text-primary-600 font-bold tracking-[0.2em] mt-0.5">IT SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['Home', 'Services', 'Training', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-primary-600 font-semibold transition-colors text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={openGoogleForm}
                className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md shadow-primary-600/20 flex items-center gap-2 text-sm uppercase tracking-wide"
              >
                Apply Now <ExternalLink size={14} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-primary-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 absolute w-full shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {['Home', 'Services', 'Training', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-slate-600 font-medium py-2 hover:bg-slate-50 px-2 rounded"
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
          <img 
            src={HERO_CONTENT.image} 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 border border-primary-500/30 backdrop-blur-sm text-primary-300 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
              <Zap size={16} className="fill-current" /> TRANSFORMING BUSINESS THROUGH TECHNOLOGY
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
              {HERO_CONTENT.subtitle}
            </p>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold transition-all">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Scrolling Banner */}
      <section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Our Students Work At & We Consult For</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-[200%] animate-scroll">
            <div className="flex justify-around items-center w-1/2 px-4 gap-8">
              {CLIENTS.map((client, index) => (
                <div key={`c1-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
            <div className="flex justify-around items-center w-1/2 px-4 gap-8">
              {CLIENTS.map((client, index) => (
                <div key={`c2-${index}`} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain max-w-[120px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center group p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="bg-primary-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:scale-110 transition-transform">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl w-full h-auto z-10 relative"
                />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-100 rounded-full -z-0"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-100 rounded-full -z-0"></div>
                
                {/* Float Card */}
                <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-xs z-20">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <Award size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">Award Winning</p>
                     <p className="text-xs text-slate-500">Training & Staffing</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-bold mb-6">
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Empowering Businesses & Careers Through Technology</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>{ABOUT_TRAINING_TEXT.split('\n\n')[0]}</p>
                <p>{ABOUT_TRAINING_TEXT.split('\n\n')[1]}</p>
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => scrollToSection('contact')} className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center gap-2">
                  Learn more about us <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Technologies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Master In-Demand Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our training programs cover the most critical skills needed in today's tech landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_TECHNOLOGIES.map((tech, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer">
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors z-10"></div>
                <img src={tech.image} alt={tech.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{tech.title}</h3>
                  <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((service, index) => (
              <div key={index} className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-100 overflow-hidden transition-all duration-300 flex flex-col h-full">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                     <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 mt-auto">
                    Get Consultation <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 rounded-l-full blur-3xl -z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized IT Training</h2>
               <p className="text-slate-400 text-lg max-w-2xl">
                 From corporate upskilling to individual certification, we provide the learning path to success.
               </p>
             </div>
             <button onClick={() => scrollToSection('contact')} className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary-900/50 transition-all">
               View Course Catalog
             </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
             {COURSE_CATEGORIES.map((category, index) => (
               <div key={index} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors">
                 <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <div className="w-2 h-8 bg-primary-500 rounded-full"></div>
                   {category.name}
                 </h4>
                 <ul className="space-y-3">
                   {category.courses.map((course, i) => (
                     <li key={i} className="text-slate-400 text-sm hover:text-primary-400 cursor-default transition-colors flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> {course}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>

          <div className="mt-12 p-8 bg-primary-900/50 border border-primary-800 rounded-2xl flex flex-col md:flex-row items-center gap-8">
             <div className="md:w-2/3">
               <h3 className="text-2xl font-bold mb-2">Certification Matters</h3>
               <p className="text-slate-300">{CERTIFICATION_TEXT.split('\n\n')[1]}</p>
             </div>
             <div className="md:w-1/3 flex justify-center">
                <div className="flex -space-x-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-xs font-bold">AWS</div>
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-xs font-bold">SAP</div>
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-xs font-bold">CISCO</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories & Reviews</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what our students and corporate clients have to say about our training and staffing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-slate-300"} />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                    testimonial.category.includes('Placement') ? 'bg-green-100 text-green-700' :
                    testimonial.category.includes('Learning') ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {testimonial.category.split(' - ')[1]}
                  </span>
                </div>
                
                <div className="mb-6 relative flex-1">
                  <Quote size={24} className="text-slate-200 mb-2" />
                  <p className="text-slate-700 text-sm leading-relaxed">"{testimonial.text}"</p>
                </div>
                
                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-50">
                  <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{testimonial.author}</h5>
                    <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Section */}
      <section id="staffing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-bold mb-6">
                IT STAFFING SOLUTIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Connecting Talent with Opportunity</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you are looking for new talent or ready to make a career move, our team of experienced recruiters is ready to assist you. We specialize in permanent, contract, and temporary positions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {STAFFING_FEATURES.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary-600">
                        <feature.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-100 rounded-3xl p-8 transform rotate-3 absolute inset-0 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                alt="Meeting" 
                className="rounded-2xl shadow-xl w-full" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                <p className="font-bold text-slate-900 text-lg mb-1">90%+</p>
                <p className="text-slate-600 text-sm">Of our business comes from referrals and repeat clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-slate-400 mb-10 text-lg">
                Ready to transform your business or career? Contact us today for a free consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-800 p-4 rounded-xl text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Visit Us</h4>
                    <p className="text-slate-400 mt-1">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-800 p-4 rounded-xl text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Call Us</h4>
                    <p className="text-slate-400 mt-1">Abhinav: {CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-800 p-4 rounded-xl text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                    <p className="text-slate-400 mt-1">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-800 p-4 rounded-xl text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email Us</h4>
                    <p className="text-slate-400 mt-1">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                
                {/* Registration Button Callout */}
                <div className="pt-6 border-t border-slate-800">
                  <p className="text-slate-400 mb-4">Prefer to fill a detailed application form?</p>
                  <button 
                    onClick={openGoogleForm}
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FileText size={20} className="text-primary-400" /> Fill Online Registration Form
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 outline-none transition-all ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500'}`}
                      placeholder="Your Name" 
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 outline-none transition-all ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500'}`}
                      placeholder="Your Number" 
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500'}`}
                    placeholder="john@example.com" 
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Interest</label>
                  <div className="relative">
                    <select 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none"
                    >
                      <option>Corporate Training</option>
                      <option>IT Staffing</option>
                      <option>Consulting Services</option>
                      <option>Course Enrollment</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" size={16} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={3} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 outline-none transition-all ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-500 focus:border-primary-500'}`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 gap-3 pt-2">
                  <button 
                    onClick={handleWhatsApp}
                    type="button" 
                    className="w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-[#128C7E] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </button>
                  
                  <button 
                    onClick={handleEmail}
                    type="button" 
                    className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <Mail size={20} /> Send Inquiry Email
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Map Embed - Now below form for better mobile layout */}
          <div className="mt-16 w-full h-80 bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700">
            <iframe 
              className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity"
              src="https://maps.google.com/maps?q=Marshall%20St%2C%20San%20Antonio%2C%20TX%2078212%2C%20USA&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Tech Skyline Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center font-bold text-sm">TS</div>
                <span className="font-bold text-xl tracking-tight">TECH SKYLINE</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-500">
                {CONTACT_INFO.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors">IT Consulting</button></li>
                <li><button onClick={() => scrollToSection('staffing')} className="hover:text-primary-400 transition-colors">Staffing Solutions</button></li>
                <li><button onClick={() => scrollToSection('training')} className="hover:text-primary-400 transition-colors">Corporate Training</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors">Cloud Migration</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Top Courses</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-primary-400 cursor-pointer">AWS & Cloud Computing</li>
                <li className="hover:text-primary-400 cursor-pointer">Data Science & AI</li>
                <li className="hover:text-primary-400 cursor-pointer">SAP S4 HANA</li>
                <li className="hover:text-primary-400 cursor-pointer">DevOps Engineering</li>
                <li className="hover:text-primary-400 cursor-pointer">Cyber Security</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary-500" /> 
                  <span className="text-slate-400">{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-primary-500" /> 
                  <span className="text-slate-400">{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-primary-500" /> 
                  <span className="text-slate-400">{CONTACT_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved. | <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span> | <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;