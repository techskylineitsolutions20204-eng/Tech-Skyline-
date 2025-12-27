import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { 
  Mail, Phone, MapPin, 
  Send, Sparkles, Mic, Loader2,
  Globe, Brain, ShieldCheck
} from 'lucide-react';
import { CONTACT_INFO } from './constants';

// Clean audio decoding helper
async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

function decodeBase64(base64: string): Uint8Array {
  const binaryString = window.atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encodeBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export const Contact = () => {
  const [isLive, setIsLive] = useState(false);
  const [status, setStatus] = useState('');
  const [transcription, setTranscription] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const startLiveBridge = async () => {
    try {
      setIsLive(true);
      setStatus('Initializing Concierge...');
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const outCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const inCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextRef.current = outCtx;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setStatus('Bridge Live. Speak now.');
            const source = inCtx.createMediaStreamSource(stream);
            const scriptProcessor = inCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const blob = { 
                data: encodeBase64(new Uint8Array(int16.buffer)), 
                mimeType: 'audio/pcm;rate=16000' 
              };
              sessionPromise.then(s => s.sendRealtimeInput({ media: blob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inCtx.destination);
          },
          onmessage: async (msg) => {
            const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData) {
              const buf = await decodeAudioData(decodeBase64(audioData), outCtx, 24000, 1);
              const source = outCtx.createBufferSource();
              source.buffer = buf;
              source.connect(outCtx.destination);
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outCtx.currentTime);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buf.duration;
              sourcesRef.current.add(source);
            }
            if (msg.serverContent?.outputTranscription) {
              setTranscription(t => t + ' ' + msg.serverContent!.outputTranscription!.text);
            }
          },
          onclose: () => stopLiveBridge(),
          onerror: (err) => {
            console.error('Live Bridge Error:', err);
            stopLiveBridge();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: 'You are the Tech Skyline Digital Concierge. Professional, warm, and tech-savvy. Answer enterprise queries concisely. For quotes, refer to the form.',
          outputAudioTranscription: {},
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err: any) {
      console.error('Bridge failed:', err);
      stopLiveBridge();
    }
  };

  const stopLiveBridge = () => {
    setIsLive(false);
    setStatus('');
    setTranscription('');
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Inquiry successfully deployed. Our lead architect will follow up shortly.');
      setForm({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            Initiate <span className="gradient-text">Contact.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Whether scaling a startup or transforming a global enterprise, establish your bridge to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <div className="glass p-10 md:p-12 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Send size={150} /></div>
             <h2 className="text-3xl font-black text-white mb-8">Strategic Inquiry</h2>
             <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Full Name</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full glass bg-slate-900 border-white/5 p-4 rounded-xl text-white outline-none focus:border-brand-500 transition-all" />
                   </div>
                   <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Work Email</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full glass bg-slate-900 border-white/5 p-4 rounded-xl text-white outline-none focus:border-brand-500 transition-all" />
                   </div>
                </div>
                <div>
                   <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Organization</label>
                   <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full glass bg-slate-900 border-white/5 p-4 rounded-xl text-white outline-none focus:border-brand-500 transition-all" />
                </div>
                <div>
                   <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Project Brief</label>
                   <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full glass bg-slate-900 border-white/5 p-4 rounded-xl text-white outline-none focus:border-brand-500 transition-all resize-none"></textarea>
                </div>
                <button disabled={isSubmitting} className="w-full py-5 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-brand-600/20 transition-all flex items-center justify-center gap-3 active:scale-95">
                   {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Deploy Inquiry</>}
                </button>
             </form>
             
             <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Direct Lines</h4>
                   <div className="space-y-3">
                      <p className="flex items-center gap-2 text-slate-400 text-xs"><Mail size={14} /> {CONTACT_INFO.email}</p>
                      <p className="flex items-center gap-2 text-slate-400 text-xs"><Phone size={14} /> {CONTACT_INFO.phone}</p>
                   </div>
                </div>
                <div>
                   <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Headquarters</h4>
                   <p className="text-slate-400 text-xs leading-relaxed"><MapPin size={14} className="inline mr-1" /> San Antonio, TX, USA</p>
                </div>
             </div>
          </div>

          {/* AI Interaction Side */}
          <div className="flex flex-col gap-8">
             <div className="glass bg-slate-950 p-10 rounded-[3rem] border-brand-500/20 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] text-center">
                {isLive ? (
                   <div className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
                      <div className="relative mx-auto w-32 h-32">
                         <div className="absolute inset-0 bg-brand-500/20 rounded-full animate-ping"></div>
                         <div className="relative glass w-32 h-32 rounded-full flex items-center justify-center border-brand-500/50">
                            <Brain size={64} className="text-brand-500 animate-pulse" />
                         </div>
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">{status}</h3>
                      <div className="max-h-[150px] overflow-y-auto no-scrollbar p-6 glass rounded-2xl text-slate-400 text-sm italic font-light leading-relaxed border-white/5">
                        {transcription || "Listening for your query..."}
                      </div>
                      <button onClick={stopLiveBridge} className="px-8 py-3 glass bg-red-500/10 text-red-500 border-red-500/20 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all">
                        Terminate Session
                      </button>
                   </div>
                ) : (
                   <div className="space-y-8 max-w-sm">
                      <div className="w-24 h-24 glass rounded-3xl flex items-center justify-center text-brand-500 mx-auto shadow-2xl border-white/5">
                         <Sparkles size={48} />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">Digital Concierge</h3>
                      <p className="text-slate-400 font-light leading-relaxed">
                         Establish a live audio link with our AI representative to discuss your enterprise requirements in real-time.
                      </p>
                      <button onClick={startLiveBridge} className="w-full py-5 bg-gradient-to-r from-brand-600 to-studio-700 rounded-2xl font-black text-lg text-white shadow-xl shadow-brand-600/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                         <Mic size={20} /> Establish Link
                      </button>
                      <p className="text-[10px] text-slate-600 uppercase font-black tracking-widest">Low-Latency Neural Bridge</p>
                   </div>
                )}
             </div>

             <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-3xl border-white/5 flex gap-4 items-center">
                   <div className="bg-brand-600/10 p-3 rounded-2xl text-brand-500"><ShieldCheck size={24} /></div>
                   <div>
                      <h4 className="text-white font-bold text-sm">Secure Bridge</h4>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">Neural Encryption</p>
                   </div>
                </div>
                <div className="glass p-6 rounded-3xl border-white/5 flex gap-4 items-center">
                   <div className="bg-studio-600/10 p-3 rounded-2xl text-studio-500"><Globe size={24} /></div>
                   <div>
                      <h4 className="text-white font-bold text-sm">Global Scale</h4>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">Edge-Node Ready</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};