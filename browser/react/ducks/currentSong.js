'use strict';

const SET_CURRENT_SONG = 'SET_CURRENT_SONG'; 
const initialCurrentSong = {};

export const setCurrentSong = function (song) {
  const action = {
    type: SET_CURRENT_SONG,
    song: song
  };
  return action;
};

export default function currentSongReducer (state = initialCurrentSong, action) {  
  switch (action.type) {
    case SET_CURRENT_SONG: return action.song;
    default: return state;
  }
}
