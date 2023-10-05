import React from "react";
import ScreenNameEnum from "@/common/provider/enum/ScreenNameEnum";

export interface ScreenInfo {
  name: ScreenNameEnum;
  component: React.FC<any> | React.JSX.Element<any>;
  options?: Object;
}

export interface UserAuthencationInterface {}

export type AppThemeMode = "light" | "dark";

export interface DefaultStoreInterface {
  theme: AppThemeMode;
  user: UserAuthencationInterface;
}
