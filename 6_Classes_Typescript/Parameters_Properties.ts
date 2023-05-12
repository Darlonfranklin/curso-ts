class ParameterProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name;
        this.qty = qty;
        this.price = price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return `Qtd total: ${this.price}`
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)
console.log(newShirt.name) 

console.log(newShirt.showPrice)
console.log(newShirt.showQty)