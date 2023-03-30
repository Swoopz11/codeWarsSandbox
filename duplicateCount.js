function duplicateCount(str) {
  try {
    return str
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g).length;
  } catch (e) {
    return 0;
  }
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("Indivisibilities"));
