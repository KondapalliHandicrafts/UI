import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ordersAction from '__SRC__/actions';
import Orders from './component';

const mapStatetoProps = state => ({
  ...state.ordersReducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(ordersAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Orders);
