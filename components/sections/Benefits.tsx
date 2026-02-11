
import React from 'react';
import { Flame, Droplets, ShieldCheck, Heart, Sparkles, Gem } from 'lucide-react';

const BENEFIT_LIST = [
  { icon: <Flame className="w-6 h-6 text-orange-500" />, title: "Barriga menor no primeiro uso" },
  { icon: <Flame className="w-6 h-6 text-orange-400" />, title: "Queima 5x mais rápida" },
  { icon: <Flame className="w-6 h-6 text-yellow-500" />, title: "Suor explosivo" },
  { icon: <Droplets className="w-6 h-6 text-blue-400" />, title: "Discreta e poderosa" },
  { icon: <Gem className="w-6 h-6 text-blue-500" />, title: "Autoestima renovada" },
  { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, title: "Risco zero: pague só na entrega" },
];

interface BenefitsProps {
  onOrderClick: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-purple-600">Benefícios</span> Surreais
        </h2>
        <p className="text-gray-500 text-lg mb-12">Descubra por que milhares de clientes tiveram resultados surpreendentes!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {BENEFIT_LIST.map((b, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{b.icon}</div>
              <span className="font-bold text-gray-800 text-center">{b.title}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={onOrderClick}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-5 px-12 rounded-2xl shadow-xl transition-all mb-20"
        >
          Experimente Agora Mesmo!
        </button>

        <div className="rounded-[40px] overflow-hidden shadow-2xl bg-black aspect-video max-w-4xl mx-auto border-8 border-white">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" 
            title="Video Benefits"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-20">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              O seu <span className="text-purple-600">corpo agradece</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12">Assista ao depoimento real de quem usa e recomenda.</p>
            <div className="rounded-[40px] overflow-hidden shadow-2xl bg-black aspect-video max-w-4xl mx-auto border-8 border-white">
                <img src="https://picsum.photos/1200/675?random=5" alt="Depoimento Video Placeholder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
