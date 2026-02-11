
import React from 'react';
import { PACKAGES } from '../../constants';

interface PackagesSectionProps {
  onOrderClick: () => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-[#1a1c2c] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Pacotes <span className="text-purple-400">Disponíveis</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">Ofertas especiais por tempo limitado! Quanto mais peças, maior o desconto. Escolha o pacote do seu interesse.</p>

        <div className="mb-16 bg-purple-600 rounded-[40px] p-1 shadow-2xl overflow-hidden max-w-4xl mx-auto border-4 border-purple-500">
           <div className="bg-purple-600 text-white p-8">
             <h3 className="text-3xl md:text-6xl font-black italic uppercase leading-none mb-2">PAGAMENTO SÓ NA ENTREGA</h3>
             <h4 className="text-4xl md:text-8xl font-black italic uppercase text-green-400 mb-8">FRETE GRÁTIS</h4>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PACKAGES.map(pkg => (
                  <div key={pkg.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <div className="text-xs font-bold bg-red-600 text-white inline-block px-2 py-0.5 rounded-full mb-2 uppercase">{pkg.title}</div>
                    <img src={`https://picsum.photos/200/200?random=${pkg.id}`} alt={pkg.title} className="w-24 h-24 mx-auto mb-2 object-contain" />
                    <div className="text-2xl font-black text-yellow-400">{pkg.price}</div>
                  </div>
                ))}
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {PACKAGES.map((pkg, i) => (
            <button
              key={pkg.id}
              onClick={onOrderClick}
              className={`p-6 rounded-2xl font-bold flex flex-col items-center justify-center transition-all transform hover:scale-105 ${
                i === 0 ? 'bg-purple-500 text-white' : 
                i === 1 ? 'bg-emerald-500 text-white' :
                i === 2 ? 'bg-blue-600 text-white' : 
                'bg-yellow-500 text-gray-900'
              }`}
            >
              <span className="uppercase text-xs mb-2">Agendar {pkg.title} -</span>
              <span className="text-xl">{pkg.price}</span>
            </button>
          ))}
        </div>

        <div className="bg-red-600 p-12 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-600"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 italic">⚡ Oferta Por Tempo Limitado!</h3>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">Descontos de até 44% OFF válidos apenas esta semana. Não perca a chance de transformar seu físico com preço especial!</p>
            <button 
              onClick={onOrderClick}
              className="bg-purple-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-purple-700 shadow-2xl transition-all"
            >
              APROVEITAR OFERTA AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
