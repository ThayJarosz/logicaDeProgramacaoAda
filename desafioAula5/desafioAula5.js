// Solicitar ao usuário que informe peso e altura
let peso = parseFloat(prompt("Informe seu peso em kg:"));
let altura = parseFloat(prompt("Informe sua altura em metros:"));

// Calcular o IMC
let imc = peso / (altura * altura);

// Exibir o IMC
console.log("Seu IMC é: " + imc.toFixed(2));

// Determinar a faixa de IMC
if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (imc < 25) {
    console.log("Você está com peso normal.");
} else if (imc < 30) {
    console.log("Você está com sobrepeso.");
} else {
    console.log("Você está na faixa de obesidade.");
}
