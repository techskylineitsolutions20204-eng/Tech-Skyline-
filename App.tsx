
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
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
  FileText,
  Laptop,
  LayoutList,
  Lock,
  Building,
  MapPinned,
  Heading,
  Headphones,
  Play,
  Volume2,
  Maximize,
  Video as VideoIcon,
  XCircle,
  Terminal,
  Cpu,
  Wifi,
  Maximize2,
  Minimize2,
  Power,
  Filter,
  Briefcase as BriefcaseIcon,
  CheckCircle,
  BookOpen,
  TrendingUp,
  Target,
  PlayCircle,
  FileCode,
  UserCheck,
  FolderOpen,
  Download,
  Trophy,
  Plus as PlusIcon,
  Github,
  Mic,
  Calendar,
  Send,
  Bot,
  PieChart,
  BarChart2,
  List,
  CheckSquare,
  Clock,
  MessageSquare,
  Layers,
  ArrowLeft,
  Settings,
  GraduationCap,
  Activity,
  ShieldCheck,
  CreditCard,
  Check,
  Loader,
  Cloud
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
  FEATURED_TECHNOLOGIES,
  INTERNSHIP_PROGRAM,
  SAMPLE_CLASSES,
  CORPORATE_TRAINING,
  SOCIAL_MEDIA,
  WEBINARS,
  PODCASTS,
  COMMUNITY_RESOURCES,
  ADMIN_DASHBOARD_DATA,
  TECH_STACK,
  STRIPE_PLANS,
  ZOOM_SLOTS
} from './constants';
import { TechSkylineLogo } from './Logo';
import { About } from './About';
import { Policies } from './Policies';

// Animated Counter Component
const CountUp = ({ end, suffix = "", duration = 2000, decimals = 0 }: { end: number | string, suffix?: string, duration?: number, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          if (typeof end === 'string') {
             setCount(0); 
             return;
          }

          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => observer.disconnect();
  }, [end, duration]);

  if (typeof end === 'string') return <span ref={nodeRef}>{end}</span>;

  return (
    <span ref={nodeRef}>
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [activeClass, setActiveClass] = useState<any>(null);
  const [activeCourseFilter, setActiveCourseFilter] = useState("All");
  
  // View State (Simple Router)
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'policies' | 'career-upskilling' | 'cloud-certifications' | 'podcast' | 'admin-dashboard'>('home');

  // Portal State
  const [activePortalView, setActivePortalView] = useState<string | null>(null);

  // Lab Simulation State
  const [activeLab, setActiveLab] = useState<any>(null);
  const [labBootLines, setLabBootLines] = useState<string[]>([]);
  const [isLabReady, setIsLabReady] = useState(false);
  
  // Modals for Integration Simulation
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(STRIPE_PLANS[0]);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatHistory, setChatHistory] = useState<{sender: 'bot' | 'user', text: string}[]>([
    { sender: 'bot', text: 'Hi! Welcome to Tech Skyline. How can we help you today?' }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    company: '',
    role: '', 
    timeline: '', 
    budget: '',
    subject: '',
    interest: 'Corporate Training',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Analytics Helper Function
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    console.log(`[GA4 Real-time Event]: ${eventName}`, params);
    if (typeof window !== 'undefined') {
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: eventName,
        ...params
      });
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, params);
      }
    }
  };

  // Lab Boot Sequence Effect (AWS Rebranded)
  useEffect(() => {
    if (activeLab) {
      setLabBootLines([]);
      setIsLabReady(false);
      const bootSequence = [
        `Initializing AWS EC2 Instance (t3.xlarge)...`,
        `Region: us-east-1 (N. Virginia)`,
        `Attaching EBS Volume (100GB GP3)...`,
        `Configuring Security Groups (Port 22, 80, 443)...`,
        `Retrieving IAM Role Credentials...`,
        `Mounting S3 Bucket: s3://techskyline-labs-${activeLab.id}...`,
        `Starting Docker Daemon...`,
        `Pulling Container: techskyline/${activeLab.id}:latest...`,
        `Allocating Elastic IP...`,
        `Environment Ready.`,
      ];

      let delay = 0;
      bootSequence.forEach((line, index) => {
        delay += Math.random() * 800 + 200; 
        setTimeout(() => {
          setLabBootLines(prev => [...prev, line]);
          if (index === bootSequence.length - 1) {
            setIsLabReady(true);
          }
        }, delay);
      });
    }
  }, [activeLab]);

  // Responsive carousel settings
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= FEATURED_TECHNOLOGIES.length - itemsPerSlide ? 0 : prev + 1
    );
    trackEvent('interact_carousel', { action: 'next', slide_index: currentSlide });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? FEATURED_TECHNOLOGIES.length - itemsPerSlide : prev - 1
    );
    trackEvent('interact_carousel', { action: 'prev', slide_index: currentSlide });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false);
    
    if (['career-upskilling', 'cloud-certifications', 'podcast', 'admin-dashboard', 'about', 'policies', 'home'].includes(id)) {
      setCurrentView(id as any);
      window.scrollTo(0, 0);
      trackEvent('page_view', { page: id });
      return;
    }

    if (currentView !== 'home') {
       setCurrentView('home');
       setTimeout(() => {
         const element = document.getElementById(id);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
           trackEvent('section_view', { section_name: id });
         }
       }, 100);
    } else {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         trackEvent('section_view', { section_name: id });
       }
    }
  };

  const openGoogleForm = () => {
    trackEvent('generate_lead', { 
      event_category: 'engagement',
      event_label: 'Apply Now Google Form',
      destination: 'google_form'
    });
    window.open(CONTACT_INFO.googleFormUrl, '_blank');
  };

  const handleChatOption = (option: string) => {
    setChatHistory(prev => [...prev, { sender: 'user', text: option }]);
    setTimeout(() => {
      let botResponse = "";
      if (chatStep === 0) {
        botResponse = `Great! Which technology area are you interested in?`;
        setChatStep(1);
      } else if (chatStep === 1) {
        botResponse = `Excellent choice! Would you like to schedule a free 15-minute career consultation or download our course roadmap?`;
        setChatStep(2);
      } else if (chatStep === 2) {
        botResponse = `Perfect. Please click below to complete the request.`;
        setChatStep(3);
      }
      setChatHistory(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  const handleClassSelect = (cls: any) => {
    setActiveClass(cls);
    trackEvent('select_content', { 
      content_type: cls.type, 
      item_id: cls.id.toString(),
      item_name: cls.title
    });
  };
  
  const handleLabLaunch = (tech: any) => {
    setActiveLab(tech);
    trackEvent('launch_lab', { 
      tech_id: tech.id,
      tech_name: tech.name 
    });
  };

  const handlePortalClick = (resourceTitle: string) => {
    trackEvent('portal_access_request', { resource: resourceTitle });
    if (resourceTitle.includes("Video")) setActivePortalView("video-archive");
    else if (resourceTitle.includes("Lab")) setActivePortalView("lab-dashboard");
    else if (resourceTitle.includes("Course")) setActivePortalView("course-materials");
    else if (resourceTitle.includes("Practice")) setActivePortalView("practice-arena");
    else if (resourceTitle.includes("Portfolio")) setActivePortalView("portfolio-builder");
    else openGoogleForm();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      trackEvent('form_validation_error', { errors: Object.keys(newErrors).join(',') });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    trackEvent('generate_lead', { method: 'WhatsApp', source: 'Contact Form', interest: formData.interest });
    alert("Syncing Lead to HubSpot CRM... \nRedirecting to WhatsApp.");
    const text = `*New Inquiry from Techskyline.in*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Interest:* ${formData.interest}\n*Role:* ${formData.role}\n*Timeline:* ${formData.timeline}\n*Budget:* ${formData.budget}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/918106243684?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    trackEvent('generate_lead', { method: 'Email', source: 'Contact Form', interest: formData.interest });
    alert("Lead captured in HubSpot. Opening email client...");
    const subject = `[Inquiry]: ${formData.interest} - ${formData.subject}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRole: ${formData.role}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:techskylineitsolutions20204@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Mock Stripe Payment
  const openStripe = () => {
    setPaymentModalOpen(true);
    setPaymentSuccess(false);
    setIsProcessingPayment(false);
  };

  const processStripePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      trackEvent('purchase', { 
        transaction_id: `txn_${Math.floor(Math.random() * 100000)}`,
        value: selectedPlan.price,
        currency: 'USD'
      });
    }, 2000);
  };

  // Mock Zoom Booking
  const openZoomBooking = () => {
    setBookingModalOpen(true);
    setBookingSuccess(false);
    setSelectedSlot(null);
  };

  const confirmZoomBooking = () => {
    if(!selectedSlot) return;
    setBookingSuccess(true);
    trackEvent('schedule_meeting', { platform: 'Zoom', time: selectedSlot });
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative">
      
      {/* HubSpot Style Chat Widget */}
      <div className="fixed bottom-6 right-6 z-[200]">
        {!isChatOpen && (
          <button 
            onClick={() => { setIsChatOpen(true); trackEvent('chat_open'); }}
            className="w-14 h-14 bg-[#ff7a59] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform animate-bounce border-2 border-white"
          >
            <MessageCircle size={28} />
          </button>
        )}
        
        {isChatOpen && (
          <div className="bg-white w-80 sm:w-96 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
            <div className="bg-[#ff7a59] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1 rounded-full"><Bot size={18}/></div>
                <div>
                  <h4 className="font-bold text-sm">Tech Skyline Support</h4>
                  <p className="text-[10px] opacity-90">Powered by HubSpot</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1 rounded"><X size={18}/></button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${msg.sender === 'user' ? 'bg-[#ff7a59] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {chatStep === 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  <button onClick={() => handleChatOption("Working Professional")} className="text-xs bg-white text-slate-600 border border-slate-300 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">Working Professional</button>
                  <button onClick={() => handleChatOption("Student / Graduate")} className="text-xs bg-white text-slate-600 border border-slate-300 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">Student / Graduate</button>
                </div>
              )}
              {chatStep === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  <button onClick={() => handleChatOption("Cloud & DevOps")} className="text-xs bg-white text-slate-600 border border-slate-300 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">Cloud & DevOps</button>
                  <button onClick={() => handleChatOption("Data & AI")} className="text-xs bg-white text-slate-600 border border-slate-300 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">Data & AI</button>
                </div>
              )}
               {chatStep === 2 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  <button onClick={() => handleChatOption("Free Consultation")} className="text-xs bg-white text-slate-600 border border-slate-300 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">Free Consultation</button>
                  <button onClick={() => handleChatOption("Download Roadmap")} className="text-xs bg-white text-slate-600 border border-slate-300 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">Download Roadmap</button>
                </div>
              )}
              {chatStep === 3 && (
                <div className="mt-2">
                   <button onClick={openGoogleForm} className="w-full bg-[#ff7a59] hover:bg-[#ff9a7d] text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-2">
                      <Calendar size={14}/> Book Now / Download
                   </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Stripe Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
           <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative">
              <button onClick={() => setPaymentModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={20}/></button>
              
              {!paymentSuccess ? (
                <div className="flex flex-col h-full">
                   <div className="bg-slate-50 p-6 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500 mb-4 text-xs font-bold uppercase tracking-widest">
                         <div className="w-4 h-4 bg-[#635bff] rounded-sm"></div> Powered by Stripe
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{selectedPlan.name}</h3>
                      <p className="text-3xl font-bold text-slate-900">${selectedPlan.price} <span className="text-sm font-normal text-slate-500">/ one-time</span></p>
                   </div>
                   
                   <form onSubmit={processStripePayment} className="p-6 space-y-4">
                      <div>
                         <label className="block text-xs font-bold text-slate-500 mb-1">Email</label>
                         <input type="email" required className="w-full border border-slate-300 rounded p-2 text-sm text-slate-900 focus:border-[#635bff] outline-none" placeholder="you@example.com"/>
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-slate-500 mb-1">Card Information</label>
                         <div className="border border-slate-300 rounded p-2 flex items-center gap-2 bg-white">
                            <CreditCard size={16} className="text-slate-400"/>
                            <input type="text" required className="w-full outline-none text-sm text-slate-900" placeholder="1234 5678 1234 5678" maxLength={19}/>
                            <input type="text" required className="w-16 border-l pl-2 outline-none text-sm text-slate-900" placeholder="MM/YY" maxLength={5}/>
                            <input type="text" required className="w-12 border-l pl-2 outline-none text-sm text-slate-900" placeholder="CVC" maxLength={3}/>
                         </div>
                      </div>
                      
                      <button type="submit" disabled={isProcessingPayment} className="w-full bg-[#635bff] hover:bg-[#544ee3] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mt-4 transition-colors disabled:opacity-70">
                         {isProcessingPayment ? <Loader className="animate-spin" size={18}/> : `Pay $${selectedPlan.price}`}
                      </button>
                   </form>
                </div>
              ) : (
                <div className="p-10 text-center">
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={32}/>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Payment Successful</h3>
                   <p className="text-slate-500 text-sm mb-6">A receipt has been sent to your email. You will receive login credentials shortly.</p>
                   <button onClick={() => setPaymentModalOpen(false)} className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-bold">Close</button>
                </div>
              )}
           </div>
        </div>
      )}

      {/* Zoom Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
           <div className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
              {!bookingSuccess ? (
                 <>
                    <div className="bg-blue-600 p-6 text-white md:w-1/3 flex flex-col justify-between">
                       <div>
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4"><VideoIcon size={20}/></div>
                          <h3 className="font-bold text-lg mb-1">Career Clarity Call</h3>
                          <p className="text-xs text-blue-100 opacity-80">15 min • Zoom Video</p>
                       </div>
                       <p className="text-xs mt-4">Powered by Zoom</p>
                    </div>
                    <div className="p-6 md:w-2/3">
                       <button onClick={() => setBookingModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={20}/></button>
                       <h4 className="font-bold text-slate-900 mb-4">Select a Date & Time</h4>
                       <div className="grid grid-cols-2 gap-2 mb-4">
                          {ZOOM_SLOTS.map((slot, i) => (
                             <button 
                                key={i} 
                                onClick={() => setSelectedSlot(slot)}
                                className={`py-2 px-3 rounded border text-sm font-medium transition-colors ${selectedSlot === slot ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}
                             >
                                {slot}
                             </button>
                          ))}
                       </div>
                       <button 
                          onClick={confirmZoomBooking} 
                          disabled={!selectedSlot} 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                       >
                          Confirm Booking
                       </button>
                    </div>
                 </>
              ) : (
                 <div className="p-10 text-center w-full">
                    <button onClick={() => setBookingModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={20}/></button>
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                       <VideoIcon size={32}/>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Meeting Scheduled!</h3>
                    <p className="text-slate-500 text-sm mb-4">You have been booked for <strong>{selectedSlot}</strong>.</p>
                    <div className="bg-slate-100 p-3 rounded text-xs font-mono text-slate-600 mb-6 select-all">
                       https://zoom.us/j/8492048291
                    </div>
                    <button onClick={() => setBookingModalOpen(false)} className="text-blue-600 font-bold text-sm hover:underline">Done</button>
                 </div>
              )}
           </div>
        </div>
      )}

      {/* Media Player, Student Portal, Lab Modals - Updated with AWS Branding */}
      {/* ... (activeClass modal remains same) ... */}
      {activeClass && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
           <div className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col relative">
             <div className="flex justify-between items-center p-4 border-b border-white/10 bg-slate-800">
               <h3 className="text-white font-bold flex items-center gap-2">
                 {activeClass.type === 'Video' ? <VideoIcon size={20} className="text-cyan-400"/> : <Headphones size={20} className="text-purple-400"/>}
                 {activeClass.title}
               </h3>
               <button onClick={() => setActiveClass(null)} className="text-slate-400 hover:text-white transition-colors"><XCircle size={24}/></button>
             </div>
             <div className="aspect-video bg-black relative flex items-center justify-center group overflow-hidden">
               {activeClass.type === 'Video' ? (
                 <video src={activeClass.videoUrl} poster={activeClass.thumbnail} controls autoPlay className="w-full h-full object-contain" />
               ) : (
                 <div className="w-full h-full relative flex items-center justify-center">
                    <img src={activeClass.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" alt="Thumbnail"/>
                    <div className="z-10 bg-black/50 p-8 rounded-2xl backdrop-blur-md border border-white/10 w-3/4 max-w-md">
                       <div className="text-center mb-6">
                          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 animate-pulse"><Headphones size={32} className="text-white"/></div>
                          <h4 className="text-white font-bold">{activeClass.title}</h4>
                          <p className="text-purple-300 text-sm">{activeClass.author}</p>
                       </div>
                       <audio src={activeClass.audioUrl} controls autoPlay className="w-full" />
                    </div>
                 </div>
               )}
             </div>
           </div>
        </div>
      )}

      {/* Portal View */}
      {activePortalView && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-[#0f172a] w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
              <div className="bg-slate-800/50 p-4 border-b border-white/10 flex justify-between items-center">
                 <h3 className="text-white font-bold text-lg">Student Portal</h3>
                 <button onClick={() => setActivePortalView(null)} className="p-2 hover:bg-white/10 rounded-full text-slate-400"><X size={24}/></button>
              </div>
              <div className="flex-1 flex items-center justify-center p-10 text-center">
                 <div>
                    <Lock size={64} className="mx-auto text-slate-600 mb-4"/>
                    <h2 className="text-2xl font-bold text-white mb-2">Restricted Access</h2>
                    <p className="text-slate-400 mb-6">Please log in to access this resource.</p>
                    <button onClick={openStripe} className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-bold">Enroll Now</button>
                 </div>
              </div>
          </div>
        </div>
      )}
      
      {/* AWS Lab Terminal */}
      {activeLab && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="w-full max-w-5xl bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col h-[80vh]">
              <div className="bg-slate-800 p-2 flex justify-between items-center">
                 <div className="text-slate-400 text-xs font-mono ml-4 flex items-center gap-2">
                    <Cloud size={14} className="text-orange-500"/> AWS CloudShell
                 </div>
                 <button onClick={() => setActiveLab(null)}><X size={18} className="text-slate-400 mr-2"/></button>
              </div>
              <div className="flex-1 bg-black p-6 font-mono text-sm overflow-y-auto">
                 {labBootLines.map((line, idx) => (
                    <div key={idx} className="text-green-500/90 mb-1"><span className="text-blue-500 mr-2">ec2-user@ip-172-31-18-42:~$</span>{line}</div>
                 ))}
                 {isLabReady && <button onClick={openGoogleForm} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors">OPEN AWS CONSOLE</button>}
              </div>
           </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavigation('home')}>
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-600/10 flex items-center justify-center group-hover:shadow-cyan-500/50 transition-all duration-300 border border-white/10">
                 <TechSkylineLogo className="w-8 h-8 animate-pulse"/>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">TECH SKYLINE</h1>
                <p className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] mt-0.5">IT SOLUTIONS</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {['Home', 'About', 'Services', 'Training', 'Corporate', 'Internships', 'Podcast'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  className={`text-slate-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide hover:scale-105 transform duration-200 relative group ${
                    (currentView === item.toLowerCase()) ? "text-white" : ""
                  }`}
                >
                  {item === 'About' ? 'About Us' : item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full ${currentView === item.toLowerCase() ? "w-full" : "w-0"}`}></span>
                </button>
              ))}
              <div className="flex gap-2">
                 <button onClick={() => handleNavigation('career-upskilling')} className="text-xs font-bold text-yellow-400 border border-yellow-500/30 px-3 py-2 rounded-lg hover:bg-yellow-500/10 transition-colors">
                    Free Roadmap
                 </button>
                 <button 
                   onClick={openStripe}
                   className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2 text-sm uppercase tracking-wide transform hover:-translate-y-0.5 border border-white/10"
                 >
                   Enroll Now <ExternalLink size={14} />
                 </button>
              </div>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white hover:text-cyan-400 transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full shadow-2xl h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex flex-col p-4 space-y-4">
              {['Home', 'About', 'Services', 'Training', 'Corporate', 'Internships', 'Podcast'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  className="text-left text-slate-300 font-medium py-3 border-b border-white/10 hover:bg-white/5 px-2 rounded uppercase hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button onClick={openGoogleForm} className="text-left bg-cyan-500/20 text-cyan-400 font-bold py-3 px-3 rounded flex items-center gap-2 border border-cyan-500/30">
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* VIEW RENDERER */}
      {currentView === 'home' ? (
        <>
            {/* Existing Sections... */}
             <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden flex items-center min-h-[90vh]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              </div>

              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                  <div className="mb-10 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-2xl">
                      <TechSkylineLogo size="large" className="h-32 md:h-48 w-32 md:w-48"/>
                      <div className="mt-4 text-center">
                          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200 tracking-tighter drop-shadow-sm uppercase">
                            TECH SKYLINE
                          </h1>
                          <p className="text-xl md:text-2xl text-slate-300 font-bold tracking-[0.2em] mt-2 border-t border-white/20 pt-2 inline-block">
                            INFORMATION TECHNOLOGY CONSULTING
                          </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 max-w-4xl">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-wide leading-tight drop-shadow-md bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {HERO_CONTENT.subtitle}
                    </h2>
                    <div className="flex items-center justify-center gap-2 opacity-80">
                      <Quote size={20} className="text-cyan-400" />
                      <p className="text-lg font-light italic text-slate-300">"{HERO_CONTENT.quote}"</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed border-l-4 border-cyan-500 pl-6 text-left bg-black/20 p-4 rounded-r-lg backdrop-blur-sm">
                    {HERO_CONTENT.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                    <button onClick={() => handleNavigation('contact')} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105">
                      Start Your Journey <ArrowRight size={20} />
                    </button>
                    <button onClick={() => handleNavigation('services')} className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center">
                      Explore Services
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ... Other Home Sections ... */}
            <section className="py-20 relative bg-slate-900 border-t border-white/5">
               {/* Simplified Webinar Section for brevity in this response */}
               <div className="container mx-auto px-4 md:px-6">
                  <div className="flex flex-col lg:flex-row gap-12">
                     <div className="lg:w-1/2">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                           <VideoIcon className="text-red-500" /> Upcoming Webinars
                        </h3>
                        <div className="space-y-6">
                           {WEBINARS.map((webinar) => (
                              <div key={webinar.id} className="bg-slate-800 p-6 rounded-2xl border border-white/5 flex gap-4 hover:border-red-500/30 transition-all group">
                                 <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden hidden sm:block">
                                    <img src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                 </div>
                                 <div className="flex-1">
                                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                                       <Calendar size={12}/> {webinar.date} • {webinar.time}
                                    </div>
                                    <h4 className="font-bold text-white text-lg mb-2">{webinar.title}</h4>
                                    <p className="text-sm text-slate-400 mb-4">{webinar.description}</p>
                                    <button onClick={openGoogleForm} className="text-xs bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-bold transition-colors">Register Free</button>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="lg:w-1/2">
                         <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                           <Github className="text-white" /> Open Source Resources
                        </h3>
                        <div className="grid gap-4">
                           {COMMUNITY_RESOURCES.map((repo, idx) => (
                              <div key={idx} className="bg-[#0d1117] p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all cursor-pointer group" onClick={() => window.open('https://github.com', '_blank')}>
                                 <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-blue-400 group-hover:underline">{repo.title}</h4>
                                    <span className="text-xs border border-white/10 px-2 py-0.5 rounded-full text-slate-400">{repo.language}</span>
                                 </div>
                                 <p className="text-sm text-slate-400 mb-3">{repo.description}</p>
                                 <div className="flex gap-4 text-xs text-slate-500">
                                    <span className="flex items-center gap-1"><Star size={12}/> {repo.stars}</span>
                                    <span className="flex items-center gap-1"><CheckCircle size={12}/> {repo.forks}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* ENHANCED CORPORATE TRAINING SECTION */}
            <section id="corporate" className="py-20 relative bg-slate-900 border-t border-white/5 overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 pointer-events-none"></div>
               <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <BriefcaseIcon size={14} /> For Organizations
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{CORPORATE_TRAINING.title}</h2>
                    <p className="text-xl text-slate-300 font-light leading-relaxed mb-4">{CORPORATE_TRAINING.subtitle}</p>
                    <p className="text-slate-400 mb-12">{CORPORATE_TRAINING.description}</p>
                    
                    {/* Deep Dive Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
                       {CORPORATE_TRAINING.deepDive.map((item, i) => (
                          <div key={i} className="bg-slate-800/50 p-6 rounded-2xl border border-white/10 hover:bg-slate-800 transition-all group">
                             <item.icon className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                             <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                             <p className="text-sm text-slate-400 leading-relaxed">{item.content}</p>
                          </div>
                       ))}
                    </div>

                    {/* Case Studies Section */}
                    <div className="mb-16">
                       <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                          <TrendingUp className="text-yellow-400"/> Proven Success Stories
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {CORPORATE_TRAINING.caseStudies.map((study, idx) => (
                             <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all group hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                   <div className="bg-slate-950 p-3 rounded-xl text-yellow-400 border border-white/5">
                                      <study.icon size={24} />
                                   </div>
                                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-950 px-2 py-1 rounded">Case Study</span>
                                </div>
                                <h4 className="text-white font-bold text-lg mb-1">{study.client}</h4>
                                <div className="space-y-3 mt-4">
                                   <div>
                                      <p className="text-xs text-slate-500 font-bold uppercase">Challenge</p>
                                      <p className="text-sm text-slate-300 leading-snug">{study.challenge}</p>
                                   </div>
                                   <div>
                                      <p className="text-xs text-slate-500 font-bold uppercase">Solution</p>
                                      <p className="text-sm text-slate-300 leading-snug">{study.solution}</p>
                                   </div>
                                   <div className="pt-2 border-t border-white/5">
                                      <p className="text-xs text-green-400 font-bold uppercase flex items-center gap-1"><CheckCircle size={12}/> Outcome</p>
                                      <p className="text-sm text-white font-medium">{study.outcome}</p>
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* Support Structure Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                       {CORPORATE_TRAINING.supportAndSLA.map((support, i) => (
                          <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                             <div className="bg-slate-900 p-2 rounded-lg text-purple-400">
                                <support.icon size={20} />
                             </div>
                             <div className="text-left">
                                <h4 className="font-bold text-white text-sm">{support.title}</h4>
                                <p className="text-xs text-slate-500">{support.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>

                    {/* Immediate Response Workflow */}
                    <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/10 text-left relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-12 opacity-5"><Activity size={200} className="text-white"/></div>
                       <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10"><Layers className="text-green-400"/> Immediate Response Workflow</h4>
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-6">
                          <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
                          {CORPORATE_TRAINING.workflow.map((step, i) => (
                             <div key={i} className={`flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3 self-center md:self-auto ${step.active ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-slate-700 text-slate-400'}`}>{i+1}</div>
                                <div className="font-bold text-white text-sm mb-1">{step.title}</div>
                                <div className="text-xs text-slate-500 max-w-[120px] mx-auto md:mx-0">{step.desc}</div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="mt-12 text-center">
                       <button onClick={() => handleNavigation('contact')} className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl">Get Custom Proposal</button>
                    </div>
                  </div>
               </div>
            </section>
        </>
      ) : currentView === 'admin-dashboard' ? (
         // ADMIN DASHBOARD VIEW
         <div className="pt-32 pb-20 animate-in fade-in duration-500">
            <div className="container mx-auto px-4 max-w-7xl">
               <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-black text-white flex items-center gap-3">
                     <PieChart className="text-cyan-400"/> Analytics Dashboard
                  </h1>
                  <button onClick={() => handleNavigation('home')} className="flex items-center gap-2 text-slate-400 hover:text-white"><ArrowLeft size={16}/> Back to Home</button>
               </div>

               <div className="bg-slate-800 p-6 rounded-2xl border border-white/10 mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="bg-orange-500/20 text-orange-500 p-3 rounded-xl"><BarChart2 size={24}/></div>
                     <div>
                        <h3 className="text-white font-bold">Google Analytics 4 Live View</h3>
                        <p className="text-slate-400 text-sm flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 42 Users Active Now</p>
                     </div>
                  </div>
                  <button className="bg-slate-700 text-white px-4 py-2 rounded text-xs">View Full Report</button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-white/10">
                     <div className="text-slate-400 text-xs font-bold uppercase mb-2">Total Leads (MoM)</div>
                     <div className="text-3xl font-bold text-white">1,245</div>
                     <div className="text-green-400 text-xs mt-1 flex items-center gap-1"><TrendingUp size={12}/> +12.5%</div>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-2xl border border-white/10">
                     <div className="text-slate-400 text-xs font-bold uppercase mb-2">Webinar Conversion</div>
                     <div className="text-3xl font-bold text-white">18.4%</div>
                     <div className="text-green-400 text-xs mt-1 flex items-center gap-1"><TrendingUp size={12}/> +2.1%</div>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-2xl border border-white/10">
                     <div className="text-slate-400 text-xs font-bold uppercase mb-2">Corporate Pipeline</div>
                     <div className="text-3xl font-bold text-white">$415k</div>
                     <div className="text-slate-500 text-xs mt-1">Weighted Value</div>
                  </div>
                  <div className="bg-slate-800 p-6 rounded-2xl border border-white/10">
                     <div className="text-slate-400 text-xs font-bold uppercase mb-2">Avg. Response Time</div>
                     <div className="text-3xl font-bold text-white">45m</div>
                     <div className="text-green-400 text-xs mt-1">Within SLA</div>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-slate-800 p-8 rounded-2xl border border-white/10">
                     <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><BarChart2 className="text-purple-400"/> Leads by Source Platform</h3>
                     <div className="space-y-4">
                        {ADMIN_DASHBOARD_DATA.sources.map((src, i) => (
                           <div key={i}>
                              <div className="flex justify-between text-sm mb-1">
                                 <span className="text-slate-300">{src.platform}</span>
                                 <span className="text-white font-bold">{src.leads}%</span>
                              </div>
                              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                 <div className={`h-full ${src.color}`} style={{ width: `${src.leads}%` }}></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-slate-800 p-8 rounded-2xl border border-white/10">
                     <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><List className="text-yellow-400"/> Recent Lead Scoring</h3>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left">
                           <thead className="text-xs text-slate-500 uppercase border-b border-white/10">
                              <tr>
                                 <th className="pb-3">Name</th>
                                 <th className="pb-3">Role</th>
                                 <th className="pb-3">Score</th>
                                 <th className="pb-3">Status</th>
                              </tr>
                           </thead>
                           <tbody className="text-sm">
                              {ADMIN_DASHBOARD_DATA.recentLeads.map((lead, i) => (
                                 <tr key={i} className="border-b border-white/5 last:border-0">
                                    <td className="py-3 text-white font-bold">{lead.name}</td>
                                    <td className="py-3 text-slate-400">{lead.role}</td>
                                    <td className="py-3 text-slate-300">{lead.score}</td>
                                    <td className="py-3">
                                       <span className={`px-2 py-1 rounded text-xs font-bold ${lead.status === 'Hot' ? 'bg-red-500/20 text-red-400' : lead.status === 'Warm' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                          {lead.status}
                                       </span>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     <div className="mt-6 pt-6 border-t border-white/10">
                        <h4 className="text-sm font-bold text-white mb-3">Scoring Criteria Logic</h4>
                        <div className="flex flex-wrap gap-2">
                           {ADMIN_DASHBOARD_DATA.leadScoring.map((rule, idx) => (
                              <span key={idx} className="bg-slate-700 px-3 py-1 rounded text-xs text-slate-300 border border-white/5">
                                 {rule.criteria} <strong className="text-green-400">{rule.points}</strong>
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      ) : currentView === 'about' ? (
        <About />
      ) : currentView === 'policies' ? (
        <Policies />
      ) : currentView === 'career-upskilling' ? (
         // Existing Career Upskilling Code...
         <div className="pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
               <button onClick={() => handleNavigation('home')} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><ArrowLeft size={16}/> Back to Home</button>
               {/* ... (Existing content) ... */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-2 block">Free Resource</span>
                     <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        The Ultimate 2025 <span className="text-cyan-400">Cloud Career Roadmap</span>
                     </h1>
                     <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Stop guessing what to learn. Get a step-by-step guide to becoming a Cloud Architect, DevOps Engineer, or Data Scientist in 2025.
                     </p>
                     <ul className="space-y-4 mb-8">
                        {['Salary Trends for AWS/Azure', 'Top 5 Certifications to Get Hired', 'Free Tools Checklist', 'Resume Templates'].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-slate-200">
                              <CheckCircle className="text-green-400 shrink-0" size={20}/> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                     <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Roadmap</h3>
                     <p className="text-slate-400 mb-6 text-sm">Enter your details to receive the PDF instantly via email.</p>
                     <div className="space-y-4">
                        <input type="text" placeholder="Full Name" className="w-full bg-slate-900 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500 outline-none" />
                        <input type="email" placeholder="Work Email Address" className="w-full bg-slate-900 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500 outline-none" />
                        <select className="w-full bg-slate-900 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500 outline-none">
                           <option>I am a Student</option>
                           <option>I am a Working Professional</option>
                        </select>
                        <button onClick={openGoogleForm} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg p-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg">
                           Send Me The Roadmap
                        </button>
                     </div>
                     <p className="text-xs text-slate-500 text-center mt-4"><Lock size={10} className="inline mr-1"/> Your data is secure. No spam.</p>
                  </div>
               </div>
            </div>
         </div>
      ) : currentView === 'cloud-certifications' ? (
         // Existing Cloud Certifications Code...
         <div className="pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="container mx-auto px-4 max-w-5xl text-center">
               <button onClick={() => handleNavigation('home')} className="mb-8 inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><ArrowLeft size={16}/> Back to Home</button>
               <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Fast-Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Cloud Certification</span>
               </h1>
               <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                  Don't just pass the exam—master the skills. Our certification programs come with 100% passing assistance and hands-on labs.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {[
                     { title: "AWS Solutions Architect", bg: "from-orange-500/20 to-yellow-500/20", border: "border-orange-500/30" },
                     { title: "Azure Administrator", bg: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30" },
                     { title: "GCP Cloud Engineer", bg: "from-red-500/20 to-pink-500/20", border: "border-red-500/30" }
                  ].map((card, i) => (
                     <div key={i} className={`p-8 rounded-2xl bg-gradient-to-b ${card.bg} border ${card.border} hover:scale-105 transition-transform`}>
                        <Award size={40} className="text-white mb-4 mx-auto" />
                        <h3 className="font-bold text-white text-xl mb-2">{card.title}</h3>
                        <ul className="text-left text-sm text-slate-300 space-y-2 mt-4">
                           <li>• Official Curriculum</li>
                           <li>• 500+ Practice Questions</li>
                           <li>• Exam Voucher Support</li>
                        </ul>
                        <button onClick={openGoogleForm} className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-lg transition-colors">View Syllabus</button>
                     </div>
                  ))}
               </div>
               <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Book a 15-Minute Career Clarity Call</h3>
                  <p className="text-slate-400 mb-6">Confused about which certification to pick? Talk to a senior architect for free.</p>
                  <button onClick={openZoomBooking} className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2 mx-auto">
                     <VideoIcon size={18}/> Schedule Free Call
                  </button>
               </div>
            </div>
         </div>
      ) : currentView === 'podcast' ? (
         // Existing Podcast View...
         <div className="pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
               <button onClick={() => handleNavigation('home')} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><ArrowLeft size={16}/> Back to Home</button>
               <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-900/50 border border-purple-500/30 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                     <Mic size={14} /> Listen Now
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-6">The Tech Skyline Show</h1>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                     Deep dives into Cloud Computing, AI trends, and Career Hacks for IT professionals.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PODCASTS.map((pod) => (
                     <div key={pod.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-white/5 group hover:border-purple-500/50 transition-all">
                        <div className="aspect-video relative overflow-hidden">
                           <img src={pod.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={pod.title}/>
                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-purple-600 p-3 rounded-full text-white shadow-lg"><Play size={24} fill="currentColor"/></div>
                           </div>
                        </div>
                        <div className="p-6">
                           <div className="flex justify-between items-center mb-3">
                              <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">Podcast</span>
                              <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12}/> {pod.duration}</span>
                           </div>
                           <h3 className="font-bold text-white text-lg mb-2 leading-tight">{pod.title}</h3>
                           <p className="text-sm text-slate-400 mb-4">Guest: {pod.guest}</p>
                           <button className="w-full border border-white/10 hover:bg-white/5 text-white py-2 rounded-lg text-sm font-bold transition-colors">Listen Episode</button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      ) : (
        <></>
      )}

      {/* Contact Section - Lead Scoring Enhanced Form */}
      <section id="contact" className="py-20 relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-cyan-600 to-blue-700 p-10 text-white relative overflow-hidden">
                     <h3 className="text-2xl font-bold mb-6 relative z-10">Get In Touch</h3>
                     <p className="text-blue-100 mb-8 relative z-10 leading-relaxed">
                        Ready to transform your business or career? Fill out the details to get an immediate response.
                     </p>
                     
                     <div className="space-y-6 relative z-10">
                        <div className="flex items-start gap-4">
                           <Phone className="mt-1 shrink-0 text-blue-200" size={20} />
                           <div>
                              <h4 className="font-bold text-sm">Phone</h4>
                              <p className="text-blue-100 text-sm">{CONTACT_INFO.phone}</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <Mail className="mt-1 shrink-0 text-blue-200" size={20} />
                           <div>
                              <h4 className="font-bold text-sm">Email</h4>
                              <p className="text-blue-100 text-sm">{CONTACT_INFO.email}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="lg:w-2/3 p-10">
                     <h3 className="text-2xl font-bold text-white mb-6">Start Conversation</h3>
                     <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500"/>
                           <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500"/>
                           <select name="interest" value={formData.interest} onChange={handleInputChange} className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500">
                              <option>Corporate Training</option>
                              <option>IT Staffing</option>
                              <option>Free Consultation</option>
                              <option>Student Internship</option>
                           </select>
                        </div>
                        
                        {/* Enhanced Fields for Lead Scoring */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           <select name="role" value={formData.role} onChange={handleInputChange} className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500">
                              <option value="">Select Role</option>
                              <option value="Student">Student / Fresher</option>
                              <option value="Professional">Working Professional</option>
                              <option value="Manager">Hiring Manager / HR</option>
                              <option value="Executive">CXO / Director</option>
                           </select>
                           <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500">
                              <option value="">Timeline</option>
                              <option value="Immediate">Immediate</option>
                              <option value="1-3 Months">1-3 Months</option>
                              <option value="Later">Browsing</option>
                           </select>
                           <select name="budget" value={formData.budget} onChange={handleInputChange} className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500">
                              <option value="">Budget</option>
                              <option value="< $1k">Under $1k</option>
                              <option value="$1k - $5k">$1k - $5k</option>
                              <option value="$5k - $20k">$5k - $20k</option>
                              <option value="> $20k">Enterprise / Custom</option>
                           </select>
                        </div>

                        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject/Skill" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500"/>

                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="How can we help you?" className="bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white w-full text-sm outline-none focus:border-cyan-500"></textarea>
                        
                        <div className="flex gap-4">
                           <button onClick={handleWhatsApp} className="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-500 transition-colors"><MessageCircle size={18}/> WhatsApp</button>
                           <button onClick={handleEmail} className="flex-1 bg-cyan-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-500 transition-colors"><Mail size={18}/> Email</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/10 text-slate-400 text-sm">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
               <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <TechSkylineLogo className="w-8 h-8"/> <span className="text-white font-bold">TECH SKYLINE</span>
               </div>
               
               {/* Tech Stack Icons */}
               <div className="flex gap-4 flex-wrap justify-center">
                  <span className="text-xs text-slate-500 uppercase self-center mr-2">Powered By:</span>
                  {TECH_STACK.map((tech, i) => (
                     <div key={i} className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-xs text-slate-400 font-medium hover:border-white/20 transition-colors cursor-default" title={tech.category}>
                        {tech.name}
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex justify-center gap-4 mb-6">
               {SOCIAL_MEDIA.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors border border-white/5"><social.icon size={20}/></a>
               ))}
            </div>
            
            <p className="max-w-md mx-auto mb-8 text-center">{CONTACT_INFO.tagline}</p>
            
            <div className="flex justify-center gap-6 mb-8 text-xs uppercase tracking-wide">
               <button onClick={() => handleNavigation('policies')}>Privacy Policy</button>
               <button onClick={() => handleNavigation('career-upskilling')}>Skill Roadmap</button>
               <button onClick={() => handleNavigation('admin-dashboard')} className="text-slate-600 hover:text-slate-400 font-bold">Admin Demo</button>
            </div>
            <p className="text-center">&copy; {new Date().getFullYear()} {CONTACT_INFO.company}. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}

export default App;
