
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Perguntas <span className="text-purple-600">Frequentes</span>
          </h2>
          <p className="text-gray-500 text-lg">Tire todas as suas dúvidas sobre nosso serviço. Se não encontrar a resposta, entre em contato conosco!</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl shadow-sm overflow-hidden bg-white">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 md:text-lg">{item.question}</span>
                <div className="text-purple-600">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 leading-relaxed bg-gray-50/30">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
