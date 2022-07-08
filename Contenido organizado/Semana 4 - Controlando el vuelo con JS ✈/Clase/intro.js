console.log("********VARIABLES********\n");
var numero1;
numero1 = 4;
var numero2;
numero2 = 2;
console.log("Número 1: " + numero1 + "Número 2: " + numero2);

console.log("********CADENAS********\n");
var frase1;
frase1 = "Ejemplo comillas dobles";
var frase2;
frase2 = 'Ejemplo comillas simples';
var frase3;
frase3 = `Ejemplo comillas ${numero2} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("********CONDICIONALES********\n");
console.log(numero1>numero2);
console.log(numero1<numero2);
console.log(numero1 != numero2);
console.log(numero1 == numero2);
console.log(numero1 === numero2);

console.log("********OPERADOR LÓGICO AND********\n");
console.log(true && false);

console.log("********OPERADOR LÓGICO OR********\n");
console.log(true || false);