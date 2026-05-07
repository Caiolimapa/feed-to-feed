const API_URL = 'http://localhost:5000/api';

async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Erro ${res.status}`);
  return res.json();
}

export const getCategorias = () => fetchAPI('/categorias');
export const getOngsByCategoria = (id) => fetchAPI(`/categorias/${id}/ongs`);
export const getOngById = (id) => fetchAPI(`/ongs/${id}`);
export const login = (email, senha) =>
  fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  }).then(r => r.json());
