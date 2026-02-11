
import React from 'react';
import { PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Antes & Depois', href: '#antes-depois' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Pacotes', href: '#pacotes' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="bg-purple-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="bg-white p-1 rounded-md">
              <img src="https://picsum.photos/40/40?grayscale" alt="Logo" className="w-8 h-8 rounded-sm" />
            </div>
            <span className="font-extrabold text-xl tracking-tighter uppercase">VITRINE <span className="text-purple-200">360</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-purple-200 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={onOrderClick}
              className="bg-purple-500 hover:bg-purple-400 border border-purple-300 px-4 py-2 rounded-lg text-sm font-bold flex items-center space-x-2 transition-all transform hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Agendar Pedido</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
