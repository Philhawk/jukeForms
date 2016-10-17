'use strict';

import store from './store';
import AUDIO from './audio';

import { fetchAndGoToAlbum } from './ducks/selectedAlbum';
import { fetchAndGoToArtist } from './ducks/selectedArtist';
import { receiveAlbums } from './ducks/albums';
import { receiveArtists } from './ducks/artists';
import { setProgress } from './ducks/progress';
import { nextSong } from './ducks/isPlaying';

const load = function (albums, artists) {
  let albumsAction = receiveAlbums(albums);
  let artistsAction = receiveArtists(artists);
  store.dispatch(albumsAction);
  store.dispatch(artistsAction);
};

const attachListeners = function () {
  AUDIO.addEventListener('ended', function () {
    let action = nextSong();
    store.dispatch(action);
  });
  
  AUDIO.addEventListener('timeupdate', function () {
    let newProgress = AUDIO.currentTime / AUDIO.duration;
    let action = setProgress(newProgress);
    store.dispatch(action);
  });
};

export const onAlbumsEnter = function (nextRouterState) {
  let id = nextRouterState.params.id;
  let thunk = fetchAndGoToAlbum(id);
  store.dispatch(thunk);
};

export const onArtistsEnter = function (nextRouterState) {
  let id = nextRouterState.params.id;
  let thunk = fetchAndGoToArtist(id);
  store.dispatch(thunk);
};

export const onAppEnter = function () {
  attachListeners();
  return Promise
    .all([
      fetch('/api/albums').then(res => res.json()),
      fetch('/api/artists').then(res => res.json())
    ])
    .then(results => {
      let albums = results[0],
          artists = results[1];
      load(albums, artists);
    });
};
