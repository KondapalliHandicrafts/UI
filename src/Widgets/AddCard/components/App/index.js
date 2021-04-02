import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as addCardAction from '__SRC__/actions';
import AddCard from './component';

const mapStatetoProps = state => ({
  ...state.addCardReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(addCardAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(AddCard);
