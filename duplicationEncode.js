function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((element, index, array) => {
      return array.indexOf(element) === array.lastIndexOf(element) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncode("recede"));
