// --- CONFIGURACIÓN GLOBAL ---
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
  url.searchParams.append('_t', Date.now()); // Evitar caché
  
  try {
    // 'redirect: follow' es VITAL para que Apps Script funcione desde GitHub
    const res = await fetch(url, { 
      method: 'GET',
      redirect: 'follow' 
    });
    
    if (!res.ok) throw new Error('Error de red: ' + res.status);
    return await res.json();
  } catch (error) {
    console.error("Fallo en la conexión con Apps Script:", error);
    throw error;
  }
}