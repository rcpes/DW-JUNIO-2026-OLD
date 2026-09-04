const input = document.querySelector('#input');
const processButton = document.querySelector('#processButton');
const output = document.querySelector('#output');

processButton.addEventListener('click', () => {
    output.textContent = input.value;
});


const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const calculateButton = document.querySelector('#calculateButton');
const result = document.querySelector('#result');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(n1.value);
    const num2 = parseFloat(n2.value);
    const sum = num1 + num2;
    result.textContent = `Sum: ${sum}`;
});