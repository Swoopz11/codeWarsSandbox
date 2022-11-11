function jadenCase(str) {
  return str.split(" ").map((element) => element[0].toUpperCase() + element.slice(1)).join(" ");
}

// String.prototype.toJadenCase = function () {

// };

console.log(jadenCase("Woah Peter! Is that really just figuring that out? He looks so confident and steady! Way to go, buddy!"));
