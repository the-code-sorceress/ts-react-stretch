import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "Global/Routes";
import store from "Global/Store";

const Application = () => (
  <Provider store={store}>
        <Routes />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById("root"));
