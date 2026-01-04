import React, { useState } from 'react';
import { 
  Activity, 
  Shield, 
  Zap, 
  Globe, 
  ChevronRight, 
  Layers, 
  FileText, 
  Building2, 
  Cpu, 
  Users,
  Map as MapIcon,
  AlertCircle,
  Code,
  CheckCircle2,
  Terminal,
  Search,
  X,
  Mail,
  Send,
  Loader2,
  Sparkles,
  RefreshCw
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
          stroke="url(#logo-grad)" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
    <circle cx="70" cy="75" r="4" fill="#06b6d4" />
    <circle cx="35" cy="25" r="4" fill="#10b981" />
  </svg>
);

const App = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

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
            <span className="text-xl font-bold tracking-tight">Regula<span className="text-emerald-400">.ai</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-zinc-400">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors">The Problem</button>
            <button onClick={() => scrollToSection('logic')} className="hover:text-white transition-colors text-emerald-400">The Logic Layer</button>
            <button onClick={() => scrollToSection('model')} className="hover:text-white transition-colors">Revenue</button>
            <button onClick={() => setIsDemoModalOpen(true)} className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all transform hover:scale-105">Join Beta</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-48 pb-24 px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic">Phase: Scaling Compliance Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-[0.9] lg:text-9xl">
            The Logic Layer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400">For Smart Cities.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
            GPS data shows you where vehicles are. <span className="text-white font-medium italic underline decoration-emerald-500/50">Regula.ai</span> tells you what is legally permitted. Bridging the gap between dry municipal bylaws and geospatial reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={() => setIsDemoModalOpen(true)} className="group relative px-12 py-5 bg-emerald-500 text-black rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Get Early Access</span>
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('logic')} className="px-8 py-5 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all">How We Scale</button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-16 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <h2 className="text-sm font-mono text-emerald-500 mb-4 uppercase tracking-widest italic">The Compliance Gap</h2>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Manual "Site Selection" is Killing Deployment.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">Operators spend months and millions on legal consultants just to find a single viable charging spot. It doesn't scale.</p>
              <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12"><FileText className="w-48 h-48" /></div>
            </div>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 flex flex-col justify-center text-left group hover:border-red-500/30 transition-colors">
              <div className="text-zinc-500 font-mono text-[10px] uppercase mb-2 tracking-widest">Regulatory Moat</div>
              <div className="text-4xl font-bold text-white tracking-tighter italic">90% Faster</div>
              <div className="text-emerald-400 text-[10px] font-bold uppercase mt-1">Legal-to-Spatial Translation</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGIC LAYER (NEW SECTION BASED ON NOAM'S NOTES) */}
      <section id="logic" className="py-24 px-6 z-10 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold italic tracking-tight mb-4">Complete, Don't Replace.</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              We don't compete with GPS Dashboards (Vianova/Populus). We are the <span className="text-white italic">decision engine</span> that sits inside them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/10 group">
              <Globe className="text-zinc-600 mb-6 group-hover:text-emerald-400 transition-colors" />
              <h4 className="text-xl font-bold mb-4">Spatial AI vs. GPS Data</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic">GPS shows where the asset is. Our AI reads the legal code to determine if it's permitted to stay there. We provide the "Maturity of Regulation" as a data layer.</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/10 group">
              <RefreshCw className="text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              <h4 className="text-xl font-bold mb-4">Real-Time Monitoring</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic">Cities rewrite bylaws monthly. Our LLMs provide continuous tracking, creating a "Compliance-as-a-Service" model that ensures long-term stickiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE MODELS */}
      <section id="model" className="py-16 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'B2B SaaS', tag: 'Subscription Monitoring', icon: <Layers className="w-5 h-5" /> },
              { title: 'Enterprise Reports', tag: 'Asset Feasibility', icon: <FileText className="w-5 h-5" /> },
              { title: 'GovTech Engine', tag: 'License to Cities', icon: <Building2 className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] hover:border-emerald-500/40 transition-all group flex flex-col text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 italic tracking-tight">{item.title}</h3>
                <div className="mt-auto"><span className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full tracking-widest uppercase">{item.tag}</span></div>
              </div>
            ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-6 z-10 relative bg-zinc-950/50">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full mb-6 flex items-center justify-center font-bold text-2xl border border-emerald-500/30">NK</div>
              <h3 className="text-xl font-bold">Noam Katzir</h3>
              <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest my-2 italic">Chief Regulatory Officer</p>
              <a href="mailto:noamkatzir29@gmail.com" className="text-[10px] text-zinc-500 hover:text-emerald-400 font-mono">noamkatzir29@gmail.com</a>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full mb-6 flex items-center justify-center font-bold text-2xl border border-cyan-500/30">KW</div>
              <h3 className="text-xl font-bold">Keren Wedel</h3>
              <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest my-2 italic">Head of Product</p>
              <a href="mailto:kerenwedel@gmail.com" className="text-[10px] text-zinc-500 hover:text-cyan-400 font-mono">kerenwedel@gmail.com</a>
            </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 z-10 relative">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-[3rem] p-12 text-center shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
          <h2 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">Ready to Decode?</h2>
          <p className="text-zinc-400 mb-10 font-light">Join the beta to bridge the gap between bylaws and smart city infrastructure.</p>
          {formStatus === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Inquiry Sent!</h3>
            </div>
            
          ) : (
          <form onSubmit={handleFormSubmit} className="space-y-3">
            <input 
              name="name" 
              type="text" 
              required 
              placeholder="Full Name" 
              className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" 
            />
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="Email" 
              className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" 
            />
            <button className="w-full py-3 bg-emerald-500 text-black rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all mt-4">
              Join Waiting List
            </button>
          </form>
          )}
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-700 text-sm bg-black">
        <div className="flex justify-center items-center gap-4 mb-6 opacity-40">
          <Logo className="w-6 h-6" />
          <span className="font-bold tracking-tighter text-md uppercase text-white">Regula<span className="text-emerald-400">.ai</span></span>
        </div>
        <p className="font-mono text-[8px] tracking-[0.3em] opacity-40 uppercase">© 2026 Regula AI / Operational Status: Alpha</p>
      </footer>

      {isDemoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm">
           <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[3rem] max-w-sm w-full p-8 shadow-2xl">
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white"><X className="w-5 h-5" /></button>
              <div className="text-center mb-8">
                <Logo className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold italic mb-1">Join the Beta</h2>
                <p className="text-zinc-500 text-xs italic">Decode regulations in your city.</p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <input 
                  name="name" 
                  type="text" 
                  required 
                  placeholder="Full Name" 
                  className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" 
                />
                  <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="Email" 
                  className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" 
                />
                
                <button className="w-full py-3 bg-emerald-500 text-black rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all mt-4">
                  Submit Inquiry
                </button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;