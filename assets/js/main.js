let plusMwst = document.getElementById('plusMwst');
let minusMwst = document.getElementById('minusMwst');
let neunzehnProzent = document.getElementById('neunzehnProzent');
let siebenProzent = document.getElementById('siebenProzent');
let bruttoodernetto = document.getElementById('bruttoodernetto');
let betrag = document.getElementById('betrag');
let resultmwst = document.getElementById('resultmwst');
let ergebnis = document.getElementById('ergebnis');
let resultergebnis = document.getElementById('resultergebnis');


function brutto() {
    if (plusMwst.checked) {
        bruttoodernetto.innerHTML = "<p class='rq'>Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span></p>"; ergebnis.innerHTML = '<p class="left4">Bruttobetrag(Endpreis)</p>';
    }
    else if (minusMwst.checked) {
        bruttoodernetto.innerHTML = "<p class='rq'>Bruttobetrag (Preis mit Mehrwertsteuer) in Euro <span>*</span></p>";
        ergebnis.innerHTML = '<p class="left5">Nettobetrag</p>';
    }
}

function berechnen() {
    if (plusMwst.checked) {
        if (neunzehnProzent.checked) {
            let resultmwst1 = Number(betrag.value) * 0.19;
            let rm1 = resultmwst1.toFixed(2);
            resultmwst.innerHTML = rm1 + "€";
            let resultbrutto1 = Number(betrag.value) * 1.19;
            let rb1 = resultbrutto1.toFixed(2);
            resultergebnis.innerHTML = rb1 + "€";
        }
        else if (siebenProzent.checked) {
            let resultmwst2 = Number(betrag.value) * 0.07;
            let rm2 = resultmwst2.toFixed(2);
            resultmwst.innerHTML = rm2 + "€";
            let resultbrutto2 = Number(betrag.value) * 1.07;
            let rb2 = resultbrutto2.toFixed(2);
            resultergebnis.innerHTML = rb2 + "€";
        }
    }

    else if (minusMwst.checked) {
        if (neunzehnProzent.checked) {
            let resultmwst3 = Number(betrag.value) - (Number(betrag.value) / 1.19);
            let rm3 = resultmwst3.toFixed(2);
            resultmwst.innerHTML = rm3 + "€";
            let resultnetto1 = Number(betrag.value) / 1.19;
            let rn1 = resultnetto1.toFixed(2);
            resultergebnis.innerHTML = rn1 + "€";
        }
        else if (siebenProzent.checked) {
            let resultmwst4 = Number(betrag.value) - (Number(betrag.value) / 1.07);
            let rm4 = resultmwst4.toFixed(2);
            resultmwst.innerHTML = rm4 + "€";
            let resultnetto2 = Number(betrag.value) / 1.07;
            let rn2 = resultnetto2.toFixed(2);
            resultergebnis.innerHTML = rn2 + "€";
        }
    }
}