import { all } from "@redux-saga/core/effects";
import { connectRouter, routerMiddleware, RouterState } from "connected-react-router";
import helloWorldReducer, { IHelloWorldState } from "Features/HelloWorld/reducer";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export interface IStoreProps {
  router: RouterState;
  helloWorldFeature: IHelloWorldState;
}

export const history = createBrowserHistory();

const rootReducer = combineReducers<IStoreProps>({
  router: connectRouter(history),
  helloWorldFeature: helloWorldReducer,
});

function* rootSagas() {
  yield all([
    // helloWorldSagas(),
  ]);
}

const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      saga,
    ),
  ),
);

saga.run(rootSagas);

export default store;
