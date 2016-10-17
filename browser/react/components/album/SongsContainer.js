'use strict';

import { connect } from 'react-redux';
import Songs from './Songs';
import { startSong, pause, play } from '../../ducks/isPlaying';

const mapStateToProps = function (state, ownProps) {
  return {
    isPlaying: state.isPlaying,
    currentSong: state.currentSong,
    songs: ownProps.songs
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggle: function (selectedSong, selectedSongList, currentSong, isPlaying) {
      if (selectedSong.id !== currentSong.id) {
        const startSongAction = startSong(selectedSong, selectedSongList);
        dispatch(startSongAction);
      }
      else if (isPlaying) {
        const pauseAction = pause();
        dispatch(pauseAction);
      }
      else {
        const playAction = play();
        dispatch(playAction);
      }
    }
  };
};

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const SongsContainer = statefulComponentCreator(Songs);
export default SongsContainer;
