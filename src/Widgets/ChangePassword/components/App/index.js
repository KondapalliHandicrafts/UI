import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as changePasswordAction from '__SRC__/actions';
import ChangePassword from './component';

const mapStatetoProps = state => ({
  ...state.changePasswordReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(changePasswordAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(ChangePassword);
