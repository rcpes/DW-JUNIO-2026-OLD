// ==========================================
// NIVEL 1: Manipulación básica del DOM
// ==========================================

// Ejercicio 1.1: Añadir texto a un párrafo vacío al cargar la página
const emptyParagraph = document.querySelector('#empty');
emptyParagraph.textContent = 'Hola mundo desde JS';

// Ejercicio 1.2: Cambiar el color del texto de un párrafo al cargar la página
const blackParagraph = document.querySelector('#black');
blackParagraph.style.color = 'blue';

// Ejercicio 1.3: Cambiar el color del texto mediante botones
const changer = document.querySelector('#changer');
const changeToRed = document.querySelector('#changeToRed');
const changeToBlue = document.querySelector('#changeToBlue');

// Función auxiliar para cambiar el color del párrafo objetivo
function changeColor(color) {
    changer.style.color = color;
}

// Escuchadores de eventos para los botones Rojo y Azul
changeToRed.addEventListener('click', () => {
    changeColor('red');
});

changeToBlue.addEventListener('click', () => {
    changeColor('blue');
});


// ==========================================
// NIVEL 2: Fundamentos de JavaScript
// ==========================================

// Recreación de variables, constantes y funciones
const PI = 3.14;
let radio = 5;

// Función para calcular el área de un círculo
function calcularArea(r) {
    return PI * r * r;
}

// Ejecución y muestra por consola del resultado
const area = calcularArea(radio);
console.log(`El área del círculo con radio ${radio} es: ${area}`);


// ==========================================
// NIVEL 3: Selección y eventos del DOM
// ==========================================

// Selección del botón de alerta y asignación del evento click
const buttonAlert = document.querySelector('#alert');

buttonAlert.addEventListener('click', () => {
    alert('¡Hola! Has hecho clic en el botón de alerta.');
});