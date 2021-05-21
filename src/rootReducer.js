import { combineReducers } from 'redux';
import homeReducer from './Widgets/Home/reducer/homeReducer';
import routingReducer from './Widgets/Routing/reducer/routingReducer';
import loginReducer from './Widgets/Login/reducer/loginReducer';
import adminDashboardReducer from './Widgets/AdminDashboard/reducer/adminDashboardReducer';
import registerReducer from './Widgets/Register/reducer/registerReducer';
import forgotPasswordReducer from './Widgets/ForgotPassword/reducer/forgotPasswordReducer';
import resetPasswordReducer from './Widgets/ResetPassword/reducer/resetPasswordReducer';
import changePasswordReducer from './Widgets/ChangePassword/reducer/changePasswordReducer';
import profileReducer from './Widgets/Profile/reducer/profileReducer';
import wishlistReducer from './Widgets/Wishlist/reducer/wishlistReducer';
import cartReducer from './Widgets/Cart/reducer/cartReducer';
import ordersReducer from './Widgets/Orders/reducer/ordersReducer';

export default combineReducers({
  homeReducer,
  routingReducer,
  loginReducer,
  adminDashboardReducer,
  registerReducer,
  forgotPasswordReducer,
  cartReducer,
  resetPasswordReducer,
  changePasswordReducer,
  profileReducer,
  ordersReducer,
  wishlistReducer
});
