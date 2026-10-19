// comun.js
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxJTtF1dkIdS21iiDer0mYOoykbRKMs6yEqZlL8uxNMNVmvY6jr0dMrWbD_He7kO5GU/exec';

// Muestra mensajes en el cuadro #estado (tipo: 'ok', 'error' o 'aviso')
function mostrar(texto, tipo) {
  const el = document.getElementById('estado');
  if (!el) return;
  el.className = 'estado-' + (tipo || 'aviso');
  el.textContent = texto;
  el.style.display = 'block';
}

function apiGet(params) {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonp_cb_' + Math.round(100000 * Math.random());
    let urlStr = WEB_APP_URL + '?';

    // Convertimos los parámetros a string
    if (typeof params === 'string') {
      urlStr += params;
    } else {
      urlStr += new URLSearchParams(params).toString();
    }

    // Añadimos el callback (para JSONP) y el timestamp (para evitar caché)
    urlStr += '&callback=' + callbackName + '&_t=' + Date.now();

    const script = document.createElement('script');
    let terminado = false;

    // Función para limpiar el script y el temporizador en caso de éxito o error
    function limpiar() {
      terminado = true;
      clearTimeout(timer);
      delete window[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    // Temporizador de seguridad (si Google no responde en 20s, lanza error)
    const timer = setTimeout(() => {
      if (terminado) return;
      limpiar();
      reject(new Error('Google no respondió. Revisa que la implementación del Apps Script esté en acceso "Cualquier persona".'));
    }, 20000);

    // Cuando Google responde, ejecuta esto
    window[callbackName] = function (data) {
      if (terminado) return;
      limpiar();
      resolve(data);
    };

    // Si hay un error de red (ej. sin internet o bloqueo)
    script.src = urlStr;
    script.onerror = () => {
      if (terminado) return;
      limpiar();
      reject(new Error('Error de red al conectar con Google.'));
    };

    document.body.appendChild(script);
  });
}