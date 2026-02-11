
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  "https://picsum.photos/800/800?random=11",
  "https://picsum.photos/800/800?random=12",
  "https://picsum.photos/800/800?random=13",
];

const BeforeAfter: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? IMAGES.length - 1 : i - 1));
  const next = () => setIndex(i => (i === IMAGES.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-purple-600">Antes & Depois</span>
        </h2>
        <p className="text-gray-500 text-lg mb-12">Veja a transformação incrível que a Regata Sauna proporciona à quem usa em poucos dias!</p>

        <div className="relative group">
          <div className="rounded-[40px] overflow-hidden aspect-square md:aspect-[4/3] bg-gray-100 shadow-2xl">
            <img 
              src={IMAGES[index]} 
              alt="Before and After" 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
