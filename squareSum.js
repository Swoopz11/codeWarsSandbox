function squareSum(numbers) {
    return numbers.map(element => element * element).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(squareSum([]))