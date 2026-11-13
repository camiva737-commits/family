<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>Distribuidora TAT · Menú Principal</title>
<script src="auth.js"></script>
<script src="comun.js?v=11"></script>
<link rel="stylesheet" href="tema.css">
<style>
  .menu-card {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: var(--texto);
  }

  .menu-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--acento-suave);
    color: var(--acento);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    flex-shrink: 0;
  }

  .menu-card-text h2 {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .menu-card-text p {
    font-size: 13px;
    color: var(--suave);
  }
</style>
</head>
<body>
  <div class="page-header">
    <div class="page-header-left">
      <h1 style="color: var(--acento); margin: 0;">Distribuidora TAT</h1>
      <p class="subtitulo">Almacén Central · Selecciona una opción</p>
    </div>
    <div class="page-header-right">
      <button class="icon-btn" id="btn-tema" onclick="Tema.cambiar()" title="Cambiar tema">🌙</button>
      <button class="icon-btn" onclick="Auth.cerrarSesion()" title="Cerrar sesión">🚪</button>
    </div>
  </div>

  <div style="margin-top: 24px;">
    <a href="inventario.html" class="card menu-card">
      <div class="menu-icon">📦</div>
      <div class="menu-card-text">
        <h2>Inventario</h2>
        <p>Stock y ajustes</p>
      </div>
    </a>

    <a href="entradas.html" class="card menu-card">
      <div class="menu-icon">📥</div>
      <div class="menu-card-text">
        <h2>Recepciones</h2>
        <p>Registro de mercancía nueva</p>
      </div>
    </a>

    <a href="salidas.html" class="card menu-card">
      <div class="menu-icon" style="color: var(--peligro); background: var(--peligro-bg);">📤</div>
      <div class="menu-card-text">
        <h2>Salidas / Ventas</h2>
        <p>Descontar mercancía</p>
      </div>
    </a>

    <a href="devoluciones.html" class="card menu-card">
      <div class="menu-icon" style="color: var(--warning); background: var(--warning-bg);">🔄</div>
      <div class="menu-card-text">
        <h2>Devoluciones</h2>
        <p>Gestionar productos con problemas</p>
      </div>
    </a>

    <a href="recordatorios.html" class="card menu-card">
      <div class="menu-icon" style="color: var(--info); background: var(--info-bg);">🔔</div>
      <div class="menu-card-text">
        <h2>Recordatorios</h2>
        <p>Alertas inteligentes</p>
      </div>
    </a>
  </div>

  <!-- Botones flotantes -->
  <div id="dashboard-mascota" onclick="toggleDashboard()" style="position:fixed; bottom:90px; right:20px; width:56px; height:56px; border-radius:50%; background:var(--info); color:#FFF; display:flex; align-items:center; justify-content:center; font-size:26px; cursor:pointer; box-shadow:0 6px 20px rgba(59,130,246,0.4); z-index:9998;" title="Dashboard">📊</div>

  <div id="asistente-mascota" onclick="toggleAsistente()" style="position:fixed; bottom:20px; right:20px; width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg, var(--acento), var(--acento-2)); display:flex; align-items:center; justify-content:center; font-size:28px; cursor:pointer; box-shadow:0 6px 20px rgba(242,140,0,0.4); z-index:9998; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Asistente">
    🦉
    <div id="badge-recordatorios" style="display:none; position:absolute; top:-4px; right:-4px; background:var(--peligro); color:#FFF; border-radius:50%; width:20px; height:20px; font-size:10px; font-weight:bold; align-items:center; justify-content:center; border:2px solid var(--bg);"></div>
  </div>

  <!-- Chat del asistente -->
  <div id="asistente-chat" style="display:none; position:fixed; bottom:88px; right:20px; width:340px; max-width:calc(100vw - 40px); background:var(--card); border:1px solid var(--borde); border-radius:16px; overflow:hidden; z-index:9999; box-shadow:var(--shadow-3);">
    <div style="padding:14px; background:var(--input); border-bottom:1px solid var(--borde); display:flex; justify-content:space-between; align-items:center;">
      <span style="color:var(--texto); font-weight:700; font-size:15px;">🦉 Asistente TAT</span>
      <button onclick="toggleAsistente()" style="background:none; border:none; color:var(--suave); font-size:20px; cursor:pointer;">×</button>
    </div>
    <div id="asistente-mensajes" style="padding:14px; max-height:350px; overflow-y:auto; font-size:14px; color:var(--texto); background:var(--bg);">
      <div style="background:var(--acento-suave); color:var(--primario); padding:12px; border-radius:12px; margin-bottom:8px; line-height:1.5;">
        ¡Hola! Soy tu asistente. Pregúntame:
        <br>• "¿Cuánto queda de Doritos?"
        <br>• "¿Cómo nos fue este mes?"
        <br>• "¿Qué productos están por acabarse?"
        <br>• "¿Cuánto vale el inventario?"
      </div>
    </div>
    <div style="padding:10px; border-top:1px solid var(--borde); display:flex; gap:8px; background:var(--card);">
      <input type="text" id="asistente-input" placeholder="Escribe tu pregunta..." onkeypress="if(event.key==='Enter')enviarPreguntaAsistente()" style="flex:1; padding:10px 12px; border-radius:10px; border:1px solid var(--borde); background:var(--input); color:var(--texto); font-size:14px; outline:none; margin-bottom:0;">
      <button onclick="enviarPreguntaAsistente()" style="padding:0 14px; border-radius:10px; border:none; background:var(--acento-2); color:#FFF; font-weight:bold; cursor:pointer; font-size:16px;">→</button>
    </div>
  </div>

  <!-- Modal dashboard -->
  <div id="modal-dashboard" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:10000; align-items:center; justify-content:center; padding:20px;">
    <div style="background:var(--card); border:1px solid var(--borde); border-radius:16px; width:100%; max-width:500px; max-height:90vh; overflow:hidden; display:flex; flex-direction:column; box-shadow:var(--shadow-3);">
      <div style="padding:14px; background:var(--input); border-bottom:1px solid var(--borde); display:flex; justify-content:space-between; align-items:center;">
        <span style="color:var(--texto); font-weight:700; font-size:16px;">📊 Dashboard</span>
        <button onclick="toggleDashboard()" style="background:none; border:none; color:var(--suave); font-size:22px; cursor:pointer;">×</button>
      </div>
      <div id="dashboard-contenido" style="padding:16px; overflow-y:auto; flex:1;">
        <p style="text-align:center; color:var(--suave); font-size:13px;">Cargando dashboard...</p>
      </div>
    </div>
  </div>

<script>
function toggleAsistente() {
  const chat = document.getElementById('asistente-chat');
  if (!chat) return;
  chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
  if (chat.style.display === 'block') {
    setTimeout(function() { document.getElementById('asistente-input').focus(); }, 100);
  }
}

async function enviarPreguntaAsistente() {
  const input = document.getElementById('asistente-input');
  const pregunta = input.value.trim();
  if (!pregunta) return;
  agregarMensajeAsistente(pregunta, 'usuario');
  input.value = '';
  const typing = agregarMensajeAsistente('🤔 Pensando...', 'asistente');
  try {
    const r = await apiPost({ accion: 'consultar_asistente', pregunta: pregunta }, 120);
    if (typing && typing.parentNode) typing.remove();
    if (r.ok) { agregarMensajeAsistente(r.respuesta, 'asistente'); }
    else { agregarMensajeAsistente('❌ Error: ' + r.error, 'asistente'); }
  } catch (err) {
    if (typing && typing.parentNode) typing.remove();
    agregarMensajeAsistente('❌ Error de conexión: ' + err.message, 'asistente');
  }
}

function agregarMensajeAsistente(texto, tipo) {
  const cont = document.getElementById('asistente-mensajes');
  if (!cont) return null;
  const div = document.createElement('div');
  div.style.marginBottom = '8px';
  div.style.padding = '10px';
  div.style.borderRadius = '12px';
  div.style.whiteSpace = 'pre-line';
  div.style.lineHeight = '1.5';
  if (tipo === 'usuario') {
    div.style.background = 'var(--ok)';
    div.style.color = '#FFF';
    div.style.marginLeft = '40px';
  } else {
    div.style.background = 'var(--input)';
    div.style.color = 'var(--texto)';
    div.style.marginRight = '40px';
  }
  div.textContent = texto;
  cont.appendChild(div);
  cont.scrollTop = cont.scrollHeight;
  return div;
}

function toggleDashboard() {
  const modal = document.getElementById('modal-dashboard');
  if (!modal) return;
  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'flex';
    cargarDashboard();
  } else {
    modal.style.display = 'none';
  }
}

async function cargarDashboard() {
  const cont = document.getElementById('dashboard-contenido');
  cont.innerHTML = '<p style="text-align:center; color:var(--suave); font-size:13px;">Cargando dashboard...</p>';
  try {
    const r = await apiPost({ accion: 'obtener_dashboard' }, 60);
    if (!r.ok) throw new Error(r.error);
    renderizarDashboard(r);
  } catch (err) {
    cont.innerHTML = '<p style="text-align:center; color:var(--peligro); font-size:13px;">❌ Error: ' + err.message + '</p>';
  }
}

function renderizarDashboard(datos) {
  const cont = document.getElementById('dashboard-contenido');
  
  function tarjeta(titulo, valor, color, icono) {
    return '<div style="background:var(--input); border:1px solid var(--borde); border-radius:12px; padding:12px;">' +
      '<div style="font-size:11px; color:var(--suave); margin-bottom:4px;">' + icono + ' ' + titulo + '</div>' +
      '<div style="font-size:18px; font-weight:bold; color:' + color + ';">' + valor + '</div>' +
      '</div>';
  }
  
  function formatoDinero(n) {
    return '$' + Math.round(n || 0).toLocaleString('es-CO');
  }
  
  let html = '';
  
  html += '<div class="label" style="margin-bottom:8px;">💰 VENTAS HOY</div>';
  html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">';
  html += tarjeta('Unidades', datos.ventasHoy.unidades, 'var(--ok)', '📦');
  html += tarjeta('Monto', formatoDinero(datos.ventasHoy.monto), 'var(--ok)', '💵');
  html += '</div>';
  
  if (datos.gananciasHoy) {
    html += '<div class="label" style="margin-bottom:8px;">💎 GANANCIAS HOY</div>';
    html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">';
    html += tarjeta('Ganancia', formatoDinero(datos.gananciasHoy.ganancia), '#A855F7', '💎');
    html += tarjeta('Margen', Math.round(datos.margenHoy || 0) + '%', '#A855F7', '📈');
    html += '</div>';
  }
  
  html += '<div class="label" style="margin-bottom:8px;">📊 VENTAS MES</div>';
  html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">';
  html += tarjeta('Unidades', datos.ventasMes.unidades, 'var(--acento)', '📦');
  html += tarjeta('Monto', formatoDinero(datos.ventasMes.monto), 'var(--acento)', '💵');
  html += '</div>';
  
  if (datos.gananciasMes) {
    html += '<div class="label" style="margin-bottom:8px;">💎 GANANCIAS MES</div>';
    html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">';
    html += tarjeta('Ganancia', formatoDinero(datos.gananciasMes.ganancia), '#A855F7', '💎');
    html += tarjeta('Margen', Math.round(datos.margenMes || 0) + '%', '#A855F7', '📈');
    html += '</div>';
  }
  
  html += '<div class="label" style="margin-bottom:8px;">📥 ENTRADAS</div>';
  html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">';
  html += tarjeta('Hoy', datos.entradasHoy.unidades + ' und', 'var(--info)', '📥');
  html += tarjeta('Mes', datos.entradasMes.unidades + ' und', 'var(--info)', '📦');
  html += '</div>';
  
  html += tarjeta('Valor del inventario', formatoDinero(datos.valorInventario), 'var(--ok)', '🏦');
  
  if (datos.topRentables && datos.topRentables.length > 0) {
    html += '<div style="background:var(--input); border:1px solid var(--borde); border-radius:12px; padding:12px; margin-top:12px;">';
    html += '<div class="label" style="margin-bottom:8px;">💎 Top 5 más rentables del mes</div>';
    datos.topRentables.forEach(function(t, i) {
      html += '<div style="display:flex; justify-content:space-between; padding:4px 0; color:var(--texto); font-size:13px;">' +
        '<span>' + (i+1) + '. ' + t.nombre + '</span>' +
        '<span style="color:#A855F7; font-weight:bold;">' + formatoDinero(t.ganancia) + ' <span style="font-size:11px; color:var(--suave);">(' + Math.round(t.margen) + '%)</span></span>' +
      '</div>';
    });
    html += '</div>';
  }
  
  if (datos.topHoy.length > 0) {
    html += '<div style="background:var(--input); border:1px solid var(--borde); border-radius:12px; padding:12px; margin-top:12px;">';
    html += '<div class="label" style="margin-bottom:8px;">🏆 Top ventas hoy</div>';
    datos.topHoy.forEach(function(t, i) {
      html += '<div style="display:flex; justify-content:space-between; padding:4px 0; color:var(--texto); font-size:13px;">' +
        '<span>' + (i+1) + '. ' + t.nombre + '</span>' +
        '<span style="color:var(--ok);">' + t.cantidad + ' und</span>' +
      '</div>';
    });
    html += '</div>';
  }
  
  if (datos.topMes.length > 0) {
    html += '<div style="background:var(--input); border:1px solid var(--borde); border-radius:12px; padding:12px; margin-top:12px;">';
    html += '<div class="label" style="margin-bottom:8px;">🏆 Top ventas mes</div>';
    datos.topMes.forEach(function(t, i) {
      html += '<div style="display:flex; justify-content:space-between; padding:4px 0; color:var(--texto); font-size:13px;">' +
        '<span>' + (i+1) + '. ' + t.nombre + '</span>' +
        '<span style="color:var(--acento);">' + t.cantidad + ' und</span>' +
      '</div>';
    });
    html += '</div>';
  }
  
  if (datos.porAcabarse.length > 0) {
    html += '<div style="background:var(--input); border:1px solid var(--borde); border-radius:12px; padding:12px; margin-top:12px;">';
    html += '<div class="label" style="margin-bottom:8px;">⚠️ Por acabarse</div>';
    datos.porAcabarse.forEach(function(p) {
      html += '<div style="display:flex; justify-content:space-between; padding:4px 0; color:var(--texto); font-size:13px;">' +
        '<span>' + p.nombre + '</span>' +
        '<span style="color:var(--peligro);">' + p.stock_actual + ' ' + (p.unidad_base || '') + '</span>' +
      '</div>';
    });
    html += '</div>';
  }
  
  if (datos.lotesPorVencer && datos.lotesPorVencer.length > 0) {
    html += '<div style="background:var(--peligro-bg); border:1px solid var(--peligro); border-radius:12px; padding:12px; margin-top:12px;">';
    html += '<div class="label" style="margin-bottom:8px; color:var(--peligro);">⏰ Próximos a vencer (' + datos.lotesPorVencer.length + ')</div>';
    
    datos.lotesPorVencer.slice(0, 10).forEach(function(l) {
      let color = 'var(--warning)';
      let icono = '📅';
      if (l.vencido) { color = 'var(--peligro)'; icono = '❌'; }
      else if (l.urgente) { color = 'var(--peligro)'; icono = '⚠️'; }
      
      let textoDias = '';
      if (l.vencido) textoDias = 'VENCIDO hace ' + Math.abs(l.dias_restantes) + ' días';
      else if (l.dias_restantes === 0) textoDias = 'Vence HOY';
      else if (l.dias_restantes === 1) textoDias = 'Vence mañana';
      else textoDias = 'Vence en ' + l.dias_restantes + ' días';
      
      html += '<div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--borde); font-size:12px;">' +
        '<div style="flex:1;">' +
          '<div style="color:var(--texto); font-weight:bold;">' + l.nombre + '</div>' +
          '<div style="color:var(--suave); font-size:11px;">' + l.cantidad + ' ' + l.unidad.toLowerCase() + '(s) · Lote ' + l.id_lote + '</div>' +
        '</div>' +
        '<div style="text-align:right;">' +
          '<div style="color:' + color + '; font-weight:bold; font-size:11px;">' + icono + ' ' + textoDias + '</div>' +
        '</div>' +
      '</div>';
    });
    
    if (datos.lotesPorVencer.length > 10) {
      html += '<div style="text-align:center; color:var(--suave); font-size:11px; margin-top:8px;">... y ' + (datos.lotesPorVencer.length - 10) + ' más</div>';
    }
    
    html += '</div>';
  }
  cont.innerHTML = html;
}

async function actualizarBadgeRecordatorios() {
  try {
    const r = await apiPost({ accion: 'contar_recordatorios_pendientes' }, 15);
    if (!r.ok) return;
    
    const badge = document.getElementById('badge-recordatorios');
    if (!badge) return;
    
    const total = r.total || 0;
    if (total > 0) {
      badge.textContent = total > 99 ? '99+' : total;
      badge.style.display = 'flex';
      
      if (!window._resumenMostrado) {
        window._resumenMostrado = true;
        mostrarResumenPendientes();
      }
    } else {
      badge.style.display = 'none';
    }
  } catch (e) {
    console.error('Error badge:', e);
  }
}

async function mostrarResumenPendientes() {
  const cont = document.getElementById('asistente-mensajes');
  if (!cont) return;
  
  try {
    const r = await apiPost({ accion: 'listar_recordatorios', filtros: { estado: 'pendiente' } }, 15);
    if (!r.ok) return;
    const items = r.items || [];
    if (items.length === 0) return;
    
    const porTipo = { stock_bajo: 0, vencimiento_proximo: 0, incremento_precio: 0, devolucion_pendiente: 0 };
    items.forEach(function(rec) {
      if (porTipo[rec.tipo] !== undefined) porTipo[rec.tipo]++;
    });
    
    let msg = '🔔 ¡Hola! Tienes ' + items.length + ' recordatorio(s) pendiente(s):';
    if (porTipo.stock_bajo > 0) msg += '\n• ⚠️ ' + porTipo.stock_bajo + ' producto(s) con stock bajo';
    if (porTipo.vencimiento_proximo > 0) msg += '\n• ⏰ ' + porTipo.vencimiento_proximo + ' lote(s) por vencer';
    if (porTipo.incremento_precio > 0) msg += '\n• 💸 ' + porTipo.incremento_precio + ' producto(s) subieron de precio';
    if (porTipo.devolucion_pendiente > 0) msg += '\n• 🔄 ' + porTipo.devolucion_pendiente + ' devolución(es) pendiente(s)';
    msg += '\n\nEntra a Recordatorios para más detalles.';
    
    const div = document.createElement('div');
    div.style.marginBottom = '8px';
    div.style.padding = '10px';
    div.style.borderRadius = '12px';
    div.style.background = 'var(--warning)';
    div.style.color = '#FFF';
    div.style.fontWeight = 'bold';
    div.style.whiteSpace = 'pre-line';
    div.style.lineHeight = '1.5';
    div.textContent = msg;
    cont.appendChild(div);
    cont.scrollTop = cont.scrollHeight;
  } catch (e) { console.error(e); }
}

document.addEventListener('DOMContentLoaded', function() {
  actualizarBadgeRecordatorios();
  setInterval(actualizarBadgeRecordatorios, 60000);
});
</script>
</body>
</html>