

const obj = {
    animal: 'Fox',
    tail: '30'
}


console.log(obj)


class Fox {
    #age = ''
    constructor(tail, c) {
        this.tail = tail
        this.color = c
        this.add10()
        
    }

    get niceColor() {
        return 'Fox color: ' + this.color
    }

    set age(a) {
        if (a > 20) {
            a = 20
        }
        this.#age = a + ' years'
    }
    add10() {
        this.tail += 10
    }

}


const obj2 = new Fox(30, 'Brown')
const obj3 = new Fox(20, 'black')

// obj3.color = 'Blue'
// obj3.add10()

obj2.age = 22

console.log(obj, obj2, obj3)

console.log(obj3.color)

console.log(obj2.niceColor)