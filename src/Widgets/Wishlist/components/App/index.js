import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wishlistAction from '__SRC__/actions';
import Wishlist from './component';

const mapStatetoProps = state => ({
  ...state.wishlistReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(wishlistAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(Wishlist);
