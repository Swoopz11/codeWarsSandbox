function removeSmallest(arr) {
  return arr.filter(e => e != Math.min(...arr));
}

console.log(removeSmallest([11, 10, 2, 15, 2, 4]));
