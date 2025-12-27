import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, Wand2, Mail, Globe, 
  ArrowRight, ShieldCheck, Zap, Layers 
} from 'lucide-react';
import { 
  CONTACT_INFO, HERO_CONTENT, STATS, 
  CONSULTING_SERVICES 
} from './constants';
import { TechSkylineLogo } from './Logo';
import { About } from './About';
import { Policies } from './Policies';
import { Corporate360 } from './Corporate360';
import { AIWorkforce } from './AIWorkforce';
import { AIStudio } from './AIStudio';
import { Contact } from './Contact';

type View = 'home' | 'about' | 'policies' | 'corporate-360' | 'ai-workforce' | 'ai-studio' | 'contact';

const App = () => {
  const [view, setView] = useState<View>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (newView: View, sectionId?: string) => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (sectionId && newView === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Services', view: 'home', section: 'services' },
    { name: 'Training', view: 'corporate-360' },
    { name: 'AI Workforce', view: 'ai-workforce' },
    { name: 'About', view: 'about' },
    { name: 'Contact', view: 'contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-500 selection:text-white bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('home')}
          >
            <TechSkylineLogo className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none uppercase">Tech Skyline</span>
              <span className="text-[10px] font-bold text-brand-500 tracking-[0.2em] uppercase leading-none">IT Solutions</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.view as View, link.section)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${view === link.view ? 'text-brand-500' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => navigate('ai-studio')}
              className="px-6 py-2.5 bg-studio-600 hover:bg-studio-500 rounded-full text-xs font-black flex items-center gap-2 transition-all shadow-xl shadow-studio-600/20 active:scale-95"
            >
              <Wand2 size={14} /> AI STUDIO
            </button>
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 glass lg:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              className="text-2xl font-black uppercase"
              onClick={() => navigate(link.view as View, link.section)}
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => navigate('ai-studio')} className="text-studio-400 font-black text-2xl uppercase">AI Studio</button>
        </div>
      )}

      {/* Main Viewport */}
      <main className="relative z-10">
          {view === 'home' && <HomeView onNavigate={navigate} />}
          {view === 'about' && <About />}
          {view === 'policies' && <Policies />}
          {view === 'corporate-360' && <Corporate360 onBack={() => navigate('home')} />}
          {view === 'ai-workforce' && <AIWorkforce onBack={() => navigate('home')} />}
          {view === 'ai-studio' && <AIStudio onBack={() => navigate('home')} />}
          {view === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <TechSkylineLogo className="w-8 h-8" />
                <span className="text-xl font-black tracking-tighter uppercase">Tech Skyline</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {CONTACT_INFO.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Global Expertise</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li onClick={() => navigate('corporate-360')} className="hover:text-brand-500 cursor-pointer">Corporate 360 Training</li>
                <li onClick={() => navigate('ai-workforce')} className="hover:text-brand-500 cursor-pointer">AI Workforce Reskilling</li>
                <li onClick={() => navigate('home', 'services')} className="hover:text-brand-500 cursor-pointer">Enterprise Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li onClick={() => navigate('about')} className="hover:text-brand-500 cursor-pointer">Our Identity</li>
                <li onClick={() => navigate('policies')} className="hover:text-brand-500 cursor-pointer">Legal Policies</li>
                <li onClick={() => navigate('contact')} className="hover:text-brand-500 cursor-pointer">Get in Touch</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Info</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-3"><Mail size={16} className="text-brand-500" /> {CONTACT_INFO.email}</li>
                <li className="flex items-center gap-3"><Globe size={16} className="text-brand-500" /> {CONTACT_INFO.address}</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">© {new Date().getFullYear()} {CONTACT_INFO.company}. All Rights Reserved.</p>
            <div className="flex gap-6">
               <button onClick={() => navigate('policies')} className="text-[10px] text-slate-600 font-bold hover:text-white uppercase tracking-widest">Terms</button>
               <button onClick={() => navigate('policies')} className="text-[10px] text-slate-600 font-bold hover:text-white uppercase tracking-widest">Privacy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomeView = ({ onNavigate }: { onNavigate: (v: View, s?: string) => void }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-brand-600/10 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[20rem] h-[20rem] bg-studio-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-brand-500 text-[10px] font-black uppercase tracking-widest mb-10">
              <Sparkles size={14} /> Shaping the Global Digital Skyline
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.85] uppercase">
              Information Technology <br/>
              <span className="gradient-text">Consulting.</span> <br/>
              <span className="text-slate-500">Get Your Skyline.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl leading-relaxed font-light">
              {HERO_CONTENT.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-brand-600 hover:bg-brand-500 rounded-2xl font-black text-lg text-white shadow-2xl shadow-brand-600/20 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3"
              >
                Inquire Now <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 glass border-white/10 rounded-2xl font-black text-lg text-white hover:bg-white/5 transition-all flex items-center gap-3"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-24 border-y border-white/5 glass">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{stat.label}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section id="services" className="py-32 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black text-brand-500 uppercase tracking-[0.5em] mb-4">Strategic Matrix</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Bespoke Enterprise Solutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {CONSULTING_SERVICES.map((service, i) => (
              <div key={i} className="glass p-12 rounded-[3rem] group hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon size={120} />
                </div>
                <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center text-brand-500 mb-10 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-xl">
                  <service.icon size={32} />
                </div>
                <h4 className="text-2xl font-black mb-6 text-white uppercase">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Banner */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass p-16 md:p-24 rounded-[4rem] flex flex-col lg:flex-row items-center gap-20 border-white/5 relative shadow-2xl">
             <div className="lg:w-1/2">
                <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tighter uppercase">
                   Scaling Your <br/>
                   <span className="text-brand-500">Global Workforce.</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
                   Our integrated "Consult-and-Train" model ensures that your business doesn't just acquire the technology it needs, but also builds the leadership and talent to master it.
                </p>
                <div className="flex gap-4">
                   <button onClick={() => onNavigate('corporate-360')} className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-500 hover:text-white transition-all">Explore Training</button>
                </div>
             </div>
             <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Compliance Ready", desc: "SOC2 & GDPR focused training." },
                  { icon: Zap, title: "ROI Driven", desc: "Measurable productivity uplifts." },
                  { icon: Layers, title: "LMS Integrated", desc: "Seamless content deployment." },
                  { icon: Globe, title: "Global Reach", desc: "USA & India headquarters." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 group hover:border-brand-500/30 transition-colors">
                    <item.icon className="text-brand-500 mb-4" size={24} />
                    <h5 className="text-white font-bold text-sm mb-1 uppercase">{item.title}</h5>
                    <p className="text-slate-600 text-xs font-medium">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;