function saludar(){
    console.log('Hola Mundo');
}

const saludar2 = function() {
    console.log('Hola Mundo 2');
}

function saludar3(nombre){
    console.log(`Hola ${nombre}`);
}

const saludar4 = function(nombre) {
    console.log(`Hola ${nombre}`);
}

function saludar5(nombre){
    console.log(arguments);
    console.log(`Hola ${nombre}`);
}

saludar()
saludar2();
saludar3('Adrian');
saludar4('Adrian');
saludar5('Adrian', 40, false, 'asd')


const saludarFlecha = (nombre) => {
    console.log(`Hola ${nombre}`);
    return 100;
}

const valorRetorno = saludarFlecha('flecha');
console.log(valorRetorno);


function sumar(a,b){
    return a+b;
}

console.log(sumar(1,2));

const sumarFlecha = (a,b) => a + b;

console.log(sumarFlecha(1,2));

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());