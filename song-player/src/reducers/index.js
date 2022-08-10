// REDUCERS

const songsReducer = () => {
  // returns static array of songs
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macerena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It That Way', duration: '1:45' }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}