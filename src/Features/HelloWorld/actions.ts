export enum ActionType {
  HELLO_WORLD_INPUT_UPDATED = "HELLO_WORLD_INPUT_UPDATED",
}

export interface IInputUpdated {
  type: ActionType.HELLO_WORLD_INPUT_UPDATED;
  payload: { 
    input: string;
  }
}

export const inputUpdated = (input: string): IInputUpdated => ({
  type: ActionType.HELLO_WORLD_INPUT_UPDATED,
  payload: { input },
});

export type IHelloWorldAction = IInputUpdated;
  // | IAnotherActionInterface
  // | etc ;