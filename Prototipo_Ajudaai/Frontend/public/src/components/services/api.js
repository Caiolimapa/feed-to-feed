export async function getOngs() {
  const response = await fetch("http://127.0.0.1:5000/ongs");
  return response.json();
}

"conexão backend"
