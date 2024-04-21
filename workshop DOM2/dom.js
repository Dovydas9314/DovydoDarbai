console.log("workshop")

window.addEventListener('load', _ => {


const count = document.querySelector('.count')
const input = document.querySelector('input')


input.addEventListener("keyup", ()=>{
    count.innerHTML = input.value.length
})


});