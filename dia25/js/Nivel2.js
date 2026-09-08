// ==========================================
// PARTE 1: COPIA DE UN OBJETO USANDO SPREAD
// ==========================================
// Spread "expande" o copia las propiedades de un objeto existente
const producto = {
    nombre: 'Laptop',
    precio: 850,
    marca: 'TechBrand'
};

// Clonamos 'producto' y además le agregamos una propiedad nueva 'stock'
const productoCopia = { ...producto, stock: 15, cargador: 2};

console.log("=== PARTE 1: COPIA DE OBJETO (SPREAD) ===");
console.log("Objeto Original:", producto);
console.log("Copia modificada:", productoCopia);





// ==========================================
// PARTE 2: UNIR VARIOS ARRAYS CON SPREAD
// ==========================================
// Spread desglosa los elementos individuales dentro de los corchetes
const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Python', 'SQL'];


// Combinamos ambos arrays y agregamos un valor extra en el medio o al final
const habilidades = [...frontend, 'Git', ...backend];

console.log("\n=== PARTE 2: UNIR ARRAYS (SPREAD) ===");
console.log("Array Frontend:", frontend);
console.log("Array Backend:", backend);
console.log("Array Combinado:", habilidades);


// ==========================================
// PARTE 3: FUNCIÓN CON PARÁMETROS REST (...)
// ==========================================
// Rest agrupa todos los argumentos que le pasemos a la función en un solo array llamado 'numeros'
function sumarTodo(...numeros) {
    // Usamos 'reduce' para sumar todos los elementos agrupados en el array
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}

console.log("\n=== PARTE 3: SUMA INDEFINIDA (REST) ===");
console.log("Suma de 3 números (5 + 10 + 15):", sumarTodo(5, 10, 15));
console.log("Suma de 5 números (1 + 2 + 3 + 4 + 5):", sumarTodo(1, 2, 3, 4, 5));
console.log("Suma de 10 números (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10):", sumarTodo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 



// ==========================================
// PARTE 4: EXTRAER PARTE USANDO REST EN DESESTRUCTURACIÓN
// ==========================================

// 1. En Objetos:
const auto = {
    marcaAuto: 'Toyota',
    modelo: 'Corolla',
    color: 'Rojo',
    año: 2022
};

// Extraemos 'marcaAuto' en su propia variable y agrupamos el "resto" de propiedades en 'detalles'
const { marcaAuto, ...detalles } = auto;

console.log("\n=== PARTE 4: EXTRAER CON REST (DESESTRUCTURACIÓN) ===");
console.log("Marca extraída:", marcaAuto);
console.log("El resto de propiedades (Objeto):", detalles);


// 2. En Arrays:
const frutas = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Pera'];

// Extraemos la primera y segunda fruta, y agrupamos "las demás" en un nuevo array 'restoDeFrutas'
const [primera, segunda, ...restoDeFrutas] = frutas;

console.log("\n=== PARTE 4: EXTRAER CON En Arrays: ===");
console.log("Arrays de fruta:", frutas);
console.log("Primera fruta:", primera);
console.log("Segunda fruta:", segunda);
console.log("El resto de frutas (Array):", restoDeFrutas);
