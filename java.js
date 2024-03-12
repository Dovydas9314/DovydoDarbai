console.log('Hello how are you')

//LOGINIAI OPERATORIAI SU LOGINIO TIPO KINTAMAISIAIS


// OR || jeigu viena reiksme true visada bus true

console.log('true || true', true || true)
console.log('true || false', true || false)
console.log('false || true', false || true)
console.log('false || false', false || false)



// AND && turi but visos reiksmes true kad gautume true

console.log('true && true', true && true)
console.log('true && false', true && false)
console.log('false && true', false && true)
console.log('false && false', false && false)



// NOT ! (Neigimas) jeigu pasakai true paneigia priesingai 

console.log('!true', !true)
console.log('!false', !false)
console.log('!!true', !!true)
console.log('!!false', !!false)



// NOT with numbers and strings (vienintelis number 0 yra false. Vienintelis stringas ""(tuscias) yra false

console.log('!0', !0)
console.log('!1', !1)
console.log('!2', !2)
console.log('!3', !3)
console.log('!!-187', !!-187)
console.log("!'':", !'')
console.log("!'Dovydas':", !'Dovydas')
// undefined type
console.log('!undefined', !undefined)



// OR AND with numbers ( nei OR nei AND nevercia skaicius i kintamuosius)

console.log('25 || 36', 25 || 36)
console.log('25 && 36', 25 && 36)
console.log('0 || 36', 0 || 36)
console.log('0 && 36', 0 && 36)

// OR AND with strings

console.log('hello || world', 'hello' || 'world')
console.log('hello && world', 'hello' && 'world')
console.log("'' || world:", '' || 'world')
console.log("'' && world:", '' && 'world')



let a=0

a || console.log('a is 0')
a && console.log('a is 0')

let b = 1 + 2
let c = 1 + 2 * 3
let d = (1 + 2) * 3

console.log('b:', b)
console.log('c:', c)
console.log('d:', d)

let e = 5 % 2
console.log('e:', e)

let f = 2 ** 3
console.log('f', f)


// ++ padidina vienetu , -- pamazina vienetu
let g = 7
let h = 3
g++
h--
console.log('g', g)
console.log('h', h)

// jeigu ++ po skaiciaus lieka taspats nes pirmiausiai atspausdina 
let i = 27
console.log('i', i++)
console.log('i', i)

let j = 2
let result = ++j * ++j  // 3 * 4
result = j++ * ++j  // 4 * 6
console.log ('result', result)

let x = 1
x-- || console.log ('LOGED') // nesuveikia logged bet jeigu --x tada bus logged nes gaunasi 0 


console.log ('1 < 2', 1 < 2)
console.log ('1 > 2', 1 > 2)
console.log ('1 <= 2', 1 <= 2)
console.log ('1 >= 2', 1 >= 2)

console.log ('1 < 1', 1 < 1)
console.log ('1 > 1', 1 > 1)
console.log ('1 <= 1', 1 <= 1)
console.log ('1 >= 1', 1 >= 1)


// viena lygybe (=) nelygybe ji priskiriama - lygu yra dvi lygybes ==
console.log ('1 == 1', 1 == 1)
console.log ('1 == 2', 1 == 2)
console.log ('1 != 1', 1 != 1)
console.log ('1 != 2', 1 != 2)


console.log ("'1 == 1'", '1' == 1)
console.log ("'1 === 1'", '1' === 1)  // 3 lygybes (===) lyginam pirma tipa poto reiksmia
console.log ('true == 1', true == 1)
console.log ('true === 1', true === 1)
console.log ('NaN == NaN', NaN == NaN) // NaN yra unikalus ir visada bus nelyginis
let m = 'A'
m++
console.log('m', m)
console.log('is NaN:', NaN == NaN) // console.log('is NaN', isNaN(m)) : bus true, jeigu vietoj m=1 tada bus false

let n = 3
n = n * 3

if (n > 15) {
    console.log('n is greater than 15')  //Jeigu if gauna false tai nieko nedaro kas yra () tada daro kas parasyta else ()
    console.log('n', n)
}
else {
    console.log('n is less than 15')
    console.log('n', n)
}

let o = 7    // jeigu true einame i if jeigu false tada else
if (10 < o + 5) {
    console.log('YES O')
}
else {
    console.log('NO O')
}

