'use strict';

import React from 'react';
import SongsContainer from '../album/SongsContainer';

export default function (props) {
  
  const selectedArtist = props.selectedArtist;

  return (
    <div>
      <h3>Songs</h3>
      <SongsContainer songs={selectedArtist.songs} />
    </div>
  );
}