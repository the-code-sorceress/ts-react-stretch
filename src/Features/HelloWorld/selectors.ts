import { IStoreProps } from "Global/Store";

export const getInput = (store: IStoreProps): string => store.helloWorldFeature.input
