import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[60] flex flex-col pointer-events-none transition-opacity duration-500 delay-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
        {/* Top Shutter */}
        <div className={`absolute top-0 left-0 w-full h-1/2 bg-black transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}></div>
        
        {/* Bottom Shutter */}
        <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-black transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isLoaded ? 'translate-y-full' : 'translate-y-0'}`}></div>
        
        {/* Text */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <span className="font-display font-bold text-4xl text-white tracking-widest animate-pulse">FOOROR</span>
        </div>
    </div>
  );
};