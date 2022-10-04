// function valueToHex(c) {
//   let hex = c.toString(16);

//   return hex;
// }

// function rbg(r,g,b) {
//     return valueToHex(r) + valueToHex(g) + valueToHex(b)
// }

// console.log(rbg(0,0,0))

function rgb(r, g, b) {

  let newR = r.toString(16) ;
  if (newR.length === 1) {
    newR = '0' + newR
  }

  let newG = g.toString(16);
  if (newG.length === 1) {
    newG = '0' + newG
  }

  let newB = b.toString(16);
  if (newB.length === 1) {
    newB = '0' + newB;
  }

  if (r < 0) {
    newR = '00'
  } else if (r > 255) {
    newR = 'ff'
  }

  if (g < 0) {
    newG = "00";
  } else if (g > 255) {
    newG = "ff";
  }

  if (b < 0) {
    newB = "00";
  } else if (b > 255) {
    newB = "ff";
  }

  let hex = newR + newG + newB;

  return hex.toUpperCase();
}

console.log(rgb(-1, 8, 256));
