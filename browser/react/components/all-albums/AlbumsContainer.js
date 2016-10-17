'use strict';

import { connect } from'react-redux';
import Albums from'./Albums';

const mapStateToProps = function (state) {
  return {
    albums: state.albums
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const AlbumsContainer = statefulComponentCreator(Albums);
export default AlbumsContainer;
