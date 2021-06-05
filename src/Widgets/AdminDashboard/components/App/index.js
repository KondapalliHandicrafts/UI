import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminDashboardAction from '__SRC__/actions';
import AdminDashboard from './component';

const mapStatetoProps = state => ({
  ...state.adminDashboardReducer,
  isAdmin: state.loginReducer.isAdmin,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(adminDashboardAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminDashboard);
