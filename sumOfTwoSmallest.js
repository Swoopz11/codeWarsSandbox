let sampleArr = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers(sampleArr));
