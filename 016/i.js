function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const a = rand(1, 7)

  for (let i = 0; i < a; i++) {
    console.log(a)
  }

 console.clear()







  const o = {vardas: 'Jonas', amzius: '22', miestas: 'Vilnius'}

  const a1 = ['Jonas', '22', 'Vilnius']   //masyvas sukuriamas su [] skliaustais

  const animals = ['Kiškis', 'Lapė', 'Barsukas', 'Vilkas', 'Laukinis katinas']

  console.log('o', o)
  console.log('a1', a1)

//   const peoples = [
//     {vardas: 'Jonas', amzius: 22, miestas: 'Vilnius'},
//     {vardas: 'Petras', amzius: 33, miestas: 'Kaunas'},
//     {vardas: 'Antanas', amzius: 44, miestas: 'Klaipėda'}
// ]

 
  console.log(animals[1])  // gauni visus

//   animals[5] = 'Lusis' // galima taip irasyti i masyva papildomai
  animals.push('Lusis') // ideda automatiskai i paskutini kad neliktu tusciu aukstu

  animals[3] = 'Suo'  // jeigu irasai i esama tada pakeicia nauju
  console.log(animals.length) // paraso masyvo ilgi
  console.log(animals)  //pasirenki butent ta viena



  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
  }    // atspausdinti visus animal masyvo elementus

  for (let i = 0; i < animals.length; i++) {    // i = i + 2
    if (i % 2 === 0 ) {
    console.log(animals[i])
     }  // atspausdinti poriniu indeksu animals masyvo elementus
  }

  console.clear()

// Atspausdinti gyvunus kuriu pavadinimas ilgesnis nei 6 raides is animals masyvo

for (let i = 0; i < animals.length; i++) {    // i = i + 2
    if (animals[i].length > 6) {
    console.log(animals[i])
     }  
  }
  // padarymas be if  animals[i].length > 6 && console.log(animals[i])


  console.clear()

  // Sukurti masyva su 5 atsitiktiniais skaiciais nuo 1 iki 10 

  const numbers = []
  for (let i = 0; i < 5; i++) {
    numbers.push(rand(1,10))
  }

  console.log(numbers)

  // Suskaiciuoti penketukus numbers masyve

  let penketukai = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        penketukai++;
    }
  }

  console.log('Penketukai:', penketukai)

  console.clear()

  // Sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10, kuriame mažiausiai 3 skaičiai yra penketukai

console.clear();
let numbers2;
let count = 0

do {
    numbers2 = [];
    penketukai = 0;
    count++;
    for (let i = 0; i < 5; i++) {
        const sk = rand(1, 10);
        numbers2.push(sk);
        if (sk == 5) {
            penketukai++;
        }
    }
    console.log(numbers2);
} while (penketukai < 3);

console.log('Iteracijų:', count)

animals.unshift('Vilkas')  // Prideda i prieki gyvunu bet kitus pastume tolyn i kitus aukstus
animals.pop()  // Istrina paskutini  , kiek kartu tapati parasysi tiek ir issitrins
animals.shift()  // Istrina is pradzios

let rez;

rez = animals.push('Zuikis')  //  Masyvo ilgio rezultatas
console.log(rez, 'Zuikis push')
rez = animals.unshift('Briedis')  // Naujo masyvo ilgio rezultatas
console.log(rez, 'Briedis unshift')
rez = animals.splice(2, 3); // 2 is index, 3 is how many elements to remove

console.log(rez, 'splice');
console.log(animals)

let dogIndex = animals.indexOf('Dog');
animals.splice(dogIndex, 1);    // Surasti elemento indexa

// console.log('Zuikis gone:', animals.filter(a => a != 'Zuikis'));

rez = animals.splice(4, 0, 'Dog', 'Cat', 'Mouse'); 

console.log(rez, 'splice');

console.log(animals);




