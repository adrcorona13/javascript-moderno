console.warn('Asignacioens');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'HolaMundo'; // HolaMundo
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';

console.log({a1,a2, a3, a4});