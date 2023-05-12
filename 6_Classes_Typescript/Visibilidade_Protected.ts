class E {
    protected x = 10

    protected protectedMethod() {
        console.log("Este metodo é protegido")
    }
}

class F extends E { 
    showX() {
        console.log("x: " + this.x)
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
} 

const fInstance = new F()
fInstance.showProtectedMethod()