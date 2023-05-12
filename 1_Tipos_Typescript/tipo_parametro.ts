function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4,5)

function greeting(name: string) {
    return `Olá ${name}`
}

console.log(greeting("Darlon"))

setTimeout(function() {
    const sallary: number = 1000
}, 2000)