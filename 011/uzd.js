console.log ('Labas Rytas')
function rand(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}


console.log('--------------3--------------')

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10)

console.log(a, b, c);

let argaunasi = a + b > c && a + c > b && b + c > a

console.log(argaunasi ? 'Gaunasi' : 'Nesigauna')