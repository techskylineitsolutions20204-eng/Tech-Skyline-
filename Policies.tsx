
import React, { useEffect } from 'react';
import { ShieldCheck, FileText, Lock, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

export const Policies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 animate-in fade-in duration-500">
      
      {/* Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
               Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Policies</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Transparency is key to our relationship. Please read our terms, conditions, and policies carefully.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Navigation Tabs (Visual only for this layout, content scrolls) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
           {['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Disclaimer'].map((tab) => (
              <a href={`#${tab.toLowerCase().replace(/ /g, '-')}`} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 font-bold text-sm border border-white/10 transition-colors">
                 {tab}
              </a>
           ))}
        </div>

        {/* Terms of Service */}
        <section id="terms-of-service" className="mb-20">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                 <Scale size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
           </div>
           <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-slate-300 space-y-6 leading-relaxed">
              <p>
                 Welcome to {CONTACT_INFO.company} ("we," "our," or "us"). By accessing or using our website, services, consulting, or training programs, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-4">1. Use of Services</h3>
              <p>
                 Our services, including IT consulting, staffing, and corporate training, are intended for legitimate business and educational purposes. You agree not to misuse our services or help anyone else do so.
              </p>

              <h3 className="text-xl font-bold text-white mt-4">2. Intellectual Property</h3>
              <p>
                 The content, organization, graphics, design, compilation, and other matters related to our website and training materials are protected under applicable copyrights, trademarks, and other proprietary rights. 
                 <br/><br/>
                 <strong>For Students:</strong> Course materials provided during training are for your personal use only. You may not reproduce, distribute, or sell any materials without our express written consent.
              </p>

              <h3 className="text-xl font-bold text-white mt-4">3. User Obligations</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>You must provide accurate and complete information when registering for courses or submitting inquiries.</li>
                 <li>You are responsible for maintaining the confidentiality of any account credentials provided to you.</li>
                 <li>You agree not to engage in any activity that interferes with or disrupts our services.</li>
              </ul>
           </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="mb-20">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                 <Lock size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
           </div>
           <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-slate-300 space-y-6 leading-relaxed">
              <p>
                 Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
              </p>

              <h3 className="text-xl font-bold text-white mt-4">1. Information We Collect</h3>
              <p>
                 We collect information you provide directly to us, such as when you fill out a contact form, register for a course, or apply for a job. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>Name, email address, phone number, and location.</li>
                 <li>Professional information such as company name, job title, or resume (for staffing).</li>
                 <li>Payment information (processed securely by third-party providers).</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-4">2. How We Use Your Information</h3>
              <p>
                 We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                 <li>Provide, maintain, and improve our services.</li>
                 <li>Process transactions and send related information, including confirmations and invoices.</li>
                 <li>Send you technical notices, updates, security alerts, and support messages.</li>
                 <li>Respond to your comments, questions, and requests.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-4">3. Cookies & Tracking</h3>
              <p>
                 We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
           </div>
        </section>

        {/* Refund Policy */}
        <section id="refund-policy" className="mb-20">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                 <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Refund & Cancellation Policy</h2>
           </div>
           <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-slate-300 space-y-6 leading-relaxed">
              <h3 className="text-xl font-bold text-white mt-4">For Training Courses</h3>
              
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <CheckCircle className="text-green-400 shrink-0 mt-1" size={20}/>
                    <div>
                       <strong className="text-white block mb-1">Full Refund</strong>
                       <p className="text-sm">If a cancellation request is made 7 days prior to the start of the batch/course.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <CheckCircle className="text-yellow-400 shrink-0 mt-1" size={20}/>
                    <div>
                       <strong className="text-white block mb-1">Partial Refund</strong>
                       <p className="text-sm">If a request is made within the first 2 sessions of the course. A deduction for administrative and resource allocation costs will apply.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <AlertCircle className="text-red-400 shrink-0 mt-1" size={20}/>
                    <div>
                       <strong className="text-white block mb-1">No Refund</strong>
                       <p className="text-sm">No refunds will be issued after the first 2 sessions of the course or for self-paced video courses once access has been granted.</p>
                    </div>
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-4">For Consulting Services</h3>
              <p>
                 Refunds for consulting services are governed by the specific Service Level Agreement (SLA) or contract signed between {CONTACT_INFO.company} and the client. Generally, retainers are non-refundable, but we are committed to ensuring client satisfaction and will work to resolve any disputes amicably.
              </p>
           </div>
        </section>

        {/* Disclaimer */}
        <section id="disclaimer" className="mb-20">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-500/20 rounded-xl text-orange-400">
                 <AlertCircle size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Disclaimer</h2>
           </div>
           <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-slate-300 space-y-6 leading-relaxed">
              <p>
                 The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p>
                 <strong>Professional Advice:</strong> The content on this site is not intended to be a substitute for professional technical or business advice. Always seek the advice of qualified professionals regarding any specific IT or business questions you may have.
              </p>
              <p>
                 <strong>External Links:</strong> The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
              </p>
           </div>
        </section>

        <div className="text-center border-t border-white/10 pt-12">
           <p className="text-slate-500 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              <br/>
              If you have any questions about these policies, please contact us at <a href={`mailto:${CONTACT_INFO.email}`} className="text-cyan-400 hover:underline">{CONTACT_INFO.email}</a>.
           </p>
        </div>

      </div>
    </div>
  );
};
