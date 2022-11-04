function domainName(url) {
  let sans = null;

  if (url.includes("//") && url.includes('www')) {
    sans = url.split("//www.");
  } else if (url.includes("www")) {
    sans = url.split("www.");
  } else if (url.includes("//")) {
    sans = url.split("//");
  } else {
    return sans = url.split('.')[0]
  }
  return sans[1].split(".")[0];
}

let goog = "http://www.google.com";
let xakep = "www.xakep.ru";
let argh = "thisstinks.tv"
console.log(domainName(goog));

// Codewars solution
// function domainName(url) {
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }