import { createAction } from "@reduxjs/toolkit";
import { AppThemeMode, UserAuthencationInterface } from "@/@types/interfaces";

const AppThemeModeAction = createAction<AppThemeMode>("appThemeMode");
const UserAuthencationAction =
  createAction<UserAuthencationInterface>("userAuthencation");

export { AppThemeModeAction, UserAuthencationAction };
