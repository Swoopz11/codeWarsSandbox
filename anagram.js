function anagrams(word, words) {
  let match = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").sort().join("") === word.split("").sort().join("")) {
      match.push(words[i]);
    }
  }
  return match;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
