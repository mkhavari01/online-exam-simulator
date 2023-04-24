/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import useDebounce from "../handler/useDebounce";
import {
  selectAllAnswers,
  updateAnswer,
  userInput,
} from "../redux/answersSlice";

import { useSelector, useDispatch } from "react-redux";

const indexQuestion = 0;

const ShortAnswer = () => {
  const dispatch = useDispatch();

  const previousData = useSelector(selectAllAnswers);
  const userInputData = useSelector(userInput);

  const [value, setValue] = useState(userInputData[0] || "");

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
    console.log("we can send or dispatch here", obj);
    console.log("userInputData", userInputData);
  });

  function changeHandler({ target }) {
    dispatch(updateAnswer({ index: indexQuestion, value: target.value }));
    setValue(target.value);

    optimizedVersion(target.value);
  }

  useEffect(() => {
    previousData?.data?.[0].answer &&
      setValue(
        userInputData.find((item) => item.index === indexQuestion)?.value ||
          previousData?.data?.find((item) => item.examIndex === indexQuestion)
            ?.answer
      );
  }, [previousData]);

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
