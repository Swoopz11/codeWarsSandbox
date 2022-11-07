function highAndLow(numbers) {
  let newNumbers = numbers.split(" ").sort(function(a, b) {
    return a - b;
  });
  return newNumbers[0] + ' ' + newNumbers[newNumbers.length - 1]
}

console.log(("8 3 -5 42 -1 0 0 -9 4 7 4 -4").split(" ").sort(function(a, b) {
    return a - b;
}));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));