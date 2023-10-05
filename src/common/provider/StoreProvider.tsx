import { Provider } from "react-redux";
import store from "@Stores/ApplicationStore";
import React from "react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
