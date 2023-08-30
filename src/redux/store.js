import { combineReducers, configureStore } from "@reduxjs/toolkit";
import demoSlice from "./slice/demoSlice";

export const reducer = combineReducers({
  demo: demoSlice,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
