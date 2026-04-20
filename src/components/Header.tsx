/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Header() {
  return (
    <header className="glass-header h-20 px-8 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <img 
          src="/logo.webp" 
          alt="PRIN Talara Logo" 
          className="h-12 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        <div className="h-10 w-px bg-slate-200 mx-2 hidden sm:block" />
        <div>
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight leading-none mb-1">
            PRIN <span className="text-brand-red">TALARA</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
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


