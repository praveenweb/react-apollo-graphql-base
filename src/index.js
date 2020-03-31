import React from 'react';
import { render } from 'react-dom';

import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

import App from './App';

const client = new ApolloClient({
    link: new WebSocketLink({
      uri: "ws://localhost:8080/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {} // add headers here
        }
      }
    }),
    cache: new InMemoryCache()
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));
