function isIsogram(str) {
  let newArr = str.split("").map((ele, ind, arr) => {
    return arr.indexOf(ele) === arr.lastIndexOf(ele);
  });

//   return newArr.includes(false) ? false : true
return str.match(/hel/g)
}

console.log(isIsogram("hello"));