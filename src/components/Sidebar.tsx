/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SlideContent } from '../data/strategy';

// Helper for conditional classes
function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface SidebarProps {
  title: string;
  slides: SlideContent[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  isGeneral?: boolean;
}

export default function Sidebar({ title, slides, currentSlideIndex, onSelectSlide, isGeneral }: SidebarProps) {
  const groupedSlides = slides.reduce((acc, slide, index) => {
    const group = slide.group || (isGeneral ? 'ESTRATEGIA' : 'TACTICA');
    if (!acc[group]) acc[group] = [];
    acc[group].push({ ...slide, originalIndex: index });
    return acc;
  }, {} as Record<string, (SlideContent & { originalIndex: number })[]>);

  return (
    <aside className="w-80 flex flex-col h-full bg-white">
      <div className="p-8 border-b border-slate-100">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isGeneral ? 'bg-slate-100' : 'bg-brand-red/10'}`}>
            <img 
              src="/logo.webp" 
              alt="Logo PRIN" 
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-8 w-px bg-slate-100" />
          <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">
            PRIN<br/><span className="text-brand-red not-italic tracking-normal">Talara</span>
          </h2>
        </div>
        
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
          {isGeneral ? 'Cimiento Estratégico' : 'Sprint Táctico'}
        </h2>
        <h1 className="text-lg font-extrabold text-slate-900 leading-tight">
          {title}
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {Object.entries(groupedSlides).map(([group, groupSlides]) => (
          <div key={group} className="space-y-2">
            <h3 className="px-3 text-[10px] font-black text-slate-400 tracking-[0.1em] uppercase flex items-center justify-between group cursor-default">
              {group}
              <ChevronRight size={10} className="text-slate-300 group-hover:translate-x-0.5 transition-transform" />
            </h3>
            <div className="space-y-1">
              {groupSlides.map((slide) => {
                const isActive = currentSlideIndex === slide.originalIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => onSelectSlide(slide.originalIndex)}
                    className={clsx(
                      "w-full text-left p-3 rounded-xl transition-all group relative",
                      isActive 
                        ? (isGeneral ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10" : "bg-brand-red text-white shadow-xl shadow-brand-red/10")
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={clsx(
                        "text-[10px] font-bold w-5",
                        isActive ? "text-white/40" : "text-slate-300"
                      )}>
                        {String(slide.originalIndex + 1).padStart(2, '0')}
                      </span>
                      <p className="text-xs font-bold truncate pr-2">
                        {slide.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      
      <div className="p-6 m-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">Wilmer Salazar</p>
            <p className="text-[9px] font-medium text-slate-500 uppercase tracking-tight">Estrategia SIM</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

