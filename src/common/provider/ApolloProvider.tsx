import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import ApplicationConfig from "@/common/config/ApplicationConfig";

const client = new ApolloClient({
  uri: ApplicationConfig.graphql.endpoint,
  cache: new InMemoryCache(),
});

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
