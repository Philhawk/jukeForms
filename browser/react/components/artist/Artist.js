'use strict';

import React from 'react';
import { Link } from 'react-router';
import SongsContainer from '../album/SongsContainer';

export default function (props) {
  const selectedArtist = props.selectedArtist;
  const children = props.children;

  return (
    <div>
      <h3>{ selectedArtist.name }</h3>
      <ul className="nav nav-tabs">
        <li>
          <Link to={`/artists/${selectedArtist.id}/albums`} activeClassName="active">Albums</Link>
        </li>
        <li>
          <Link to={`/artists/${selectedArtist.id}/songs`} activeClassName="active">Songs</Link>
        </li>
      </ul>
      { children ? React.cloneElement(children, {selectedArtist}) : null }
    </div>
  );
}