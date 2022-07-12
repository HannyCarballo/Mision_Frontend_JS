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

console.log("********ARREGLOS********\n");
let listaNum = [2,3,4,5,6,7];
console.log(listaNum[0]);

listaNum.push(8);
listaNum.push(9);
console.log(listaNum);

let listaPal = ["Explorer","MissionCommander","innovaccion","Launch X"];
console.log(listaPal);

let name = "Hanny";
console.log(name[2]);
console.log(name.length);

console.log("********OBJETOS********\n");
let explorer = {
    nombre: "Nombre del explorer",
    email:"email@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Pasteleria", "Taqueria", "Vacunacion"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}
console.log(explorer);
console.log(explorer.email);