import React from 'react';

interface SkillItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const skills: SkillItem[] = [
  { 
    name: 'React', 
    description: 'Architecture & Custom Hooks',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
         <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
         <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" />
         <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    )
  },
  { 
    name: 'TypeScript', 
    description: 'Strict Typing & Generics',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9H11M9 9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 14.5C13 15.5 14 16 15 16C16 16 17 15.5 17 14.5C17 13.5 16 13 15 13C14 13 13 12.5 13 11.5C13 10.5 14 10 15 10C16 10 17 10.5 17 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'Tailwind', 
    description: 'Design Systems & Tokens',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 6.5C11 4.5 9 3.5 7.5 4C5.5 4.66667 4.5 6.5 5.5 8.5C6.5 10.5 9 10 9 10C9 10 11 11 10.5 13C10 15 8 16 6.5 15.5C4.5 14.8333 3.5 13 4.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 6.5C19 4.5 17 3.5 15.5 4C13.5 4.66667 12.5 6.5 13.5 8.5C14.5 10.5 17 10 17 10C17 10 19 11 18.5 13C18 15 16 16 14.5 15.5C12.5 14.8333 11.5 13 12.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'Next.js', 
    description: 'SSR & Server Components',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9L15 15V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 15V15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    name: 'Three.js', 
    description: 'WebGL & Shaders',
    icon: (
       <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M4 19L12 4L20 19H4Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7L7 16H17L12 7Z" fill="currentColor" fillOpacity="0.2" stroke="none"/>
        <path d="M12 11L9.5 16H14.5L12 11Z" fill="currentColor" stroke="none"/>
      </svg>
    )
  },
  { 
    name: 'Node.js', 
    description: 'Scalable API Development',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" />
        <path d="M12 22V12" />
        <path d="M20 6.5L12 12L4 6.5" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/>
      </svg>
    )
  },
  { 
    name: 'Figma', 
    description: 'Advanced Prototyping',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12H8C6 12 4 10 4 8C4 6 6 4 8 4H12V12Z" fill="currentColor"/>
        <path d="M12 4H16C18 4 20 6 20 8C20 10 18 12 16 12H12V4Z" fill="currentColor"/>
        <path d="M12 12H16V16C16 18 14 20 12 20C10 20 8 18 8 16C8 14 10 12 12 12Z" fill="currentColor" fillOpacity="0.1"/> 
        <path d="M8 12C6 12 4 14 4 16C4 18 6 20 8 20V12Z" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'GraphQL', 
    description: 'Schema Design & Data Layer',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4.5 6.5V17.5L12 22L19.5 17.5V6.5L12 2Z" strokeDasharray="3 3"/>
        <path d="M12 5V7" strokeLinecap="round"/>
        <path d="M18 8L16.5 9.5" strokeLinecap="round"/>
        <path d="M18 16L16.5 14.5" strokeLinecap="round"/>
        <path d="M12 19V17" strokeLinecap="round"/>
        <path d="M6 16L7.5 14.5" strokeLinecap="round"/>
        <path d="M6 8L7.5 9.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
      </svg>
    )
  },
];

export const SkillsMarquee: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bg-base border-y border-indigo-100 overflow-hidden">
      
      {/* Marquee Wrapper */}
      <div className="flex w-full overflow-hidden select-none">
        {/* Animated Track - moves continuously to the left */}
        <div className="flex w-max animate-marquee items-center gap-16 md:gap-32 pl-16 md:pl-32">
          {/* We render the list twice to create the seamless infinite loop effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-center"
            >
              <div className="flex items-end gap-6">
                
                {/* Large Outline Text that fills on hover */}
                <h3 
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-transparent transition-all duration-300 group-hover:text-text-main hover:scale-105 transform origin-left relative z-10"
                    style={{ WebkitTextStroke: '1px rgba(79, 70, 229, 0.2)' }}
                >
                    {skill.name}
                </h3>
                
                {/* Icon floating next to text */}
                 <div className="w-16 h-16 md:w-20 md:h-20 text-accent opacity-30 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 mb-4 md:mb-6">
                    {skill.icon}
                </div>

              </div>
              
              {/* Skill Description */}
              <div className="mt-4 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity pl-2">
                <div className="h-[2px] w-12 bg-accent"></div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-text-secondary">
                    {skill.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};