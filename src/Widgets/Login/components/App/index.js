import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './component';
import * as loginAction from '../../actions/loginActions';

const mapStatetoProps = state => ({
  ...state.loginReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(loginAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
