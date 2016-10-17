'use strict';

import { convertAlbums } from '../converters';

const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
const initialAlbums = [];

export const receiveAlbums = function (albums) {
  const action = {
    type: RECEIVE_ALBUMS,
    albums: albums 
  };
  return action;
};

export default function albumsReducer (state = initialAlbums, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS: return action.albums.map(convertAlbums);
    default: return state;
  }
};
