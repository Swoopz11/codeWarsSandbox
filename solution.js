function solution(str, ending) {
  return str.slice(str.length - ending.length) === ending
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))