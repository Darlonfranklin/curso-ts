function sumAll(...n: number[]) {
    return n.reduce((n, sum) => sum + n)
}

console.log(sumAll(1, 2, 3, 4, 5))