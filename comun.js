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

// Consultas ligeras (GET con JSONP)
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

// Envíos pesados (fotos, facturas): POST con el cuerpo en JSON.
// Content-Type text/plain evita el "preflight" de CORS que Apps Script no soporta.
async function apiPost(objeto, segundos) {
  const controlador = new AbortController();
  const timer = setTimeout(() => controlador.abort(), (segundos || 60) * 1000);
  try {
    const resp = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(objeto),
      signal: controlador.signal
    });
    const texto = await resp.text();
    try {
      return JSON.parse(texto);
    } catch (e) {
      throw new Error('Respuesta inesperada de Google (¿falta la nueva implementación del script?)');
    }
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('La IA tardó demasiado. Intenta con otra foto.');
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

// Reduce la foto antes de enviarla (más rápido y cabe en el POST)
function comprimirImagen(file, anchoMax, calidad) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = function () {
      const escala = Math.min(1, anchoMax / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * escala);
      canvas.height = Math.round(img.height * escala);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', calidad));
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      reject(new Error('No se pudo abrir la imagen.'));
    };
    img.src = url;
  });
}