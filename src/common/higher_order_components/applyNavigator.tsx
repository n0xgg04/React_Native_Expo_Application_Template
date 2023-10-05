import React from "react";
import useAppNavigator from "@Hooks/useAppNavigator";

export default function applyNavigator(Component: React.ComponentType<any>) {
  return function ({ navigation, ...props }: any) {
    const navigator = useAppNavigator({ navigation });
    return <Component {...props} />;
  };
}
