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

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coords', personaje.coords);
console.log('Latitud', personaje.coords.lat);
console.log('No. de Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo ', personaje[x]);
console.log('Vivo ', personaje['ultima-pelicula']); //personaje.ultima-pelicula no se puede

delete personaje.edad

console.log(personaje);

const entriesPares = Object.entries(personaje);
personaje.casado = true;
console.log(entriesPares);

//bloquear objeto
Object.freeze(personaje);
personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
delete personaje.direccion
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);