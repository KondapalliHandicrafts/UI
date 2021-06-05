import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '__SRC__/actions';
import Login from './component';

const mapStatetoProps = state => ({
  ...state.loginReducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
