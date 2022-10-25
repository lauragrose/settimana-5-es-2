var btn = document.getElementById('btn');
var spesa = Math.floor(Math.random() * 100);
var oggetti = 0;

btn.addEventListener('click', function() {

    reset();

    var budget = document.getElementById('costoIniziale').innerHTML = 1000;
    var limite = document.getElementById('costoLimitato').valueAsNumber;

    while (budget > limite) {

        var spesa = Math.floor(Math.random() * 100);

        if (spesa < budget) {
            document.getElementById('lista').innerHTML += `<li>Ammontare della spesa: € <span>${spesa}</span><br>Nuovo budget aggiornato: € <span>${budget - spesa}</span></li>`;
            budget = budget - spesa;
            oggetti++;
        }
        
        
    }

    document.getElementById('comprato').innerHTML = `Hai acquistato <span>${oggetti}</span> oggetti.`;
    document.getElementById('spesoTroppo').innerHTML = `Hai meno di <span>${limite} </span>€.`;
    
})

function reset() {
    budget = "";
    limite = "";
    oggetti = 0;

    document.getElementById("lista").innerHTML = "";
}
