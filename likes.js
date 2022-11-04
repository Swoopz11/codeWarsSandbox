let namesArr1 = [];
let namesArr2 = ["Hunter"];
let namesArr3 = ["Kenzie", "Autumn"];
let namesArr4 = ["James", "Lisa", "Sara", "Steve", "Kathryn"];
let namesArr5 = ["Rachel", "Michelle", "Jessica", "Kenzie", "Matt", "Inlaws"];

function likes(names) {
  let sayWhat = null;

  if (names.length === 0) {
    sayWhat = "no one likes this";
  } else if (names.length === 1) {
    sayWhat = names[0] + " likes this";
  } else {
    sayWhat =
      names.length <= 2
        ? names[0] + " and " + names[1] + " like this "
        : names[0] +
          ", " +
          names[1] +
          " and " +
          (names.length - 2) +
          " others like this";
  }

  return sayWhat;
}

console.log(likes(namesArr5));
