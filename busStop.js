let busArr = [
  [10, 0],
  [3, 5],
  [5, 8],
];

let busArr2 = [
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
];

let busArr3 = [
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
];

function busStop(arr) {
  let total = null;
  for (let i = 0; i < arr.length; i++) {
    total = total + (arr[i][0] - arr[i][1])
  }
  return total
}

console.log(busStop(busArr))
console.log(busStop(busArr2))
console.log(busStop(busArr3))

