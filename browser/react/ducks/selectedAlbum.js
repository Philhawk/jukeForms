'use strict';

import { convertAlbum } from '../converters';

const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
const initialAlbum = {};

export const receiveAlbum = function (album) {
  const action = {
    type: RECEIVE_ALBUM,
    album: album 
  };
  return action;
};

export const fetchAndGoToAlbum = function (albumId) {
  const thunk = function (dispatch) {
    fetch(`/api/albums/${albumId}`)
      .then(res => res.json())
      .then(album => {
        const receiveAlbumAction = receiveAlbum(album);
        dispatch(receiveAlbumAction);
      });
  };
  return thunk;
};

export default function selectedAlbumReducer (state = initialAlbum, action) {
  switch (action.type) {
    case RECEIVE_ALBUM: return convertAlbum(action.album);
    default: return state;
  }
}
