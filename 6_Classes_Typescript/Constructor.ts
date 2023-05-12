class NewUSer {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const franklin = new NewUSer("Darlon", 23);
console.log(franklin)