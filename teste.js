// Usando 'const' para um valor que não muda.
const nomeAluno = "Maria";
const notaMinima = 7;

console.log(nomeAluno); // Exibe "Maria"

// Usando 'let' para um valor que pode ser alterado.
let pontuacao = 100;
console.log(pontuacao); // Exibe 100

pontuacao = 120; // O valor foi atualizado.
console.log(pontuacao); // Exibe 120
const frase = "JavaScript é legal"; // String
const idade = 17;                   // Number
const estaAprovado = true;          // Boolean
let sobrenome = null;               // null (valor definido como nulo)
let cidade;                         // undefined (valor ainda não atribuído)

console.log(typeof frase);        // "string"
console.log(typeof idade);        // "number"
console.log(typeof estaAprovado); // "boolean"
const mediaFinal = 8.5;
const presencaMinima = 75;
const presencaAluno = 80;

if (mediaFinal >= 7 && presencaAluno >= presencaMinima) {
    console.log("Aluno aprovado!");
} else if (mediaFinal >= 5 && presencaAluno >= presencaMinima) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}
// Declaração de uma função que calcula a área de um retângulo
function calcularArea(largura, altura) {
  const area = largura * altura;
  return area; // Retorna o resultado do cálculo
}

// Chamando (invocando) a função e guardando o resultado
const areaDaSala = calcularArea(10, 5);
console.log("A área da sala é: " + areaDaSala); // Exibe "A área da sala é: 50"

// Outro exemplo, sem retorno, apenas executa uma ação
function saudar(nome) {
  console.log("Olá, " + nome + "! Bem-vindo(a).");
}

saudar("Carlos"); // Exibe "Olá, Carlos! Bem-vindo(a)."
// Criando um array de notas
const notas = [9.5, 7.0, 8.2, 6.5];

// Acessando o primeiro item (índice 0)
console.log("Primeira nota: " + notas[0]); // Exibe 9.5

// Acessando o terceiro item (índice 2)
console.log("Terceira nota: " + notas[2]); // Exibe 8.2

// Alterando um valor
notas[3] = 7.5;
console.log("Notas atualizadas: " + notas); // Exibe [9.5, 7, 8.2, 7.5]

// Adicionando um item no final do array
notas.push(10);
console.log("Array com nova nota: " + notas); // Exibe [9.5, 7, 8.2, 7.5, 10]

// Verificando o tamanho do array
console.log("Total de notas: " + notas.length); // Exibe 5

// Percorrendo o array com um loop 'for'
console.log("--- Lista de todas as notas ---");
for (let i = 0; i < notas.length; i++) {
  console.log("Nota " + (i + 1) + ": " + notas[i]);
}
// Função recursiva para calcular o fatorial
function fatorial(n) {
  // Caso Base: Se n for 0 ou 1, o fatorial é 1. A recursão para aqui.
  if (n === 0 || n === 1) {
    return 1;
  }
  // Passo Recursivo: n multiplicado pelo fatorial de (n - 1).
  else {
    return n * fatorial(n - 1);
  }
}

const numero = 5;
const resultado = fatorial(numero);
console.log("O fatorial de " + numero + " é " + resultado); // Exibe 120

/*
Como o computador calcula fatorial(5)?
1. fatorial(5) retorna 5 * fatorial(4)
2. fatorial(4) retorna 4 * fatorial(3)
3. fatorial(3) retorna 3 * fatorial(2)
4. fatorial(2) retorna 2 * fatorial(1)
5. fatorial(1) retorna 1 (Caso Base!)
Agora, ele resolve o caminho de volta:
- O resultado de fatorial(2) é 2 * 1 = 2
- O resultado de fatorial(3) é 3 * 2 = 6
- O resultado de fatorial(4) é 4 * 6 = 24
- O resultado de fatorial(5) é 5 * 24 = 120
*/
// É uma boa prática usar 'const' para variáveis que não terão seu valor alterado.
// 'var' é uma forma mais antiga de declarar variáveis e geralmente é evitada no código moderno.
const nome = 'Adriano';

console.log(nome);

// Usando 'const' pois os valores não são reatribuídos.
const numero1 = 1;
const outroNumero = 56;

console.log(numero1 + outroNumero);

// Aqui, os números são declarados como strings (texto).
const numeroComoString = '1';
const outroNumeroComoString = '56';

// O operador '+' com strings realiza uma concatenação, não uma soma matemática.
console.log(numeroComoString + outroNumeroComoString); // O resultado será '156'

// O operador '==' (igualdade solta) converte os tipos antes de comparar.
// Aqui, a string '1' é convertida para o número 1, então a condição é verdadeira.
if (numero1 == numeroComoString){
    console.log('Com ==, os números são considerados iguais (após conversão de tipo).');
}

// O operador '===' (igualdade estrita) não converte os tipos.
// Ele compara tanto o valor quanto o tipo. Como um é 'number' e o outro é 'string', eles são diferentes.
// Esta é a forma recomendada de fazer comparações para evitar bugs.
if (numero1 === numeroComoString){
    console.log('Com ===, os números são iguais.');
} else {
    console.log('Com ===, os números não são iguais (porque os tipos são diferentes).');
}