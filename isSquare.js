// MY SOLUTION
var isSquare = function (n) {
  let squared = false;
  let num = parseInt(n ** (1 / 2));

  if (num ** 2 === n) {
    squared = true;
  }

  return squared;
};

// CODEWARS SOLUTION
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

// console.log(isSquare(144))