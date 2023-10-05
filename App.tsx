import React from "react";
import ApplicationLoadProvider from "@/common/provider/ApplicationLoader";
import StoreProvider from "@/common/provider/StoreProvider";
import ReactQueryProvider from "@/common/provider/ReactQueryProvider";
import { RouterProvider } from "@/common/provider/RouterProvider";
import ApolloClientProvider from "@/common/provider/ApolloProvider";
import ApplicationRegistry from "@/common/utils/ApplicationRegistry";

export default function App(): React.JSX.Element {
  return (
    <ApplicationLoadProvider>
      <StoreProvider>
        <ReactQueryProvider>
          <ApolloClientProvider>
            <RouterProvider />
          </ApolloClientProvider>
        </ReactQueryProvider>
      </StoreProvider>
    </ApplicationLoadProvider>
  );
}

ApplicationRegistry(App);
