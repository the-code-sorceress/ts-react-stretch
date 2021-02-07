import { ConnectedRouter } from "connected-react-router";
import Pages from "Pages/Pages";
import HomePage from "Pages/HomePage";
import * as React from "react";
import { Route, Switch } from "react-router";
import { history } from "./Store";

const Routes: React.FunctionComponent = () => { 
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={Pages.HOME} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;