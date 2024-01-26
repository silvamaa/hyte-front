'use strict';

let lowBmi = `Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta. Sen syynä voi olla jokin pitkällinen sairaus tai laihuushäiriö eli anoreksia. Jos varsinaista sairautta ei ole, mutta painoindeksi on laskenut alle 18,5:n, pitää hakeutua lääkäriin. Jos paino muutamassa kuukaudessa on laskenut yli 20:n tasolta reilusti, on varminta mennä lääkäriin jo painoindeksin lähestyessä 19:ää.`;

let normalBmi = `Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan. Normaali painoindeksin alue on välillä 18,5-25. Jos painoindeksi on pienempi kuin 18,5 tai suurempi kuin 25, sairauksien vaara suurenee. Painoindeksiä voidaan käyttää 18 vuoden iästä lähtien.`;

let highBmi = `Kun painoindeksi ylittää 25, ollaan liikapainon puolella. Liikakilojen määrä voi vaihdella erittäin paljon, muutamasta kilosta moniin kymmeniin kiloihin. Siksi on hyödyllistä täsmentää, kuinka suuresta ylipainosta on kyse.`;


let age = 20;

let teksti = 'Moi, oon ' + age + '-vuotias.';
console.log(teksti);

let teksti2 = `Moi, oon vieläkin ${age}-vuotias`;
console.log(teksti2)


//BOM tiedot
window.console.log('Hellurei...');
console.log('...ja herkät tunteet!')

console.log(window.innerHeight);
console.log(window.innerWidth);


//Hakee ensimmäisen minkä löytää
const analysis = document.querySelector('.analysis');
console.log(analysis);
console.log(analysis.innerText);
console.log(analysis.innerHTML);


//Tietojen muokkaus
analysis.textContent = 'Tulokset';
// analysis.textContent = normalBmi;


//Hakee kaikki
const allP = document.querySelectorAll('p');
console.log(allP);

for (const p of allP) {
    console.log('P elementin korkeus');
    console.log(p.offsetHeight);
}


//Eventit
// document.addEventListener(MITÄ KUUNNELLAAN, MITÄ TEHDÄÄN)
document.addEventListener('keydown', function(e){
    // console.log(e);
    console.log(e.key);
})

const button = document.querySelector('.calculate');
button.addEventListener('click', function (evt) {

    console.log('You dared to press the Button!?');
    console.log(evt);


    //Yleensä kun UI:ssa saadaan arvo, niin se on lähtökohtaisesti STRING muotoinen
    const weight = Number(document.getElementById('weight').value);

    const height = parseInt(document.getElementById('height').value);
    console.log(typeof weight, height);

    let yht = weight + height;
    console.log(yht);


    if (!weight || !height) {
        analysis.textContent = 'Puuttuvia arvoja!';
    } else {
        bmiCalc(weight, height);
    }
});

function bmiCalc(weight, height) {

    resetFunc();

    console.log('Lasketaan BMI.');
    let bmi = (weight / ((height * height) / 10000)).toFixed(1);
    console.log(bmi);

    document.querySelector('.bmi-score').textContent = bmi;

    if(bmi < 19) {
        console.log('Alipaino');
        document.querySelector('.analysis').textContent = lowBmi;
        document.querySelector('.bmi0-19').classList.add('lowBmi');
        
    } else if (bmi > 25) {
        console.log('Ylipaino');
        document.querySelector('.analysis').textContent = highBmi;
        document.querySelector('.bmi25-30').classList.add('highBmi');

    } else {
        console.log('Normaalipaino');
        document.querySelector('.analysis').textContent = normalBmi;
        document.querySelector('.bmi19-25').classList.add('normalBmi');
    }
};


function resetFunc() {
    //Täällä kannattaa resetoida tyylit
    const lowBmiElement = document.querySelector('.bmi0-19');
    if (lowBmiElement) {
        lowBmiElement.classList.remove('lowBmi');
    }

    const highBmiElement = document.querySelector('.bmi25-30');
    if (highBmiElement) {
        highBmiElement.classList.remove('highBmi');
    }

    const normalBmiElement = document.querySelector('.bmi19-25');
    if (normalBmiElement) {
        normalBmiElement.classList.remove('normalBmi');
    }
};


// function myFunction() {
//     console.log('Tää on funkkarin sisäl!');
// }
// myFunction();