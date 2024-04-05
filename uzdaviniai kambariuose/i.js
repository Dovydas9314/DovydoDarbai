function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log("Uzdaviniai kambariuose");

const A = [
  83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46,
  9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58,
  -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87,
  -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32,
  -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27,
  77, 41, 0, 40, -54, 99, 70, -41, 91,
];


// const maxNum = Math.max(...A)

// console.log(`1. Didžiausias skaičius: ${maxNum}`)




// 1.
let greatestNumber = null;
 
A.forEach(element => {
  if (element > greatestNumber) {
    greatestNumber = element;
  }
  return element;
});
console.log(greatestNumber)


// 2.

let smallestNumber = null;
 
A.forEach(element => {
  if (element < smallestNumber) {
    smallestNumber = element;
  }
  return element;
})

console.log(smallestNumber)

//3. 

let smallestNegativeNumber = null; 

A.forEach(element => {
  if (element < 0 && (smallestNegativeNumber === null || element > smallestNegativeNumber)) {
    smallestNegativeNumber = element; 
  }
});

console.log(smallestNegativeNumber)


//4.

let greatestNumberBelow50 = null;
 
A.forEach(number => {
  if (number < 50 && (greatestNumberBelow50 === null || number > greatestNumberBelow50)) {
      greatestNumberBelow50 = number;
  }
});
 
console.log("Didziausias skaicius kuris yra mazesnis uz 50:", greatestNumberBelow50);


//5.

let positiveSum = 0;
 
A.forEach(number => {
  if (number > 0) {
    positiveSum += number;
  }
});
 
console.log("Teigiamu skaiciu suma yra:", positiveSum);



// 6. 
 
let negativeSum = 0;
 
A.forEach(number => {
  if (number < 0) {
    negativeSum += number;
  }
});
 
const squaredResult = negativeSum * negativeSum;
 
console.log("Neigiamu skaiciu kvadratu suma yra:", squaredResult);
 
// 7. 
 
let count = 0;
 
A.forEach(number => {
  if (number >= 25 && number <= 75) {
    count++;
  }
  return number;
});
 
console.log("Skaiciai kurie patenka i intervala 25 ir 75 yra:", count);
 
// 8. 
 
let count0 = 0;
 
A.forEach(number => {
  if (number === 0) {
    count0++;
  }
  return number;
});
 
console.log("Skaiciai 0 yra:", count0);
 
 
// 9.
 
let count3 = 0;
 
A.forEach(number => {
  if (number % 3 === 0) {
    count3++;
  }
  return number;
});
 
console.log("Skaiciai kurie dalinasi be liekanos is 3 yra:", count3);
 
// 10. 
 
let average = 0;
 
A.forEach(number => {
  if (number < 0) {
    average += number;
  }
  return number;
});
 
console.log("Neigiamu skaiciu vidurkis yra:", average / A.length);




