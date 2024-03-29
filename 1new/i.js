function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log('Uzdaviniai')


  //1.
  for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//2.

let bendrasGreitis = 0;

for (let ratas = 1; ratas <= 10; ratas++) {
    let greitis = rand(120, 220);
    console.log(`Ratas ${ratas}: ${greitis} km/h`);
    bendrasGreitis += greitis;
}

let vidutinisGreitis = bendrasGreitis / 10;
console.log(`Bendras vidutinis greitis: ${vidutinisGreitis.toFixed(2)} km/h`);


//3.

let likutis = 44;

for (let ratas = 1; ratas <= 10; ratas++) {
    let sunaudota = rand(3, 6);

    if (likutis < sunaudota) {
        console.log(`Ratas ${ratas}: Neuzteko kuro, nes liko ${likutis} litru kuro.`);
        break;
    }

    likutis -= sunaudota;
    console.log(`Ratas ${ratas}: Sunaudota ${sunaudota} litru kuro. Liko ${likutis} litru.`);
    
    if (ratas === 10) {
        console.log("Automobiliui uzteko kuro iveikti visus 10 ratų!");
    }
}