'use strict';

import React from 'react';
import { 
  Router, 
  Route, 
  IndexRedirect, 
  browserHistory 
} from 'react-router';
import {
  onAlbumsEnter, 
  onAppEnter, 
  onArtistsEnter
} from './enter-hooks';
import App from './components/App';
import AlbumsContainer from './components/all-albums/AlbumsContainer';
import AlbumContainer from './components/album/AlbumContainer';
import ArtistsContainer from './components/all-artists/ArtistsContainer';
import ArtistContainer from './components/artist/ArtistContainer';
import ArtistAlbums from './components/artist/ArtistAlbums';
import ArtistSongs from './components/artist/ArtistSongs';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onAppEnter}>
      <IndexRedirect to="albums" />
      <Route path="albums" component={AlbumsContainer} />
      <Route path="albums/:id" component={AlbumContainer} onEnter={onAlbumsEnter} />
      <Route path="artists" component={ArtistsContainer} />
      <Route path="artists/:id" component={ArtistContainer} onEnter={onArtistsEnter}>
        <Route path="albums" component={ArtistAlbums} />
        <Route path="songs" component={ArtistSongs} />
      </Route>
    </Route>
  </Router>
);