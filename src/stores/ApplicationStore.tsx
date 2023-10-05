import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import defaultReducer from "./default_store/default_reducer";

const ApplicationStore = configureStore({
  reducer: defaultReducer,
});

export type RootState = ReturnType<typeof ApplicationStore.getState>;
export type AppDispatch = typeof ApplicationStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default ApplicationStore;
