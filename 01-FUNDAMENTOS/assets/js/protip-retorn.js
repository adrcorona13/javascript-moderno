// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona('adrian', 'pineda');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(123,3,123,123)


// const imprimeArgumentos2 = (edad, ...args) => console.log(edad, args);
const imprimeArgumentos2 = (edad, ...args) => args;
// const argumentos = imprimeArgumentos2(1,2,3,4,5,6);
const [a,b,c,d] = imprimeArgumentos2(1,2,3,4);
console.log({a,b,c,d});

const {apellido: otraVariable} = crearPersona('adrian','pineda');
console.log({otraVariable});


let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34,
        lng: -118
    },
    trajes: [
        'Mark I','Mark V','Hulkbuster'
    ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu'
    },
    'ultima-pelicula': 'EndGame'
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad, otraPropiedad, defaultVal = 0 }) => {

    otraPropiedad = otraPropiedad | 0;

    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(otraPropiedad);
    console.log(defaultVal);
}

imprimePropiedades(personaje);