function maskify(cc) {
  let newStr = cc.substring(cc.length - 4);
  let maskedcc = [];

  for (let i = 0; i < cc.length - 4; i++) {
    maskedcc.push("#");
  }

  return maskedcc.join("") + newStr;
}

console.log(maskify("hello world"));


// Interesting solution

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }