interface Human {
    name: string;
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const darlon: Human = {
    name: "Darlon",
    age: 23
}

console.log(darlon)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)
console.log(goku.superpowers[1])