import React, { useRef, useState, useEffect } from 'react';

const skills = [
  {
    category: "Core Engineering",
    title: "Modern Stack",
    description: "Expertise in the React ecosystem, TypeScript, and modern state management patterns.",
    icon: (
      // React Logo Style
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="12" cy="12" r="2" fill="currentColor" />
         <g stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
         </g>
      </svg>
    ),
    tech: ["React / Next.js", "TypeScript", "Zustand"]
  },
  {
    category: "Creative",
    title: "WebGL & Motion",
    description: "Creating immersive 3D experiences and fluid animations that engage users.",
    icon: (
      // Three.js Triangle Style
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M12 3L2 21H22L12 3Z" />
        <path d="M12 8L7.5 17H16.5L12 8Z" opacity="0.6" fill="currentColor" stroke="none"/>
      </svg>
    ),
    tech: ["Three.js", "R3F", "GSAP"]
  },
  {
    category: "System",
    title: "Design Systems",
    description: "Architecting scalable component libraries and tokens for design consistency.",
    icon: (
      // Tailwind/CSS Wave Style
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
         <path d="M11.25 6C11.25 6 9.75 6 9 7.125C8.25 8.25 8.625 9.75 9.75 10.5C10.875 11.25 12.75 10.875 12.75 10.875C12.75 10.875 14.25 10.875 15 9.75C15.75 8.625 15.375 7.125 14.25 6.375C13.125 5.625 11.25 6 11.25 6Z" opacity="0.5"/>
         <path d="M6.75 10.875C6.75 10.875 5.25 10.875 4.5 12C3.75 13.125 4.125 14.625 5.25 15.375C6.375 16.125 8.25 15.75 8.25 15.75C8.25 15.75 9.75 15.75 10.5 14.625C11.25 13.5 10.875 12 9.75 11.25C8.625 10.5 6.75 10.875 6.75 10.875Z" />
         <path d="M15.75 10.875C15.75 10.875 14.25 10.875 13.5 12C12.75 13.125 13.125 14.625 14.25 15.375C15.375 16.125 17.25 15.75 17.25 15.75 18.75 15.75 19.5 14.625C20.25 13.5 19.875 12 18.75 11.25C17.625 10.5 15.75 10.875 15.75 10.875Z" />
      </svg>
    ),
    tech: ["Storybook", "Tailwind", "Tokens"]
  },
  {
    category: "Quality",
    title: "Performance",
    description: "Obsessive optimization for Core Web Vitals, accessibility, and SEO.",
    icon: (
      // Lightning/Speed
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="none" fillOpacity="0.2" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    ),
    tech: ["Core Vitals", "WCAG", "CI/CD"]
  }
];

export const Skills: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isGhost, setIsGhost] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!headerRef.current) return;
        const rect = headerRef.current.getBoundingClientRect();
        // Adjust ghost trigger point
        const shouldBeGhost = rect.top < window.innerHeight * 0.15;
        if (shouldBeGhost !== isGhost) {
            setIsGhost(shouldBeGhost);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(animationFrameId);
    };
  }, [isGhost]);

  return (
    <section id="skills" className="min-h-screen py-32 bg-white relative overflow-hidden flex flex-col justify-center rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.05)] border-t border-indigo-50">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <span className="text-accent font-mono text-xs tracking-widest block mb-4 font-bold uppercase">[ Expertise ]</span>
                <h2 
                    className={`font-display font-bold text-5xl md:text-7xl uppercase leading-[0.8] transition-colors duration-700 ${!isGhost ? 'text-text-main' : 'text-transparent'}`}
                    style={{ WebkitTextStroke: isGhost ? '1px rgba(79, 70, 229, 0.2)' : 'none' }}
                >
                    Technical <br />
                    <span className="text-accent">Proficiency</span>
                </h2>
            </div>
            <p className="text-text-dim max-w-sm font-medium text-sm leading-relaxed md:text-right">
                 Resilient ecosystems designed for scale. Click to explore the stack.
            </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {skills.map((skill, idx) => {
                const isActive = activeIndex === idx;
                
                return (
                    <div 
                        key={idx} 
                        onClick={() => setActiveIndex(idx)}
                        className={`
                            relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${isActive 
                                ? 'bg-gradient-to-r from-accent to-purple-600 shadow-2xl shadow-indigo-200 scale-[1.02]' 
                                : 'bg-slate-50 hover:bg-slate-100 border border-slate-100 hover:border-indigo-100'
                            }
                        `}
                    >
                        {/* Summary / Header Row */}
                        <div className={`p-6 md:p-8 flex items-center justify-between gap-6`}>
                            <div className="flex items-center gap-6">
                                {/* Icon */}
                                <div className={`
                                    w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-colors duration-500
                                    ${isActive ? 'bg-white/20 text-white' : 'bg-indigo-50 text-accent'}
                                `}>
                                    <div className="w-6 h-6 md:w-8 md:h-8">
                                        {skill.icon}
                                    </div>
                                </div>

                                {/* Text Info */}
                                <div className="flex flex-col">
                                    <span className={`
                                        text-[10px] font-bold tracking-widest uppercase mb-1 transition-colors
                                        ${isActive ? 'text-white/70' : 'text-text-dim'}
                                    `}>
                                        {skill.category}
                                    </span>
                                    <h3 className={`
                                        text-xl md:text-2xl font-display font-bold transition-colors
                                        ${isActive ? 'text-white' : 'text-text-main'}
                                    `}>
                                        {skill.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Chevron */}
                            <div className={`
                                w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                                ${isActive ? 'bg-white text-accent rotate-180' : 'bg-white shadow-sm text-text-dim rotate-0'}
                            `}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        <div className={`
                            overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}>
                            <div className="px-6 md:px-8 pb-8 pt-0 pl-[calc(1.5rem+3rem+1.5rem)] md:pl-[calc(2rem+4rem+1.5rem)]">
                                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium max-w-2xl">
                                    {skill.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {skill.tech.map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="px-4 py-2 bg-white/20 text-xs font-bold uppercase tracking-wide text-white rounded-lg border border-white/10"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  );
};