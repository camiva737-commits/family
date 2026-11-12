/**
 * auth.js
 * Lógica de sesión compartida para todas las pantallas de Distribuidora TAT.
 *
 * Uso:
 *   - En cada HTML, al inicio del <head>, incluir <script src="auth.js"></script>
 *   - Al final del <body>, llamar a Auth.inicializar() (ya lo hace solo)
 *   - Para cerrar sesión, llamar a Auth.cerrarSesion()
 */

const Auth = (function() {
  const CLAVE_TOKEN = 'tat_sesion_token';
  const CLAVE_EXPIRA = 'tat_sesion_expira';
  const CLAVE_PASSWORD = 'tat_sesion_password'; // Solo para revalidar si el token se perdió

  // Comprobar si estamos en la página de login (no redirigir si ya estamos ahí)
  function estamosEnLogin() {
    return window.location.pathname.indexOf('login.html') !== -1;
  }

  // Comprobar si hay sesión activa
  function sesionActiva() {
    try {
      const token = localStorage.getItem(CLAVE_TOKEN);
      const expira = Number(localStorage.getItem(CLAVE_EXPIRA) || 0);
      if (!token || !expira) return false;
      if (Date.now() > expira) {
        // Sesión expirada: limpiar
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

  // Guardar sesión tras login exitoso
  function guardarSesion(token, expiraEn, password) {
    try {
      localStorage.setItem(CLAVE_TOKEN, token);
      localStorage.setItem(CLAVE_EXPIRA, String(expiraEn));
      localStorage.setItem(CLAVE_PASSWORD, password);
    } catch (e) {
      console.error('No se pudo guardar la sesión:', e);
    }
  }

  // Cerrar sesión manualmente
  function cerrarSesion() {
    try {
      localStorage.removeItem(CLAVE_TOKEN);
      localStorage.removeItem(CLAVE_EXPIRA);
      localStorage.removeItem(CLAVE_PASSWORD);
    } catch (e) {}
    window.location.href = 'login.html';
  }

  // Redirigir al login si no hay sesión
  function verificarYRedirigir() {
    if (estamosEnLogin()) return true; // No hacer nada en la propia página de login
    if (!sesionActiva()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }

  // Inicializar (llamar automáticamente al cargar cualquier página)
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
  const TEMA_DEFAULT = 'claro'; // 'claro' u 'oscuro'

  // Detectar tema del sistema operativo
  function detectarSistema() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'oscuro';
    }
    return 'claro';
  }

  // Obtener el tema actual (guardado o detectado)
  function obtenerTema() {
    try {
      const guardado = localStorage.getItem(CLAVE_TEMA);
      if (guardado === 'claro' || guardado === 'oscuro') return guardado;
    } catch (e) {}
    return detectarSistema();
  }

  // Aplicar tema al HTML
  function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    actualizarBoton(tema);
  }

  // Actualizar el ícono del botón
  function actualizarBoton(tema) {
    const boton = document.getElementById('btn-tema');
    if (!boton) return;
    boton.textContent = tema === 'oscuro' ? '☀️' : '🌙';
    boton.setAttribute('title', tema === 'oscuro' ? 'Cambiar a claro' : 'Cambiar a oscuro');
  }

  // Cambiar entre claro y oscuro
  function cambiar() {
    const actual = document.documentElement.getAttribute('data-tema') || 'claro';
    const nuevo = actual === 'oscuro' ? 'claro' : 'oscuro';
    document.documentElement.setAttribute('data-tema', nuevo);
    try {
      localStorage.setItem(CLAVE_TEMA, nuevo);
    } catch (e) {}
    actualizarBoton(nuevo);
  }

  // Inicializar al cargar
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

// Ejecutar al cargar (antes de DOMContentLoaded para evitar parpadeo)
Tema.inicializar();

// Actualizar el botón cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  Tema.inicializar();
});
// Ejecutar la verificación al cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
  Auth.inicializar();
});