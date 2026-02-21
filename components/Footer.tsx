import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-white via-indigo-100 to-indigo-400">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Grid: Navigation & External Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-12 mb-24 max-w-4xl">
            
            {/* Left Column: Navigation */}
            <div className="flex flex-col space-y-5">
                {['ABOUT', 'EXPERTISE', 'WORK', 'CONTACT'].map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="text-sm font-bold text-text-main hover:text-white transition-colors tracking-widest"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Right Column: Socials & Badge */}
            <div className="flex flex-col space-y-5">
                <a href="#" className="text-sm font-bold text-text-main hover:text-white transition-colors tracking-widest">GITHUB</a>
                <a href="#" className="text-sm font-bold text-text-main hover:text-white transition-colors tracking-widest">LINKEDIN</a>
                
                <div className="pt-2">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded shadow-sm w-fit">
                        <svg className="w-3 h-3 text-text-main" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <span className="text-[10px] font-bold text-text-main uppercase tracking-wide">REACT CERTIFIED</span>
                    </div>
                </div>
            </div>

        </div>

        {/* Middle Section: CTA */}
        <div className="mb-32">
            <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-text-main mb-12 leading-[1.15] max-w-2xl">
                Ready to elevate your <br/>
                frontend experience?
            </h2>
            
            <a href="#contact" className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-sm hover:bg-zinc-800 transition-all group shadow-2xl shadow-indigo-900/20">
                <div className="w-2 h-2 bg-indigo-500 rounded-[1px]"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase">HIRE ME</span>
            </a>
        </div>

        {/* Bottom Section: Divider & Right Aligned Info */}
        <div className="border-t border-text-main/10 pt-10 flex flex-col md:flex-row justify-end items-end md:items-start gap-8">
            
            <div className="flex flex-col items-end gap-6 w-full">
                
                {/* Copyright & Links */}
                <div className="flex flex-col items-end gap-1 text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-main/70">© 2025. ALL RIGHTS RESERVED</p>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-text-main/70 hover:text-white transition-colors">PRIVACY POLICY</a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                    {[
                        { icon: 'instagram', path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" },
                        { icon: 'linkedin', path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                        { icon: 'bell', path: "M12 2C10.34 2 9 3.34 9 5v1.29C6.61 7.41 5 9.69 5 12v5l-2 2v1h18v-1l-2-2v-5c0-2.31-1.61-4.59-4-5.71V5c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1v.74c-.32-.12-.67-.2-1.03-.22V5c0-.55.45-1 1-1zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }
                    ].map((social, i) => (
                        <a key={i} href="#" className="w-10 h-10 border border-indigo-900/10 bg-indigo-500/10 hover:bg-indigo-500/20 flex items-center justify-center rounded-sm text-text-main transition-all hover:scale-105">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d={social.path} fillRule="evenodd"/>
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </footer>
  );
};