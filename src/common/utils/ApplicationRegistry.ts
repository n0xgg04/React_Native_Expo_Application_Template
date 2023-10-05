import React from "react";
import appInfo from "#/app.json";
import { AppRegistry as Register } from "react-native";

export default function ApplicationRegistry(
  Component: React.ComponentType<any>,
) {
  Register.registerComponent(appInfo.expo.name, () => Component);
}
