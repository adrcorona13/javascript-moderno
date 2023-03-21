const vocales = ["a", "e", "i", "o", "u"];

console.warn("for tradicional");

for (let index = 0; index < vocales.length; index++) {
  console.log(vocales[index]);
}

console.warn("for in");

for (const i in vocales) {
  console.log(vocales[i]);
}

console.warn("for of");

for (const vocal of vocales) {
    console.log(vocal);
}