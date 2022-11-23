let sumArr1 = [ 6, 2, 1, 8, 10 ]


function sumArray(array) {
return array ? array.sort((a,b) => {return a - b}).slice(1, (array.length - 1)).reduce((acc, curr) => acc + curr, 0) : 0
}

console.log(sumArray(sumArr1))