/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideContent } from '../data/strategy';
import { 
  Target, Zap, LayoutGrid, Users, BarChart3, TrendingUp, TrendingDown,
  MapPin, Radio, Megaphone, Globe, UserCheck, Shield, 
  Smartphone, Database, Video, Newspaper, MessageSquare, Handshake,
  Activity, Cpu, Lock, Cloud, Calendar, Bell
} from 'lucide-react';

// Helper for conditional classes
function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface SlideLayoutProps {
  slide: SlideContent;
}

const icons: Record<string, any> = {
  diagnosis: Zap,
  machinery: LayoutGrid,
  target: Target,
  architecture: Shield,
  investment: TrendingUp,
  plan: Users,
  video: Video,
  portal: Globe,
  calendar: Calendar,
};

// Map content keywords to icons for more visual detail
const getContextualIcon = (text: string, defaultIcon: any) => {
  const lowercaseText = text.toLowerCase();
  if (lowercaseText.includes('volante') || lowercaseText.includes('impreso') || lowercaseText.includes('prensa')) return Newspaper;
  if (lowercaseText.includes('digital') || lowercaseText.includes('algoritmo') || lowercaseText.includes('tiktok') || lowercaseText.includes('pauta')) return Globe;
  if (lowercaseText.includes('radio') || lowercaseText.includes('pauta')) return Radio;
  if (lowercaseText.includes('ataque') || lowercaseText.includes('táctico') || lowercaseText.includes('fuerza') || lowercaseText.includes('choque')) return Megaphone;
  if (lowercaseText.includes('terrestre') || lowercaseText.includes('mercado') || lowercaseText.includes('organización') || lowercaseText.includes('físico')) return MapPin;
  if (lowercaseText.includes('joven') || lowercaseText.includes('juventud') || lowercaseText.includes('tiktok')) return Smartphone;
  if (lowercaseText.includes('sim') || lowercaseText.includes('datos') || lowercaseText.includes('servidor') || lowercaseText.includes('gestor') || lowercaseText.includes('infraestructura')) return Database;
  if (lowercaseText.includes('video') || lowercaseText.includes('audiovisual')) return Video;
  if (lowercaseText.includes('voluntario') || lowercaseText.includes('activista') || lowercaseText.includes('electoral') || lowercaseText.includes('personero')) return UserCheck;
  if (lowercaseText.includes('seguridad') || lowercaseText.includes('protectora') || lowercaseText.includes('mujer') || lowercaseText.includes('sanitario')) return Shield;
  if (lowercaseText.includes('conversión') || lowercaseText.includes('leads') || lowercaseText.includes('whatsapp') || lowercaseText.includes('comunidad')) return MessageSquare;
  if (lowercaseText.includes('contacto') || lowercaseText.includes('pescador') || lowercaseText.includes('empatía') || lowercaseText.includes('social')) return Handshake;
  if (lowercaseText.includes('economía') || lowercaseText.includes('donación') || lowercaseText.includes('roi') || lowercaseText.includes('inversión')) return TrendingUp;
  if (lowercaseText.includes('escalabilidad') || lowercaseText.includes('crecimiento') || lowercaseText.includes('exponencial') || lowercaseText.includes('métricas') || lowercaseText.includes('roadmap')) return BarChart3;
  if (lowercaseText.includes('defensa') || lowercaseText.includes('ataque') || lowercaseText.includes('fake news') || lowercaseText.includes('blindaje')) return Shield;
  if (lowercaseText.includes('calendario') || lowercaseText.includes('cronograma') || lowercaseText.includes('post')) return Calendar;
  return defaultIcon;
};

export default function SlideLayout({ slide }: SlideLayoutProps) {
  const Icon = icons[slide.type] || LayoutGrid;
  const [selectedDay, setSelectedDay] = useState<number | null>(4); // Default to first tactical day

  const renderStats = () => {
    if (!slide.stats) return null;
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-8">
        {slide.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default"
          >
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                {stat.label}
              </p>
              {stat.trend && (
                <div className={clsx(
                  "p-0.5 rounded-full",
                  stat.trend === 'up' ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600"
                )}>
                  {stat.trend === 'up' ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                </div>
              )}
            </div>
            <p className={clsx(
              "text-2xl font-black tracking-tighter leading-none",
              stat.color === 'brand-red' ? "text-brand-red" : "text-slate-900"
            )}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderTechnicalSpecs = () => {
    if (!slide.technicalInfo) return null;
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-8 px-8"
      >
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Cpu size={80} className="text-brand-red" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-red/20 rounded-lg flex items-center justify-center text-brand-red">
                <Activity size={18} />
              </div>
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Especificaciones Técnicas SIM</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.technicalInfo.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderCalendar = () => {
    if (slide.type !== 'calendar' || !slide.calendarData) return null;

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const startOffset = 4; // May 2026 starts on Friday (Mon=0, Tue=1, Wed=2, Thu=3, Fri=4)
    const activeDayData = slide.calendarData.find(d => d.day === selectedDay);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8">
        {/* Calendar Grid */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={16} className="text-brand-red" />
              Mayo 2026
            </h3>
          </div>

          <div className="w-[300px] mx-auto lg:mx-0">
            {/* Weekday Labels Grid */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                <div key={`${d}-${i}`} className="aspect-square flex items-center justify-center text-[10px] font-black text-slate-400 uppercase">
                  {d}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty offsets */}
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`offset-${i}`} className="aspect-square" />
              ))}
              
              {days.map(day => {
                const hasData = slide.calendarData?.some(d => d.day === day);
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    onClick={() => hasData && setSelectedDay(day)}
                    className={clsx(
                      "aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative group",
                      !hasData ? "cursor-default text-slate-300" : "cursor-pointer",
                      isSelected ? "bg-slate-900 text-white scale-105 shadow-xl z-10" : 
                      hasData ? "bg-slate-50 text-slate-900 hover:bg-brand-red hover:text-white" : "hover:bg-slate-50"
                    )}
                  >
                    <span className="text-xs font-bold">{day}</span>
                    {hasData && !isSelected && (
                      <div className="absolute bottom-1 w-1 h-1 bg-brand-red rounded-full group-hover:bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event Detail Panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {activeDayData ? (
              <motion.div
                key={selectedDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 bg-brand-red/20 border border-brand-red/30 rounded-full text-[10px] font-black text-brand-red uppercase tracking-widest luxury-glow">
                    {activeDayData.type}
                  </div>
                  <div className="text-2xl font-black text-white/20">#{selectedDay}</div>
                </div>

                <h4 className="text-2xl font-black mb-4 leading-tight tracking-tight">
                  {activeDayData.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {activeDayData.description}
                </p>

                {activeDayData.pauta && (
                  <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Pauta Sugerida</p>
                        <p className="text-lg font-black text-white">{activeDayData.pauta}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-emerald-500/20 text-emerald-500 rounded-lg flex items-center justify-center">
                      <TrendingUp size={16} />
                    </div>
                  </div>
                )}

                {!activeDayData.pauta && (
                  <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                      <Activity size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Alcance Estimado</p>
                      <p className="text-lg font-black text-white">Orgánico Viral</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="bg-slate-50 border border-slate-100 border-dashed rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center opacity-50">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 mb-4">
                  <Bell size={32} />
                </div>
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Selecciona una fecha marcada</h4>
                <p className="text-xs text-slate-400 mt-2">Los puntos rojos indican días con tácticas activas.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  const renderHero = () => (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-32 h-32 bg-slate-950 rounded-full flex items-center justify-center mb-12 relative border-4 border-brand-red shadow-[0_0_50px_rgba(239,68,68,0.3)]"
      >
        <Zap size={64} className="text-brand-red animate-pulse" />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-slate-950 mb-6 tracking-tighter"
      >
        {slide.title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl font-bold text-slate-500 uppercase tracking-[0.3em] mb-12"
      >
        {slide.subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl max-w-2xl"
      >
        <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
          "{typeof slide.content === 'string' ? slide.content : 'Iniciando Despliegue de Inteligencia'}"
        </p>
      </motion.div>
    </div>
  );

  const renderVersus = () => (
    <div className="px-8 py-12">
      {renderStats()}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-50 rounded-3xl p-10 border border-slate-200 opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-500">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">Maquinaria Tradicional</h3>
          </div>
          <div className="space-y-8">
            {Array.isArray(slide.content) && slide.content.slice(0, 1).map((item: any, i: number) => (
              <div key={i}>
                <p className="text-3xl font-black text-slate-300 mb-4 tracking-tight leading-none line-through">{item.label}</p>
                <p className="text-slate-400 font-medium italic">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-950 rounded-3xl p-10 border border-brand-red shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Zap size={120} className="text-brand-red" />
          </div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-widest luxury-glow">Estrategia Asimétrica</h3>
          </div>
          <div className="space-y-12 relative z-10">
            {Array.isArray(slide.content) && slide.content.slice(1).map((item: any, i: number) => (
              <div key={i} className="group">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-6 h-1 bg-brand-red rounded-full" />
                   <p className="text-xs font-black text-brand-red uppercase tracking-widest">ACTUALIZACIÓN INTEL</p>
                </div>
                <p className="text-3xl font-black text-white mb-4 tracking-tight leading-none group-hover:text-brand-red transition-colors">{item.label}</p>
                <p className="text-slate-400 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderTargetProfiles = () => (
    <div className="px-8 py-12">
      {renderStats()}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(slide.content) && slide.content.map((profile: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:bg-slate-950 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-brand-red/10 transition-colors" />
              <div className="mb-8 relative z-10">
                <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-brand-red/30">
                  {(() => {
                    const ContextIcon = getContextualIcon(profile.label, Target);
                    return <ContextIcon size={32} />;
                  })()}
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-950 group-hover:text-white mb-4 tracking-tight uppercase tracking-widest">{profile.label}</h3>
                <div className="w-12 h-1 bg-slate-100 group-hover:bg-brand-red mb-6 transition-colors" />
                <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed pr-4">
                  {profile.text}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 group-hover:border-slate-800 flex items-center justify-between relative z-10">
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-brand-red transition-colors">Voto Estratégico</span>
                 <Users size={16} className="text-slate-200 group-hover:text-slate-700 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="px-8 py-12">
      {renderStats()}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(slide.content) && slide.content.map((pillar: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="bg-white border border-slate-100 rounded-3xl p-6 h-full flex flex-col items-center text-center hover:bg-slate-950 transition-all duration-300 group">
              <div className="mb-8 p-4 bg-slate-50 rounded-2xl group-hover:bg-brand-red transition-colors">
                {(() => {
                  const ContextIcon = getContextualIcon(pillar.label, Database);
                  return <ContextIcon size={24} className="group-hover:text-white" />;
                })()}
              </div>
              <h3 className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em] mb-4 bg-brand-red/10 px-3 py-1 rounded-full">{pillar.label}</h3>
              <p className="text-sm font-bold text-slate-950 group-hover:text-white leading-relaxed">
                {pillar.text}
              </p>
              {pillar.details && (
                <div className="mt-6 pt-6 border-t border-slate-50 group-hover:border-slate-900 w-full text-left space-y-2">
                  {pillar.details.map((d: string, j: number) => (
                    <div key={j} className="flex items-center gap-2">
                       <div className="w-1 h-1 bg-slate-200 group-hover:bg-brand-red rounded-full" />
                       <span className="text-[10px] text-slate-400 group-hover:text-slate-500 font-bold uppercase">{d}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {renderTechnicalSpecs()}
    </div>
  );

  const renderInvestment = () => (
    <div className="px-8 py-12 space-y-8">
      {renderStats()}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Array.isArray(slide.content) && slide.content.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={clsx(
              "rounded-3xl p-8 border hover:scale-105 transition-transform duration-500",
              i === 0 ? "bg-white border-slate-100" : 
              i === 1 ? "bg-slate-950 border-brand-red shadow-2xl" : "bg-slate-50 border-slate-200"
            )}
          >
            <p className={clsx(
              "text-[10px] font-black uppercase tracking-[0.3em] mb-8",
              i === 1 ? "text-slate-500" : "text-slate-400"
            )}>
              Asignación 0{(i + 1).toString()}
            </p>
            <h3 className={clsx(
              "text-2xl font-black mb-6 tracking-tight",
              i === 1 ? "text-white" : "text-slate-950"
            )}>
              {item.label}
            </h3>
            <p className={clsx(
              "text-sm font-medium leading-relaxed mb-8",
              i === 1 ? "text-slate-400" : "text-slate-500"
            )}>
              {item.text}
            </p>
            <div className="flex items-center justify-between">
               <div className={clsx(
                 "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest",
                 i === 1 ? "bg-brand-red text-white" : "bg-slate-100 text-slate-500"
               )}>
                 Estado: Activo
               </div>
               <TrendingUp size={24} className={i === 1 ? "text-brand-red" : "text-slate-200"} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMachinery = () => (
    <div className="px-8 py-12 space-y-12">
      {renderStats()}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.isArray(slide.content) && slide.content.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-brand-red transition-all group"
          >
            <div className="w-2 bg-slate-100 group-hover:bg-brand-red transition-colors" />
            <div className="p-8 flex flex-col justify-center flex-1">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-red group-hover:text-white transition-all">
                    {(() => {
                      const ContextIcon = getContextualIcon(item.label, Users);
                      return <ContextIcon size={18} />;
                    })()}
                 </div>
                 <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight leading-none">{item.label}</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderVideoGrid = () => (
    <div className="px-8 py-12 space-y-12">
      {renderStats()}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {Array.isArray(slide.content) && slide.content.map((video: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video bg-slate-950 rounded-[40px] border border-slate-800 shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            
            {/* Play Button - Moved to corner to avoid clashing with text */}
            <div className="absolute top-6 right-6 z-20">
               <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:bg-brand-red hover:border-brand-red transition-all duration-300"
               >
                 <Video size={18} className="text-white" />
               </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
               <div className="flex items-center gap-3 mb-3">
                  <div className="px-3 py-1 bg-brand-red/90 rounded text-[9px] font-black text-white uppercase tracking-[0.2em] shadow-lg shadow-brand-red/20">Pauta Mayo</div>
                  <div className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">{video.label}</div>
               </div>
               <h3 className="text-2xl font-black text-white tracking-tight leading-tight mb-2 max-w-lg">
                 {video.text}
               </h3>
               <div className="w-16 h-1 bg-brand-red mt-4 opacity-80" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderRoadmap = () => (
    <div className="px-8 py-12 space-y-16 relative">
      {renderStats()}
      <div className="absolute top-48 bottom-24 left-1/2 w-0.5 bg-slate-100 -translate-x-1/2 hidden lg:block" />
      <div className="space-y-24 relative z-10">
        {Array.isArray(slide.content) && slide.content.map((phase: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx(
              "flex flex-col lg:flex-row items-center gap-12",
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            )}
          >
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
               <div className={clsx(
                 "w-16 h-16 rounded-3xl flex items-center justify-center mb-6 shadow-xl",
                 i === 0 ? "bg-brand-red text-white" : "bg-slate-100 text-slate-400"
               )}>
                 <span className="text-2xl font-black">{i + 1}</span>
               </div>
               <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter uppercase">{phase.label}</h3>
               <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
                 {phase.text}
               </p>
            </div>
            <div className="hidden lg:flex w-10 h-10 bg-white border-4 border-slate-50 rounded-full items-center justify-center z-10">
               <div className={clsx("w-3 h-3 rounded-full", i === 0 ? "bg-brand-red animate-ping" : "bg-slate-200")} />
            </div>
            <div className="lg:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (slide.type) {
      case 'portal':
        return renderHero();
      case 'diagnosis':
        return renderVersus();
      case 'target':
        return renderTargetProfiles();
      case 'architecture':
        return renderArchitecture();
      case 'investment':
        return renderInvestment();
      case 'machinery':
        return renderMachinery();
      case 'plan':
        if (slide.title.toLowerCase().includes('roadmap')) {
          return renderRoadmap();
        }
        return renderMachinery();
      case 'video':
        return renderVideoGrid();
      case 'calendar':
        return (
          <div className="space-y-6">
            {renderStats()}
            {renderCalendar()}
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-16 h-16 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-8"
            >
              <Icon size={32} />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl"
            >
              {typeof slide.content === 'string' ? slide.content : 'Plan Estratégico Detallado'}
            </motion.p>
          </div>
        );
    }
  };

  return (
    <div className="pb-24">
      {/* Title Section with Marquee */}
      <section className="bg-white border-b border-slate-100 overflow-hidden">
        <div className="flex flex-col">
          {/* Top category/type bar */}
          <div className="px-12 py-4 flex items-center justify-between border-b border-slate-50">
             <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                <p className="modern-subtitle mb-0 text-[10px]">INTEL-STREAM • {slide.type}</p>
             </div>
             <div className="flex items-center gap-4">
                <div className="px-2 py-0.5 bg-slate-900 border border-slate-700 rounded text-[8px] font-black text-white tracking-[0.2em] uppercase">
                  Propiedad Intelectual • Confidencial
                </div>
                {slide.subtitle && (
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
                     {slide.subtitle}
                   </p>
                )}
             </div>
          </div>

          {/* Marquee Title */}
          <div className="bg-slate-950 py-3 relative group cursor-default">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />
            
            <motion.div 
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex whitespace-nowrap items-center gap-24 select-none"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-24">
                  <h2 className="text-sm md:text-base font-bold text-white/80 tracking-[0.4em] uppercase italic">
                    {slide.title}
                  </h2>
                  <Icon className="text-brand-red/30" size={16} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto">
        {slide.strategicContext && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-8 mt-8"
          >
            <div className="bg-brand-red/5 border-l-4 border-brand-red p-4 rounded-r-2xl">
              <div className="flex items-center gap-2 mb-1">
                <Users size={14} className="text-brand-red" />
                <span className="text-[10px] font-black text-brand-red uppercase tracking-widest">Nota del Estratega (Wilmer Salazar)</span>
              </div>
              <p className="text-xs font-bold text-slate-700 leading-relaxed italic">
                "{slide.strategicContext}"
              </p>
            </div>
          </motion.div>
        )}
        {renderContent()}
      </div>
    </div>
  );
}


