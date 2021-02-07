import { Reducer } from "redux";
import { ActionType, IHelloWorldAction } from "./actions";

export interface IHelloWorldState {
  input: string;
}

const initialState: IHelloWorldState = {
  input: "World",
};

type ReducerType = Reducer<IHelloWorldState, IHelloWorldAction>;
const helloWorldReducer: ReducerType = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.HELLO_WORLD_INPUT_UPDATED: {
      return {
        input: payload.input,
      };
    }
    default: {
      return state;
    }
  }
};

export default helloWorldReducer;
