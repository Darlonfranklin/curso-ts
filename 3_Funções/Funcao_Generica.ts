function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObject<U, T>(obj1: U, obj2: T) {
    return { ...obj1, ...obj2 }
}

const newObject = mergeObject({ name: "Darlon" }, { age: 23, job: "Programmer" })
console.log(newObject)

function returnString<T>(name: T) {
    return `Olá ${name}`
}

console.log(returnString("Darlon"))