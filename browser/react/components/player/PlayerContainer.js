'use strict';

import { connect } from 'react-redux';
import Player from './Player';
import { nextSong, prevSong, pause, play } from '../../ducks/isPlaying';
import { seek } from '../../ducks/progress';

const mapStateToProps = function (state) {
  return {
    currentSong: state.currentSong,
    currentSongList: state.currentSongList,
    isPlaying: state.isPlaying,
    progress: state.progress
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    next: function () {
      dispatch(nextSong());
    },
    prev: function () {
      dispatch(prevSong());
    },
    toggle: function (isPlaying) {
      return isPlaying ? dispatch(pause()) : dispatch(play());
    },
    scrub: function (evt) {
      dispatch(seek(evt.nativeEvent.offsetX / evt.target.clientWidth));
    }
  };
};

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const PlayerContainer = statefulComponentCreator(Player);
export default PlayerContainer;