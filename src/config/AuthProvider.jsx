"use client";

import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://parkingshare-server.vercel.app/api/v1/parkingshare",
  cache: new InMemoryCache(),
});

const AuthProvider = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>{children}</SessionProvider>
    </ApolloProvider>
  );
};

export default AuthProvider;
