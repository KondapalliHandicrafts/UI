import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as forgotPasswordAction from '__SRC__/actions';
import ForgotPassword from './component';

const mapStatetoProps = state => ({
  ...state.forgotPasswordReducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(forgotPasswordAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(ForgotPassword);
