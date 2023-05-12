function advancedGreeting(firstname: string, lastname?: string) {
    if (lastname !== undefined) {
        return `Olá, ${firstname} ${lastname} tudo bem?`
    } else {
        return `Olá, ${firstname}, tudo bem`
    }
}

console.log(advancedGreeting("Darlon", "Franklin"));
