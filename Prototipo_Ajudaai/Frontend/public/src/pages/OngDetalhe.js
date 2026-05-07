import React, { useEffect, useState } from 'react';
import { getOngById } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Heart, Phone, Mail, Globe, MapPin } from 'lucide-react';

export default function OngDetalhe() {
  const { id } = useParams();
  const [ong, setOng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    getOngById(id).then(r => {
      if (r.sucesso && mounted) setOng(r.data);
    }).catch(()=>{}).finally(()=>setLoading(false));
    return ()=> mounted = false;
  }, [id]);

  async function copyPix() {
    if (!ong || !ong.pix) return;
    try {
      await navigator.clipboard.writeText(ong.pix);
      setCopied(true);
      setTimeout(()=>setCopied(false), 2000);
    } catch (e) {}
  }

  if (loading) return <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>Carregando...</div>;
  if (!ong) return <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>ONG não encontrada</div>;

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #D4820F, #C4700A)', padding: '0 20px 32px', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '24px', background: '#F5F0E8', borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.85)', background: 'none', border: 'none', cursor: 'pointer', paddingTop: 48, paddingBottom: 8, fontSize: 14, fontWeight: 600 }}>← Voltar</button>
        <h1 style={{ color: '#fff', fontSize: 24, fontWeight: 900 }}>{ong.nome}</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 4 }}>📍 {ong.endereco}</p>
      </div>

      <div className="p-4 space-y-4">
        <section className="bg-white p-4 rounded-2xl shadow">
          <div className="flex items-center gap-2 text-orange-600"><Heart color="#C4700A" /> <h3 className="font-bold">Sobre a ONG</h3></div>
          <p className="text-gray-700 mt-2">{ong.descricao}</p>
        </section>

        <section className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-bold text-gray-800">O que precisamos</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            { (ong.necessidades || []).map((n, idx) => (
              <span key={idx} style={{ background: '#E8A84C', color: '#C4700A', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 13 }}>{n}</span>
            )) }
          </div>
        </section>

        <section style={{ background: '#FDF3E3', border: '1px solid #C4700A' }} className="p-4 rounded-2xl">
          <h3 className="font-bold text-gray-800">Como Doar</h3>
          <p className="mt-2 text-gray-700">{ong.como_doar}</p>

          <div className="mt-3 p-3 bg-white rounded-md flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">PIX</div>
              <div className="font-mono font-bold">{ong.pix}</div>
              {copied && <div className="text-sm text-green-600">PIX copiado! 📋</div>}
            </div>
            <button onClick={copyPix} className="px-3 py-2 rounded-md" style={{ background: '#C4700A', color: '#fff' }}>Copiar</button>
          </div>
        </section>

        <section className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-bold text-gray-800">Contato</h3>
          <div className="mt-2 space-y-2">
            {ong.telefone && <div className="flex items-center gap-2"><Phone color="#C4700A" /> <span>{ong.telefone}</span></div>}
            {ong.email && <div className="flex items-center gap-2"><Mail color="#C4700A" /> <span>{ong.email}</span></div>}
            {ong.site && <div className="flex items-center gap-2"><Globe color="#C4700A" /> <span>{ong.site}</span></div>}
          </div>
        </section>
      </div>
    </div>
  );
}
