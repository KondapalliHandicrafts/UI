import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerAction from '__SRC__/actions';
import Register from './component';

const mapStatetoProps = state => ({
  ...state.registerReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(registerAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Register);
