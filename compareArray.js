let compArr1 = [121, 144, 19, 161, 19, 144, 19, 11];
let compArr2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

function comp(array1, array2) {
return array1.includes(array2.map(element => Math.sqrt(element)))
}

console.log(comp(compArr1, compArr2));
