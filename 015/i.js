console.log("Labas 015");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Kintamojo tipas : Objektas

let obj = {
  name: "Jonas",
  age: 99,
};
obj.color = "red";
delete obj.age;

console.log(obj);

console.clear();

let A = 5;
const B = 10; //const apsaugo savo kintamaja nuo pakeitimu , tuo ir skiriasi nuo let
const C = { name: "Jonas" };
A++;
// B++
C.name = "Vidas";

console.log(A, B, C);

console.clear();

let V = 5;
let V2 = V; // Priskyrimas by value (pagal reiksme)

V2++;
console.log(V, V2);

let O = {
  sk: 5,
  name: "Virgis",
};

let O2 = O; // Priskyrimas by reference (pagal nuoroda) (lieka taspats kintamasis tik gauna du pavadinimus)

let O3 = { ...O }; // copy by value    senas budas budavo: let O3 = Object.assign({}, O)
// sk:5,
// name: 'Jonas'   ====> { sk=5, name: 'Jonas}
let O4 = { ...O, druska: 99 };

let O5 = { ...O, druska: 99, name: "Antanas" };

let O6 = { druska: 99, name: "Antanas", ...O }; // Kas paskutinis tokia ir reiksme

delete O6.sk;

let { sk, druska } = O5  // destrukturizacija : objektiniai skliausteliai tai yra visai ne objektas, o ka as noriu issimt is objekto

sk = sk * 2

console.log(sk, druska)


O2.sk++;
O.sk++;

console.log(O, O2, O3, O4, O5, O6);
