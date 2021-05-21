import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAction from '__SRC__/actions';
import Cart from './component';

const mapStatetoProps = state => ({
  ...state.cartReducer
});

const mapDispatchtoProps = dispatch => bindActionCreators(cartAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
