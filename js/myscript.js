//*Chiedo all'utente il suo nome 
//* Salvo il nome dell'utente appena inserito
const userName = prompt("Scrivi il tuo nome");

//*Chiedo il suo cognome e salvo
const userSurname = prompt("Scrivi il tuo cognome");

//*chiedo il suo colore preferito e salvo
const userColor = prompt("Scrivi il tuo colore preferito");



//*scrivo in console il risultato
console.log('userName ' + 'userSurname ' + 'userColor ' )



//*Prendo l'elemento in html con id "output" e sovrascrivo userColor nel suo interno
document.getElementById("output").innerHTML = userName  + userSurname  + userColor  + 24
