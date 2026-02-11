
import React, { useState } from 'react';
import { Lock, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Using a static credential fallback for demo/safety if env is missing
    if (email === 'admin@vitrine.com' && password === 'admin123') {
      localStorage.setItem('vitrine_admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Credenciais inválidas. Tente admin@vitrine.com / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1c2c] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-8 md:p-12">
        <div className="text-center mb-10">
           <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
           </div>
           <h1 className="text-3xl font-black text-gray-900">Acesso Restrito</h1>
           <p className="text-gray-500 mt-2">Painel de Gestão Vitrine 360</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold mb-6 border border-red-100">
             {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full p-4 rounded-2xl border-2 border-gray-50 focus:border-purple-400 focus:outline-none transition-all"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">Senha</label>
            <input 
              type="password" 
              required
              className="w-full p-4 rounded-2xl border-2 border-gray-50 focus:border-purple-400 focus:outline-none transition-all"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-purple-700 flex items-center justify-center space-x-2 transition-all"
          >
            <span>Entrar no Painel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
