// --- CONFIGURACIÓN GLOBAL ---
const WEB_APP_URL = 'https://script.google.com/macros/library/d/17yh_8hy8yO4NGQGy1Qx48hIIDrkkv7qezXTY1-3-dkOIGgqqbHQw6H-N/7'
// Función para mostrar mensajes
function mostrar(msg, tipo) {
  const el = document.getElementById('estado');
  if (!el) return;
  el.textContent = msg;
  el.className = 'estado-' + (tipo || 'aviso');
  el.style.display = 'block';
}

// EL TRUCO DE JSONP: Inyecta un script en la página para saltarse el CORS
function apiGet(params) {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    const url = new URL(WEB_APP_URL);
    
    // Agregamos los parámetros
    Object.keys(params).forEach(k => url.searchParams.append(k, params[k]));
    url.searchParams.append('callback', callbackName);
    url.searchParams.append('_t', Date.now());

    // Función global que recibirá la respuesta
    window[callbackName] = function(data) {
      delete window[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

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