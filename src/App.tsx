/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Home, BookOpen, Calendar } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SlideLayout from './components/SlideLayout';
import WelcomeView from './components/WelcomeView';
import { GENERAL_DIRECTIVES, MONTHLY_TACTICAL_PLANS, SlideContent } from './data/strategy';

type ViewMode = 'welcome' | 'general' | 'monthly';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isGeneral = viewMode === 'general';
  const activeSlides: SlideContent[] = isGeneral 
    ? GENERAL_DIRECTIVES 
    : MONTHLY_TACTICAL_PLANS[currentMonthIndex]?.slides || [];
  
  const activeSlide = activeSlides[currentSlideIndex];

  const handleSelectGeneral = () => {
    setCurrentSlideIndex(0);
    setViewMode('general');
  };

  const handleSelectMonth = (index: number) => {
    setCurrentMonthIndex(index);
    setCurrentSlideIndex(0);
    setViewMode('monthly');
  };

  const nextSlide = () => {
    if (currentSlideIndex < activeSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else if (!isGeneral && currentMonthIndex < MONTHLY_TACTICAL_PLANS.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
      setCurrentSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else if (!isGeneral && currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
      setCurrentSlideIndex(MONTHLY_TACTICAL_PLANS[currentMonthIndex - 1].slides.length - 1);
    }
  };

  if (viewMode === 'welcome') {
    return <WelcomeView onSelectMonth={handleSelectMonth} onSelectGeneral={handleSelectGeneral} />;
  }

  const navTitle = isGeneral 
    ? "Directrices Generales" 
    : `${MONTHLY_TACTICAL_PLANS[currentMonthIndex].month} ${MONTHLY_TACTICAL_PLANS[currentMonthIndex].year}`;

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <div className="flex flex-col border-r border-slate-200 shrink-0">
        <div className="p-4 border-b border-slate-200 bg-white">
          <button 
            onClick={() => setViewMode('welcome')}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-red transition-all group"
          >
            <div className="p-1.5 rounded-lg bg-slate-50 group-hover:bg-brand-red/10 transition-colors">
              <Home size={14} className="group-hover:scale-110 transition-transform" />
            </div>
            Volver al Inicio
          </button>
        </div>
        <Sidebar 
          title={navTitle}
          slides={activeSlides} 
          currentSlideIndex={currentSlideIndex} 
          onSelectSlide={setCurrentSlideIndex}
          isGeneral={isGeneral}
        />
      </div>

      <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
        <Header />

        <div className="flex-1 relative overflow-hidden bg-slate-50/30">
          <div className="absolute top-6 left-8 z-10 flex items-center gap-2">
            <div className={`px-2 py-1 rounded text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 ${
              isGeneral ? 'bg-slate-900 text-white' : 'bg-brand-red text-white'
            }`}>
              {isGeneral ? <BookOpen size={10} /> : <Calendar size={10} />}
              {isGeneral ? 'Cimiento Estratégico' : 'Operación Mensual'}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide?.id || 'empty'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 overflow-y-auto"
            >
              {activeSlide && <SlideLayout slide={activeSlide} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer controls */}
        <footer className="h-16 border-t border-slate-200 bg-white px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${isGeneral ? 'bg-slate-900' : 'bg-brand-red'}`} />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {isGeneral ? 'Modelado Estratégico' : 'SIM Live 2026'}
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              Módulo {currentSlideIndex + 1} de {activeSlides.length}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0 && (isGeneral || currentMonthIndex === 0)}
              className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-red hover:border-brand-red/20 disabled:opacity-20 transition-all group"
            >
              <ChevronLeft size={20} className="group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === activeSlides.length - 1 && (isGeneral || currentMonthIndex === MONTHLY_TACTICAL_PLANS.length - 1)}
              className={`px-6 h-10 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center gap-2 group disabled:opacity-50 disabled:shadow-none ${
                isGeneral ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/20' : 'bg-brand-red hover:bg-red-700 shadow-brand-red/20'
              }`}
            >
              Siguiente <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}


