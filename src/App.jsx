import React, { useState, useEffect } from 'react';
import { 
  Activity, Shield, Zap, Globe, ChevronRight, Layers, FileText, 
  Building2, Cpu, Users, Map as MapIcon, AlertCircle, Code, 
  CheckCircle2, Terminal, Search, X, Mail, Send, Loader2, 
  Sparkles, RefreshCw 
} from 'lucide-react';

const Logo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100">
        <stop stopColor="#10b981" />
        <stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#logo-grad)" fillOpacity="0.1"/>
    <path d="M35 75V25H55C65 25 70 30 70 37.5C70 45 65 50 55 50H35M52 50L70 75" 
          stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="70" cy="75" r="4" fill="#06b6d4" />
    <circle cx="35" cy="25" r="4" fill="#10b981" />
  </svg>
);

const App = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_title: 'Home - Regula AI The Logic Layer'
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mqeaggyl', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submission',
            form_id: 'beta_signup',
            lead_type: 'logic_layer_full_version'
          });
        }
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className="w-9 h-9 group-hover:rotate-6 transition-transform duration-500" />
            <span className="text-xl font-bold tracking-tight text-white">Regula<span className="text-emerald-400">.ai</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-zinc-400">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors">The Gap</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-white transition-colors">The Map</button>
            <button onClick={() => scrollToSection('logic')} className="hover:text-white transition-colors text-emerald-400 font-bold tracking-tight italic">The Logic Layer</button>
            <button onClick={() => scrollToSection('model')} className="hover:text-white transition-colors text-right">Revenue</button>
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic text-white">Phase: Scaling Compliance Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-[0.9] lg:text-9xl text-white">
            The Logic Layer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-x">For Smart Cities.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
            GPS data shows you where vehicles are. <span className="text-white font-medium italic underline decoration-emerald-500/50">Regula.ai</span> tells you what is legally permitted. Bridging the gap between dry municipal bylaws and geospatial reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={() => setIsDemoModalOpen(true)} className="group relative px-12 py-5 bg-emerald-500 text-black rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-black" />
              <span className="text-black font-bold uppercase tracking-tight">Get Early Access</span>
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
            </button>
            <button onClick={() => scrollToSection('solution')} className="px-8 py-5 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all uppercase tracking-tighter italic">See The Map</button>
          </div>
        </div>
      </section>

      {/* Problem Section (The Gap) */}
      <section id="problem" className="py-16 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-sm font-mono text-emerald-500 mb-6 uppercase tracking-widest italic text-left">The Compliance Bottleneck</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-left text-white underline decoration-emerald-500/30">Manual "Site Selection" is Killing Deployment.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md text-left">
                Operators spend months and millions on legal consultants just to find a single viable charging spot. The barrier isn't physical — it's regulatory.
              </p>
              <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12 transition-transform group-hover:rotate-0"><FileText className="w-48 h-48 text-zinc-700" /></div>
            </div>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 flex flex-col justify-center text-left group hover:border-red-500/30 transition-colors">
              <div className="text-zinc-500 font-mono text-[10px] uppercase mb-2 tracking-widest">Regulatory Moat</div>
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">90% Faster</div>
              <div className="text-emerald-400 text-[10px] font-bold uppercase mt-2 tracking-widest italic">Legal-to-Spatial Translation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (The Map Visualization) */}
      <section id="solution" className="py-24 px-6 z-10 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center text-left">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6 italic tracking-tight text-white uppercase leading-tight">From Legal Text <br/>to <span className="text-emerald-400 underline decoration-emerald-500/30">Actionable Logic</span>.</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed font-light text-lg italic">
                We ingest municipal codes and automatically extract spatial constraints, projecting them onto a live map layer for instant compliance decisions.
              </p>
              <div className="space-y-3">
                {['Bylaw Ingestion', 'Spatial Reasoning', 'Compliance Layering'].map((step, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-emerald-500/30 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-xs tracking-tight uppercase text-zinc-300 italic">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative rounded-[3rem] bg-[#0F0F0F] border border-white/10 shadow-2xl overflow-hidden aspect-[16/10] group">
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30"></div>
                </div>
                <div className="flex h-full">
                  <div className="w-48 bg-[#111] border-r border-white/5 p-6 hidden sm:block">
                    <div className="font-mono text-[9px] text-zinc-600 space-y-3 text-left">
                      <p className="text-zinc-400 italic">Reading Municipal PDF...</p>
                      <p className="text-white border-b border-white/10 pb-1 italic font-bold tracking-tighter">{'>'} Rule: Min 5m from Crosswalk</p>
                      <p className="text-white border-b border-white/10 pb-1 italic font-bold tracking-tighter">{'>'} Status: Extracting Geometry</p>
                      <p className="text-emerald-500 font-bold animate-pulse">{'>'} Logic Layer Generated.</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#050505] relative p-8">
                    <div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"></div>
                    
                    {/* Visual Mock of Map Zones */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 border border-red-500/40 rounded-3xl flex items-center justify-center backdrop-blur-sm transform -rotate-12 group-hover:scale-110 transition-transform">
                       <span className="text-[10px] text-red-400 font-mono font-bold tracking-tighter uppercase text-center italic">Bylaw Conflict</span>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-56 h-32 bg-emerald-500/5 border border-emerald-500/40 rounded-[2.5rem] flex items-center justify-center animate-pulse backdrop-blur-sm transform rotate-6 group-hover:scale-110 transition-transform">
                       <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-tighter uppercase text-center italic">Optimal Logic Layer Zone</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_20px_white] animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logic Layer Section (Core Value) */}
      <section id="logic" className="py-24 px-6 z-10 relative bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight mb-6 text-white uppercase">Complete, Don't Replace.</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed text-xl text-center font-light">
              We don't compete with GPS Dashboards (Vianova/Populus). We are the <span className="text-white italic font-bold">decision engine</span> that sits inside them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-12 rounded-[3.5rem] bg-[#0A0A0A] border border-white/10 group hover:border-emerald-500/40 transition-all shadow-2xl">
              <Globe className="text-zinc-600 mb-8 w-10 h-10 group-hover:text-emerald-400 transition-colors" />
              <h4 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight italic text-left">Spatial AI vs. GPS Data</h4>
              <p className="text-zinc-500 text-lg leading-relaxed italic text-left font-light">
                GPS shows where the asset is. Our AI reads the legal code to determine if it's <span className="text-white">permitted</span> to stay there. We provide the "Maturity of Regulation" as a dynamic data layer.
              </p>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-[#0A0A0A] border border-white/10 group hover:border-cyan-500/40 transition-all shadow-2xl">
              <RefreshCw className="text-zinc-600 mb-8 w-10 h-10 group-hover:text-cyan-400 transition-colors" />
              <h4 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight italic text-left">Real-Time Monitoring</h4>
              <p className="text-zinc-500 text-lg leading-relaxed italic text-left font-light">
                Cities rewrite bylaws monthly. Our LLMs provide continuous tracking, creating a <span className="text-white">Compliance-as-a-Service</span> model that ensures long-term operational certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Models Section */}
      <section id="model" className="py-24 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 italic tracking-tight text-zinc-500 uppercase text-left">The Growth Strategy</h2>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'B2B SaaS', tag: 'RECURRING', icon: <Layers className="w-6 h-6" />, desc: 'Monthly subscription for continuous fleet monitoring.' },
                { title: 'Enterprise Reports', tag: 'HIGH MARGIN', icon: <FileText className="w-6 h-6" />, desc: 'Instant asset feasibility reports for real-estate developers.' },
                { title: 'GovTech Engine', tag: 'SCALABLE', icon: <Building2 className="w-6 h-6" />, desc: 'Licensing our compliance logic to cities for automated permitting.' }
              ].map((item, i) => (
                <div key={i} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[3rem] hover:border-emerald-500/40 transition-all group flex flex-col text-left shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 italic tracking-tight text-white uppercase">{item.title}</h3>
                  <p className="text-zinc-500 text-sm mb-6 font-light leading-relaxed">{item.desc}</p>
                  <div className="mt-auto"><span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-4 py-1.5 rounded-full tracking-widest uppercase italic">{item.tag}</span></div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 z-10 relative bg-zinc-950/50">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
            <div className="p-10 rounded-[3.5rem] bg-white/5 border border-white/5 group flex flex-col items-center text-center hover:bg-white/[0.07] transition-all">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full mb-8 flex items-center justify-center font-bold text-3xl border border-emerald-500/30 text-white shadow-[0_0_30px_rgba(16,185,129,0.2)]">NK</div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter italic">Noam Katzir</h3>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest my-3 italic">Chief Regulatory Officer</p>
              <a href="mailto:noamkatzir29@gmail.com" className="text-xs text-zinc-500 hover:text-emerald-400 font-mono transition-colors italic">noamkatzir29@gmail.com</a>
            </div>
            <div className="p-10 rounded-[3.5rem] bg-white/5 border border-white/5 group flex flex-col items-center text-center hover:bg-white/[0.07] transition-all">
              <div className="w-24 h-24 bg-cyan-500/20 rounded-full mb-8 flex items-center justify-center font-bold text-3xl border border-cyan-500/30 text-white shadow-[0_0_30px_rgba(6,182,212,0.2)]">KW</div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter italic">Keren Wedel</h3>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest my-3 italic">Head of Product</p>
              <a href="mailto:kerenwedel@gmail.com" className="text-xs text-zinc-500 hover:text-cyan-400 font-mono transition-colors italic">kerenwedel@gmail.com</a>
            </div>
        </div>
      </section>

      {/* Contact Section (Formspree Integration) */}
      <section id="contact" className="py-24 px-6 z-10 relative">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-[3.5rem] p-16 text-center shadow-2xl relative text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter uppercase text-white text-center">Ready to Decode?</h2>
          <p className="text-zinc-400 mb-12 font-light text-xl text-center leading-relaxed">Join the beta to bridge the gap between bylaws and smart city infrastructure.</p>
          
          {formStatus === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-12 rounded-[2.5rem] animate-in fade-in zoom-in duration-500 text-white text-center w-full">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold italic uppercase tracking-tight">Inquiry Received</h3>
              <p className="text-sm text-zinc-400 mt-3 text-center w-full italic">Check your inbox. Our logic layer is processing your request.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-5 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-5 italic">Full Name</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your full name" 
                  required 
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors text-sm text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-5 italic">Work Email</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="jane@company.com" 
                  required 
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors text-sm text-white" 
                />
              </div>
              <div className="pt-6 text-center">
                <button 
                  disabled={formStatus === 'loading'}
                  className="w-full py-5 bg-emerald-500 text-black rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 shadow-xl"
                >
                  {formStatus === 'loading' ? <Loader2 className="w-6 h-6 animate-spin text-black" /> : <span className="text-black uppercase tracking-tight">Join Waiting List</span>}
                </button>
              </div>
              {formStatus === 'error' && <p className="text-red-400 text-[10px] text-center mt-3 uppercase tracking-widest font-bold italic">Network error. Please try again.</p>}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center text-zinc-700 text-sm bg-black">
        <div className="flex justify-center items-center gap-5 mb-8 opacity-40 text-center w-full">
          <Logo className="w-8 h-8" />
          <span className="font-bold tracking-tighter text-lg uppercase text-white italic">Regula<span className="text-emerald-400">.ai</span></span>
        </div>
        <p className="font-mono text-[9px] tracking-[0.4em] opacity-30 uppercase text-center w-full italic">© 2026 Regula AI / Operational Status: Alpha Compliance Logic Layer</p>
      </footer>

      {/* Beta Modal Access */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[3.5rem] max-w-sm w-full p-12 shadow-2xl overflow-hidden text-left">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <button onClick={() => {setIsDemoModalOpen(false); setFormStatus('idle');}} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
              
              <div className="text-center mb-10">
                <Logo className="w-14 h-14 mx-auto mb-6" />
                <h2 className="text-3xl font-bold italic mb-2 text-white uppercase tracking-tight italic">Beta Access</h2>
                <p className="text-zinc-500 text-xs italic text-center leading-relaxed">Secure your spot in the urban logic layer revolution.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="text-center py-8 animate-in zoom-in text-white italic">
                   <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-5" />
                   <h3 className="font-bold text-xl uppercase tracking-tighter italic">You're on the list!</h3>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-5 text-zinc-400 italic">Full Name</label>
                    <input name="name" type="text" required placeholder="Full Name" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 text-sm text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-5 text-zinc-400 italic">Work Email</label>
                    <input name="email" type="email" required placeholder="Email" className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 text-sm text-white" />
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full py-4 bg-emerald-500 text-black rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all mt-6 flex items-center justify-center text-black shadow-lg"
                  >
                    {formStatus === 'loading' ? <Loader2 className="w-6 h-6 animate-spin text-black" /> : <span className="text-black uppercase tracking-tight font-black">Request Access</span>}
                  </button>
                  {formStatus === 'error' && <p className="text-red-400 text-[9px] text-center uppercase tracking-widest font-bold italic">Error. Try again.</p>}
                </form>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default App;