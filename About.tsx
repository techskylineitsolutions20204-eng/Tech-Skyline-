import React, { useEffect } from 'react';
import { Target, Eye, History, Award, Users, Globe, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import { ABOUT_EXTENDED, STATS } from './constants';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pb-20 animate-in fade-in duration-500">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 to-brand-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Our <span className="gradient-text">Identity.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Architecting world-class IT solutions and building the workforces of tomorrow through innovation and integrity.
          </p>
        </div>
      </section>

      {/* History & Story */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Our Story" 
              className="relative rounded-[3rem] shadow-2xl border border-white/10"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 text-brand-500 font-black uppercase text-xs tracking-widest mb-6">
              <History size={16} /> The Genesis
            </div>
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">Bridging the Technical Talent Gap Since 2020</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              {ABOUT_EXTENDED.history}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border-white/10">
                <Target className="text-brand-500 mb-4" size={32} />
                <h3 className="text-white font-bold mb-2 uppercase text-sm">Our Mission</h3>
                <p className="text-slate-500 text-sm">Empowering organizations through a unique blend of strategic consulting and deep-tech education.</p>
              </div>
              <div className="glass p-8 rounded-3xl border-white/10">
                <Eye className="text-studio-500 mb-4" size={32} />
                <h3 className="text-white font-bold mb-2 uppercase text-sm">Our Vision</h3>
                <p className="text-slate-500 text-sm">To be the global benchmark for IT workforce transformation in the intelligence era.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Block */}
      <section className="py-20 glass border-y border-white/5 my-24">
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

      {/* Values */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-brand-500 uppercase tracking-widest mb-4">Core Principles</h2>
            <h3 className="text-4xl font-black text-white">What Defines Tech Skyline</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_EXTENDED.values.map((v, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-brand-500/50 transition-all text-center">
                <div className="w-16 h-16 bg-brand-600/10 rounded-2xl flex items-center justify-center text-brand-500 mx-auto mb-8">
                  <v.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-500 uppercase tracking-widest mb-4">The Brain Trust</h2>
          <h3 className="text-4xl font-black text-white">Meet Our Leadership</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ABOUT_EXTENDED.team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <img src={member.image} alt={member.name} className="relative w-48 h-48 rounded-full object-cover mx-auto grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl" />
              </div>
              <h4 className="text-2xl font-black text-white mb-2">{member.name}</h4>
              <p className="text-brand-500 font-bold uppercase text-xs tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};