import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardItemAction from '__SRC__/actions';
import CardItem from './component';

const mapStatetoProps = state => ({
  ...state.cardItemReducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(cardItemAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(CardItem);
