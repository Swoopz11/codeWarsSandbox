function isValidWalk(walk) {
  let ns = 0
  let ew = 0
  if (walk.length != 10) {
    return false
  }
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
        ns++
    } else if (walk[i] === "s") {
        ns--
    } else if (walk[i] === "e") {
        ew++
    } else if (walk[i] === "w") {
        ew--
    }
  } 
  return ns === ew;
}

console.log(
  isValidWalk(['n','s','n','s','n','s','n','s','n','w'])
);
