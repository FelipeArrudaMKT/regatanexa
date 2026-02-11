
import React from 'react';
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          O Que Nossos <span className="text-purple-600">Clientes Dizem</span>
        </h2>
        <p className="text-gray-500 text-lg mb-16">Mais de 6000 clientes já transformaram o corpo e a autoestima! Veja alguns depoimentos reais.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-emerald-50 p-6 rounded-3xl flex items-center space-x-4 shadow-sm">
            <button className="bg-emerald-500 text-white p-3 rounded-full"><Play fill="currentColor" className="w-5 h-5" /></button>
            <div className="flex-1">
              <div className="h-10 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Waveform.svg/2560px-Waveform.svg.png')] bg-repeat-x bg-contain opacity-40"></div>
              <div className="flex justify-between text-xs text-emerald-700 font-bold mt-1">
                <span>0:16</span>
                <span>0:16</span>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-3xl flex items-center space-x-4 shadow-sm">
            <button className="bg-emerald-500 text-white p-3 rounded-full"><Play fill="currentColor" className="w-5 h-5" /></button>
            <div className="flex-1">
               <div className="h-10 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Waveform.svg/2560px-Waveform.svg.png')] bg-repeat-x bg-contain opacity-40"></div>
              <div className="flex justify-between text-xs text-emerald-700 font-bold mt-1">
                <span>0:00</span>
                <span>1:11</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div>
            <div className="text-4xl font-extrabold text-purple-600 mb-2">6000+</div>
            <div className="text-sm text-gray-500 uppercase font-bold tracking-tight">Corpos Transformados</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-purple-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-500 uppercase font-bold tracking-tight">Avaliação Média</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-purple-600 mb-2">99,4%</div>
            <div className="text-sm text-gray-500 uppercase font-bold tracking-tight">Dos Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-purple-600 mb-2">24h</div>
            <div className="text-sm text-gray-500 uppercase font-bold tracking-tight">Entrega Rápida</div>
          </div>
        </div>

        <div className="relative max-w-sm mx-auto">
          <div className="bg-gray-100 rounded-[40px] p-2 shadow-xl border-8 border-white">
            <img src="https://picsum.photos/400/800?random=22" alt="Zap Print" className="rounded-[32px] w-full" />
          </div>
          <button className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"><ChevronLeft /></button>
          <button className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"><ChevronRight /></button>
          
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
