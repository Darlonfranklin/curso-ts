interface Point {
    x: number;
    y: number;
    z: number;
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)


interface Person {
    name: string;
}

interface Person {
    age:number;
}

const somePerson: Person = {name: "Darlon", age: 23}
console.log(somePerson)

type personType = {
    name: string;
}
