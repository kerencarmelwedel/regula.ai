import React, { useState, useEffect } from 'react';
import { 
  Activity, Shield, Zap, Globe, ChevronRight, Layers, FileText, 
  Building2, Cpu, Users, Map as MapIcon, AlertCircle, Code, 
  CheckCircle2, Terminal, Search, X, Mail, Send, Loader2, 
  Sparkles, RefreshCw 
} from 'lucide-react';

/**
 * קומפוננטת לוגו וקטורי מובנית (SVG)
 */
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

  // GTM - מעקב אחרי צפייה בדף בכל טעינה
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_title: 'Home - The Logic Layer'
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * לוגיקת שליחת טופס ל-Formspree (ID: mqeaggyl)
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // איסוף הנתונים מהשדות בעלי מאפיין name (קריטי לשליחה)
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
        // דחיפת אירוע המרה ל-GTM
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submission',
            form_id: 'beta_signup',
            lead_type: 'logic_layer_beta'
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
      {/* רקע רשת דינמי */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      {/* ניווט */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className="w-9 h-9 group-hover:rotate-6 transition-transform duration-500" />
            <span className="text-xl font-bold tracking-tight text-white">Regula<span className="text-emerald-400">.ai</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-zinc-400">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors text-right">The Gap</button>
            <button onClick={() => scrollToSection('logic')} className="hover:text-white transition-colors text-emerald-400 font-bold tracking-tight">The Logic Layer</button>
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
            <button onClick={() => setIsDemoModalOpen(true)} className="group relative px-12 py-5 bg-emerald-500 text-black rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.2)] flex items-center gap-2 text-black">
              <Sparkles className="w-5 h-5 text-black" />
              <span className="text-black">Get Early Access</span>
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
            </button>
            <button onClick={() => scrollToSection('logic')} className="px-8 py-5 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all">How We Scale</button>
          </div>
        </div>
      </section>

      {/* Logic Layer Section */}
      <section id="logic" className="py-24 px-6 z-10 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold italic tracking-tight mb-4 text-white">Complete, Don't Replace.</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed text-lg">
              We don't compete with GPS Dashboards (Vianova/Populus). We are the <span className="text-white italic">decision engine</span> that sits inside them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/10 group hover:border-emerald-500/40 transition-all">
              <Globe className="text-zinc-600 mb-6 group-hover:text-emerald-400 transition-colors" />
              <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight italic">Spatial AI vs. GPS Data</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic text-left">GPS shows where the asset is. Our AI reads the legal code to determine if it's permitted to stay there. We provide the "Maturity of Regulation" as a data layer.</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/10 group hover:border-cyan-500/40 transition-all">
              <RefreshCw className="text-zinc-600 mb-6 group-hover:text-cyan-400 transition-colors" />
              <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight italic">Real-Time Monitoring</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic text-left">Cities rewrite bylaws monthly. Our LLMs provide continuous tracking, creating a "Compliance-as-a-Service" model that ensures long-term stickiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 z-10 relative">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 rounded-[3rem] p-12 text-center shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
          <h2 className="text-4xl font-black mb-6 italic tracking-tighter uppercase text-white">Ready to Decode?</h2>
          <p className="text-zinc-400 mb-10 font-light text-lg">Join the beta to bridge the gap between bylaws and smart city infrastructure.</p>
          
          {formStatus === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl animate-in fade-in zoom-in duration-500 text-white">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold italic">Inquiry Received</h3>
              <p className="text-sm text-zinc-400 mt-2 text-center w-full">Check your inbox. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-4 text-left">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">Full Name</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your full name" 
                  required 
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-sm text-white" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">Work Email</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="jane@company.com" 
                  required 
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-sm text-white" 
                />
              </div>
              <div className="pt-4">
                <button 
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-emerald-500 text-black rounded-xl font-black text-lg hover:bg-emerald-400 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {formStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin text-black" /> : <span className="text-black font-bold">Join Waiting List</span>}
                </button>
              </div>
              {formStatus === 'error' && <p className="text-red-400 text-[10px] text-center mt-2 uppercase tracking-widest font-bold">Failed to send. Please check your connection.</p>}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-zinc-700 text-sm bg-black">
        <div className="flex justify-center items-center gap-4 mb-6 opacity-40">
          <Logo className="w-6 h-6" />
          <span className="font-bold tracking-tighter text-md uppercase text-white">Regula<span className="text-emerald-400">.ai</span></span>
        </div>
        <p className="font-mono text-[8px] tracking-[0.3em] opacity-40 uppercase">© 2026 Regula AI / Operational Status: Alpha</p>
      </footer>

      {/* Beta Modal Access */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[3rem] max-w-sm w-full p-8 shadow-2xl overflow-hidden text-right">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <button onClick={() => {setIsDemoModalOpen(false); setFormStatus('idle');}} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
              
              <div className="text-center mb-8">
                <Logo className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold italic mb-1 text-white uppercase tracking-tight">Beta Access</h2>
                <p className="text-zinc-500 text-xs italic">Secure your spot in the logic layer.</p>
              </div>

              {formStatus === 'success' ? (
                <div className="text-center py-6 animate-in zoom-in text-white">
                   <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                   <h3 className="font-bold">You're on the list!</h3>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-4 text-zinc-400">Full Name</label>
                    <input name="name" type="text" required placeholder="Full Name" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-4 text-zinc-400">Work Email</label>
                    <input name="email" type="email" required placeholder="Email" className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500 text-xs text-white" />
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full py-4 bg-emerald-500 text-black rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all mt-4 flex items-center justify-center text-black"
                  >
                    {formStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin text-black" /> : "Request Access"}
                  </button>
                  {formStatus === 'error' && <p className="text-red-400 text-[9px] text-center uppercase tracking-widest">Error. Try again.</p>}
                </form>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default App;