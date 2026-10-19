// --- CONFIGURACIÓN GLOBAL ---
// Pega aquí la URL de tu implementación de Apps Script (Implementar > Aplicación web)
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxJTtF1dkIdS21iiDer0mYOoykbRKMs6yEqZlL8uxNMNVmvY6jr0dMrWbD_He7kO5GU/exec';

// --- HELPERS ---

// Función para mostrar mensajes en la interfaz
function mostrar(msg, tipo) {
  const el = document.getElementById('estado');
  if (!el) return;
  el.textContent = msg;
  el.className = 'estado-' + (tipo || 'aviso');
  el.style.display = 'block';
}

// Función para hacer peticiones GET a la API de Apps Script
async function apiGet(params) {
  const url = new URL(WEB_APP_URL);
  Object.keys(params).forEach(k => url.searchParams.append(k, params[k]));
  
  // Añadimos un timestamp para evitar caché del navegador
  url.searchParams.append('_t', Date.now());
  
  const res = await fetch(url, { method: 'GET' });
  if (!res.ok) throw new Error('Error de red: ' + res.status);
  return await res.json();
}

// Función para hacer peticiones POST (opcional, si luego la necesitas)
async function apiPost(params) {
  const res = await fetch(WEB_APP_URL, {
    method: 'POST',
    body: new URLSearchParams(params)
  });
  if (!res.ok) throw new Error('Error de red: ' + res.status);
  return await res.json();
}