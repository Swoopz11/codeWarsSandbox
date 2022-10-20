// function rot13(str) {
//     let asc = []
//     for (let i = 0; i < str.length; i++) {
//         asc.push(String.fromCharCode((str.charCodeAt(i - 13))))
//     }
//     return asc
// }

// console.log(rot13('This is my first ROT13 excercise'))

function rot13(str) {
    let asc = []
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        asc.push(String.fromCharCode(str.charCodeAt(i) + 13))
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
        asc.push(String.fromCharCode(str.charCodeAt(i) - 13))
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) {
        asc.push(String.fromCharCode(str.charCodeAt(i) + 13))
    } else if (str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122) {
        asc.push(String.fromCharCode(str.charCodeAt(i) - 13))
    } else {
        asc.push(str[i])
    }
  }
  return asc.join('')
}

console.log(rot13("This is my first ROT13 excercise!"));
// let heyo = "This is my first ROT13 excercise";
// console.log(heyo.charCodeAt(0) - 13)