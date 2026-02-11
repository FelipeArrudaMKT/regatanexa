
import React from 'react';

const CARDS = [
  { title: "Cansados da Barriga que Transborda", desc: "Estão cansados da barriga que transborda e das roupas apertadas.", bg: "bg-rose-50" },
  { title: "Querem Queimar Gordura Sem Esforço", desc: "Querem queimar gordura de forma acelerada sem esforço físico.", bg: "bg-yellow-50" },
  { title: "Sentem Vergonha do Próprio Corpo", desc: "Sentem vergonha de tirar a camisa em público.", bg: "bg-blue-50" },
  { title: "Já Tentaram Treinos ou Dietas", desc: "Já tentaram treinos ou dietas e não obtiveram resultado.", bg: "bg-slate-50" },
  { title: "Querem Acelerar Resultados", desc: "Querem acelerar resultados de treinos sem depender apenas de esforço extremo.", bg: "bg-emerald-50" },
  { title: "Desejam Recuperar a Confiança", desc: "Desejam recuperar a confiança, a autoestima e o respeito próprio.", bg: "bg-pink-50" },
];

interface IdealForYouProps {
  onOrderClick: () => void;
}

const IdealForYou: React.FC<IdealForYouProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-[#1a1c2c] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="bg-gray-800 text-gray-300 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">Ideal para você</span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-8 mb-16">
          A Regata Sauna X5 foi feita para <span className="text-purple-400">homens e mulheres que:</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CARDS.map((card, i) => (
            <div key={i} className={`${card.bg} p-8 rounded-3xl text-left border border-white/10 shadow-xl transition-all hover:-translate-y-2`}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-600 rounded-[40px] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Se Identificou com Algum Perfil?</h3>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">Então a Regata Sauna X5 foi feita especialmente para você. Experimente a diferença da queima de gordura acelerada!</p>
            <button 
              onClick={onOrderClick}
              className="bg-white text-purple-600 font-bold py-4 px-10 rounded-2xl hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>🔥 Agendar Agora Mesmo!</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealForYou;
