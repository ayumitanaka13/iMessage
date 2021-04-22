import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import chatReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
