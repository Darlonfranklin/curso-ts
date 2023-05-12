class Car {
    name: string;
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("fusca")
console.log(fusca)

fusca.name = "Fusca Turbo";
console.log(fusca.name)