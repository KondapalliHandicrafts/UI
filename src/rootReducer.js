import { combineReducers } from '@reduxjs/toolkit';
// import homeReducer from './Widgets/Home/reducer/homeReducer';
import routingReducer from './Widgets/Routing/routingSlice';
import loginReducer from './Widgets/Login/loginSlice';
// import adminDashboardReducer from './Widgets/AdminDashboard/reducer/adminDashboardReducer';
// import registerReducer from './Widgets/Register/reducer/registerReducer';
// import forgotPasswordReducer from './Widgets/ForgotPassword/reducer/forgotPasswordReducer';
import resetPasswordReducer from './Widgets/ResetPassword/resetPasswordSlice';
// import changePasswordReducer from './Widgets/ChangePassword/reducer/changePasswordReducer';
// import profileReducer from './Widgets/Profile/reducer/profileReducer';
// import wishlistReducer from './Widgets/Wishlist/reducer/wishlistReducer';

export default combineReducers({
  // home: homeReducer,
  routing: routingReducer,
  login: loginReducer,
  // adminDashboard: adminDashboardReducer,
  // register: registerReducer,
  // forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer
  // changePassword: changePasswordReducer,
  // profile: profileReducer,
  // wishlist: wishlistReducer
});
