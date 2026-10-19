// --- CONFIGURACIÓN GLOBAL ---
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxJTtF1dkIdS21iiDer0mYOoykbRKMs6yEqZlL8uxNMNVmvY6jr0dMrWbD_He7kO5GU/exec';

// Función para mostrar mensajes
function mostrar(msg, tipo) {
  const el = document.getElementById('estado');
  if (!el) return;
  el.textContent = msg;
  el.className = 'estado-' + (tipo || 'aviso');
  el.style.display = 'block';
}

// Función para conectar con Google Apps Script usando JSONP (evita bloqueos CORS)
function apiGet(paramsString) {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonp_cb_' + Math.round(100000 * Math.random());
    
    let url;
    // Si paramsString es un objeto, lo convertimos a string, si ya es string lo usamos
    if (typeof paramsString === 'string') {
      url = new URL(WEB_APP_URL + '?' + paramsString);
    } else {
      url = new URL(WEB_APP_URL);
      Object.keys(paramsString).forEach(k => url.searchParams.append(k, paramsString[k]));
    }
    
    // Agregamos el callback obligatorio para JSONP
    url.searchParams.append('callback', callbackName);
    url.searchParams.append('_t', Date.now()); // Evitar caché

    // Esta función se ejecutará cuando Google responda
    window[callbackName] = function(data) {
      delete window[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    // Inyectamos el script en el HTML
    const script = document.createElement('script');
    script.src = url.toString();
    script.onerror = () => {
      delete window[callbackName];
      document.body.removeChild(script);
      reject(new Error('Error de red al cargar el script de Google'));
    };
    
    document.body.appendChild(script);
  });
}