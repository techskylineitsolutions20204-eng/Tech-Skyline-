import React, { useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle, Zap, 
  Target, BarChart3, Layers, 
  Clock, ShieldCheck, Globe
} from 'lucide-react';
import { CORPORATE_360_STRATEGY, CORPORATE_TRAINING_MODULES, CONTACT_INFO } from './constants';

export const Corporate360 = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pb-20 animate-in fade-in duration-500">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900/40 to-slate-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <button onClick={onBack} className="flex items-center gap-2 text-brand-500 hover:text-white mb-12 group transition-colors">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/10 border border-brand-500/30 text-brand-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Zap size={14} /> Future-Ready Workforce
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Enterprise <br/><span className="gradient-text">Workforce Mastery.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              {CORPORATE_360_STRATEGY.hero.subheadline}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORPORATE_360_STRATEGY.hero.points.map((p, i) => (
                <div key={i} className="flex items-center gap-3 glass p-4 rounded-2xl border-white/10">
                  <CheckCircle className="text-brand-500" size={18} />
                  <span className="text-sm font-bold text-white">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depth: Training Modules */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-500 uppercase tracking-widest mb-4">Curriculum Portfolio</h2>
          <h3 className="text-4xl font-black text-white">In-Depth Training Tracks</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {CORPORATE_TRAINING_MODULES.map((cat, i) => (
            <div key={i} className="glass p-8 rounded-[3rem] border-white/5 flex flex-col hover:border-brand-500/30 transition-all group">
              <h4 className="text-xl font-black text-white mb-8 border-b border-white/10 pb-4 group-hover:text-brand-500 transition-colors">{cat.category}</h4>
              <div className="space-y-8 flex-grow">
                {cat.modules.map((mod, j) => (
                  <div key={j} className="group/mod">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-bold text-slate-200 group-hover/mod:text-brand-500 transition-colors">{mod.name}</h5>
                      <span className="text-[10px] font-black bg-white/5 px-2 py-1 rounded-md text-slate-500 uppercase">{mod.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mod.features.map((f, k) => (
                        <span key={k} className="text-[9px] font-bold text-slate-600 bg-slate-900 border border-white/5 px-2 py-0.5 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')} className="mt-10 w-full py-4 glass border-brand-500/30 text-brand-500 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all active:scale-95">
                Request Module Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Value */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">Beyond "Training": <br/><span className="text-brand-500">Talent Development.</span></h3>
              <div className="space-y-8">
                {[
                  { icon: Target, title: "Outcome Alignment", desc: "We map every module to specific business KPIs - be it cloud cost reduction or faster deployment cycles." },
                  { icon: Layers, title: "LMS Integration", desc: "Our content easily integrates with your existing SCORM/AICC compliant platforms." },
                  { icon: BarChart3, title: "ROI Dashboarding", desc: "Quarterly reports on workforce skill progression and application proficiency." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-500 shadow-xl">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-10 rounded-[3rem] border border-white/10 relative shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform"><Zap size={200} /></div>
               <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-brand-500" /> Executive Endorsement
               </h4>
               <p className="text-slate-400 text-lg leading-relaxed mb-8 italic">
                 "Tech Skyline didn't just teach our team AWS; they architected a mindset shift. Our cloud bills dropped by 30% within three months of their custom curriculum deployment."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-500 rounded-full"></div>
                  <div>
                    <div className="text-white font-black text-sm uppercase tracking-widest">CTO, Global Logistics Firm</div>
                    <div className="text-slate-600 text-[10px] font-bold">Client Success Partner</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Scaling */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-4xl font-black text-white mb-6">Scale Across Borders.</h3>
          <p className="text-slate-400">Our content is localized and delivered globally via our cloud-native infrastructure, ensuring consistent learning experiences for distributed teams.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Globe, label: "24/7 Global Support" },
            { icon: Clock, label: "On-Demand Access" },
            { icon: ShieldCheck, label: "Security Compliant" },
            { icon: RefreshCcw, label: "Weekly Content Updates" }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5 text-center group hover:bg-brand-500 transition-colors cursor-default">
              <item.icon className="mx-auto mb-4 text-brand-500 group-hover:text-white transition-colors" size={32} />
              <span className="text-white font-bold text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const RefreshCcw = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
    <path d="M3 3v5h5"></path>
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
    <path d="M16 16h5v5"></path>
  </svg>
);
