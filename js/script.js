// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var surnames = ["Bianchi","Neri","Rossi","Verdi","Gialli"];
console.log(surnames);
// 1. chiedi all'utente il cognome
surnames.push(prompt("Inserisci il tuo Cognome"));
function confrontaS(a,b) {
    minA = a.toLowerCase();
    minB = b.toLowerCase();
    if (minA < minB) { 
        return -1; 
    } else if (minA > minB) { 
        return 1; 
    } else { 
        return 0; 
    }
}    
surnames.sort(confrontaS);
console.log(surnames);
// 3. stampa la lista ordinata alfabeticamente
for (var i = 0; i < surnames.length; i++){
    document.getElementById("list").innerHTML += "<li>" + surnames[i] + "</li>";
    console.log((i+1) + " " + surnames[i]);
}
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova