function songDecoder(song){
  return song.split('WUB').filter(element => element).join(' ')
}

console.log(songDecoder("AWUBBWUBC"))
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
console.log(songDecoder("WUBAWUBBWUBCWUB"))