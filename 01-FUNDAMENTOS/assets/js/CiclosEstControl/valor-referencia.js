let a = 10;
let b = a;

a = 30;

console.log({a, b});

let juan = {
    nombre: 'Juan'
}

let ana = { ... juan};
ana.nombre = 'Ana'

console.table({juan, ana});

const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'tony';
    return persona;
}

let peter = {
    nombre : 'peter'
}

let tony = cambiaNombre(peter)

console.table({peter, tony});

const frutas = ['Manzana','Pera', 'Piña'];

// const otrasFrutas = [...frutas];
const otrasFrutas = frutas.slice();


otrasFrutas.push('Mango')

console.table({frutas, otrasFrutas})