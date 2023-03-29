const persona1 = {
    nombre: 'Pedro',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('maria', 18);
const melissa = new Persona('melisa', 35);
console.log(maria);

maria.imprimir();
melissa.imprimir();