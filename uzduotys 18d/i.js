console.log("Uzduotys 04/18");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  const africa = [
    "Zebras",
    "Liūtas",
    "",
    "Raganosis",
    "",
    "Raganosis",
    "Begemotas",
  ];
  const australia = ["Kengūra", "Ančiasnapis", "Dingo", "Atsirado", "Strutis"];

  // 1.

  const mygtukas = document.querySelector(".mygtukas");

  mygtukas.addEventListener("click", function () {
    const num1 = rand(1, 6);
    const num2 = rand(1, 6);
    const randomNumber1 = document.querySelector(".pirmas");
    const randomNumber2 = document.querySelector(".antras");

    randomNumber1.innerText = num1;
    randomNumber2.innerText = num2;

    if (num1 === num2) {
      randomNumber1.classList.add("red");
      randomNumber2.classList.add("red");
    } else {
      randomNumber1.classList.remove("red");
      randomNumber2.classList.remove("red");
    }
  });

  // 2.

  let numbers = [];

  const h3 = document.querySelector(".h3");
  
  h3.addEventListener("click", function () {
    const randomNumber = rand(1, 10);
    numbers.push(randomNumber);
    console.log(numbers);

    const sum = numbers.reduce((a, b) => a + b, 0);
    document.querySelector(".h3").innerText = "Suma: " + sum;
  });
});
