
function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Olá ${greet} ${name} tudo bem`
    }

    return `Olá tudo bem ${name}`
}

console.log(modernGreeting("Darlon", "tudo bem"))