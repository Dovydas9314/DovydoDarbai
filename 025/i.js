console.log("Hello DOM");
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(document);

const div1 = document.querySelector("div");
const div2 = document.querySelector(".viso");

console.log(div1, div2);

const h2 = document.querySelector("h2 + h2");

console.log(h2);

const iTag = document.querySelector("span i + i");
console.log(iTag);

let textInside = iTag.innerText;

textInside += "-------*"; // Prirasyti
console.log(textInside);

iTag.innerText = textInside;

h2.innerText = "pakeistas"; // Pakeisti

const h3 = document.querySelector("h3");

const h3next = document.querySelector("h3 + h3");

console.log(h3, h3next);

h3.innerText = "vienas";
h3next.innerText = "du";

const valio = document.querySelector(".valio");
console.log(valio.innerHTML);
valio.innerHTML = "<b>888</b>";

const ul = document.querySelector("ul");
console.log(ul);

ul.innerHTML = "<li>Pirmasis</li>";

const ol = document.querySelector("ol");
console.log(ol);

ol.innerHTML = `
<li>Zuiki</li>
<li>Lape</li>
<li>Meska</li>
<li>Suo</li>`
;

const big = document.querySelector('.big')

let z = ''
for (let i = 0; i < 10;  i++) {
        z += '<li>Zuikis</li>'
    }

big.innerHTML = z

const random = document.querySelector('.random')
let r = ''
for (let i = 0; i < 10; i++) {
    r += '<li>' + rand(10,99) + '</li>'}
    random.innerHTML = r




