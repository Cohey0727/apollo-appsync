import React from "react";
import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL!,
  headers: { "X-API-KEY": process.env.REACT_APP_GRAPHQL_API_KEY! },
  cache: new InMemoryCache(),
});

const ApolloProvider: React.FC = ({ children }) => {
  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
};

export default ApolloProvider;
