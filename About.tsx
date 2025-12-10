
import React, { useEffect, useState } from 'react';
import { ABOUT_US_CONTENT, ABOUT_TRAINING_TEXT } from './constants';
import { Target, Eye, Quote, ArrowRight, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative flex flex-col">
       <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 bg-slate-800">
          <img 
             src={member.image} 
             alt={member.name} 
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4 right-4">
             <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="font-bold text-white text-lg">{member.name}</h4>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{member.role}</p>
             </div>
          </div>
       </div>
       
       <div className="px-2 flex flex-col items-start flex-grow">
           <p className={`text-slate-400 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2 overflow-hidden text-ellipsis'}`}>
              {member.bio}
           </p>
           <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-cyan-400 text-xs font-bold uppercase tracking-wide flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
           >
              {isExpanded ? 'Read Less' : 'Read More'}
              {isExpanded ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
           </button>
       </div>
    </div>
  );
};

export const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-slate-900/50 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech Skyline</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
               Bridging the gap between ambition and achievement through world-class IT solutions and education.
            </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert prose-lg">
               <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">Our Story</h2>
               <div className="text-slate-300 space-y-4">
                  {ABOUT_US_CONTENT.story.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl transform rotate-3 blur-lg opacity-40"></div>
               <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Team Meeting" 
                  className="relative rounded-3xl shadow-2xl border border-white/10"
               />
            </div>
         </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all group">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-cyan-400 mb-6 shadow-lg border border-white/5 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                     <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">{ABOUT_US_CONTENT.mission}</p>
               </div>
               <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-purple-400 mb-6 shadow-lg border border-white/5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                     <Eye size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">{ABOUT_US_CONTENT.vision}</p>
               </div>
            </div>
         </div>
      </section>

      {/* Core Values */}
      <section className="py-20 container mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Culture</h2>
            <h3 className="text-3xl font-bold text-white">Core Values</h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_CONTENT.values.map((val, idx) => (
               <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                        <val.icon size={24} />
                     </div>
                     <h4 className="text-xl font-bold text-white">{val.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     {val.description}
                  </p>
               </div>
            ))}
         </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900 relative">
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">Leadership</h2>
               <h3 className="text-3xl font-bold text-white">Meet the Team</h3>
               <p className="text-slate-400 mt-4 max-w-2xl mx-auto">The minds behind Tech Skyline's success.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {ABOUT_US_CONTENT.team.map((member, idx) => (
                  <TeamMemberCard key={idx} member={member} />
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};
