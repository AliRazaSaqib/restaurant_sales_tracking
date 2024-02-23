import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items/itemSlice";

const rootReducer = combineReducers({
  items: itemReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
