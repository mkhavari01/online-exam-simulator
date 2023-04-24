/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@mui/material/TextField";
import { useState } from "react";
import useDebounce from "../handler/useDebounce";

const ShortAnswer = () => {
  const [value, setValue] = useState("");

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
    console.log("we can send or dispatch here", obj);
  });

  function changeHandler({ target }) {
    setValue(target.value);
    optimizedVersion(target.value);
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        onChange={changeHandler}
        value={value}
      />
    </>
  );
};

export { ShortAnswer };
