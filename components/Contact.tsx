import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-slate-50 rounded-t-[3rem] -mt-12 shadow-[0_-20px_60px_rgba(0,0,0,0.05)] border-t border-indigo-50 z-20">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-slate-50 to-white pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Orb Blur */}
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Floating Glass Card Container */}
        <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(79,70,229,0.1)] relative overflow-hidden">
            
            {/* Decorative Gradient Blob inside card */}
            <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Left: Copy & Info */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-10">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Available for work</span>
                    </div>

                    <h2 className="font-display font-bold text-5xl md:text-7xl text-text-main leading-[0.9] tracking-tight mb-8">
                        LET'S BUILD <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">THE FUTURE.</span>
                    </h2>
                    
                    <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-md font-medium">
                        Have a vision? I specialize in translating complex ideas into polished, high-performance digital interfaces.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="group">
                            <span className="text-[10px] font-bold text-text-dim tracking-widest uppercase mb-2 block">Email Me</span>
                            <a href="mailto:hello@fooror.ai" className="flex items-center gap-3 text-2xl font-display font-bold text-text-main hover:text-accent transition-colors">
                                hello@fooror.ai
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <form className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-indigo-50">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold uppercase tracking-wider text-text-dim">Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white rounded-xl px-4 py-3 outline-none transition-all text-text-main placeholder:text-slate-300 font-medium" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold uppercase tracking-wider text-text-dim">Email</label>
                                <input type="email" className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white rounded-xl px-4 py-3 outline-none transition-all text-text-main placeholder:text-slate-300 font-medium" placeholder="jane@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-text-dim">Message</label>
                            <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 focus:border-accent focus:bg-white rounded-xl px-4 py-3 outline-none transition-all text-text-main resize-none placeholder:text-slate-300 font-medium" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-text-main text-white font-bold uppercase tracking-widest rounded-xl hover:bg-accent transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-indigo-500/20 flex justify-center items-center gap-2 group">
                            Send Message
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </button>
                    </div>
                </form>

            </div>
        </div>
      </div>
    </section>
  );
};