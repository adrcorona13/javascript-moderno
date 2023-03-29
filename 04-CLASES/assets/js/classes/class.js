
class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        console.log('constructor');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    metodo1(){
        console.log('metodo 1');
    }

    metodo2(){
        this.metodo1();
        console.log('metodo 2');
    }
}

const spiderman = new Persona();
console.log(spiderman);
const ironman = new Persona('a','b','c');
console.log(ironman);
spiderman.metodo2();

