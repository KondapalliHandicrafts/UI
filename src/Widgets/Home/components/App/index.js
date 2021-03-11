import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './component';
import * as homeAction from '../../actions/homeActions';

const mapStatetoProps = state => ({
  ...state.homeReducer,
  isLoggedIn: state.loginReducer.isLoggedIn
});

const mapDispatchtoProps = dispatch => bindActionCreators(homeAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
