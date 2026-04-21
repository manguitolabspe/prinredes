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
import { ChevronLeft, ChevronRight, Home, BookOpen, Calendar, Users } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SlideLayout from './components/SlideLayout';
import WelcomeView from './components/WelcomeView';
import LoginView from './components/LoginView';
import { GENERAL_DIRECTIVES, MONTHLY_TACTICAL_PLANS, OPERATIONAL_PROTOCOLS, SlideContent } from './data/strategy';

type ViewMode = 'welcome' | 'general' | 'monthly' | 'operational';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('is_auth') === 'true';
  });
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isGeneral = viewMode === 'general';
  const isOperational = viewMode === 'operational';
  
  const activeSlides: SlideContent[] = isGeneral 
    ? GENERAL_DIRECTIVES 
    : isOperational 
      ? OPERATIONAL_PROTOCOLS
      : MONTHLY_TACTICAL_PLANS[currentMonthIndex]?.slides || [];
  
  const activeSlide = activeSlides[currentSlideIndex];

  const handleSelectGeneral = () => {
    setCurrentSlideIndex(0);
    setViewMode('general');
    setIsSidebarOpen(false);
  };

  const handleSelectOperational = () => {
    setCurrentSlideIndex(0);
    setViewMode('operational');
    setIsSidebarOpen(false);
  };

  const handleSelectMonth = (index: number) => {

    setCurrentMonthIndex(index);
    setCurrentSlideIndex(0);
    setViewMode('monthly');
    setIsSidebarOpen(false);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('is_auth');
    setIsAuthenticated(false);
    setViewMode('welcome');
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

  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  if (viewMode === 'welcome') {
    return (
      <WelcomeView 
        onSelectMonth={handleSelectMonth} 
        onSelectGeneral={handleSelectGeneral} 
        onSelectOperational={handleSelectOperational}
        onLogout={handleLogout}
      />
    );
  }

  const navTitle = isGeneral 
    ? "Directrices Generales" 
    : isOperational
      ? "Manual Operativo"
      : `${MONTHLY_TACTICAL_PLANS[currentMonthIndex].month} ${MONTHLY_TACTICAL_PLANS[currentMonthIndex].year}`;

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden relative">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className={clsx(
        "flex flex-col border-r border-slate-200 shrink-0 bg-white transition-transform duration-300 z-50",
        "fixed inset-y-0 left-0 w-72 lg:relative lg:translate-x-0 lg:w-80 lg:z-auto",
        isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-4 border-b border-slate-200 bg-white">
          <button 
            onClick={() => { setViewMode('welcome'); setIsSidebarOpen(false); }}
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
          onSelectSlide={handleSelectSlide}
          onLogout={handleLogout}
          isGeneral={isGeneral}
          isOperational={isOperational}
        />
      </div>

      <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 relative overflow-hidden bg-slate-50/30">
          <div className="absolute top-4 lg:top-6 left-4 lg:left-8 z-10 flex items-center gap-2">
            <div className={`px-2 py-1 rounded text-[8px] lg:text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 ${
              isGeneral ? 'bg-slate-900 text-white' : isOperational ? 'bg-indigo-600 text-white' : 'bg-brand-red text-white'
            }`}>
              {isGeneral ? <BookOpen size={10} /> : isOperational ? <Users size={10} /> : <Calendar size={10} />}
              {isGeneral ? 'Cimiento Estratégico' : isOperational ? 'Protocolos Operativos' : 'Operación Mensual'}
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
              <div className="min-h-full pb-20 lg:pb-0">
                {activeSlide && <SlideLayout slide={activeSlide} />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer controls */}
        <footer className="h-16 border-t border-slate-200 bg-white px-4 lg:px-8 flex items-center justify-between shrink-0 sticky bottom-0 z-40">
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                isGeneral ? 'bg-slate-900' : isOperational ? 'bg-indigo-600' : 'bg-brand-red'
              }`} />
              <span className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden xs:block">
                {isGeneral ? 'Modelado Estratégico' : isOperational ? 'Sincronía Operativa' : 'SIM Live 2026'}
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden xs:block" />
            <p className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              Módulo {currentSlideIndex + 1} / {activeSlides.length}
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0 && (isGeneral || isOperational || currentMonthIndex === 0)}
              className="w-9 h-9 lg:w-10 lg:h-10 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-red hover:border-brand-red/20 disabled:opacity-20 transition-all group"
            >
              <ChevronLeft size={18} className="lg:size-20 group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === activeSlides.length - 1 && (isGeneral || isOperational || currentMonthIndex === MONTHLY_TACTICAL_PLANS.length - 1)}
              className={clsx(
                "px-4 lg:px-6 h-9 lg:h-10 text-white rounded-xl font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all shadow-lg flex items-center gap-2 group disabled:opacity-50 disabled:shadow-none",
                isGeneral ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/20' : 
                isOperational ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20' :
                'bg-brand-red hover:bg-red-700 shadow-brand-red/20'
              )}
            >
              <span className="hidden xs:inline">Siguiente</span> 
              <ChevronRight size={14} className="lg:size-16 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Helper for conditional classes
function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}


