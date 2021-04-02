import { combineReducers } from 'redux';
import homeReducer from './Widgets/Home/reducer/homeReducer';
import routingReducer from './Widgets/Routing/reducer/routingReducer';
import loginReducer from './Widgets/Login/reducer/loginReducer';
import addCardReducer from './Widgets/AddCard/reducer/addCardReducer';
import registerReducer from './Widgets/Register/reducer/registerReducer';
import forgotPasswordReducer from './Widgets/ForgotPassword/reducer/forgotPasswordReducer';
import resetPasswordReducer from './Widgets/ResetPassword/reducer/resetPasswordReducer';
import changePasswordReducer from './Widgets/ChangePassword/reducer/changePasswordReducer';
import profileReducer from './Widgets/Profile/reducer/profileReducer';
import wishlistReducer from './Widgets/Wishlist/reducer/wishlistReducer';

export default combineReducers({
  homeReducer,
  routingReducer,
  loginReducer,
  addCardReducer,
  registerReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  changePasswordReducer,
  profileReducer,
  wishlistReducer
});
