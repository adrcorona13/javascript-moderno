const carros = ['a','b','c','d'];
console.log('While');
let i = 0;

// while(i < carros.length){
//     console.log(carros[i++]);
// }

// undefined null false

i=0;
while(carros[i]){
    if ( i === 2) {
        break;
    }
    if ( i === 0) {
        i++;
        continue;
    }
    console.log(carros[i++]);
}

console.log('Do while');
let j = 0;
do {
    console.log(carros[j++]);
} while (carros[j]);