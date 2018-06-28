var playlist = {
<<<<<<< HEAD
  artistName: 'songTitle',
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle'
  return playlist 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
=======
  artist: "song",
}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj, key) {
  delete playlist.key;
>>>>>>> cd43500582af510b54809dbafbc4eff2e64a0118
  return playlist;
}