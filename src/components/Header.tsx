/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="glass-header h-20 px-4 md:px-8 flex items-center justify-between shrink-0 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100/50">
      <div className="flex items-center gap-3 md:gap-4">
        <button 
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-brand-red transition-colors"
        >
          <Menu size={20} />
        </button>
        <img 
          src="/logo.webp" 
          alt="PRIN Talara Logo" 
          className="h-10 md:h-12 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        <div className="h-8 md:h-10 w-px bg-slate-200 mx-1 md:mx-2 hidden xs:block" />
        <div>
          <h1 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight leading-none mb-0.5 md:mb-1">
            PRIN <span className="text-brand-red">TALARA</span>
          </h1>
          <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden xs:block">
            MUNICIPALIDAD PROVINCIAL 2026
          </p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <div className="flex flex-col items-end">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Candidato</p>
          <p className="text-sm font-extrabold text-slate-900">Arnulfo Neira Fowks</p>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div className="flex flex-col items-end">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estratega SIM</p>
          <p className="text-sm font-extrabold text-slate-900">Wilmer Salazar</p>
        </div>
      </div>
    </header>
  );
}


