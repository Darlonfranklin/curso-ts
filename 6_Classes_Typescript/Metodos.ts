class Dwarf {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimy = new Dwarf("Jimy")
console.log(jimy.name)
console.log(jimy)
jimy.greeting()