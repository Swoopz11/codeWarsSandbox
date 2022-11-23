function areYouPlayingBanjo(name) {
  return name.search(/r/i) === 0 ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('Ronda'))
console.log(areYouPlayingBanjo('rito'))
console.log(areYouPlayingBanjo('Autumn'))