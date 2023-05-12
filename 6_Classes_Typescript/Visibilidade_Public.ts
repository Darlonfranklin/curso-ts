class C {
    x = 10
}

class D extends C {}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)