'use strict';

const START_PLAYING = 'START_PLAYING',
      STOP_PLAYING = 'STOP_PLAYING';
import { setCurrentSong } from './currentSong';
import { setList } from './currentSongList';
import AUDIO from '../audio';

const mod = function (num, m) {
  return ((num % m) + m) % m;
};

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};

const startPlaying = function () {
  const action = {
    type: START_PLAYING
  };
  return action;
};

const stopPlaying = function () {
  const action = {
    type: STOP_PLAYING
  };
  return action;
};

const load = function (song, list) {
  const thunk = function (dispatch) {
    AUDIO.src = song.audioUrl;
    AUDIO.load();
    const currentSongAction = setCurrentSong(song);
    const setListAction = setList(list);
    dispatch(currentSongAction);
    dispatch(setListAction);
  };

  return thunk;
};

export const pause = function () {
  const thunk = function (dispatch) {
    AUDIO.pause();
    const stopPlayingAction = stopPlaying();
    dispatch(stopPlayingAction);
  };

  return thunk;
};

export const play = function () {
  const thunk = function (dispatch) {
    AUDIO.play();
    const startPlayingAction = startPlaying();
    dispatch(startPlayingAction);
  };
  return thunk;
};

export const startSong = function (song, list) {
  const thunk = function (dispatch) {
    const pauseAction = pause();
    const loadAction = load(song, list);
    const playAction = play();
    dispatch(pauseAction);
    dispatch(loadAction);
    dispatch(playAction);
  };
  return thunk;
};

export const nextSong = function () {
  const thunk = function (dispatch, getState) {
    dispatch(startSong(...skip(1, getState())));
  };

  return thunk;
};

export const prevSong = function () {
  const thunk = function (dispatch, getState) {
    dispatch(startSong(...skip(-1, getState())));
  };

  return thunk;
};

export default function isPlayingReducer (state = false, action) {
  switch (action.type) {
    case START_PLAYING: return true;
    case STOP_PLAYING: return false;
    default: return state;
  }
}
