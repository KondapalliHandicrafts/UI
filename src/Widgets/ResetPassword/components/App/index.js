import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as resetPasswordAction from '__SRC__/actions';
import ResetPassword from './component';

const mapStatetoProps = state => ({
  ...state.resetPasswordReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(resetPasswordAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(ResetPassword);
