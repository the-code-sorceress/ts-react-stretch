import { TextField, Typography } from "@material-ui/core";
import * as React from "react";
import { ChangeEvent } from "react";
import IDispatchProps from "./IDispatchProps";
import IStateProps from "./IStateProps";

const HelloWorld: React.FunctionComponent<IDispatchProps & IStateProps> = ({input, updateInput}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateInput(event.target.value);
  }

  return (
    <>
      <Typography variant="h1">Hello {input}</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />
    </>
  );
};

export default HelloWorld;
