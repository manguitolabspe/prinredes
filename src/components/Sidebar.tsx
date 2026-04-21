/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight, X, LogOut } from 'lucide-react';
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
  onLogout?: () => void;
  isGeneral?: boolean;
  isOperational?: boolean;
}

export default function Sidebar({ title, slides, currentSlideIndex, onSelectSlide, onLogout, isGeneral, isOperational }: SidebarProps) {
  const groupedSlides = slides.reduce((acc, slide, index) => {
    const group = slide.group || (isGeneral ? 'ESTRATEGIA' : isOperational ? 'PROTOCOLOS' : 'TACTICA');
    if (!acc[group]) acc[group] = [];
    acc[group].push({ ...slide, originalIndex: index });
    return acc;
  }, {} as Record<string, (SlideContent & { originalIndex: number })[]>);

  return (
    <aside className="w-full flex flex-col h-full bg-white relative">
      <div className="p-6 md:p-8 border-b border-slate-100 pr-12 lg:pr-8">
        <button 
          onClick={() => onSelectSlide(currentSlideIndex)} // Clicking current slide index would just close if we handle it in App.tsx, but better to pass a onClose prop
          className="lg:hidden absolute top-6 right-4 p-2 text-slate-400 hover:text-slate-900"
        >
          <X size={20} />
        </button>
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center ${
            isGeneral ? 'bg-slate-100' : isOperational ? 'bg-indigo-50' : 'bg-brand-red/10'
          }`}>
            <img 
              src="/logo.webp" 
              alt="Logo PRIN" 
              className="h-6 md:h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-6 md:h-8 w-px bg-slate-100" />
          <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">
            PRIN<br/><span className="text-brand-red not-italic tracking-normal">Talara</span>
          </h2>
        </div>
        
        <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
          {isGeneral ? 'Cimiento Estratégico' : isOperational ? 'Sincronía Victoria' : 'Sprint Táctico'}
        </h2>
        <h1 className="text-base md:text-lg font-extrabold text-slate-900 leading-tight">
          {title}
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-3 md:px-4 py-4 md:py-6 space-y-6 md:space-y-8">
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
                        ? (isGeneral ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10" : isOperational ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/10" : "bg-brand-red text-white shadow-xl shadow-brand-red/10")
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
      
      <div className="p-4 m-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">Acceso Confidencial</p>
              <p className="text-[9px] font-medium text-slate-500 uppercase tracking-tight">Nivel de Mando SIM</p>
            </div>
          </div>
          {onLogout && (
            <button 
              onClick={onLogout}
              className="p-2 text-slate-400 hover:text-brand-red hover:bg-brand-red/5 rounded-lg transition-all"
              title="Cerrar Sesión"
            >
              <LogOut size={16} />
            </button>
          )}
        </div>
        <div className="pt-3 border-t border-slate-200/50">
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Acceso Protegido SIM</p>
        </div>
      </div>
    </aside>
  );
}

