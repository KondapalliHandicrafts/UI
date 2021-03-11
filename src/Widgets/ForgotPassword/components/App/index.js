import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ForgotPassword from './component';
import * as forgotPasswordAction from '../../actions/forgotPasswordActions';

const mapStatetoProps = state => ({
  ...state.forgotPasswordReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(forgotPasswordAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(ForgotPassword);
