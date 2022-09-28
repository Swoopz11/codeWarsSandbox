let sampleStr1 = "abcde";
let sampleStr2 = "warrior";
let sampleStr3 = "sweEtness";

function duplicateCount(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    // for (let k = 0; k < text.length; k++) {
      if (text.charCodeAt([i]) === text.charCodeAt([i + 1])) {
        count += 1;
      } else if (text.charCodeAt([i]) === text.charCodeAt([i + 1]) - 32) {
        count += 1;
      } else if (text.charCodeAt([i]) === text.charCodeAt([i + 1]) + 32) {
        count += 1;
      }
    // }
  }
  return count;
}

console.log(duplicateCount(sampleStr3));
