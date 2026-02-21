import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)` 
        }}
      >
        <div className={`
          absolute top-0 left-0 w-full h-full rounded-full border border-white transition-all duration-150 ease-out
          ${isPointer ? 'scale-150 bg-white' : 'scale-100 bg-transparent'}
        `} />
      </div>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` 
        }}
      />
    </>
  );
};