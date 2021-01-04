import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    // used heavily to differentiate users
    user: userReducer,
  },
});
