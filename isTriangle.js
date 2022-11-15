// function isTriangle(a, b, c) {
//   if (a + b <= c || a + c <= b || c + b <= a || a === 0 || b === 0 || c === 0) {
//     return false
//   } else {
//     return true
//   }
// }

//better solution
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}

console.log(isTriangle(8,5,8))
console.log(isTriangle(7,2,2))
console.log(isTriangle(0,2,2))