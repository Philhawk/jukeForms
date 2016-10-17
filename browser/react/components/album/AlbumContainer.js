'use strict';

import { connect } from 'react-redux';
import Album from './Album';

const mapStateToProps = function (state) {
  return {
    selectedAlbum: state.selectedAlbum
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const AlbumContainer = statefulComponentCreator(Album);
export default AlbumContainer;
