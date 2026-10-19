// comun.js
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxJTtF1dkIdS21iiDer0mYOoykbRKMs6yEqZlL8uxNMNVmvY6jr0dMrWbD_He7kO5GU/exec';

function apiGet(params) {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonp_cb_' + Math.round(100000 * Math.random());
    let urlStr = WEB_APP_URL + '?';
    
    // Convertimos los parámetros a texto para evitar errores
    if (typeof params === 'string') {
      urlStr += params;
    } else {
      const urlParams = new URLSearchParams(params);
      urlStr += urlParams.toString();
    }
    
    urlStr += '&callback=' + callbackName + '&_t=' + Date.now();

    window[callbackName] = function(data) {
      delete window[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    const script = document.createElement('script');
    script.src = urlStr;
    script.onerror = () => {
      delete window[callbackName];
      document.body.removeChild(script);
      reject(new Error('Error de red al conectar con Google.'));
    };
    
    document.body.appendChild(script);
  });
}