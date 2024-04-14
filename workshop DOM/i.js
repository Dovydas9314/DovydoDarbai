console.log('Labas')

const count = document.querySelector('.count')
const substract = document.querySelector('.substract')
const reset = document.querySelector('.reset')
const add = document.querySelector('.add')


add.addEventListener('click', function(){
    count.innerHTML++
});




const substractFunc = () => {
    count.innerHTML--
};

substract.addEventListener('click', substractFunc);



reset.addEventListener('click', function(){
    count.innerHTML = 0
});



const setColor = () => {
    if(count.innerHTML > 0) {
        count.style.color = "yellow"
    } else if (count.innerHTML < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "#fff"
    }
};