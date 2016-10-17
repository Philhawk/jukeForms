'use strict';

import { combineReducers } from 'redux';
import artistsReducer from './artists';
import albumsReducer from './albums';
import currentSongReducer from './currentSong';
import currentSongListReducer from './currentSongList';
import isPlayingReducer from './isPlaying';
import progressReducer from './progress';
import selectedAlbumReducer from './selectedAlbum';
import selectedArtistReducer from './selectedArtist';
import songsReducer from './songs';

export default combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  currentSong: currentSongReducer,
  currentSongList: currentSongListReducer,
  isPlaying: isPlayingReducer,
  progress: progressReducer,
  selectedAlbum: selectedAlbumReducer,
  selectedArtist: selectedArtistReducer,
  songs: songsReducer
});