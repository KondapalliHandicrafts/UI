import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddCard from './component';
import * as addCardAction from '../../actions/addCardActions';

const mapStatetoProps = state => ({
  ...state.addCardReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(addCardAction, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(AddCard);
