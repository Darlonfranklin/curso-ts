function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5));
console.log(showData("Testando generic"));
console.log(showData(true));
console.log(showData(["olá", "Darlon"]))

// Generico é definido pelo tipo que eu passo.

// Constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = { name: "Porta", cor: "Branca" }
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 }
const thirdObj = { price: 19.99, category: "Camiseta" }

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))