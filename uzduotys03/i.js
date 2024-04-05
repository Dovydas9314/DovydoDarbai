function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('Uzdaviniai')



// 1 Uzdavinys 

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė']

bitGirls.unshift('Nausėda')

console.log(bitGirls)


// 2 Uzdavinys

const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis']
const bitCats = []

function getRandomWeight() {
  const weights = ['storas', 'normalus']
  return weights[Math.floor(Math.random() * weights.length)]
}

for (let i = 0; i < cats.length; i++) {
  bitCats.push([cats[i], getRandomWeight()])
}

console.log(bitCats)

