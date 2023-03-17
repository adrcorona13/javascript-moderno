let juegos = [
    'Zelda',
    'Mario',
    'Metroid',
    'Chrono',
]

console.log('Largo', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.push('F-Zero');

juegos.unshift('Fire Emblem');

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

console.log(juegos);
let pos = 1;
juegos.splice(pos, 1);
console.log(juegos);


let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);
metroidIndex = juegos.indexOf('metroid');
console.log(metroidIndex);