function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$ ${balance}`)
}

//showBalance(100)

const arr: Array<number | string | boolean> = [1, "teste", true]

function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!"
    }

    return `A função do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))