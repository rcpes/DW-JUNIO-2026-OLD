// ==========================================
// PARTE 1: CAMBIAR EL CONTENIDO DE UN <P>
// ==========================================
// 1. Seleccionamos los elementos del DOM por su ID
const parrafo = document.getElementById('parrafo-texto');
const btnCambiarTexto = document.getElementById('btn-cambiar-texto');

// 2. Escuchamos el evento 'click' del botón
btnCambiarTexto.addEventListener('click', function() {
    // textContent cambia el texto interno de una etiqueta
    parrafo.textContent = '🎉 ¡El texto ha sido modificado con JavaScript con éxito!';
    parrafo.style.color = '#10b981'; // Cambio opcional de estilo
});

//  otro ejercicio Manual 
// 1. Seleccionamos los elementos del DOM por su ID OTRO ejercicio
const parrafo2 = document.getElementById('parrafo-texto2');
const btnCambiarTexto2 = document.getElementById('btn-cambiar-texto2');

// 2. Escuchamos el evento 'click' del botón
btnCambiarTexto2.addEventListener('click', function() {
    // textContent cambia el texto interno de una etiqueta
    parrafo2.textContent = '🎉 ¡El texto ha sido modificado con JavaScript con éxito!';
    parrafo2.style.color = '#10b981'; // Cambio opcional de estilo
});




// ==========================================
// PARTE 2: AÑADIR UN <li> A UN <ul>
// ==========================================
const lista = document.getElementById('mi-lista');
const btnAgregarItem = document.getElementById('btn-agregar-item');
let contadorItem = 2; // Para llevar la cuenta de los items nuevos

btnAgregarItem.addEventListener('click', function() {
    // a) Creamos la etiqueta <li> en memoria
    const nuevoLi = document.createElement('li');
    
    // b) Le asignamos contenido de texto
    nuevoLi.textContent = `Nuevo Item #${contadorItem}`;
    contadorItem++;

    // c) Lo añadimos como hijo dentro de la lista <ul>
    lista.appendChild(nuevoLi);
});





// ==========================================
// PARTE 3: CAMBIAR EL COLOR AL HACER CLIC
// ==========================================
const cajaColor = document.getElementById('caja-color');
const cajaColor2 = document.getElementById('caja-color2');
cajaColor.addEventListener('click', function() {
    // Verificamos o alternamos colores usando JS
    if (this.style.backgroundColor === 'rgb(16, 185, 129)') {
        this.style.backgroundColor = '#e2e8f0'; // Gris
        this.style.color = '#333';
    } else {
        this.style.backgroundColor = '#10b981'; // Verde
        this.style.color = '#ffffff';
    }
});


cajaColor2.addEventListener('click', function() {
    // Verificamos o alternamos colores usando JS
    if (this.style.backgroundColor === 'rgb(16, 185, 129)') {
        this.style.backgroundColor = '#e2e8f0'; // Gris
        this.style.color = '#333';
    } else {
        this.style.backgroundColor = '#10b981'; // Verde
        this.style.color = '#ffffff';
    }
});


// ==========================================
// PARTE 4: ELIMINAR UN ELEMENTO DEL DOM
// ==========================================
const elementoAEliminar = document.getElementById('elemento-eliminar');
const btnEliminar = document.getElementById('btn-eliminar');

btnEliminar.addEventListener('click', function() {
    // Verificamos que el elemento exista antes de borrarlo
    if (elementoAEliminar) {
        elementoAEliminar.remove(); // .remove() elimina el nodo por completo de la página
        
        // Deshabilitamos el botón para evitar que vuelva a hacer clic
        btnEliminar.disabled = true;
        btnEliminar.textContent = 'Elemento ya eliminado';
    }
});


// ==========================================
// PARTE 5: CONTADOR INCREMENTAL
// ==========================================
const textoContador = document.getElementById('contador-numero');
const btnContar = document.getElementById('btn-contar');

// Variable estado para guardar el conteo
let totalClics = 0;

btnContar.addEventListener('click', function() {
    totalClics++; // Incrementamos en 1
    textoContador.textContent = totalClics; // Actualizamos la pantalla
});