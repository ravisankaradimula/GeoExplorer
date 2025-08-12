// client/src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here as your app grows
  },
});
