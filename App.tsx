
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, Brain, Briefcase, Mail, 
  ChevronRight, ArrowRight, Shield, Globe, Zap, 
  Cpu, MessageCircle, Wand2, Search, Mic
} from 'lucide-react';
import { 
  CONTACT_INFO, HERO_CONTENT, STATS, 
  CONSULTING_SERVICES, CLIENTS, TECH_STACK 
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
      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('home')}
          >
            <TechSkylineLogo className="w-10 h-10 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">TECH SKYLINE</span>
              <span className="text-[10px] font-bold text-brand-500 tracking-[0.2em] uppercase leading-none">IT Solutions</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.view as View, link.section)}
                className={`text-sm font-semibold transition-colors ${view === link.view ? 'text-brand-500' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => navigate('ai-studio')}
              className="px-5 py-2.5 bg-studio-600 hover:bg-studio-500 rounded-full text-sm font-black flex items-center gap-2 transition-all shadow-lg shadow-studio-600/20 active:scale-95"
            >
              <Wand2 size={16} /> AI Studio
            </button>
            
            <button
              onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')}
              className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 rounded-full text-sm font-black transition-all shadow-lg shadow-brand-600/20 active:scale-95"
            >
              Apply Now
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 glass lg:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-black">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => navigate(link.view as View, link.section)}>
                {link.name}
              </button>
            ))}
            <button onClick={() => navigate('ai-studio')} className="text-studio-400 flex items-center gap-2">
              <Wand2 /> AI Studio
            </button>
            <button onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')} className="text-brand-500">
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {view === 'home' && <HomeHero onStudio={() => navigate('ai-studio')} onNavigate={navigate} />}
        {view === 'about' && <About />}
        {view === 'policies' && <Policies />}
        {view === 'corporate-360' && <Corporate360 onBack={() => navigate('home')} />}
        {view === 'ai-workforce' && <AIWorkforce onBack={() => navigate('home')} />}
        {view === 'ai-studio' && <AIStudio onBack={() => navigate('home')} />}
        {view === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <TechSkylineLogo className="w-8 h-8" />
                <span className="text-lg font-black tracking-tighter">TECH SKYLINE</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Empowering the next generation of businesses through deep technical expertise and innovative AI-driven strategies.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-500 transition-colors">
                  <Globe size={18} />
                </button>
                <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-500 transition-colors">
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                {CONSULTING_SERVICES.map(s => (
                  <li key={s.title} className="hover:text-brand-500 cursor-pointer transition-colors" onClick={() => navigate('home', 'services')}>{s.title} Consulting</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li onClick={() => navigate('corporate-360')} className="hover:text-brand-500 cursor-pointer transition-colors">Corporate Training</li>
                <li onClick={() => navigate('ai-workforce')} className="hover:text-brand-500 cursor-pointer transition-colors">AI Strategy</li>
                <li onClick={() => navigate('ai-studio')} className="hover:text-brand-500 cursor-pointer transition-colors">AI Studio</li>
                <li onClick={() => navigate('policies')} className="hover:text-brand-500 cursor-pointer transition-colors">Legal & Privacy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-3"><Mail size={16} /> {CONTACT_INFO.email}</li>
                <li className="flex items-center gap-3"><Globe size={16} /> {CONTACT_INFO.address}</li>
                <li><button onClick={() => navigate('contact')} className="px-6 py-2 bg-brand-600/10 text-brand-500 rounded-full font-bold border border-brand-500/20">Talk to AI Concierge</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs text-center md:text-left">
              © {new Date().getFullYear()} {CONTACT_INFO.company}. Built with Intelligence.
            </p>
            <div className="flex gap-8 text-[10px] md:text-xs text-slate-600 font-bold uppercase tracking-widest flex-wrap justify-center">
              {TECH_STACK.map(t => <span key={t.name}>{t.name}</span>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomeHero = ({ onStudio, onNavigate }: { onStudio: () => void, onNavigate: (v: View, s?: string) => void }) => {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-studio-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-brand-500 text-xs font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom duration-700">
              <Sparkles size={14} /> Shaping the Digital Skyline
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom duration-1000">
              Global IT <br/>
              <span className="gradient-text">Excellence.</span> <br/>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <button 
                onClick={() => onNavigate('contact')}
                className="group relative px-10 py-5 bg-brand-600 rounded-2xl font-black text-lg overflow-hidden transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-brand-600/20"
              >
                <div className="relative z-10 flex items-center gap-3 text-white">
                  Establish Contact
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button 
                className="group px-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl font-black text-lg border border-white/10 transition-all hover:-translate-y-1 active:scale-95 text-white"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Solutions
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
           <div className="absolute top-[20%] right-[10%] animate-float"><TechSkylineLogo className="w-32 h-32 opacity-10" /></div>
           <div className="absolute bottom-[20%] left-[5%] animate-float" style={{ animationDelay: '2s' }}><Cpu size={120} className="text-brand-500/10" /></div>
           <div className="absolute top-[60%] right-[15%] animate-float" style={{ animationDelay: '4s' }}><Brain size={80} className="text-studio-500/10" /></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 glass border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-brand-500 uppercase tracking-widest mb-4">Service Matrix</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">Bespoke Enterprise Solutions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((service, i) => (
              <div 
                key={i} 
                className="glass p-10 rounded-[2.5rem] group hover:border-brand-500/50 transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-brand-600/10 rounded-2xl flex items-center justify-center text-brand-500 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-black mb-4">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-8 pt-8 border-t border-white/5">
                  <button onClick={() => onNavigate('contact')} className="flex items-center gap-2 text-xs font-bold text-brand-500 uppercase tracking-widest hover:gap-4 transition-all">
                    Inquire <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
