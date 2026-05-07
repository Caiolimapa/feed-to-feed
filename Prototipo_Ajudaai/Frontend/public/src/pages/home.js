import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [cats, setCats] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    getCategorias().then(r => {
      if (mounted && r.sucesso) setCats(r.data);
    }).catch(() => {}).finally(()=>setLoading(false));
    return ()=> mounted = false;
  }, []);

  const user = JSON.parse(localStorage.getItem('ajudaai_user') || '{}');

  const shown = cats.filter(c =>
    c.nome.toLowerCase().includes(q.toLowerCase()) ||
    (c.descricao || '').toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #D4820F, #C4700A)', padding: '0 20px 32px', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '24px', background: '#F5F0E8', borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
        <div style={{ paddingTop: 48, paddingBottom: 8 }}>
          <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 900 }}>Bem-vindo ao 🧡 Ajuda aí{user.nome ? ', ' + user.nome : ''}</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 4 }}>Encontre ONGs para ajudar</p>
          <div style={{ marginTop: 12 }}>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar categorias..."
              style={{ width: '100%', padding: '12px', borderRadius: 12, border: 'none', background: 'rgba(255,255,255,0.9)' }} />
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {loading && <div>Carregando...</div>}
        {!loading && shown.map(cat => (
          <div key={cat.id} onClick={() => navigate('/categoria/' + cat.id)}
            className="bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-lg"
            style={{ padding: 18 }}>
            <div style={{ fontSize: 28 }}>{cat.emoji}</div>
            <h3 className="font-bold text-gray-800 mt-2">{cat.nome}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.descricao}</p>
            <div style={{ marginTop: 10, color: '#C4700A', fontWeight: 700 }}>{cat.qtd_ongs || 0} ONGs →</div>
          </div>
        ))}
        {!loading && shown.length === 0 && <div className="col-span-2 text-center text-gray-600">Nenhuma categoria encontrada</div>}
      </div>
    </div>
  );
}
