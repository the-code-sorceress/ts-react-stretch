import { IStoreProps } from "Global/Store";
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from "react-redux";
import HelloWorld from "./HelloWorld";
import { inputUpdated } from "./actions";
import IDispatchProps from "./IDispatchProps";
import IStateProps from "./IStateProps";
import { getInput } from "./selectors";

const mapStateToProps: MapStateToPropsParam<IStateProps, Record<string, unknown>, IStoreProps> = (store) => ({
  input: getInput(store),
});

const mapDispatchToProps: MapDispatchToPropsParam<IDispatchProps, Record<string, unknown>> = (dispatch) => ({
  updateInput: (input) => dispatch(inputUpdated(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
