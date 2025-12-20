
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { 
  ArrowLeft, Upload, Wand2, Video as VideoIcon, 
  Image as ImageIcon, Sparkles, X, ChevronRight, 
  AlertCircle, Loader2, RefreshCw, Play, Download,
  Search, Mic, MessageSquare, History, Globe,
  Headphones, Info, Zap, Brain
} from 'lucide-react';

// Audio decoding helper
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
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

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encodeBase64(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export const AIStudio = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'image' | 'research' | 'consultant'>('video');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [researchResults, setResearchResults] = useState<{text: string, sources: any[]} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  
  // Live Voice State
  const [isListening, setIsListening] = useState(false);
  const [liveTranscription, setLiveTranscription] = useState('');
  const [liveHistory, setLiveHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const generateVideo = async () => {
    if (!file && !prompt) {
      setError("Provide a photo or a description to start.");
      return;
    }
    setLoading(true);
    setError(null);
    setResultUrl(null);
    setStatus('Booting Veo engine...');

    try {
      if (!(await (window as any).aistudio.hasSelectedApiKey())) {
        await (window as any).aistudio.openSelectKey();
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let imageBytes = '';
      if (file) {
        imageBytes = await fileToBase64(file);
      }

      setStatus('Synthesizing frames... this takes a moment.');
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Cinematic animation with realistic movements',
        image: file ? {
          imageBytes: imageBytes,
          mimeType: file.type,
        } : undefined,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      while (!operation.done) {
        setStatus('AI is dreaming up your video...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await videoResponse.blob();
        setResultUrl(URL.createObjectURL(blob));
      } else {
        throw new Error("Generation failed to produce a result.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  const editImage = async () => {
    if (!file || !prompt) {
      setError("Please upload an image and specify the change.");
      return;
    }
    setLoading(true);
    setError(null);
    setResultUrl(null);
    setStatus('Applying Gemini filters...');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = await fileToBase64(file);

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: file.type } },
            { text: prompt },
          ],
        },
      });

      let found = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setResultUrl(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
            found = true;
            break;
          }
        }
      }

      if (!found) throw new Error("No image data returned from AI.");
    } catch (err: any) {
      setError(err.message || "Image edit failed.");
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  const performResearch = async () => {
    if (!prompt) {
      setError("Enter a technology topic or question to research.");
      return;
    }
    setLoading(true);
    setError(null);
    setResearchResults(null);
    setStatus('Consulting global databases...');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "No insights found.";
      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setResearchResults({ text, sources });
    } catch (err: any) {
      setError(err.message || "Research failed.");
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  const startConsultant = async () => {
    if (isListening) {
      stopConsultant();
      return;
    }

    try {
      setIsListening(true);
      setError(null);
      setStatus('Starting voice bridge...');
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const outCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const inCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextRef.current = outCtx;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setStatus('Bridge connected. Speaking now.');
            const source = inCtx.createMediaStreamSource(stream);
            const scriptProcessor = inCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) int16[i] = inputData[i] * 32768;
              const blob = {
                data: encodeBase64(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              sessionPromise.then(s => s.sendRealtimeInput({ media: blob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inCtx.destination);
          },
          onmessage: async (msg) => {
            const audioData = msg.serverContent?.modelTurn?.parts[0]?.inlineData.data;
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
              setLiveTranscription(prev => prev + msg.serverContent!.outputTranscription!.text);
            }
            if (msg.serverContent?.turnComplete) {
              setLiveHistory(prev => [...prev, {role: 'model', text: liveTranscription}]);
              setLiveTranscription('');
            }
          },
          onclose: () => stopConsultant(),
          onerror: (e) => { console.error(e); stopConsultant(); }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: 'You are an expert IT consultant from Tech Skyline. You are helpful, professional, and knowledgeable about cloud, AI, and enterprise tech. Keep responses concise and focused on business value.',
          outputAudioTranscription: {},
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err: any) {
      setError(err.message || "Could not start consultant.");
      stopConsultant();
    }
  };

  const stopConsultant = () => {
    setIsListening(false);
    setStatus('');
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

  const reset = () => {
    setFile(null);
    setPreviewUrl(null);
    setPrompt('');
    setResultUrl(null);
    setResearchResults(null);
    setError(null);
    stopConsultant();
    setLiveHistory([]);
  };

  useEffect(() => {
    return () => stopConsultant();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-10 pb-20 animate-in fade-in duration-500 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to dashboard
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
              AI <span className="gradient-text">Innovation Hub</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              The core of Tech Skyline intelligence. Explore generative creative tools, real-time research, and voice-enabled consultancy.
            </p>
          </div>

          <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar py-2">
            <div className="glass p-1.5 rounded-[2rem] flex gap-2 shrink-0">
              {[
                {id: 'video', label: 'Veo Video', icon: VideoIcon, color: 'studio'},
                {id: 'image', label: 'Gemini Edit', icon: ImageIcon, color: 'brand'},
                {id: 'research', label: 'Research', icon: Search, color: 'blue'},
                {id: 'consultant', label: 'Consultant', icon: Mic, color: 'purple'}
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id as any); reset(); }}
                  className={`px-6 py-3 rounded-2xl flex items-center gap-3 font-black text-sm transition-all whitespace-nowrap ${activeTab === tab.id ? `bg-${tab.color === 'studio' ? 'studio-600' : tab.color === 'brand' ? 'brand-600' : tab.color === 'blue' ? 'blue-600' : 'purple-600'} text-white shadow-xl shadow-${tab.color}-600/30` : 'text-slate-500 hover:text-white'}`}
                >
                  <tab.icon size={18} /> {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Control Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass p-8 rounded-[3rem] border-white/5 shadow-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tighter text-white">
                  {activeTab === 'video' || activeTab === 'image' ? <Upload className="text-brand-500" size={24} /> : <Zap className="text-brand-500" size={24} />}
                  {activeTab === 'video' ? 'Animation Engine' : activeTab === 'image' ? 'Pixel Alchemy' : activeTab === 'research' ? 'Market Intelligence' : 'Voice Bridge'}
                </h3>

                {(activeTab === 'video' || activeTab === 'image') && (
                  <div className="mb-8">
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Upload Source</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-[2rem] p-10 flex flex-col items-center justify-center cursor-pointer transition-all group relative overflow-hidden ${previewUrl ? 'border-brand-500/50' : 'border-white/10 hover:border-brand-500/50'}`}
                    >
                      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                      {previewUrl ? (
                        <div className="relative group">
                          <img src={previewUrl} alt="Preview" className="max-h-48 rounded-2xl shadow-2xl" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl text-white">
                            <RefreshCw className="animate-spin-slow" />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <ImageIcon size={32} className="text-slate-500" />
                          </div>
                          <p className="text-slate-400 font-medium">Drop image here</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {activeTab !== 'consultant' && (
                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">
                        {activeTab === 'research' ? 'Topic or Question' : 'Instructions'}
                      </label>
                      <textarea 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={
                          activeTab === 'video' ? "Describe the movement... (e.g. Cinematic pan)" : 
                          activeTab === 'image' ? "What to change? (e.g. Add a cyberpunk sky)" :
                          activeTab === 'research' ? "Ask anything... (e.g. What are the top 5 AI startups in TX in 2024?)" : ""
                        }
                        className="w-full glass bg-slate-900/50 rounded-2xl p-5 text-white outline-none focus:border-brand-500/50 transition-all min-h-[120px] resize-none placeholder:text-slate-600"
                      />
                    </div>
                  )}

                  {activeTab === 'video' && (
                    <div className="flex gap-4">
                      {['16:9', '9:16'].map(ratio => (
                        <button 
                          key={ratio}
                          onClick={() => setAspectRatio(ratio as any)}
                          className={`flex-1 py-3 rounded-xl border font-black text-xs transition-all ${aspectRatio === ratio ? 'bg-white text-slate-900 border-white' : 'border-white/10 text-slate-500'}`}
                        >
                          {ratio}
                        </button>
                      ))}
                    </div>
                  )}

                  <button 
                    disabled={loading || (activeTab === 'consultant' && isListening)}
                    onClick={() => {
                      if (activeTab === 'video') generateVideo();
                      else if (activeTab === 'image') editImage();
                      else if (activeTab === 'research') performResearch();
                      else if (activeTab === 'consultant') startConsultant();
                    }}
                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 text-white ${
                      activeTab === 'video' ? 'bg-studio-600 shadow-studio-600/20' : 
                      activeTab === 'image' ? 'bg-brand-600 shadow-brand-600/20' : 
                      activeTab === 'research' ? 'bg-blue-600 shadow-blue-600/20' : 'bg-purple-600 shadow-purple-600/20'
                    } shadow-xl`}
                  >
                    {loading ? <Loader2 className="animate-spin" /> : activeTab === 'consultant' ? <Mic /> : <Wand2 />}
                    {loading ? 'Synthesizing...' : activeTab === 'consultant' ? 'Talk to AI Expert' : 'Execute AI'}
                  </button>
                  
                  {activeTab === 'consultant' && isListening && (
                    <button 
                      onClick={stopConsultant}
                      className="w-full py-4 glass border-red-500/30 text-red-500 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-red-500/10 transition-all"
                    >
                      <X size={18} /> Stop Session
                    </button>
                  )}
                </div>
              </div>

              {error && (
                <div className="p-5 glass border-red-500/20 rounded-3xl flex gap-4 text-red-400 text-sm animate-in slide-in-from-top duration-300">
                  <AlertCircle className="shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </div>

            {/* Preview / Results Side */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="glass bg-slate-950/50 rounded-[3rem] border-white/5 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl p-6">
                {loading ? (
                  <div className="text-center space-y-6">
                    <div className="relative mx-auto w-24 h-24">
                      <div className="w-24 h-24 bg-brand-500/10 rounded-full animate-ping absolute inset-0"></div>
                      <div className="w-24 h-24 glass rounded-full flex items-center justify-center relative z-10">
                        <Sparkles size={40} className="text-brand-500 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1 text-white uppercase">{status}</h4>
                      <p className="text-slate-500 text-sm">Processing through Tech Skyline neural networks.</p>
                    </div>
                  </div>
                ) : activeTab === 'consultant' ? (
                  <div className="w-full h-full flex flex-col space-y-4">
                     <div className="flex-grow overflow-y-auto space-y-4 no-scrollbar max-h-[400px]">
                        {liveHistory.map((msg, i) => (
                           <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${msg.role === 'user' ? 'bg-brand-600/20 border border-brand-500/30' : 'bg-slate-800 border border-white/10'}`}>
                                 {msg.text}
                              </div>
                           </div>
                        ))}
                        {isListening && liveTranscription && (
                           <div className="flex justify-start">
                              <div className="max-w-[80%] p-4 rounded-3xl text-sm bg-slate-800 border border-white/10 animate-pulse">
                                 {liveTranscription}...
                              </div>
                           </div>
                        )}
                        {!isListening && liveHistory.length === 0 && (
                          <div className="text-center opacity-30 pt-20">
                             <Headphones size={64} className="mx-auto mb-4" />
                             <p className="font-bold">Connect voice bridge to start consulting</p>
                          </div>
                        )}
                     </div>
                     {isListening && (
                       <div className="flex justify-center py-4">
                          <div className="flex gap-1">
                             {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-6 bg-brand-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.1}s`}}></div>)}
                          </div>
                       </div>
                     )}
                  </div>
                ) : activeTab === 'research' && researchResults ? (
                  <div className="w-full h-full flex flex-col p-2">
                    <div className="flex-grow glass bg-slate-900/50 rounded-[2rem] p-8 overflow-y-auto no-scrollbar border-white/10">
                      <div className="flex items-center gap-2 mb-6 text-brand-500">
                        <Globe size={20} />
                        <h4 className="font-black uppercase tracking-widest text-xs">Search Results</h4>
                      </div>
                      <div className="text-slate-300 prose prose-invert max-w-none leading-relaxed mb-8">
                        {researchResults.text}
                      </div>
                      {researchResults.sources.length > 0 && (
                        <div className="pt-8 border-t border-white/5">
                           <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Referenced Sources</h5>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {researchResults.sources.map((src, i) => (
                                src.web && (
                                  <a key={i} href={src.web.uri} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-colors">
                                     <span className="text-xs text-slate-400 truncate pr-4">{src.web.title || src.web.uri}</span>
                                     <ArrowUpRight size={14} className="text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                  </a>
                                )
                              ))}
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : resultUrl ? (
                  <div className="w-full h-full p-2 flex flex-col">
                    <div className="flex-grow flex items-center justify-center bg-black rounded-[2rem] overflow-hidden shadow-2xl relative">
                      {activeTab === 'video' ? (
                        <video src={resultUrl} controls autoPlay loop className="max-w-full max-h-full" />
                      ) : (
                        <img src={resultUrl} alt="Result" className="max-w-full max-h-full object-contain" />
                      )}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button 
                        onClick={() => {
                          const a = document.createElement('a');
                          a.href = resultUrl!;
                          a.download = `techskyline-${Date.now()}.${activeTab === 'video' ? 'mp4' : 'png'}`;
                          a.click();
                        }}
                        className="flex-1 py-4 glass hover:bg-white/5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all text-white"
                      >
                        <Download size={18} /> Download Result
                      </button>
                      <button onClick={reset} className="px-6 py-4 glass hover:bg-white/5 rounded-2xl text-white transition-all">
                        <RefreshCw size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center opacity-30">
                    <div className="w-32 h-32 glass rounded-full flex items-center justify-center mx-auto mb-8">
                      {activeTab === 'video' ? <VideoIcon size={56} /> : activeTab === 'image' ? <ImageIcon size={56} /> : activeTab === 'research' ? <Search size={56} /> : <MessageSquare size={56} />}
                    </div>
                    <p className="text-xl font-bold text-white mb-2">System Ready</p>
                    <p className="text-sm text-slate-400">Initialize {activeTab} parameters to proceed.</p>
                  </div>
                )}
              </div>

              {/* Utility Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-3xl border-white/5 flex gap-4 items-center group">
                  <div className="w-12 h-12 bg-studio-600/10 rounded-xl flex items-center justify-center text-studio-400 group-hover:scale-110 transition-transform">
                    <Sparkles />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Veo Architecture</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">720p Cinematic</p>
                  </div>
                </div>
                <div className="glass p-6 rounded-3xl border-white/5 flex gap-4 items-center group">
                  <div className="w-12 h-12 bg-brand-600/10 rounded-xl flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                    <Brain />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Gemini Multimodal</h5>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Advanced Grounding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowUpRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
