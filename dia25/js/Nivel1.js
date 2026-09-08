// ==========================================
// PARTE 1: CREAR EL OBJETO Y SUS PROPIEDADES
// ==========================================
// Creamos la "ficha" del alumno con sus propiedades básicas
let alumno = {
    nombre: 'Lucía',
    apellido: 'García',
    edad: 22,
    curso: 'Desarrollo Web'
};

console.log("=== PARTE 1: ACCESO MEDIANTE NOTACIÓN PUNTO ===");
// Accedemos a cada propiedad usando la sintaxis de punto (.)
console.log("Nombre del alumno:", alumno.nombre);
console.log("Apellido del alumno:", alumno.apellido);
console.log("Edad del alumno:", alumno.edad);
console.log("Curso del alumno:", alumno.curso);


// ==========================================
// PARTE 2: DESESTRUCTURACIÓN (DECONSTRUCCIÓN)
// ==========================================
// La desestructuración te permite "extraer" las propiedades
// e introducirlas directamente en variables independientes.
// ¡Ojo! Las variables deben llamarse exactamente igual que las propiedades del objeto.

const { nombre, apellido, edad, curso } = alumno;

console.log("\n=== PARTE 2: TRAS DESESTRUCTURACIÓN ===");
// Ahora usamos las variables directamente sin poner "alumno."
console.log("Nombre extraído:", nombre);
console.log("Apellido extraído:", apellido);
console.log("Edad extraída:", edad);
console.log("Curso extraído:", curso);


// ==========================================
// PARTE 3: AÑADIR UN MÉTODO AL OBJETO
// ==========================================
// Un método es una función guardada como propiedad de un objeto.
// Usamos 'this' para hacer referencia a las propiedades dentro del mismo objeto.

alumno.imprimirNombreCompleto = function() {
    console.log(`Nombre completo del alumno: ${this.nombre} ${this.apellido}`);
};



console.log("\n=== PARTE 3: EJECUCIÓN DEL MÉTODO ===");
// Llamamos al método agregando paréntesis () al final
alumno.imprimirNombreCompleto();


// ==========================================
// PARTE 4: AÑADIR UN MÉTODO AL OBJETO
// Agregamos otro método para mostrar todos los datos del alumno
alumno.datosAlumno = function() {
    console.log(`Datos del alumno: ${this.nombre} ${this.apellido}, Edad: ${this.edad}, Curso: ${this.curso}`);
}
console.log("\n=== PARTE 4: EJECUCIÓN DEL MÉTODO DE DATOS ===");
alumno.datosAlumno();

