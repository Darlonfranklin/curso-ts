class Person {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const darlon = new Person("Darlon", "Franklin");
console.log(darlon)

console.log(darlon.fullName)