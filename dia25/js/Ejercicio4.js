// ==========================================
// Ejercicio 1: CAMBIAR EL CONTENIDO DE UN <P>
// ==========================================
// 1. Seleccionamos los elementos del DOM por su ID parrafo y botón
const parrafo = document.getElementById('parrafo-texto');
const totonCambiarTexto = document.getElementById('boton-cambiar-texto');


// 2. Escuchamos el evento 'click' del botón
totonCambiarTexto.addEventListener('click', function() {
    // textContent cambia el texto interno de una etiqueta
    parrafo.textContent = '🎉 ¡El texto ha sido modificado con JavaScript con éxito!';
    parrafo.style.color = '#10b981'; // Cambio opcional de estilo
});







