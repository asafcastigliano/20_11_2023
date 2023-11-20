let km = prompt("Inserisci il numero di km ceh vuoi percorrere:");
console.log("Km:", km);

let age = prompt("Inserisci l'età del passegero:");
console.log("Age:", age);

const PREZZO = 0.21;

let totale = km * PREZZO;

let sconto = 0;

if(age < 18){
    sconto = totale * 0.2;
} else if (age >= 65){
    sconto = totale * 0.4;
}

totale = (totale - sconto).toFixed(2);

console.log(totale + "€");

document.getElementById("totale").innerHTML = "Totale: " + totale + "€";