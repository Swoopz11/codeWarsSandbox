let aveArr = [1,1,1]
let aveArr2 = [1,2,3]
let aveArr3 = [1,2,3,4]
let aveArr4 = []

function findAverage(array) {
  let total = null
  for (let i = 0; i < array.length; i++) {
    total = total + array[i]
  }
  if (total) {
    return total / array.length
  } else {
    return 0
  }
}

console.log(findAverage(aveArr))
console.log(findAverage(aveArr2))
console.log(findAverage(aveArr3))