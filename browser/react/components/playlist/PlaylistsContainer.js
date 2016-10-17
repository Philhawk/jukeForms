'use strict';

import { connect } from'react-redux';
import Playlists from './Playlists';
import { addPlaylist } from '../../ducks/playlists';

const mapStateToProps = function (state) {
  return {
    playlists: state.playlists
  };
};

const mapDispatchToProps = function (dispatch) {

  return {
    handleSubmit: function (formInput) {
      const newPlaylist = {
        id: formInput,
        title: formInput
      }
      const action = addPlaylist(newPlaylist);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists)
