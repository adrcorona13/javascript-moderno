let a = 10;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date();

let dia = hoy.getDay();

console.log({dia});

if (dia === 0) {
    console.log('domingo');
} else if (dia === 1){
    console.log('lunes');
}
else if (dia === 2){
    console.log('martes');
    // ...
    // ...
    // ...
}

// sin usar if else o switch, unicamente objetos

const diasArr = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

 const diasObj = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}

console.log(diasArr[5]);
console.log(diasObj[5]);
