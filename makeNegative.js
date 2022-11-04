// first attempt
// function makeNegative(num) {
//   if (num === 0) {
//     return 0;
//   } else if (num + Math.abs(num) === 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }

// codewars solution
// function makeNegative(num) {
//     return -Math.abs(num);
// }

// ternary statement solution
function makeNegative(num) {
    return num <= 0 ? num : -num;
}

console.log(makeNegative(-10));
