
import React, { useState } from 'react';
import { X, ShieldAlert, Package as PackageIcon, User, Phone, Mail, Calendar, MapPin } from 'lucide-react';
import { PACKAGES, SIZES } from '../constants';
import { OrderStatus, Order } from '../types';

interface OrderModalProps {
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<Order>>({
    package: PACKAGES[1].title,
    price: PACKAGES[1].price,
    size: 'G',
    name: '',
    whatsapp: '',
    email: '',
    deliveryDate: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock API call
    try {
      const orders = JSON.parse(localStorage.getItem('vitrine_orders') || '[]');
      const newOrder = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: Date.now(),
        status: OrderStatus.NEW,
      };
      localStorage.setItem('vitrine_orders', JSON.stringify([newOrder, ...orders]));
      
      setSuccess(true);
    } catch (error) {
      alert("Erro ao enviar pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handlePackageSelect = (pkg: typeof PACKAGES[0]) => {
    setFormData({ ...formData, package: pkg.title, price: pkg.price });
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Pedido agendado com sucesso!</h2>
          <p className="text-gray-600 mb-8">Em breve você receberá as atualizações do seu pedido diretamente no seu WhatsApp.</p>
          <button 
            onClick={onClose}
            className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-all"
          >
            Entendi, obrigado!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full relative shadow-2xl my-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-2">
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Agendar Transformação</h2>
          <p className="text-gray-500 mb-6">Preencha os dados para agendar a entrega da sua encomenda</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-8 flex items-start space-x-3">
             <ShieldAlert className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
             <div>
               <p className="font-bold text-yellow-800 text-sm uppercase">NÃO SOLICITAMOS dados sensíveis ou de pagamento</p>
               <p className="text-green-700 text-sm font-bold">Entrega rápida em até 24 horas</p>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Package Selection */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-4 uppercase">
                <PackageIcon className="w-4 h-4" />
                <span>Selecione seu Pacote</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map(pkg => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => handlePackageSelect(pkg)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      formData.package === pkg.title ? 'border-purple-600 bg-purple-50' : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="font-bold">{pkg.title}</span>
                    <span className="font-black text-purple-600">{pkg.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-4 uppercase">Selecione o Tamanho</label>
               <div className="grid grid-cols-3 gap-3">
                 {SIZES.map(s => (
                   <button
                    key={s.label}
                    type="button"
                    onClick={() => setFormData({...formData, size: s.label})}
                    className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                      formData.size === s.label ? 'border-purple-600 bg-purple-50' : 'border-gray-100 hover:border-gray-200'
                    }`}
                   >
                     <span className="font-black text-lg">{s.label}</span>
                     <span className="text-[10px] text-gray-400 text-center leading-tight">Recomendado para {s.weight}</span>
                   </button>
                 ))}
               </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
               <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 uppercase">
                <User className="w-4 h-4" />
                <span>Informações Pessoais</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-500 ml-1">Nome Completo *</span>
                  <input 
                    required 
                    type="text" 
                    placeholder="Seu nome completo" 
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-500 ml-1">WhatsApp *</span>
                  <input 
                    required 
                    type="tel" 
                    placeholder="11988888888" 
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors"
                    value={formData.whatsapp}
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  />
                  <p className="text-[10px] text-red-500 font-bold mt-1">Insira o número com atenção, as atualizações do pedido serão enviadas via WhatsApp</p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <span className="text-xs font-bold text-gray-500 ml-1">Email (Opcional)</span>
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="space-y-4">
               <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 uppercase">
                <MapPin className="w-4 h-4" />
                <span>Endereço para Entrega</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 md:col-span-4 space-y-1">
                  <span className="text-xs font-bold text-gray-500 ml-1">Dia para receber a Entrega *</span>
                  <input 
                    required 
                    type="date" 
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors"
                    value={formData.deliveryDate}
                    onChange={e => setFormData({...formData, deliveryDate: e.target.value})}
                  />
                </div>
                <div className="col-span-2 space-y-1">
                   <span className="text-xs font-bold text-gray-500 ml-1">CEP (Opcional)</span>
                   <input type="text" placeholder="Somente números" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors" value={formData.cep} onChange={e => setFormData({...formData, cep: e.target.value})} />
                </div>
                <div className="col-span-2 space-y-1">
                   <span className="text-xs font-bold text-gray-500 ml-1">Rua *</span>
                   <input required type="text" placeholder="Rua, Avenida..." className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors" value={formData.street} onChange={e => setFormData({...formData, street: e.target.value})} />
                </div>
                <div className="space-y-1">
                   <span className="text-xs font-bold text-gray-500 ml-1">Número *</span>
                   <input required type="text" placeholder="123" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors" value={formData.number} onChange={e => setFormData({...formData, number: e.target.value})} />
                </div>
                <div className="space-y-1">
                   <span className="text-xs font-bold text-gray-500 ml-1">Bairro *</span>
                   <input required type="text" placeholder="Nome do bairro" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors" value={formData.neighborhood} onChange={e => setFormData({...formData, neighborhood: e.target.value})} />
                </div>
                <div className="col-span-2 space-y-1">
                   <span className="text-xs font-bold text-gray-500 ml-1">Cidade *</span>
                   <input required type="text" placeholder="Nome da cidade" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>
            </div>

            <div className="space-y-1">
               <span className="text-xs font-bold text-gray-500 ml-1 uppercase">Observações (Opcional)</span>
               <textarea placeholder="Descreva detalhes sobre suas peças, preferências de estilo, etc." className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-purple-400 focus:outline-none transition-colors h-24" value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-purple-600 text-white font-extrabold text-xl py-6 rounded-2xl shadow-xl hover:bg-purple-700 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {loading ? 'Processando...' : 'Confirmar Agendamento'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
