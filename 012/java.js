
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function middle(a, b, c) {
    return (a + b + c) - Math.min(a, b, c) - Math.max(a, b, c)
}

let a = rand(0, 25)
let b = rand(0, 25)
let c = rand(0, 25)

console.log(a, b, c)

let middleResult = middle(a, b, c)

console.log(middleResult) 