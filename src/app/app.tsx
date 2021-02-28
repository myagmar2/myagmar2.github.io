/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { jsx, ThemeProvider } from "@emotion/react";

import { theme } from "../theme";
import { Home } from "../pages/home";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
