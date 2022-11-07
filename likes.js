let namesArr1 = [];
let namesArr2 = ["Hunter"];
let namesArr3 = ["Kenzie", "Autumn"];
let namesArr4 = ["James", "Lisa", "inlaws"];
let namesArr5 = [
  "Sara",
  "Steve",
  "Kathryn",
  "Rachel",
  "Michelle",
  "Jessica",
  "Kenzie",
  "Matt",
];

function likes(names) {
  let sayWhat = null;

  if (names.length === 0) {
    sayWhat = "no one likes this";
  } else if (names.length === 1) {
    sayWhat = names[0] + " likes this";
  } else if (names.length === 2) {
    sayWhat = names[0] + " and " + names[1] + " like this";
  } else if (names.length === 3) {
    sayWhat = names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    sayWhat =
      names[0] +
      ", " +
      names[1] +
      " and " +
      (names.length - 2) +
      " others like this";
  }

  return sayWhat;
}

console.log(likes(namesArr1));
console.log(likes(namesArr2));
console.log(likes(namesArr3));
console.log(likes(namesArr4));
console.log(likes(namesArr5));
