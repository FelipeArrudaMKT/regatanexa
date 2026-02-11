
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f111a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6 uppercase tracking-wider">Regata Sauna</h3>
            <p className="text-gray-400 leading-relaxed mb-8">Transformamos suas roupas básicas em peças premium com acabamento profissional e qualidade excepcional.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-purple-500" />
                <span>(88) 9 9690-5380</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-purple-500" />
                <span>suporte@vitrine360store.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>Entrega Seg-Sáb: 8h às 18h</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#beneficios" className="hover:text-purple-400 transition-colors">Benefícios</a></li>
              <li><a href="#antes-depois" className="hover:text-purple-400 transition-colors">Antes & Depois</a></li>
              <li><a href="#depoimentos" className="hover:text-purple-400 transition-colors">Depoimentos</a></li>
              <li><a href="#pacotes" className="hover:text-purple-400 transition-colors">Pacotes</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Transformação de Regatas</li>
              <li>Acabamento Premium</li>
              <li>Entrega Expressa</li>
              <li>Consultoria Personalizada</li>
              <li>Garantia de Qualidade</li>
              <li>Suporte 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2024 Vitrine 360 Store. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-300">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
