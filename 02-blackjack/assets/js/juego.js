/**
 * C: Clubs 
 * D: Diamonds
 * H: Hearts
 * S: Spades
 * */

let deck        = [];
let tipos       = ['C','D','H','S'];
let especiales  = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosComputadora = 0;


// REFERENCIAS HTML
const btnPedir = document.querySelector('#btnPedir');
const lblPuntosJugador = document.querySelectorAll('small')[0];
const lblPuntosComputadora = document.querySelectorAll('small')[1];
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#jugador-cartas');

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

const agregarCarta = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
}

const validarPuntos = () => {
    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
    }else if(puntosJugador == 21){
        console.warn("Genial!");
    }
}

crearDeck();

// EVENTOS

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    lblPuntosJugador.innerText = puntosJugador;
    agregarCarta(carta);
    validarPuntos();
})

