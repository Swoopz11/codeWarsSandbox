// function doubleChar(str) {
//     let splitStr = str.split('')
//     let newStr = []
//     for (let i = 0; i < str.length; i++) {
//         newStr.push(splitStr[i], splitStr[i])
//     }
//     return newStr.join('')
// }

function doubleChar(str) {
  return str.split("").map((letter) => letter + letter).join('');
}

console.log(doubleChar("String"));
