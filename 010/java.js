console.log("Hello every body !");
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

if (one == 0 || two == 0) {
  result = "cannot divide by zero";
} else if (one > two) {
  result = one / two;
} else {
  result = two / one;
}

console.log(result);

console.log(Math.PI)
console.log(Math.round(34.67)) // apvalina skaiciu
console.log(Math.floor(34.67)) // apvalina skaiciu i grindis
console.log(Math.ceil(34.67))  // apvalina skaiciu i lubas
console.log(Math.min(45, 56, 13, 22, -5, 112, 2))  //min isrenka pati maziausia skaiciu
console.log(Math.max(45, 56, 13, 22, -5, 112, 2))  //max isrenka pati didziausia skaiciu
console.log(Math.abs(-45)) // padaro teigiama skaiciu
console.log(Math.random()) // atsitiktinis skaicius nuo 0 iki beveik 1

let str = 'Barsukas'
console.log(str.length)  // parodo ilguma, suskaiciuoja raides
console.log(str[0])  // raides pradeda skaiciuotis nuo 0 ne nuo 1 
console.log(str[0] + str[4])

let fairytail = 'Labas vakaras , kaip jum sekasi ?' //surasti zodi
console.log(fairytail.includes('vakaras'))

let shortString = 'abc'   // jeigu truksta raidziu priraso * simboliais padend prideda i gala padstart prideda i prieki
console.log(shortString.padEnd(5, '*'))

let shortfairytail = fairytail.slice(10) // nuo kurios raides nupjauna teksta
console.log(shortfairytail)

console.log('ABC'.charCodeAt(2)) // Parodo antros raides koda pagal lentele


console.log('A' > 'a')  // Rodo pagal lentele


let v 
if (0) {
    v = 'Jo'
}
else {
    v = 'Ne'
}
console.log(v)

let A = -88;
let aRez;
 
if (A > 0) {
    aRez = 'Teigiamas';
} else if (A < 0) {
    aRez = 'Neigiamas';
} else {
    aRez = 'Nulis';
}
 
console.log(aRez);
 
let aRez2 = (A > 0) ? 'Teigiamas' : (A < 0) ? 'Neigiamas' : 'Nulis';
 
console.log(aRez2);

let z1 = 5
let z2 = 8
let zasys2 = `${z1} Žąsys su ${z2} žąsiais`
console.log(zasys2)

let longKultilinestory = 'Labas rytas, \n' +   // su backtickais ` galima nedet \n su kabutem negalima
'kaip sekasi \n' +
'Gerai?'
console.log(longKultilinestory)