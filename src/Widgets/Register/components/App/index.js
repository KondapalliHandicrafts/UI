import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './component';
import * as registerAction from '../../actions/registerActions';

const mapStatetoProps = state => ({
  ...state.registerReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(registerAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Register);
