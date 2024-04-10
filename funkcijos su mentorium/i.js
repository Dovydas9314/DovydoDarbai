console.log('Labas')

function pavadinimas () {
    console.log('Labas saule')
}

pavadinimas()


const pavadinimas2 = () => {
    console.log('Labas saule2')

}

pavadinimas2()


function add(a,b) {
return a+b
}

console.log(add(2,2))

const suma = add(7,5)
console.log(suma)


const add2 = (a,b) => a + b

console.log(add2(6,9))

// lyginis ar nelyginis funkcija

function isEven(number) {
    return number % 2===0
}
console.log(isEven(6))

function greeting(name){
    return console.log('Labas ${name}')
}
greeting('Dovydai')


function factorial(number) {
    if(number===0) {
        return 1
    }
    else {
        return number * factorial (number-1)
    }
} 
console.log(factorial(5))


//celsius 

function celsToFahr(celsius) {
    return (celsius * 9/5) + 32
}

console.log(celsToFahr(3))


function getMaxNumber(numbersFromArr) {
    return Math.max(... numbersFromArr)
}
// Suranda didziausia
console.log(getMaxNumber([5,100,-15,200,1,3]))

function getRandom(min,max) {
    return Math.floor(Math.random() * (max-min +1) + min)
}

console.log(getRandom(9,11))


function getUniqe(array) {
    return [...new Set(array)]
}

console.log(getUniqe([10,12,14,22,26,48,12,3,4,12]))

const unique = getUniqe
([1,1,1,1,1,5,6,7,7,14,22,14])

console.log(unique)

// pakele kvadratu
const arr = [1,1,1,1,1,5,6,7,7,14,22,14]

function squereValues 
(arr) {
    return arr.map((item) => item * item
)
}

console.log(squereValues(arr))




function sumAllElements() {
    let sum = 0 
    for (let i = 0; i < arguments.length; i++) {
        sum+=arguments[i]
    }
    return sum
}

let result = sumAllElements(1,15,4)
console.log(result)

const string = 'Labas'

for (let i = 0; i < string.length; i++) {
    console.log(string[i])
}