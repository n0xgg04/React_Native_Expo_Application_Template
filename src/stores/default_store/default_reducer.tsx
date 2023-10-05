import { createReducer } from "@reduxjs/toolkit";
import { DefaultStoreInterface } from "@/@types/interfaces";
import { AppThemeModeAction, UserAuthencationAction } from "./default_action";

const initialState: DefaultStoreInterface = {
  theme: "light",
  user: {},
};

const defaultReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(AppThemeModeAction, (state, action) => {
      state.theme = action.payload;
    })
    .addCase(UserAuthencationAction, (state, action) => {
      state.user = action;
    });
});

export default defaultReducer;
