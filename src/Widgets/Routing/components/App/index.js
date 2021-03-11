import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routing from './component';
import * as routingAction from '../../actions/routingActions';
import { logout } from '../../../Login/actions/loginActions';

const mapStatetoProps = state => ({
  ...state.routingReducer,
  isLoggedIn: state.loginReducer.isLoggedIn
});

const mapDispatchtoProps = dispatch => ({
  ...bindActionCreators(routingAction, dispatch),
  logout: history => dispatch(logout(history))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Routing);
