import React, { useState, useEffect } from 'react';
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
  Sparkles
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
    <path d="M20 20L30 30M80 80L70 70" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
  </svg>
);

const App = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  // מעקב אחרי צפייה בדף (Virtual Page View) עבור GTM
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // שליחה אמיתית ל-Formspree עם ה-ID שלך
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
        // שליחת אירוע המרה (Lead) ל-GTM
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submit',
            form_name: 'beta_signup',
            status: 'success'
          });
        }
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
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
            <span className="text-xl font-bold tracking-tight text-white">
              Regula<span className="text-emerald-400">.ai</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-zinc-400">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors">The Gap</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-white transition-colors">The Engine</button>
            <button onClick={() => scrollToSection('model')} className="hover:text-white transition-colors">Growth</button>
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all transform hover:scale-105"
            >
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest italic">Phase: Scaling Compliance Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-[0.9] lg:text-9xl text-white">
            Compliance.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-x">
              Spatialized.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light mb-12 leading-relaxed">
            The first AI engine that turns municipal bylaws into <span className="text-white border-b border-emerald-500/50">geospatial layers</span>. 
            We help operators find compliant sites in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="group relative px-12 py-5 bg-emerald-500 text-black rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Join the Beta</span>
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="px-8 py-5 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all"
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 px-6 z-10 relative text-left">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold italic text-zinc-300 tracking-tight">The Deployment Gap</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">The "Site Selection" Nightmare</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  Operators spend <span className="text-white font-bold italic">3-6 months</span> cross-referencing legal PDFs with physical maps just to approve a single charging hub.
                </p>
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 flex flex-col justify-center group hover:border-red-500/30 transition-colors">
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">Avg. Consulting Cost</div>
              <div className="text-4xl font-bold text-white tracking-tighter">$15,000</div>
              <div className="text-red-400 text-[10px] font-bold uppercase tracking-widest mt-1">Per city deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-6 z-10 relative bg-white/[0.01] text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6 italic tracking-tight text-white">From Legal Text <br/>to <span className="text-emerald-400 underline decoration-emerald-500/30">Green Zones</span>.</h2>
              <p className="text-zinc-400 mb-8 leading-relaxed font-light">
                Regula.ai ingests complex municipal codes and uses AI to extract spatial constraints, projecting them onto a live map layer.
              </p>
              <div className="space-y-3">
                {['Bylaw Ingestion', 'Spatial Extraction', 'Feasibility Mapping'].map((step, i) => (
                  <div key={i} className="flex items-center space-x-4 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-xs tracking-tight uppercase text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative rounded-3xl bg-[#0F0F0F] border border-white/10 shadow-2xl overflow-hidden aspect-[16/10]">
                <div className="h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-6 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30"></div>
                </div>
                <div className="flex h-full">
                  <div className="w-40 bg-[#111] border-r border-white/5 p-4 hidden sm:block">
                    <div className="font-mono text-[9px] text-zinc-600 space-y-2">
                      <p>{'>'} Ingesting PDF...</p>
                      <p className="text-emerald-500">{'>'} Mapping Ready.</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#050505] relative p-8">
                    <div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"></div>
                    <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-red-500/10 border border-red-500/40 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                       <span className="text-[8px] text-red-400 font-mono font-bold tracking-tighter uppercase text-center">No-Go</span>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-24 bg-emerald-500/10 border border-emerald-500/40 rounded-[2rem] flex items-center justify-center animate-pulse backdrop-blur-sm">
                       <span className="text-[8px] text-emerald-400 font-mono font-bold tracking-tighter uppercase text-center">Optimal Zone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 z-10 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-4xl font-black mb-6 italic tracking-tighter text-white uppercase">Ready to Decode?</h2>
            <p className="text-zinc-400 mb-10 font-light leading-relaxed">
              Join the beta to get regulatory certainty for your next city deployment.
            </p>

            {formStatus === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl animate-in zoom-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white uppercase italic">Inquiry Received</h3>
                <p className="text-zinc-500 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-4 text-left">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Jane Doe" 
                    required 
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-sm text-white" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="jane@company.com" 
                    required 
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-sm text-white" 
                  />
                </div>
                <button 
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-emerald-500 text-black rounded-xl font-black text-lg hover:bg-emerald-400 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {formStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Submit Inquiry</span>}
                </button>
                {formStatus === 'error' && (
                  <p className="text-red-400 text-xs text-center font-mono uppercase">Submission failed. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-700 text-sm bg-black">
        <div className="flex justify-center items-center gap-2 mb-6 opacity-40">
          <Logo className="w-6 h-6" />
          <span className="font-bold tracking-tighter text-md uppercase text-white">Regula.ai</span>
        </div>
        <p className="font-mono text-[8px] tracking-[0.3em] opacity-40 uppercase">© 2026 Regula AI / Operational Status: Alpha</p>
      </footer>

      {isDemoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[3rem] max-w-sm w-full p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <button onClick={() => {setIsDemoModalOpen(false); setFormStatus('idle');}} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mb-8">
                <Logo className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold italic mb-1 tracking-tight text-white uppercase">Join the Beta</h2>
                <p className="text-zinc-500 text-xs italic">Be the first to decode your city's regulations.</p>
              </div>
              {formStatus === 'success' ? (
                <div className="text-center py-6 animate-in zoom-in text-white">
                   <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                   <h3 className="font-bold">You're on the list!</h3>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-4">Full Name</label>
                    <input name="name" type="text" required placeholder="Full Name" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-4">Work Email</label>
                    <input name="email" type="email" required placeholder="Email" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" />
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full py-4 bg-emerald-500 text-black rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all mt-4 flex items-center justify-center"
                  >
                    {formStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waiting List"}
                  </button>
                </form>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default App;