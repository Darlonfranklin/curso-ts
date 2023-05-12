class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Metodo privado")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new PrivateClass()

console.log(pObj.showName())

pObj.showPrivateMethod()