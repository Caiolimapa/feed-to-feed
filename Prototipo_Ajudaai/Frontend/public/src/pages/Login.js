import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [show, setShow] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  async function handleLogin() {
    setErro('');
    try {
      const res = await login(email, senha);
      if (res.sucesso) {
        localStorage.setItem('ajudaai_user', JSON.stringify(res.data));
        navigate('/home');
      } else {
        setErro(res.erro || 'Erro ao logar');
      }
    } catch (e) {
      setErro('Erro de conexão.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#F5F0E8' }}>
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-black mb-2">🧡 Ajuda aí</h1>
        <p className="text-sm text-gray-600 mb-6">Conectando corações a quem mais precisa</p>

        {/* Ilustração simples */}
        <div className="mb-6">
          <svg width="100%" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="120" rx="12" fill="#FDF3E3"/>
            <circle cx="60" cy="60" r="28" fill="#E8A84C"/>
            <circle cx="120" cy="60" r="20" fill="#C4700A"/>
            <circle cx="180" cy="60" r="14" fill="#E8A84C"/>
          </svg>
        </div>

        <div className="mb-4">
          <input value={email} onChange={e => setEmail(e.target.value)}
            placeholder="Email" className="w-full p-3 rounded-md border" />
        </div>
        <div className="mb-4 flex gap-2">
          <input value={senha} onChange={e => setSenha(e.target.value)}
            placeholder="Senha" type={show ? 'text' : 'password'}
            className="flex-1 p-3 rounded-md border" />
          <button onClick={() => setShow(s => !s)} className="px-3 rounded-md bg-gray-100">Mostrar</button>
        </div>

        {erro && <div className="text-red-600 mb-3">{erro}</div>}

        <button onClick={handleLogin}
          className="w-full py-3 rounded-xl text-white font-bold"
          style={{ background: 'linear-gradient(135deg, #D4820F, #C4700A)' }}>
          Entrar
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          <a href="#" onClick={(e)=>e.preventDefault()}>Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}
