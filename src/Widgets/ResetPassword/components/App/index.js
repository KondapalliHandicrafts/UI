import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResetPassword from './component';
import * as resetPasswordAction from '../../actions/resetPasswordActions';

const mapStatetoProps = state => ({
  ...state.resetPasswordReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(resetPasswordAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(ResetPassword);
