import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  ShieldCheck,
  Check,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';
import { AI_WORKFORCE_CONTENT, CONTACT_INFO } from './constants';

export const AIWorkforce = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 animate-in fade-in duration-500">
      
      {/* Hero Block */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="mb-10 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Sparkles size={14} /> The Age of Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
               Tech Skyline <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  {AI_WORKFORCE_CONTENT.hero.title}
               </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-slate-400 mb-10">
               {AI_WORKFORCE_CONTENT.hero.subtitle}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
               {AI_WORKFORCE_CONTENT.hero.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Why AI Matters Block */}
      <section className="py-24 container mx-auto px-4">
         <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white">{AI_WORKFORCE_CONTENT.whyMatters.title}</h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {AI_WORKFORCE_CONTENT.whyMatters.stats.map((s, i) => (
               <div key={i} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all group text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg">
                     <s.icon size={28} />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{s.value}</div>
                  <p className="text-slate-400 text-sm font-medium leading-snug">{s.label}</p>
               </div>
            ))}
         </div>
         <p className="mt-12 text-center text-slate-500 text-xs uppercase tracking-widest font-bold">
            Insights based on global industry and research reports.
         </p>
      </section>

      {/* Value Impact Block */}
      <section className="py-24 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border-y border-white/5">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-10">{AI_WORKFORCE_CONTENT.readiness.title}</h3>
            <div className="max-w-4xl mx-auto">
               <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-6">
                  {AI_WORKFORCE_CONTENT.readiness.impact}
               </div>
               <p className="text-2xl md:text-3xl text-cyan-200 font-light mb-12">
                  {AI_WORKFORCE_CONTENT.readiness.impactDesc}
               </p>
               <div className="inline-block p-6 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 text-white font-bold">
                  {AI_WORKFORCE_CONTENT.readiness.marketTrend}
               </div>
            </div>
         </div>
      </section>

      {/* Skills Gap Block */}
      <section className="py-24 container mx-auto px-4">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                  {AI_WORKFORCE_CONTENT.skillsGap.title}
               </h3>
               <p className="text-slate-400 text-xl leading-relaxed font-light mb-12">
                  The AI economy demands immediate action. Organizations failing to reskill risk absolute obsolescence in the next decade.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {AI_WORKFORCE_CONTENT.skillsGap.points.map((p, i) => (
                     <div key={i} className="relative">
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-slate-300 font-bold text-sm">{p.label}</span>
                           <span className="text-white font-black text-2xl">{p.value}</span>
                        </div>
                        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                           <div 
                              className={`h-full rounded-full bg-gradient-to-r ${p.color === 'cyan' ? 'from-cyan-400 to-blue-500' : p.color === 'purple' ? 'from-purple-500 to-indigo-500' : p.color === 'orange' ? 'from-orange-500 to-red-500' : 'from-red-600 to-red-400'}`}
                              style={{ width: p.value }}
                           ></div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-slate-900 p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
                  <AlertTriangle className="text-yellow-500 mb-8" size={48} />
                  <h4 className="text-2xl font-bold text-white mb-6">Strategic Imperative</h4>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                     "Only 26% of CEOs have a future-ready workforce strategy. Just 5% of organizations can reskill at scale."
                  </p>
                  <button 
                     onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')}
                     className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-cyan-400 transition-all shadow-xl active:scale-95"
                  >
                     Discuss Your AI Strategy
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Solutions Blocks */}
      <section className="py-24 bg-slate-900/50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-20">
               <h3 className="text-4xl md:text-5xl font-black text-white mb-6">AI Corporate Training Solutions</h3>
               <p className="text-slate-400 text-lg">Modular, scalable, and business-aligned programs for every tier of the enterprise.</p>
            </div>
            
            <div className="space-y-12">
               {AI_WORKFORCE_CONTENT.solutions.map((s, i) => (
                  <div key={i} className="flex flex-col lg:flex-row bg-slate-950 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
                     <div className="lg:w-1/3 p-12 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-center border-r border-white/5">
                        <div className="text-7xl font-black text-white/5 mb-4">{s.id}</div>
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                           <s.icon size={32} />
                        </div>
                        <h4 className="text-3xl font-black text-white mb-4">{s.name}</h4>
                        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">{s.tagline}</p>
                     </div>
                     <div className="lg:w-2/3 p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {s.features.map((f, idx) => (
                              <div key={idx} className="flex items-start gap-4">
                                 <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-500">
                                    <Check size={14} strokeWidth={4} />
                                 </div>
                                 <p className="text-slate-300 text-lg">{f}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Enterprises Choose Tech Skyline */}
      <section className="py-24 container mx-auto px-4">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
               <h3 className="text-4xl font-black text-white mb-10">Why Enterprises Choose Tech Skyline</h3>
               <div className="space-y-6">
                  {AI_WORKFORCE_CONTENT.whyChoose.map((text, i) => (
                     <div key={i} className="flex items-center gap-6 p-6 bg-slate-900/50 rounded-2xl border border-white/5 hover:bg-slate-900 transition-colors">
                        <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
                           <ShieldCheck size={24} />
                        </div>
                        <p className="text-slate-200 text-lg font-bold">{text}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
               <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[3rem] blur-2xl opacity-20"></div>
                  <img 
                     src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" 
                     alt="AI Future" 
                     loading="lazy"
                     className="relative rounded-[3rem] shadow-2xl border border-white/10"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-24 container mx-auto px-4 text-center">
         <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-16 md:p-24 rounded-[4rem] shadow-[0_0_50px_rgba(37,99,235,0.3)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black text-white mb-10">Become a Future-Ready Enterprise</h2>
               <p className="text-white/80 text-xl mb-12 leading-relaxed font-light">
                  Reinvent your workforce for the Age of Intelligence with Tech Skyline’s AI corporate training solutions. Let’s discuss how we can help your organization build AI capability at scale.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                     onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')}
                     className="bg-white text-blue-700 hover:bg-slate-100 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:scale-95"
                  >
                     Get Started <ArrowRight size={24} />
                  </button>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="bg-blue-900/40 hover:bg-blue-900/60 text-white px-12 py-5 rounded-2xl font-bold text-xl border border-white/20 backdrop-blur-sm flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
                     Consult Experts <MessageCircle size={24} />
                  </a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
