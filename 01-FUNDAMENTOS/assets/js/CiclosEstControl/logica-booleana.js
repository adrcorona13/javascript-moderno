const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('NOT');
console.log(!true);
console.log(!false);
console.log(!regresaTrue);

console.warn('AND');
console.log(true&&true);
console.log(true&&!false);
console.log(regresaFalse()&&regresaTrue());
console.log(regresaTrue()&&regresaFalse());

console.warn('OR');
console.log(true||true);
console.log(true||false);
console.log(regresaFalse()||regresaTrue());
console.log(regresaTrue()||regresaFalse());

