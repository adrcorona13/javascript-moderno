
class Persona {

    nombre  = '';
    codigo  = '';
    frase   = '';
    comida  = '';
    
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        console.log('constructor');

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.codigo} es ${this.comida}`;
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
const ironman = new Persona('a','b','c');
console.log(ironman);
spiderman.metodo2();

spiderman.setComidaFavorita = 'pastel';
spiderman.getComidaFavorita;
console.log(spiderman.getComidaFavorita);