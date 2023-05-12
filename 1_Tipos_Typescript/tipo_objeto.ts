function passCordinates(coord: { x: number, y: number }) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}

const objCorod = { x: 329, y: 84.2 }
const Corod = { x: 43, y: 76 }

passCordinates(objCorod)
passCordinates(Corod)

const pessoaObj: { nome: string, surname: string } = { nome: "Matheus", surname: "Battisti" }
console.log(pessoaObj)

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)