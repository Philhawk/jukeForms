'use strict';

import { connect } from 'react-redux';
import Artists from './Artists';

const mapStateToProps = function (state) {
  return {
    artists: state.artists
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ArtistsContainer = statefulComponentCreator(Artists);
export default ArtistsContainer;
