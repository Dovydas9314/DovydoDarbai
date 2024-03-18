console.log("Labas Rytas");
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("--------------3--------------"); //Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log().

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);

let argaunasi = a + b > c && a + c > b && b + c > a;

console.log(argaunasi ? "Gaunasi" : "Nesigauna");

console.log("--------------4--------------"); //Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems
//reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()

let A = rand(0, 2);
let B = rand(0, 2);
let C = rand(0, 2);
let D = rand(0, 2);
console.log(A, B, C, D);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;
if (A === 2) {
  dvejetai++;
}
if (B === 2) {
  dvejetai++;
}
if (C === 2) {
  dvejetai++;
}
if (D === 2) {
  dvejetai++;
}

let suma = A + B + C + D;
vienetai = suma - dvejetai * 2;
nuliai = 4 - vienetai - dvejetai;

console.log("Nuliu", nuliai);
console.log("Vienetu", vienetai);
console.log("Dvejetu", dvejetai);

let PetroMetai = 97;

let gauna = PetroMetai >= 99 ? "gauna" : "neduoda";
let gauna2;
if (PetroMetai >= 99) {
  gauna2 = "gauna";
} else {
  gauna2 = "neduoda";
}

console.log(gauna);
console.log(gauna2);


console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

for (let i = 0; i <= 5; i++) {
    console.log(i)
}                                         // for yra ciklai (naudojam kaip zinom tiksliai kiek kartu mes ji naudosim ) 


let word = 'Hello Mr.Racoon!'

for (let i = 0; i < word.length; i+=2) {
    console.log(word[i] + (word[i+1] !== undefined ? word[i+1] : '')) 
}
// surykiuoja zodzius po dvi raides

for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i])
}
// reverse (is kitos puses)


// prideti stylius
(console.log('%c RACOON', 'color: skyblue; background-color: crimson; font-size: 20px; padding: 10px; border-radius: 5px; font-weight: bold; text-align: center; text-shadow: 2px 2px 2px black;'))


for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      console.log('%c' + word[i], 'color: blue');
    } else {
      console.log('%c' + word[i], 'color: red');
      
    }
}
  
// let m = rand(0, 1) ? 'H' : 'S'
// console.log(m)
  
// do {
//     let m = rand(0, 1) ? 'H' : 'S'
//     console.log(m)
// }
// while (m == 'S')


// == --- !=       Priesingybes    (wild ciklas)
//=== --- !==
//> --- <=
//< --- >=
//\\ --- &&


let r
r = rand(20, 300)
console.log(r, 'gimtadienis')

while (r < 200) {
    r = r + rand(20, 50)
    console.log(r)
}