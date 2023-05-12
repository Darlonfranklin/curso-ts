interface Car {
    brand: string;
    readonly wheels: number
}

const fusca: Car = {
    brand: "vw",
    wheels: 4
}

// console.log(fusca)

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)