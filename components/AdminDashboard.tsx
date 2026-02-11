
import React, { useState, useEffect } from 'react';
import { LogOut, Filter, Download, MessageCircle, Copy, Search, Eye, X } from 'lucide-react';
import { Order, OrderStatus } from '../types';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('vitrine_admin_auth');
    if (auth !== 'true') {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
      const saved = localStorage.getItem('vitrine_orders');
      if (saved) {
        setOrders(JSON.parse(saved));
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('vitrine_admin_auth');
    navigate('/admin/login');
  };

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(updated);
    localStorage.setItem('vitrine_orders', JSON.stringify(updated));
  };

  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.name.toLowerCase().includes(search.toLowerCase()) || 
                          o.whatsapp.includes(search) || 
                          o.city.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) return <div className="min-h-screen bg-[#1a1c2c]" />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-purple-600 text-white p-4 shadow-md flex items-center justify-between sticky top-0 z-50">
        <span className="font-extrabold text-xl uppercase tracking-tighter">VITRINE ADMIN</span>
        <button onClick={handleLogout} className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 p-2 px-4 rounded-lg font-bold">
          <LogOut className="w-4 h-4" />
          <span>Sair</span>
        </button>
      </header>

      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900">Gestão de Pedidos</h1>
          <p className="text-gray-500 italic">Modo Offline/Local Storage ativo por segurança.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
             <input 
               type="text" 
               placeholder="Buscar por nome, WhatsApp ou cidade..." 
               className="w-full pl-10 p-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none"
               value={search}
               onChange={e => setSearch(e.target.value)}
             />
          </div>
          <select 
            className="p-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:outline-none bg-white font-bold text-gray-700"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos os Status</option>
            {Object.values(OrderStatus).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-xs font-black uppercase text-gray-400">
              <tr>
                <th className="px-6 py-4">Data</th>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">WhatsApp</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-xs text-gray-400 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">{order.name}</td>
                  <td className="px-6 py-4 text-emerald-600 font-medium">{order.whatsapp}</td>
                  <td className="px-6 py-4">
                    <select 
                      value={order.status} 
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                      className="text-xs font-bold p-1 px-2 rounded-full border-0 focus:ring-0 bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      {Object.values(OrderStatus).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button onClick={() => setSelectedOrder(order)} className="p-2 text-gray-400 hover:text-purple-600"><Eye className="w-4 h-4" /></button>
                    <a href={`https://wa.me/55${order.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"><MessageCircle className="w-4 h-4" /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {selectedOrder && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
           <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
              <button onClick={() => setSelectedOrder(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
              <h2 className="text-2xl font-black mb-6">Pedido de {selectedOrder.name}</h2>
              <div className="space-y-4 text-sm text-gray-700">
                 <p><span className="font-bold">Pacote:</span> {selectedOrder.package}</p>
                 <p><span className="font-bold">Tamanho:</span> {selectedOrder.size}</p>
                 <p><span className="font-bold">Endereço:</span> {selectedOrder.street}, {selectedOrder.number} - {selectedOrder.city}</p>
                 <p><span className="font-bold">Data Entrega:</span> {selectedOrder.deliveryDate}</p>
                 {selectedOrder.notes && <p className="italic text-gray-500">"{selectedOrder.notes}"</p>}
              </div>
              <button onClick={() => setSelectedOrder(null)} className="w-full mt-8 bg-purple-600 text-white font-bold py-3 rounded-xl">Fechar</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
