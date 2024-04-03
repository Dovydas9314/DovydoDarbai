function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('Labas 020')



function gabalas() {

    console.log('-------------------')
}

gabalas()

console.clear()


//Sukurkite funkcija blueDash kuri atspausdina 10 melynu bruksniuku ir atspausdinkit 10 kartu

function blueDash() {

    console.log('%c----------', 'color: blue' )
}


for (let i= 0; i < 10; i++){
    blueDash()
}

console.clear()

function sum(a, b) {   // a ir b yra funkcijos parametrai
    const rez = a + b
    console.log(rez)
}

sum(3, 7)  // 3 ir 7 yra funkcijos argumentai


function sandauga6(x) {
    console.log(x * 6)
    
}

sandauga6(4)
sandauga6(5)


function dalyba(x, y = 5) {
    const rez = x / y
    console.log(rez)
}

dalyba(100, 20)

dalyba(100)

dalyba(5, 4, 3, 2, 1)


console.clear()

function megaSum(...all) {
    rez = 0;
    for (let i = 0; i < all.length; i++) {
        rez += all[i];
    }
    console.log(rez);
}


megaSum(10, 10, 10, 10, 10);

console.clear();




function lastLetter(word) {
    const size = word.length;
    const last = word[size - 1];
    console.log(last);
}


lastLetter('labas');
lastLetter('kaunas');

lastLetter('abcdefg');

console.clear();

function twoWordsWithDash(w1, w2 = 'nenurodyta') {
    console.log(w1 + '-' + w2);
}

twoWordsWithDash('labas', 'rytas');

twoWordsWithDash('labas');

console.clear();


function returnSum(a, b) {
    const rez = a + b;
    return rez;
}




const s1 = returnSum(8, 5);

console.log(s1);


// 3. Parašyti funkciją, kuri gauna skaičių ir grąžina to skaičiaus kvadratą.

function kvadratu(x) {
    const rez = x * x;
    return rez;
}

const k1 = kvadratu(4);

console.log(k1);


function wt(){
    return 'labas';
    console.log('niekada nebus atspausdinta');
}

const w = wt();

console.log(w);


function wordIsLongerThan5Letters(word) {
    if (word.length > 5) {
        return true;
    }
    return false;
}

console.clear();

console.log('Aš', wordIsLongerThan5Letters('Aš'));

console.log('einu', wordIsLongerThan5Letters('einu'));

console.log('grybauti', wordIsLongerThan5Letters('grybauti'));



function multiAndSum(a, b) {
    const rezMulti = a * b;
    const rezSum = a + b;
    const rez = [rezMulti, rezSum];
    return rez; 
}


const [a, b] = multiAndSum(4, 5);

console.log(a, b);

console.clear();


function mult10(a) { // funkcija
    return a * 10;
}

function mult10(a) { // funkcija
    return a * 30;
}


const mult10f = function(a) { // anoniminė funkcija
    return a * 10;
}

// const mult10a = (a) => {
//     return a * 10;
// }

// const mult10a = (a) => a * 10;


// const mult10a = a => a * 10;
    



const mult10a = a => a * 11; // arrow funkcija



console.log(mult10f);

console.log(mult10(4));

console.log(mult10f(4), typeof mult10f);

console.log(mult10a(4), typeof mult10a);








