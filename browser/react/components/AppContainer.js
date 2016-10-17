'use strict';

import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = function (state, ownProps) {
  return {
    location: ownProps.location
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const AppContainer = statefulComponentCreator(App);
export default AppContainer;
