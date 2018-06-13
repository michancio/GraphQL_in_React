import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import "cross-fetch/polyfill";
import ApolloClient from "apollo-boost";
require("dotenv").config();

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    });
  }
});

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="23" />
    <h2>
      Start editing to see some magic happen i start doing great things.{" "}
      {"\u2728"}
    </h2>
  </div>
);

render(<App />, document.getElementById("root"));
