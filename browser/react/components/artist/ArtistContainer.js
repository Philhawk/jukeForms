'use strict';

import { connect } from 'react-redux';
import Artist from './Artist';

const mapStateToProps = function (state, ownProps) {
  return {
    selectedArtist: state.selectedArtist,
    children: ownProps.children
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ArtistContainer = statefulComponentCreator(Artist);
export default ArtistContainer;
