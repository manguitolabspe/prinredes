import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, ShieldCheck, Zap } from 'lucide-react';

interface LoginViewProps {
  onLogin: () => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulated verification delay
    setTimeout(() => {
      if (username === 'admin' && password === 'printalara2026') {
        localStorage.setItem('is_auth', 'true');
        onLogin();
      } else {
        setError('Acceso Denegado: Credenciales Inválidas');
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-slate-200 rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 border border-slate-200 rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-brand-red rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
            <Zap size={40} className="text-white animate-pulse" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">SIM 2026</h1>
          <p className="text-[10px] font-black text-brand-red uppercase tracking-[0.3em]">Acceso Restringido • Confidencial</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">Identificador</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all font-sans"
                placeholder="Usuario"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all font-sans"
                placeholder="••••••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-center gap-3 text-rose-600"
            >
              <ShieldCheck size={18} className="shrink-0" />
              <p className="text-xs font-bold uppercase tracking-wider">{error}</p>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-red/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Zap size={18} />
                Entrar al Sistema
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
            PROPIEDAD INTELECTUAL • ESTRATEGIA VICTORIA<br />
            ESTE TERMINAL ESTÁ SIENDO MONITOREADO
          </p>
        </div>
      </motion.div>
    </div>
  );
}
