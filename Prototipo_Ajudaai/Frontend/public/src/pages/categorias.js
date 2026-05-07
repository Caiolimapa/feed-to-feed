import React, { useEffect, useState } from 'react';
import { getOngsByCategoria, getCategorias } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import OngCard from '../components/OngCard';

export default function Categorias() {
  const { id } = useParams();
  const [ongs, setOngs] = useState([]);
  const [categoria, setCategoria] = useState({ nome: '', descricao: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    getCategorias().then(r => {
      if (r.sucesso) {
        const cat = r.data.find(c => c.id === id);
        if (cat && mounted) setCategoria(cat);
      }
    });
    getOngsByCategoria(id).then(r => {
      if (mounted && r.sucesso) setOngs(r.data);
    }).catch(()=>{}).finally(()=>setLoading(false));
    return ()=> mounted = false;
  }, [id]);

  const titulo = categoria.nome || 'Categoria';
  const subtitulo = categoria.descricao || '';

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #D4820F, #C4700A)', padding: '0 20px 32px', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '24px', background: '#F5F0E8', borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.85)', background: 'none', border: 'none', cursor: 'pointer', paddingTop: 48, paddingBottom: 8, fontSize: 14, fontWeight: 600 }}>← Voltar</button>
        <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 900 }}>{titulo}</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 4 }}>{subtitulo}</p>
      </div>

      <div className="p-4">
        {loading && <div>Carregando...</div>}
        {!loading && ongs.length === 0 && <div className="text-center text-gray-600">Nenhuma ONG nesta categoria</div>}
        {!loading && ongs.map(o => (
          <div key={o.id} className="mb-4" onClick={() => navigate('/ong/' + o.id)}>
            <OngCard ong={o} onClick={() => navigate('/ong/' + o.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}
