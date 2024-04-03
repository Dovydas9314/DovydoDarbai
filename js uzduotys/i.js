function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



// 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.



const vardas = 'Jason'
const pavarde = 'Statham'

if (vardas.length <pavarde.length) {
    console.log(vardas)
} else {
    console.log(pavarde)
}

// 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)"




const vardas1 = 'Jonas'
const pavarde1 = 'Jonaitis'
const gimimoMetai = 1990
const dabartiniaiMetai = 2024 

const amzius = dabartiniaiMetai - gimimoMetai


console.log('Aš esu ' + vardas1 + " " + pavarde1 + ' Man yra ' + amzius + ' metai.')

// 3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.


const vardas2 = 'Raimundas'
const pavarde2 = 'Silanskas'


const paskutinesraides = vardas2.slice(-3) + pavarde2.slice(-3)


console.log(paskutinesraides)

// 4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.


const tekstas = 'Once upon a time in hollywood'
const pakeistastekstas = tekstas.replace(/o/gi, "*")


console.log(pakeistastekstas);


console.clear()

//                                                  MASYVAI:



// 1.Sukurti masyvą: Sukurkite masyvą, kuriame būtų penki skirtingi skaičiai

const skaiciai = [1, 2, 3, 4, 5]

console.log(skaiciai)

// 2. Pridėti elementą: Pridėkite naują skaičių prie sukurtos masyvo. 

skaiciai.push(6)

console.log(skaiciai)

// 3. Išimti elementą: Pašalinkite vieną iš masyvo elementų. 

skaiciai.splice(2, 1)

console.log(skaiciai)


// 4. Surasti indeksą: Suraskite indeksą, kuriame yra tam tikras skaičius iš jūsų masyvo

console.log(skaiciai)
const indeksas = skaiciai.indexOf(4)

console.log("3 skaiciaus indeksas:", indeksas);


// 5. Masyvo ilgis: Panaudokite masyvo ilgio metodą ir išspausdinkite masyvo ilgį. 
//Sukurti naują masyvą: Sukurkite naują masyvą, kuriame būtų elementai iš jūsų pirmojo masyvo, bet atvirkščia tvarka.


const skaiciai1 = [5, 4, 3, 2, 1] 

console.log("Masyvo ilgis:", skaiciai1.length)



//                                       Funkcijos:


// 1. Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti naršyklėje tekstą "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".




function pasisveikinti(name) { 
    console.log("Labas " + name + "!")
}

pasisveikinti("Dovydai")

// 2. Sukurkite funkciją  kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą kiek simbolių yra tame tekste. Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.


function simboliuSkaicius(tekstas) {
    console.log(tekstas.length)
}

simboliuSkaicius("Labas rytas visiems");


// 3. Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". Funkcija turi grąžinti vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.


function vardasPavarde(vardas, pavarde) {
    console.log(vardas + " " + pavarde)
}

vardasPavarde("Jonas", "Jonaitis")


// 4. Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.


function randomSkaiciai() {
    let randomSkaiciai = [];
    for (let i = 0; i < 3; i++) {
        const randomSkaicius = Math.floor(Math.random() * 6);
        randomSkaiciai.push(randomSkaicius);
    }
    console.log(randomSkaiciai.join(', '));
}

randomSkaiciai();