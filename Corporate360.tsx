
import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Users, 
  Zap, 
  Cpu, 
  BarChart2, 
  Target, 
  Globe,
  Award,
  ExternalLink,
  MessageCircle,
  FileText,
  MousePointer2,
  Smile,
  RefreshCcw,
  Smartphone,
  Video,
  Lightbulb,
  Scale,
  Activity,
  UserCheck,
  Check
} from 'lucide-react';
import { CORPORATE_360_STRATEGY, CONTACT_INFO } from './constants';

export const Corporate360 = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-cyan-500/30">
              Strategic Growth Partner
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Corporate Training Isn’t Just a Checkbox – <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">It’s Your Competitive Edge.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              {CORPORATE_360_STRATEGY.hero.subheadline}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CORPORATE_360_STRATEGY.hero.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-100 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <CheckCircle className="text-cyan-400 shrink-0" size={20} />
                  <span className="font-medium text-sm">{point}</span>
                </div>
              ))}
            </div>

            <button 
               onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')}
               className="mt-12 bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-transform hover:-translate-y-1"
            >
               Get Your Custom eLearning Quote <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Perspective Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">A TechSkyline Perspective</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              {CORPORATE_360_STRATEGY.perspective.title}
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {CORPORATE_360_STRATEGY.perspective.description}
            </p>
            
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">Today’s workplace is shaped by:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CORPORATE_360_STRATEGY.perspective.drivers.map((driver, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group">
                   <driver.icon size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                   <h4 className="text-white font-bold text-xs uppercase tracking-wide leading-snug">{driver.title}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-10"><BarChart2 size={200} className="text-white" /></div>
               <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 relative z-10">
                 <Target className="text-cyan-400" /> Why Now?
               </h3>
               <div className="space-y-6 relative z-10">
                 {CORPORATE_360_STRATEGY.perspective.stats.map((stat, i) => (
                    <div key={i} className="bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                          <stat.icon className="text-cyan-400" size={24} />
                       </div>
                       <div className="text-4xl font-black text-white">{stat.value}</div>
                    </div>
                 ))}
               </div>
               <div className="mt-8 p-6 bg-white/5 rounded-2xl text-center border border-white/5 text-base text-cyan-200 font-bold">
                  Align Training with Business Goals. Maximize Workforce ROI.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alignment Method */}
      <section className="py-20 bg-black/20 border-y border-white/5">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-12">{CORPORATE_360_STRATEGY.method.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {CORPORATE_360_STRATEGY.method.supports.map((s, i) => (
                  <div key={i} className="group">
                     <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-cyan-400 mx-auto mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-xl">
                        <s.icon size={32} />
                     </div>
                     <h4 className="text-white font-bold">{s.title}</h4>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Framework Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">{CORPORATE_360_STRATEGY.framework.title}</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CORPORATE_360_STRATEGY.framework.steps.map((step, i) => (
                <div key={i} className="bg-slate-800/40 p-10 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all group relative">
                   <div className="text-7xl font-black text-white/5 absolute top-4 right-4 group-hover:text-cyan-500/10 transition-colors">{step.step}</div>
                   <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-lg">
                      <step.icon size={32} />
                   </div>
                   <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                   <p className="text-slate-400 text-base leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Definition & Verticals */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-950/50">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-md">
               <h3 className="text-3xl font-bold text-white mb-6 text-center">{CORPORATE_360_STRATEGY.definition.title}</h3>
               <p className="text-xl text-slate-300 mb-12 text-center font-light leading-relaxed">
                  {CORPORATE_360_STRATEGY.definition.content}
               </p>
               <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-center text-sm">At TechSkyline, corporate training includes:</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CORPORATE_360_STRATEGY.definition.verticals.map((v, i) => (
                     <div key={i} className="flex items-center gap-4 text-slate-200">
                        <Check className="text-green-500 shrink-0" size={20} />
                        <span className="font-medium">{v}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-white mb-4">{CORPORATE_360_STRATEGY.evolution.title}</h2>
              <p className="text-slate-400 text-lg">Transitioning from classroom-based to personalized AI ecosystems.</p>
           </div>
           
           <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden md:block"></div>
              <div className="space-y-16 relative">
                 {CORPORATE_360_STRATEGY.evolution.milestones.map((m, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                       <div className="md:w-1/2 flex justify-center md:justify-start">
                          <div className={`p-10 bg-slate-800/70 rounded-[2.5rem] border border-white/10 hover:border-cyan-500/50 transition-all max-w-md w-full shadow-2xl ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                             <div className="text-cyan-400 font-black text-3xl mb-3">{m.year}</div>
                             <h4 className="text-white font-bold text-xl mb-3">{m.title}</h4>
                             <p className="text-slate-400 text-base">{m.desc}</p>
                          </div>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-slate-950 border-4 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] z-10 absolute left-1/2 -translate-x-1/2 hidden md:block"></div>
                       <div className="md:w-1/2"></div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Distinction Table */}
      <section className="py-24 container mx-auto px-4">
         <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-12 text-center">
               {CORPORATE_360_STRATEGY.distinction.title}
            </h3>
            <div className="overflow-x-auto rounded-[2rem] border border-white/10 shadow-2xl">
               <table className="w-full text-left bg-slate-800/30 backdrop-blur-md">
                  <thead className="bg-slate-800/80 border-b border-white/10">
                     <tr>
                        <th className="p-8 text-xs font-black text-slate-500 uppercase tracking-widest">Aspect</th>
                        <th className="p-8 text-lg font-black text-cyan-400 uppercase">Training</th>
                        <th className="p-8 text-lg font-black text-purple-400 uppercase">Development</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {CORPORATE_360_STRATEGY.distinction.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className="p-8 text-white font-bold text-base bg-black/20">{row.aspect}</td>
                           <td className="p-8 text-slate-300 text-base">{row.training}</td>
                           <td className="p-8 text-slate-300 text-base font-medium">{row.development}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <p className="mt-10 text-center text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto font-light">
               TechSkyline designs programs that balance immediate productivity with long-term workforce resilience.
            </p>
         </div>
      </section>

      {/* Holistic Services */}
      <section className="py-24 bg-black/20 border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black text-white mb-4">Our Holistic Custom eLearning Services</h2>
               <p className="text-slate-400 text-lg">Award-winning solutions blending human design with AI-enabled development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {CORPORATE_360_STRATEGY.holisticServices.map((s, i) => (
                  <div key={i} className="bg-white/5 p-10 rounded-[2rem] border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group">
                     <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                        <s.icon size={28} />
                     </div>
                     <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
                     <p className="text-slate-400 text-base leading-relaxed">{s.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ROI & Global Scaling */}
      <section className="py-24 container mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-slate-800/40 p-12 rounded-[3rem] border border-white/5">
               <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-3">
                  <BarChart2 className="text-cyan-400" /> {CORPORATE_360_STRATEGY.roi.title}
               </h3>
               <div className="space-y-8">
                  {CORPORATE_360_STRATEGY.roi.methods.map((m, i) => (
                     <div key={i} className="flex gap-6 items-start">
                        <div className="bg-slate-900 p-4 rounded-2xl text-cyan-400 shadow-lg"><m.icon size={24} /></div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1">{m.title}</h4>
                           <p className="text-slate-400 text-sm">Translating learning data into business value indicators.</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-800/40 p-12 rounded-[3rem] border border-white/5">
               <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-3">
                  <Globe className="text-purple-400" /> {CORPORATE_360_STRATEGY.scaling.title}
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {CORPORATE_360_STRATEGY.scaling.features.map((f, i) => (
                     <div key={i} className="space-y-4">
                        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-purple-400 shadow-lg"><f.icon size={24} /></div>
                        <h4 className="text-white font-bold">{f.title}</h4>
                     </div>
                  ))}
               </div>
               <div className="mt-12 p-8 bg-purple-500/10 rounded-3xl border border-purple-500/20">
                  <p className="text-slate-300 font-medium leading-relaxed italic">
                     "Result: Consistent, scalable, and high-impact global learning programs across 10,000+ employees."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Why Choose & Verticals */}
      <section className="py-24 bg-slate-950">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20">
               <div className="lg:w-1/2">
                  <h3 className="text-3xl font-black text-white mb-10">Why Leading Enterprises Choose Us</h3>
                  <div className="space-y-6">
                     {CORPORATE_360_STRATEGY.whyChoose.map((text, i) => (
                        <div key={i} className="flex items-center gap-4">
                           <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                           <p className="text-slate-300 text-lg">{text}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2">
                  <h3 className="text-3xl font-black text-white mb-10">Vertically Specialized Training</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {CORPORATE_360_STRATEGY.trainingTypes.map((type, i) => (
                        <div key={i} className="p-4 bg-slate-900 rounded-xl border border-white/5 text-slate-400 font-medium text-sm flex items-center gap-3">
                           <Zap size={14} className="text-cyan-500" /> {type}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 text-center">
         <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black text-white mb-10">Building a Training Ecosystem That Drives Business Outcomes</h2>
               <p className="text-blue-100 text-xl mb-12 leading-relaxed font-light">
                  We don’t deliver isolated courses—we build future-ready learning ecosystems that strengthen talent, accelerate transformation, and drive sustained business success.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button onClick={() => window.open(CONTACT_INFO.googleFormUrl, '_blank')} className="bg-white text-blue-700 hover:bg-slate-100 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
                     Get Your Custom Quote <ArrowRight size={24} />
                  </button>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="bg-blue-800/40 hover:bg-blue-800/60 text-white px-12 py-5 rounded-2xl font-bold text-xl border border-white/20 backdrop-blur-sm flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
                     Consult Experts <MessageCircle size={24} />
                  </a>
               </div>
            </div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
         </div>
      </section>
    </div>
  );
};
