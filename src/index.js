import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Planets from "./components/Planets";
import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://empowering-social-advocacy.herokuapp.com/v1/graphql",
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Planets />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
