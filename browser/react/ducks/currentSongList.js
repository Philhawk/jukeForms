'use strict';

const SET_LIST = 'SET_LIST'; 
const initialSongList = [];

export const setList = function (songList) {
  const action = {
    type: SET_LIST,
    songList: songList
  };
  return action;
};

export default function currentSongListReducer (state = initialSongList, action) {
  switch (action.type) {
    case SET_LIST: return action.songList;
    default: return state;
  }
}
