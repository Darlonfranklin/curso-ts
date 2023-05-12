const myClass = class<T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Jones")
console.log(pessoa.name)