import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Continents from "./Continents";

const client = new ApolloClient({
  uri: process.env.API_URI,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <h1>React + Apollo Client</h1>
        <p>{process.env.API_URI}</p>
        <Continents />
      </ApolloProvider>
    </>
  );
}

export default App;
