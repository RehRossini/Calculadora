// Cálculo da área do Triângulo
function areaTriangulo() {
  const base = prompt("Informe a base do triângulo: ");
  const altura = prompt("Informe a altura do triângulo: ");
  return (base * altura) / 2;
}

// Cálculo da área do Retângulo
function areaRetangulo() {
  const base = prompt("Informe a base do retângulo: ");
  const altura = prompt("Informe a altura do retângulo: ");
  return base * altura;
}

// Cálculo da área do Quadrado
function areaQuadrado() {
  const lado = prompt("Informe o lado do quadrado: ");
  return lado * lado;
}

// Cálculo área do Trapézio
// Para evitar que o resultado concatene, foi usado o parseFLoat para informar que o valor informado no prompt é um número de
function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do Trapézio: "));
  const baseMenor = parseFloat(prompt("Informe a base menor do Trapézio: "));
  const altura = prompt("Informe a altura do Trapézio: ");
  return ((baseMaior + baseMenor) * altura) / 2;
}

// Cálculo área do Círculo
function areaCirculo() {
  const raio = prompt("Informe o raio do Círculo: ");
  return 3.13 * raio * raio;
}

// Função para o Menu
function menu() {
  return prompt(
    "Calculadora de área geométrica: \n" +
      "1. Calcular a área do triângulo: \n" +
      "2. Calcular a área do retângulo: \n" +
      "3. Calcular a área do quadrados: \n" +
      "4. Calcular a área do trapézio: \n" +
      "5. Calcular a área do círculo: \n" +
      "6. Sair do programa:"
  );
}

// Função principal com laço de repetição para o Menu
function executar() {
  let opcao = "";

  do {
    opcao = menu();
    let resultadoFinal;

    // Seletor de opções
    switch (opcao) {
      // Valor de resultado triangulo
      case "1":
        resultadoFinal = areaTriangulo();
        break;

      // Valor de resultado retangulo
      case "2":
        resultadoFinal = areaRetangulo();
        break;

      // Valor de resultado quadrado
      case "3":
        resultadoFinal = areaQuadrado();
        break;

      // Valor de resultado trapezio
      case "4":
        resultadoFinal = areaTrapezio();
        break;

      // Valor de resultado círculo
      case "5":
        resultadoFinal = areaCirculo();
        break;

      // Sair
      case "6":
        alert("Programa encerrado!");
        break;

      // Opção inválida
      default:
        alert("Opção inválida!");
    }

    if (resultadoFinal) {
      alert("Resultado: " + resultadoFinal);
    }
  } while (opcao !== "6");
}

executar();
