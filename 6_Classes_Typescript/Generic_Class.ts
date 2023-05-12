class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem = new Item("caixa", "Surpresa");
console.log(newItem)
console.log(newItem.showFirst)