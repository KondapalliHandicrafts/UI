import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeAction from '__SRC__/actions';
import Home from './component';

const mapStatetoProps = state => ({
  ...state.homeReducer,
  isLoggedIn: state.loginReducer.isLoggedIn,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch => bindActionCreators(homeAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
