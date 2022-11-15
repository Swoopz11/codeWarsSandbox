let str1 = "This website is for losers LOL!";
let str2 = "No offense but,\nYour writing is among the worst I've ever read";
let str3 = "What are you, a communist?";

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

console.log(disemvowel(str1))
console.log(disemvowel(str2))
console.log(disemvowel(str3))