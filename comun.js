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

    if (typeof params === 'string') {
      urlStr += params;
    } else {
      urlStr += new URLSearchParams(params).toString();
    }

    urlStr += '&callback=' + callbackName + '&_t=' + Date.now();

    const script = document.createElement('script');
    let terminado = false;

    function limpiar() {
      terminado = true;
      clearTimeout(timer);
      delete window[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    const timer = setTimeout(() => {
      if (terminado) return;
      limpiar();
      reject(new Error('Google no respondió. Revisa que la implementación del Apps Script esté en acceso "Cualquier persona".'));
    }, 20000);

    window[callbackName] = function (data) {
      if (terminado) return;
      limpiar();
      resolve(data);
    };

    script.src = urlStr;
    script.onerror = () => {
      if (terminado) return;
      limpiar();
      reject(new Error('Error de red al conectar con Google.'));
    };

    document.body.appendChild(script);
  });
}