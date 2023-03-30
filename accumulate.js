function accumulate(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(accumulate([1,2,3,4,5,6,7,8]))