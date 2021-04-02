import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routingAction from '__SRC__/actions';
import Routing from './component';

const mapStatetoProps = state => ({
  ...state.routingReducer,
  isLoggedIn: state.loginReducer.isLoggedIn
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(routingAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Routing);
