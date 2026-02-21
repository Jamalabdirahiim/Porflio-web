import React, { useRef, useEffect } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Lumina Engine',
    category: 'SaaS Platform',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    description: 'High-speed analytical dashboard with real-time WebGL charting.',
    year: '2025'
  },
  {
    id: '2',
    title: 'Zenith Retail',
    category: 'E-Commerce',
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop',
    description: 'Ultra-fast headless commerce platform for high-end fashion brands.',
    year: '2024'
  },
  {
    id: '3',
    title: 'Krypton Protocol',
    category: 'Fintech UI',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2670&auto=format&fit=crop',
    description: 'Minimalist interface for advanced asset management and crypto trading.',
    year: '2024'
  },
  {
    id: '4',
    title: 'Prism Creative',
    category: 'Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    description: 'Award-winning interactive experience with fluid 3D transitions.',
    year: '2023'
  },
  {
    id: '5',
    title: 'Aero Systems',
    category: 'Dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    description: 'Mission control interface design for next-gen drone logistics.',
    year: '2023'
  },
];

export const WorkGrid: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If user is scrolling vertically (deltaY) and not horizontally (deltaX),
      // we map it to horizontal scroll to allow easy navigation with mouse wheel.
      // We check if deltaY is significantly larger than deltaX to avoid interfering with native trackpad diagonal scrolls.
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 bg-white relative z-0 border-b border-indigo-50/50">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <h2 className="font-display font-medium text-4xl md:text-6xl text-text-main leading-none tracking-tight mb-2">Selected Works</h2>
           <div className="h-1 w-20 bg-accent mt-4"></div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-text-dim text-xs font-bold uppercase tracking-widest">
            <span>Scroll or Drag</span>
            <svg className="w-4 h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      {/* 
          - overflow-x-auto: Enables native scrolling
          - snap-x: Enables CSS scroll snapping
          - no-scrollbar: Hides scrollbar (via utility or custom css)
      */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 px-6 md:px-12 pb-12 w-full scrollbar-hide"
        style={{ 
            scrollbarWidth: 'none',  /* Firefox */
            msOverflowStyle: 'none'  /* IE/Edge */
        }}
      >
        <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
        `}</style>

        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] snap-center group cursor-none"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-gray-100 mb-6">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Number Overlay inside image */}
                <div className="absolute top-4 left-4 text-6xl font-display font-bold text-white/20 z-10">
                   0{idx + 1}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-xs font-bold text-accent tracking-widest uppercase">{project.category}</span>
                    <span className="text-xs font-bold text-text-dim tracking-widest">{project.year}</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-text-main mt-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm font-medium leading-relaxed max-w-md">
                    {project.description}
                </p>
            </div>
          </div>
        ))}
        
        {/* Spacer for end of scroll */}
        <div className="w-12 shrink-0"></div>
      </div>
    </section>
  );
};