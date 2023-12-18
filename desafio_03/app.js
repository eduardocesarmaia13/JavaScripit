function adicao(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));
var operacao = prompt("(1)Adição, (2)Subtração, (3)Divisão, (4)Multiplicação");

if (operacao == 1) {
  document.write(num1 + " + " + num2 + " = " + adicao(num1, num2));
} else if (operacao == 2) {
  document.write(num1 + " - " + num2 + " = " + subtracao(num1, num2));
} else if (operacao == 3) {
  document.write(num1 + " / " + num2 + " = " + divisao(num1, num2));
} else {
  document.write(num1 + " x " + num2 + " = " + multiplicacao(num1, num2));
}
