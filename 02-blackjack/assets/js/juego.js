/**
 * C: Clubs 
 * D: Diamonds
 * H: Hearts
 * S: Spades
 * */

let deck        = [];
let tipos       = ['C','D','H','S'];
let especiales  = ['A','J','Q','K'];

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);    
        }
    }
    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);   
}

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay más cartas';
    }
    return deck.pop();
};

const valorCarta = (carta = '') => {
    const valor = carta.substring(0, carta.length - 1);   
    return isNaN(valor) ? 
        valor === "A" ? 11 : 10 
        : valor * 1 ;
}

crearDeck();

console.log(valorCarta(pedirCarta()));

