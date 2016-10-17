'use strict';

const RECEIVE_SONGS = 'RECEIVE_SONGS';
const initialSongs = [];

export const receiveSongs = function (songs) {
  const action = {
    type: RECEIVE_SONGS,
    songs: songs
  };
  return action;
};

export const fetchSongs = function () {
  const thunk = function (dispatch) {
    return fetch('/api/songs')
      .then(res => res.json())
      .then(songs => {
        const receiveSongsAction = receiveSongs(songs)
        dispatch(receiveSongsAction);
      });
  };

  return thunk;
};

export default function songsReducer (state = initialSongs, action) {
  switch (action.type) {
    case RECEIVE_SONGS: return action.songs;
    default: return state;
  }
}
