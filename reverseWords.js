function reverseWords(str) {
 let reverse = []
 let setup = str.split(' ')
 for (let i = 0; i < setup.length; i++) {
  reverse.push(setup[i].split('').reverse().join(''))
 }
 return reverse.join(' ')
}

console.log(reverseWords('Hello World'))

