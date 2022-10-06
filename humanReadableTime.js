function humanReadable(seconds) {
    let hours = Math.floor(((seconds % 31536000)) / 3600);
    let minutes = Math.floor(
      (((seconds % 31536000) % 86400) % 3600) / 60);
    let numSec = ((((seconds % 31536000) % 86400) % 3600) % 60);
  
    return (
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (numSec < 10 ? "0" + numSec : numSec)
    );
}

console.log(humanReadable(35935));



// hours cannot exceed 99
// minutes and seconds cannot exceed 59