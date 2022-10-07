let numArr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

function findOdd(A) {
  let evenArr = []
  let oddArr = [];

  let sorted = A.sort();

  for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + (1)]) {
          evenArr.push(sorted[i]);
          i++
      } else {
          oddArr.push(sorted[i])
      }
  }

  return parseInt(oddArr.join(), 10);
}

console.log(findOdd(numArr));
