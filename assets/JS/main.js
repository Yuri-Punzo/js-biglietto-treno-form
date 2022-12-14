/* Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

const generalPrice = 0.21;
const minorDisconut = (generalPrice * 20 / 100);
const elderlyDisconut = (generalPrice * 40 / 100);


function myFunction() {
    document.getElementById("ticket").style.display = "block";
    const kmDistance = document.getElementById("km_distance").value;
    const userAge = document.getElementById("user_age").value;
    const userNameSurname = document.getElementById("Name_Surname").value;    
    console.log(kmDistance);
    console.log(userAge);
    console.log(userNameSurname);
 if (userAge < 18) {
    finalPrice = kmDistance * (generalPrice - minorDisconut);
    console.log(finalPrice.toFixed(2));
} else if (userAge >= 65) {
    finalPrice = kmDistance * (generalPrice - elderlyDisconut);
    console.log(finalPrice.toFixed(2));
} else {
    finalPrice = kmDistance * generalPrice;
    console.log(finalPrice.toFixed(2));
}
document.getElementById("tratta").innerHTML = `${kmDistance} Km` 
document.getElementById("identity").innerHTML = userNameSurname
document.getElementById("prezzo_biglietto").innerHTML = `${finalPrice.toFixed(2)} €`;
}
