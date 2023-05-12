class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("Testando outra coisa")
    }
}

const myObject = new Nova()
myObject.someMethod()