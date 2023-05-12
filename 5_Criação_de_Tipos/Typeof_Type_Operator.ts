const userName: string = "Darlon";

const userName2: typeof userName = "João"; 

type x = typeof userName

const userName4: x = "Joaquim";

console.log(userName2)