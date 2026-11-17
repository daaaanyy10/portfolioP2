// main.js - Portfolio de Dany Megías Maya
// Los elementos se buscan por CLASE (prefijo js-), no por id.
// Las clases js- solo sirven para el JavaScript: no tienen estilos en el CSS.

// ---------- 1. MODO CLARO / OSCURO ----------
var botonTema = document.querySelector('.js-boton-tema');
var iconoTema = document.querySelector('.js-icono-tema');
var paginaHtml = document.documentElement;

function ponerTema(tema) {
  paginaHtml.setAttribute('data-bs-theme', tema);
  if (tema === 'dark') {
    botonTema.setAttribute('aria-pressed', 'true');
    iconoTema.className = 'bi bi-sun-fill';
  } else {
    botonTema.setAttribute('aria-pressed', 'false');
    iconoTema.className = 'bi bi-moon-stars-fill';
  }
}

// Al cargar la página miro si el usuario ya había elegido un tema
var temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'dark') {
  ponerTema('dark');
}

botonTema.addEventListener('click', function () {
  var temaActual = paginaHtml.getAttribute('data-bs-theme');
  var temaNuevo = temaActual === 'dark' ? 'light' : 'dark';
  ponerTema(temaNuevo);
  localStorage.setItem('tema', temaNuevo);
});

// ---------- 2. MODAL CON EL DETALLE DEL PROYECTO ----------
var modalProyecto = document.querySelector('.js-modal-proyecto');

modalProyecto.addEventListener('show.bs.modal', function (evento) {
  // El botón que abre el modal trae los datos en los atributos data-
  var boton = evento.relatedTarget;
  modalProyecto.querySelector('.js-modal-titulo').textContent = boton.getAttribute('data-titulo');
  modalProyecto.querySelector('.js-modal-descripcion').textContent = boton.getAttribute('data-descripcion');
  modalProyecto.querySelector('.js-modal-tecnologias').textContent = boton.getAttribute('data-tecnologias');
});

// ---------- 3. VALIDACIÓN DEL FORMULARIO ----------
var formulario = document.querySelector('.js-formulario');
var respuesta = document.querySelector('.js-respuesta');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  respuesta.innerHTML = '';

  if (!formulario.checkValidity()) {
    // Hay errores: Bootstrap enseña los mensajes
    formulario.classList.add('was-validated');
    return;
  }

  // Todo correcto (aquí no se envía a ningún servidor, es solo una demo)
  formulario.reset();
  formulario.classList.remove('was-validated');
  respuesta.innerHTML = '<div class="alert alert-success mb-0">Mensaje enviado correctamente. Te responderé lo antes posible.</div>';
});
