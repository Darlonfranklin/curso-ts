function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função!")
    const greet = f(userName)
    console.log(greet)
}

preGreeting(greeting, "Darlon")
preGreeting(greeting, "Franklin")