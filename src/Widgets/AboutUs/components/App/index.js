import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as aboutUsAction from '__SRC__/actions';
import AboutUs from './component';

const mapStatetoProps = state => ({
  ...state.aboutUsReducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(aboutUsAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(AboutUs);
