let num = 123498765;

function descendingOrder(n) {
  return Number(num.toString().split("").sort().reverse().join(""));
}

console.log(descendingOrder(num));
