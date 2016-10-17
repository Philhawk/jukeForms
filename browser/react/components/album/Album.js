'use strict';

import React from 'react';
import SongsContainer from './SongsContainer';

export default function (props) {

  const selectedAlbum = props.selectedAlbum;

  return (
    <div className="album">
      <div>
        <h3>{ selectedAlbum.name }</h3>
        <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
      </div>
      <SongsContainer songs={selectedAlbum.songs} />
    </div>
  );
}