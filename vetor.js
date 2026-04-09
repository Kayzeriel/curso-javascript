var notas = [7.5, 8.0, 6.0, 7.0];

console.log("Notas: " + notas);
console.log("Primeira Nota: " + notas[0]);
console.log("Segunda Nota: " + notas[1]);
console.log("Terceira Nota: " + notas[2]);
console.log("Quarta Nota: " + notas[3]);

// percorrendo o vetor usando um loop
for(let i = 0; i < notas.length; i++) {
    console.log("nota " + (i + 1) + ": " + notas[i]);
}

//usando forEach para percorrer o vetor 
notas.forEach(obj => console.log("nota: " + obj));