
import React from 'react';
import { Zap, Timer } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative bg-[#1a1c2c] text-white py-12 md:py-24 px-4 overflow-hidden">
      {/* Background with low-res placeholder for faster perception */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="w-full h-full bg-gradient-to-br from-purple-900 via-[#1a1c2c] to-black" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/40 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold mb-8 animate-pulse">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>🔥 Queima Gordura 5X Mais Rápido</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          O atalho <span className="text-green-500">mais rápido</span> pra <br className="hidden md:block" />
          <span className="text-white">secar a barriga sem <br className="hidden md:block" /> mudar a rotina</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Tecnologia efeito sauna: <span className="text-green-400 font-bold">elimine a gordura</span> até em repouso.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={onOrderClick}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white text-lg md:text-xl font-bold py-5 px-12 rounded-2xl shadow-[0_0_30px_rgba(22,163,74,0.3)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"
          >
            <span>🔥 AGENDAR AGORA MESMO</span>
          </button>
          
          <div className="flex items-center space-x-2 bg-gray-800/40 border border-gray-700/50 px-4 py-2 rounded-xl text-sm text-gray-400">
            <Timer className="w-4 h-4" />
            <span>Pague só quando receber em mãos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
