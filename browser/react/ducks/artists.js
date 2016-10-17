'use strict';

const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
const initialArtists = [];

export const receiveArtists = function (artists) {
  const action = {
    type: RECEIVE_ARTISTS,
    artists: artists
  };
  return action;
};

export default function artistsReducer (state = initialArtists, action) {
  switch (action.type) {
    case RECEIVE_ARTISTS: return action.artists;
    default: return state;
  }
}
