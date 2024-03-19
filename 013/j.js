console.log("Labas ");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Konsoleje isspausdinti zodi Labas atsitiktini nuo 5 iki 10 kieki kartu

let what1 = rand(5, 10);
for (let i = 0; i < what1; i++) {
  console.log("Labas");
}

// 2. Patobulini 1 uzdavinio koda, kad rezultatas butu vinea eilute su visais Labas zodziais

let what2 = rand(5, 10);
let all = "";

for (let i = 0; i < what2; i++) {
  all = all + "Labas ";
}

console.log(all);

// 3. Konsoleje isspausdinti atsitiktini skaiciu intervale nuo 0 iki 4

let what3 = rand(0, 4);
console.log(what3);

// 4. Konsoleje 5 kartus isspausdinti atsitiktini skaiciu intervale nuo 0 iki 4

for (let i = 0; i < 5; i++) {
  console.log(rand(0, 4));
}

// 5. Konsoleje 7 kartus isspausdinti atsitiktini skaiciu intervale nuo 0 iki 4

for (let i = 0; i < 7; i++) {
  console.log(rand(0, 4));
}

// 6. Konsoleje 5 arba 7 kartus isspausdinkite atsitiktini skaiciu intervale nuo 0 iki 4

let what6 = rand(0, 1) ? 5 : 7;
for (let i = 0; i < what6; i++) {
  console.log(rand(0, 4));
}

// 7. Konsoleje 5 kartus isspausdinti atsitiktini skaiciu intervale nuo 0 iki 4. Ir paskaiciuoti ju suma

console.clear();
let sum7 = 0;

for (let i = 0; i < 5; i++) {
  let sk = rand(0, 4);
  console.log(sk);
  sum7 += sk;
}
console.log('Suma' , sum7)





let sviesoforas = rand(0, 2);
let spalva = sviesoforas === 0 ? 'raudona' : sviesoforas === 1 ? 'geltona' : 'zalia';
 
console.log('Sviesoforas:', spalva);
 
if (spalva === 'raudona') {
    console.log('Stovime');
} else if (spalva === 'geltona') {
    console.log('Ruošiamės');
} else {
    console.log('Eik!');
}

switch (spalva) {
    case 'raudona':
        console.log('Stovime');
        break;
    case 'geltona':
        console.log('Ruošiamės');
        break;
    default:
        console.log('Eik!');
}


console.clear()

let box = rand(1, 4)
let size
if(box ===1) {
  size = 'S'
}
if(box ===2) {
  size = 'M'
}
if(box ===3) {
  size = 'L'
}
if(box ===4) {
  size = 'XL'
}
console.log('BOX' , size)

if (size === 'S') {
  console.log('Tikrininame S')
}
if (size === 'M' || size === 'S') {
  console.log('Tikrininame M')
}
if (size === 'L' || size === 'M' || size === 'S') {
  console.log('Tikrininame L')
}
if (size === 'XL' || size === 'L' || size === 'M' || size === 'S') {
  console.log('Tikrininame XL')
}

switch (size) {
  case 'S':
       console.log('Tikriname S')
  case 'M':
       console.log('Tikriname M')
  case 'L':
       console.log('Tikriname L')
  case 'XL':
       console.log('Tikriname XL')
}