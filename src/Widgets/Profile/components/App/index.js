import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileAction from '__SRC__/actions';
import Profile from './component';

const mapStatetoProps = state => ({
  ...state.profileReducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(profileAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
