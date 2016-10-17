'use strict';

import { convertArtist } from '../converters';

const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
const initialArtist = {};

export const receiveArtist = function (artist, songs, albums) {
  const action = {
    type: RECEIVE_ARTIST,
    artist: artist,
    songs: songs,
    albums: albums
  };
  return action;
};

export const fetchAndGoToArtist = function (artistId) {
  const thunk = function (dispatch) {
    let artist = `/api/artists/${artistId}`,
        songs = `${artist}/songs`,
        albums = `${artist}/albums`;

    Promise
      .all([fetch(artist), fetch(songs), fetch(albums)])
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(results => dispatch(receiveArtist(...results)));
  };

  return thunk;
};

export default function selectedArtistReducer (state = initialArtist, action) {
  switch (action.type) {
    case RECEIVE_ARTIST: return convertArtist(action);
    default: return state;
  }
}
