import React, { useState, useEffect, useRef } from 'react';
import { Scene3D } from './Scene3D';

export const Hero: React.FC = () => {
  const [time, setTime] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (contentRef.current) {
          const scrollY = window.scrollY;
          // Subtler parallax
          contentRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
          contentRef.current.style.opacity = `${Math.max(0, 1 - scrollY / 700)}`;
        }
      });
    };
    
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      
      {/* Dynamic 3D Environment */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Floating Meta Info - Corners */}
      <div className="absolute top-0 left-0 w-full h-full p-8 md:p-12 pointer-events-none z-10 flex flex-col justify-between">
         <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-text-main uppercase">Architecture & Interaction</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-text-dim uppercase">Based in NL — {time}</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-text-main uppercase">Available for Hire</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-text-dim uppercase">2025-2026</span>
            </div>
         </div>
      </div>

      {/* Main Hero Content */}
      <div ref={contentRef} className="container mx-auto px-6 relative z-20 text-center pointer-events-none mix-blend-multiply">
        <h1 className="font-display font-bold text-[14vw] md:text-[13vw] leading-[0.8] tracking-tighter text-text-main">
          DIGITAL<br />
          <span className="text-text-main relative">
            ARCHITECT
            <span className="absolute -top-4 -right-8 md:-top-8 md:-right-16 text-2xl md:text-4xl font-normal text-accent tracking-normal">®</span>
          </span>
        </h1>
        <p className="mt-12 max-w-xl mx-auto text-lg md:text-xl font-medium text-text-secondary leading-relaxed px-6">
          Crafting high-performance digital interfaces that live at the intersection of <span className="text-text-main font-bold border-b border-text-main pb-0.5">art and logic.</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-dim">Scroll</span>
        <div className="w-px h-12 bg-gray-300 overflow-hidden">
            <div className="w-full h-full bg-text-main animate-[float_2s_infinite]"></div>
        </div>
      </div>

    </section>
  );
};