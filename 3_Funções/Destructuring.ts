type Product = {
    name: string;
    price: number;
}

function showProductDetails({name, price}: Product) {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}
console.log(showProductDetails(shirt))