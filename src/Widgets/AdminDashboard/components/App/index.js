import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminDashboardAction from '__SRC__/actions';
import AdminDashboard from './component';

const mapStatetoProps = state => ({
  ...state.adminDashboardReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(adminDashboardAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminDashboard);
