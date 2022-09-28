function getSum(a, b) {
  let sumArr = 0;
  if (a === b) {
    return a;
  } else if (b < 0) {
    for (let i = a; i >= b; i--) {
      sumArr = sumArr + i;
    }
    return sumArr;
  } else {
    for (let i = a; i <= b; i++) {
      sumArr = sumArr + i;
    }
    return sumArr;
  }
}

console.log(getSum(0,6));
