import React from 'react';
import { MapPin } from 'lucide-react';

export default function OngCard({ ong, onClick }) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl p-4 shadow cursor-pointer hover:shadow-lg transition-all" style={{ padding: 18, borderLeft: '4px solid #C4700A' }}>
      <h4 className="font-bold text-gray-800">{ong.nome}</h4>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{ong.descricao}</p>
      {ong.endereco && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
          <MapPin color="#C4700A" size={16} />
          <span>{ong.endereco}</span>
        </div>
      )}
    </div>
  );
}