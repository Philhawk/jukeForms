'use strict';

import AUDIO from '../audio';

const SET_PROGRESS = 'SET_PROGRESS';

export const setProgress = function (progress) {
  const action = {
    type: SET_PROGRESS,
    progress
  };
  return action;
};

export const seek = function (decimal) {
  const thunk = function (dispatch) {
    AUDIO.currentTime = AUDIO.duration * decimal;
    const progressAction = setProgress(AUDIO.currentTime / AUDIO.duration);
    dispatch(progressAction);
  };
  return thunk;
};

export default function progressReducer (state = 0, action) {
  switch (action.type) {
    case SET_PROGRESS: return action.progress;
    default: return state;
  }
}
