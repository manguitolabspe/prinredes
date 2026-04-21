/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, ArrowRight, Zap, Target, Users, Shield, LayoutGrid, LogOut } from 'lucide-react';
import { MONTHLY_TACTICAL_PLANS } from '../data/strategy';

interface WelcomeViewProps {
  onSelectGeneral: () => void;
  onSelectMonth: (index: number) => void;
  onSelectOperational: () => void;
  onLogout: () => void;
}

export default function WelcomeView({ onSelectGeneral, onSelectMonth, onSelectOperational, onLogout }: WelcomeViewProps) {
  const [showMonths, setShowMonths] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-y-auto">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-slate-900/[0.03] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-24 relative z-10 flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-16 text-center"
        >
          <img 
            src="/logo.webp" 
            alt="Logo PRIN" 
            className="h-10 md:h-12 w-auto mx-auto mb-6 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 md:w-8 h-px bg-brand-red/30" />
            <h2 className="text-[8px] md:text-[10px] font-black text-brand-red uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Estrategia Talara 2026
            </h2>
            <span className="w-6 md:w-8 h-px bg-brand-red/30" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Plan Maestro de <span className="text-brand-red">Inteligencia</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            Despliegue estratégico táctico para la movilización electoral masiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto flex-1">
          {/* Main Strategic Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button 
              onClick={onSelectGeneral}
              className="group block w-full text-left bg-white border border-slate-200 rounded-3xl p-6 md:p-8 transition-all hover:border-slate-900 hover:shadow-xl hover:shadow-slate-200/50 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={20} />
                </div>
                <div className="mb-4">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Base Estratégica</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">Cimiento Permanente</h3>
                </div>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-8 flex-1">
                  Modelado inamovible de la campaña. Criptografía táctica y blindaje de la verdad.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-900">
                  Acceder al Manual <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </motion.div>

          {/* Operational Manual (New) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <button 
              onClick={onSelectOperational}
              className="group block w-full text-left bg-white border border-slate-200 rounded-3xl p-6 md:p-8 transition-all hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-200/50 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-600/20">
                  <Users size={20} />
                </div>
                <div className="mb-4">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Sincronía</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">Manual Operativo</h3>
                </div>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed mb-8 flex-1">
                  Triángulo de Victoria y Protocolos por Secretaría. El "quién hace qué" en tiempo real.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-indigo-600">
                  Ver Roles y Funciones <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </motion.div>

          {/* Tactical Calendars Gateway */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <AnimatePresence mode="wait">
              {!showMonths ? (
                <motion.button
                  key="gateway"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setShowMonths(true)}
                  className="group block w-full text-left bg-white border border-slate-200 rounded-3xl p-8 transition-all hover:border-brand-red hover:shadow-xl hover:shadow-brand-red/10 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-red/20">
                      <LayoutGrid size={20} />
                    </div>
                    <div className="mb-4">
                      <span className="text-[9px] font-black text-brand-red uppercase tracking-widest">Operación Live</span>
                      <h3 className="text-xl font-black text-slate-900 mt-1">Parrilla de Contenidos</h3>
                    </div>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8 flex-1">
                      Despliegue táctico mensual, cronogramas de pauta y metas de movilización.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-red">
                      Ver Estrategia Mensual <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.button>
              ) : (
                <motion.div
                  key="month-list"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-3 flex-1"
                >
                  <div className="flex items-center justify-between mb-4 px-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Seleccionar Periodo</span>
                    <button 
                      onClick={() => setShowMonths(false)}
                      className="text-[9px] font-black text-brand-red uppercase tracking-widest hover:underline"
                    >
                      Volver
                    </button>
                  </div>
                  
                  {MONTHLY_TACTICAL_PLANS.map((month, index) => (
                    <button
                      key={index}
                      onClick={() => onSelectMonth(index)}
                      className="group block w-full text-left bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-brand-red hover:bg-brand-red group/btn"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-black text-slate-900 group-hover:text-white transition-colors">{month.month} {month.year}</h3>
                          <div className="mt-1 flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400 group-hover:text-white/60 uppercase tracking-widest">
                              <Calendar size={10} /> {month.slides.length} Módulos
                            </div>
                            <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400 group-hover:text-white/60 uppercase tracking-widest">
                              <Zap size={10} /> Live
                            </div>
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-300 group-hover:bg-white/20 group-hover:text-white transition-all">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </button>
                  ))}

                  <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl px-6 py-4 flex items-center justify-center opacity-60">
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[8px]">Meses en Sincronización...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Action Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Acceso Confidencial</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Terminal Activa • SIM 2026</p>
            </div>
          </div>
          
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest border border-slate-100 hover:border-rose-100 group"
          >
            <LogOut size={16} className="group-hover:scale-110 transition-transform" />
            Cerrar Sesión Segura
          </button>
        </motion.div>
      </div>
    </div>
  );
}

