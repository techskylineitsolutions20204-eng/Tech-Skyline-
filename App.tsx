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
  Quote
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
  TESTIMONIALS
} from './constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl tracking-tighter">TS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-none">Techskyline.in</h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide">IT SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Training', 'Staffing', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
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
          <div className="md:hidden bg-white border-b border-slate-200 absolute w-full">
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
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 rounded-bl-[100px] -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              TRANSFORMING BUSINESS THROUGH TECHNOLOGY
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
              {HERO_CONTENT.subtitle}
            </p>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white border-2 border-slate-200 text-slate-700 hover:border-primary-600 hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Scrolling Banner */}
      <section className="py-10 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by Placed Students & Clients at</p>
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
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:scale-110 transition-transform">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-xl w-full h-48 object-cover md:h-64 translate-y-8"
                />
                 <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Training Session" 
                  className="rounded-2xl shadow-xl w-full h-48 object-cover md:h-64"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full -z-10 hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary-200 rounded-xl -z-10 hidden md:block"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
                WHO WE ARE
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">World Class IT Solutions & Training</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>{ABOUT_TRAINING_TEXT.split('\n\n')[0]}</p>
                <p>{ABOUT_TRAINING_TEXT.split('\n\n')[1]}</p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-full shadow-sm border border-slate-200">
                  <CheckCircle2 size={18} className="text-green-500" /> 3000+ Students/Year
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-full shadow-sm border border-slate-200">
                  <CheckCircle2 size={18} className="text-green-500" /> Real-time Scenarios
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">IT Consulting Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Strategic guidance and technical expertise to drive your digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((service, index) => (
              <div key={index} className="group rounded-2xl bg-white shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-slate-100">
                {service.image && (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors z-10"></div>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col relative">
                   <div className="absolute -top-8 right-8 bg-white p-3 rounded-xl shadow-md group-hover:bg-primary-600 transition-colors duration-300">
                     <service.icon size={28} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                   </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-auto">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Testing Services Sub-section */}
          <div className="mt-20 p-8 md:p-12 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Comprehensive Testing Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {TESTING_SERVICES.map((test, index) => (
                <div key={index} className="bg-slate-50 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium flex items-center gap-2 hover:bg-primary-50 hover:border-primary-200 transition-colors cursor-default">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  {test}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training & Courses */}
      <section id="training" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">IT Training & Certification</h2>
              <p className="text-slate-400 text-lg">
                Industry-recognized certifications and practical training designed by experts.
              </p>
            </div>
            <button onClick={() => scrollToSection('contact')} className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap shadow-lg shadow-primary-500/20">
              Enroll Now
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <Award className="text-yellow-500" /> Certification Training
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {CERTIFICATION_TEXT.split('\n\n')[1]}
              </p>
              <div className="text-sm text-slate-400 italic bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
                "One or more of these certifications is frequently a prerequisite for promotion or acquiring a new position."
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <Zap className="text-primary-400" /> Corporate Training
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Immediate response systems let instructors provide real-time feedback. Our data-driven approach reshapes corporate training programs, making your learning environment agile and future-ready. We train professionals to obtain real business results with skills they can immediately apply.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSE_CATEGORIES.map((category, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 hover:bg-slate-800/80 transition-all group">
                <h4 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-700 group-hover:border-primary-500/30">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.courses.map((course, cIndex) => (
                    <li key={cIndex} className="text-slate-400 text-sm flex items-start gap-2 group-hover:text-slate-300 transition-colors">
                      <ChevronRight size={14} className="mt-1 text-primary-500 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from our students and partners about their experience with Techskyline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-slate-300"} />
                  ))}
                </div>
                <div className="mb-6 relative">
                  <Quote size={40} className="text-primary-100 absolute -top-2 -left-2 -z-10" />
                  <p className="text-slate-600 text-sm italic relative z-10 leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-50">
                  {testimonial.image && (
                    <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover" />
                  )}
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{testimonial.author}</h5>
                    <p className="text-xs text-primary-600 font-medium">{testimonial.role}</p>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">IT Staffing Solutions</h2>
            <p className="text-lg text-slate-600 mb-8">
              Bringing job seekers and employers together. We specialize in permanent, contract, and temporary positions for top global companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STAFFING_FEATURES.map((feature, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-primary-200 transition-colors">
                  <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-4">
                    <feature.icon className="text-primary-600" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                  alt="Staffing and Recruitment" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <p className="font-bold text-lg">"Over 90% of our business comes from referrals and repeat clients."</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us For Staffing?</h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  Today's business demands agility. By taking the time to listen and understand our clients' needs and people's career aspirations, we have gained a unique perspective into the intersection of talent and business.
                </p>
                <p>
                  We enable you to achieve and optimize the most strategic component to business success—right people, with right skills, competencies, and attitudes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Whether you are looking for new talent, ready to make a career move, or seeking IT consulting, our team is ready to assist you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Contact Person</h4>
                    <p className="text-slate-600">{CONTACT_INFO.contactName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Location</h4>
                    <p className="text-slate-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp</h4>
                    <p className="text-slate-600">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-md">
                <iframe 
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=Marshall%20St%2C%20San%20Antonio%2C%20TX%2078212%2C%20USA&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  title="Tech Skyline Location"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Interest</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all">
                    <option>Corporate Training</option>
                    <option>IT Staffing</option>
                    <option>Consulting Services</option>
                    <option>Course Enrollment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-500/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <span className="font-bold text-xl">Techskyline.in</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                {CONTACT_INFO.tagline}
              </p>
              <div className="flex gap-4">
                {/* Social icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary-400">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-400">Consulting</button></li>
                <li><button onClick={() => scrollToSection('training')} className="hover:text-primary-400">Training</button></li>
                <li><button onClick={() => scrollToSection('staffing')} className="hover:text-primary-400">Staffing</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Top Courses</h4>
              <ul className="space-y-2 text-sm">
                <li>AWS & Cloud Computing</li>
                <li>Data Science & AI</li>
                <li>SAP S4 HANA</li>
                <li>DevOps Engineering</li>
                <li>Cyber Security</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0" /> {CONTACT_INFO.address}</li>
                <li className="flex items-center gap-2"><Phone size={14} /> {CONTACT_INFO.phone}</li>
                <li className="flex items-center gap-2"><MessageCircle size={14} /> {CONTACT_INFO.whatsapp}</li>
                <li className="flex items-center gap-2"><Mail size={14} /> {CONTACT_INFO.email}</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;