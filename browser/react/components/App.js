'use strict';

import React from 'react';
import Sidebar from './sidebar/Sidebar';
import PlayerContainer from './player/PlayerContainer';

export default function (props) {

    const children = props.children;
    const location = props.location;

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          { children }
        </div>
        <PlayerContainer />
      </div>
    );
}