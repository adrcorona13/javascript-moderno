const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 Dolares" : "10 Dolares");

console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Strange',
    amigo? 'Thor': 'Loki',
    (()=> 'Nick Fury')()
]

console.log(amigosArr);

const nota = 100;
const grado = nota >= 95 ? 'A+':
              nota >= 95 ? 'A':
              nota >= 95 ? 'B+':
              nota >= 95 ? 'B':
              nota >= 95 ? 'C+':
              nota >= 95 ? 'C': 'D';

console.log({nota, grado})