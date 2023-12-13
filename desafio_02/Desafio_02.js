var nome = prompt("Digite o seu nome: ");
var altura = prompt("Digite a sua altura em cm: ");
var peso = prompt("Digite seu peso: ");

altura = parseFloat(altura);
peso = parseFloat(peso);

var altura_metros = altura / 100;

var calculo = peso / (altura_metros * altura_metros);

var classificado = "";

if (calculo < 16) {
  classificado = "Peso muito baixo, muito grave!";
} else if (calculo >= 16 && calculo < 16.99) {
  classificado = "Peso baixo, grave!";
} else if (calculo >= 17 && calculo <= 18.49) {
  classificado = "Peso Baixo.";
} else if (calculo >= 18.5 && calculo <= 24.99) {
  classificado = "Peso normal.";
} else if (calculo >= 25 && calculo <= 29.99) {
  classificado = "Sobrepeso.";
} else if (calculo >= 30 && calculo <= 34.99) {
  classificado = "Obesidade grau 1.";
} else if (calculo >= 35 && calculo <= 39.99) {
  classificado = "Obesidade grau 2.";
} else {
  classificado = "Obesidade grau 3.";
}

document.write(
  "Olá " +
    nome +
    " seu índice de massa corporal é " +
    calculo.toFixed(2) +
    ", sendo classificado como: " +
    classificado
);
