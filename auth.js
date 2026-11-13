/**
 * auth.js
 * Lógica de sesión + sistema de temas para Distribuidora TAT.
 */

const Auth = (function() {
  const CLAVE_TOKEN = 'tat_sesion_token';
  const CLAVE_EXPIRA = 'tat_sesion_expira';
  const CLAVE_PASSWORD = 'tat_sesion_password';

  function estamosEnLogin() {
    return window.location.pathname.indexOf('login.html') !== -1;
  }

  function sesionActiva() {
    try {
      const token = localStorage.getItem(CLAVE_TOKEN);
      const expira = Number(localStorage.getItem(CLAVE_EXPIRA) || 0);
      if (!token || !expira) return false;
      if (Date.now() > expira) {
        localStorage.removeItem(CLAVE_TOKEN);
        localStorage.removeItem(CLAVE_EXPIRA);
        localStorage.removeItem(CLAVE_PASSWORD);
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  function guardarSesion(token, expiraEn, password) {
    try {
      localStorage.setItem(CLAVE_TOKEN, token);
      localStorage.setItem(CLAVE_EXPIRA, String(expiraEn));
      localStorage.setItem(CLAVE_PASSWORD, password);
    } catch (e) {
      console.error('No se pudo guardar la sesión:', e);
    }
  }

  function cerrarSesion() {
    try {
      localStorage.removeItem(CLAVE_TOKEN);
      localStorage.removeItem(CLAVE_EXPIRA);
      localStorage.removeItem(CLAVE_PASSWORD);
    } catch (e) {}
    window.location.href = 'login.html';
  }

  function verificarYRedirigir() {
    if (estamosEnLogin()) return true;
    if (!sesionActiva()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }

  function inicializar() {
    verificarYRedirigir();
  }

  return {
    sesionActiva: sesionActiva,
    guardarSesion: guardarSesion,
    cerrarSesion: cerrarSesion,
    verificarYRedirigir: verificarYRedirigir,
    inicializar: inicializar
  };
})();

// ============================================
// SISTEMA DE TEMAS (CLARO / OSCURO)
// ============================================
const Tema = (function() {
  const CLAVE_TEMA = 'tat_tema';

  function detectarSistema() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'oscuro';
    }
    return 'claro';
  }

  function obtenerTema() {
    try {
      const guardado = localStorage.getItem(CLAVE_TEMA);
      if (guardado === 'claro' || guardado === 'oscuro') return guardado;
    } catch (e) {}
    return detectarSistema();
  }

  function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    actualizarBoton(tema);
  }

  function actualizarBoton(tema) {
    const boton = document.getElementById('btn-tema');
    if (!boton) return;
    boton.textContent = tema === 'oscuro' ? '☀️' : '🌙';
    boton.setAttribute('title', tema === 'oscuro' ? 'Cambiar a claro' : 'Cambiar a oscuro');
  }

  function cambiar() {
    const actual = document.documentElement.getAttribute('data-tema') || 'claro';
    const nuevo = actual === 'oscuro' ? 'claro' : 'oscuro';
    document.documentElement.setAttribute('data-tema', nuevo);
    try {
      localStorage.setItem(CLAVE_TEMA, nuevo);
    } catch (e) {}
    actualizarBoton(nuevo);
  }

  function inicializar() {
    const tema = obtenerTema();
    aplicarTema(tema);
  }

  return {
    inicializar: inicializar,
    cambiar: cambiar,
    obtenerTema: obtenerTema
  };
})();

// Aplicar tema inmediatamente (antes de DOMContentLoaded para evitar parpadeo)
Tema.inicializar();

// Al cargar el DOM, verificar auth + actualizar botón
document.addEventListener('DOMContentLoaded', function() {
  Tema.inicializar();
  Auth.inicializar();
});