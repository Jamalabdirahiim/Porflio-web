import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { SkillsMarquee } from './components/SkillsMarquee';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';

const App: React.FC = () => {
  return (
    <div className="bg-bg-base min-h-screen text-text-main font-sans selection:bg-accent selection:text-white">
      <CustomCursor />
      <Preloader />
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        
        <WorkGrid />
        
        {/* 
            Container for the rest of the page.
            -mt-16: Creates a slight overlap with the WorkGrid for a cohesive 'card' feel without hiding the content.
            z-10: Stacks on top of the WorkGrid bottom edge.
        */}
        <div className="relative z-10 -mt-16 bg-bg-base rounded-t-[3rem] shadow-[0_-20px_60px_rgba(79,70,229,0.05)] overflow-hidden">
            
            {/* About Section Teaser */}
            <section id="about" className="py-32 bg-white relative">
                <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 relative z-10">
                    <div className="w-full md:w-1/3">
                        <span className="text-accent font-mono text-sm tracking-widest block mb-4 font-bold uppercase">[ ABOUT ]</span>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-3xl md:text-5xl leading-tight font-display font-medium text-text-secondary">
                            I am a Senior Frontend Engineer focused on creating 
                            <span className="text-text-main font-bold"> scalable UI architecture </span> 
                            and fluid interactions. I bridge the gap between complex engineering and pixel-perfect design.
                        </p>
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-slate-100 pt-12">
                            <div>
                                <h4 className="text-text-main font-bold mb-4 text-lg">Architecture</h4>
                                <ul className="text-sm text-text-secondary space-y-3 font-medium">
                                    <li>Component Patterns</li>
                                    <li>State Management</li>
                                    <li>Micro-frontends</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-text-main font-bold mb-4 text-lg">Interaction</h4>
                                <ul className="text-sm text-text-secondary space-y-3 font-medium">
                                    <li>Advanced Motion</li>
                                    <li>WebGL / Three.js</li>
                                    <li>Creative Coding</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="text-text-main font-bold mb-4 text-lg">Engineering</h4>
                                <ul className="text-sm text-text-secondary space-y-3 font-medium">
                                    <li>React / Next.js</li>
                                    <li>TypeScript</li>
                                    <li>Performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Skills />
            <Contact />
            <Footer />
        </div>

      </main>
    </div>
  );
};

export default App;