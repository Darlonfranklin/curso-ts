type Character = {name: string, age: number, hasDriveLicense: boolean} 

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Darlon",
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))