//Qui scriviamo il codice JS

//let è una parola chiave che serve a dichiare delle variabili in JS
//let firstName = prompt("Inserisci il tuo nome: ") 
// prompt è una funzione che chiede un input all'utente e funziona in maniera del tutto simile a python:
// - restituisce un valore -> posso fare un'assegnazione
// - di default restituisce una string

/*
if(firstName === null){
    console.log("Non hai inserito alcun nome");

}
*/


// alert mostra un popup nella finistra; è bloccante
//alert("Benvenuto " + firstName)

// console.log() logga in console il messaggio passato come
//console.log("Benvenuto " + firstName)



/*
    Chiediamo un nome all'utente:
        - Se l'utente non inserisce il nome continuiamo a chiederlo
    
    Facciamo 7 domande all'utente
    - A ciascuna domanda l'utente può rispondere con una parola
    - Prendere in input la risposta dell'utente
    - fare un sanitize di base della risposta dell'utente
    - controllare se la risposta è quella giusta
    - in caso affermativo incrementare il numero di risposte corrette

    - in caso negativo mostrare la risposta corretta
Al termine delle sette domande mostrare con console.log
Integrare con 2 funzioni l'esercizio: 
1 - funzione per fare sanitize dell'input -> prende in input una stringa e restituisce la stringa "sanificata"
2 - funzione per calcolo percentuale -> prende in input il numero di cui vogliamo calcolare la percentuale e il valore massimo che corrisponde al 100
*/

function sanitize(Var){
    let sanificata
    if (Var!=isNaN){
        sanificata =  Var.trim().toLowerCase();
    }
    
    return sanificata
}

function percentuale(ValOtt, ValMax){
    let percentua = (ValOtt * 100)/ValMax

    return percentua
}

let ri = 0
risposteCorrette = parseInt(ri);
let firstName
do {
     firstName = prompt("Inserisci il tuo nome: ") 
} while (firstName === null);

console.log("Benvenuto " + firstName)
/*
*/
let domanda1 = prompt("Quale è la capitale d'Italia?")
let domandaN1 = sanitize(domanda1)
    if (domandaN1 === "roma"){
        risposteCorrette += 1
        console.log("La risposta è corretta.")
    }else{
        console.log("Errato. La risposta corretta era Roma")
    }


let domanda2 = prompt("Quale è il cognome del miglior professore del mondo?")
let domandaN2 = sanitize(domanda2)
if (domandaN2 === "mastrandrea"){
    risposteCorrette += 1
    console.log("La risposta è corretta.")
}else{
    console.log("Errato. La risposta corretta era Mastrandrea")
}
/*
*/

let domanda3 = prompt("Quanto fa 2+2?")
while (isNaN(domanda3)){
    console.log("Quello inserito non era un numero.")
    domanda3 = prompt("Quanto fa 2+2?")
}
let domandaN3 = parseInt(domanda3)
if (domandaN3 === 4){
    risposteCorrette += 1
    console.log("La risposta è corretta.")
}else{
    console.log("Errato. La risposta corretta era 4.")
}
/*
*/

let domanda4 = prompt("Quale è la capitale della Puglia?")
let domandaN4 = sanitize(domanda4)
if (domandaN4 === "bari"){
    risposteCorrette += 1
    console.log("La risposta è corretta.")
}else{
    console.log("Errato. La risposta corretta era Bari")
}
/*
*/

let domanda5 = prompt("Il linguaggio di progammazione piu semplice: ")
let domandaN5 = sanitize(domanda5)
if (domandaN5.trim() === "python"){
    risposteCorrette += 1
    console.log("La risposta è corretta.")
}else{
    console.log("Errato. La risposta corretta era Python.")
}
/*
*/

let domanda6 = prompt("Da quanti bit è formato un byte?")
while (isNaN(domanda6)){
    console.log("Quello inserito non era un numero.")
    domanda8 = prompt("Da quanti bit è formato un byte?")
}
let domandaN6 = parseInt(domanda6)
if (domandaN6 === 8){
    risposteCorrette += 1
    console.log("La risposta è corretta.")
}else{
    console.log("Errato. La risposta corretta era 8.")
}
/*
*/

let domanda7 = prompt("Come si chiama questa scuola?")
let domandaN7 = sanitize(domanda7)
if (domandaN7 === "panetti"){
    risposteCorrette += 1
    console.log("La risposta è corretta.")
}else{
    console.log("Errato. La risposta corretta era Panetti.")
}

let percent = percentuale(risposteCorrette, 7)
percent = parseFloat(percent)
console.log("La tua percentuale è: " + percent.toFixed(2) + "%")
switch (risposteCorrette){
    case 1:
        console.log("Sola una risposta è corretta.")
    case 2:
        console.log("Sola due risposte sono corrette.")
    case 3:
        console.log("Sola tre risposte sono corrette.")
    case 4:
        console.log("Quattro risposte sono corrette.")
    case 5:
        console.log("Cinque risposte sono corrette.")
    case 6:
        console.log("Sei risposte sono corrette.")
    case 7:
        console.log("Tutte le risposte inserite sono corrette. Ecco un biscotto:)")          
}
if (risposteCorrette===0){
    console.log("Tutte le risposte inserite sono sbagliate.")  
}
