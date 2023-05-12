class Machine {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns: number;

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns;
    }
}

const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator)
console.log(destroyer)