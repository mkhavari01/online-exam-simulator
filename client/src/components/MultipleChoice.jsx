import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useAnswerData } from "../handler/useAnswerData";
import useDebounce from "../handler/useDebounce";

const indexQuestion = 2;

function MultipleChoice() {
  const { previousData, userInputData, updateAnswer } = useAnswerData();
  const [value, setValue] = React.useState("");

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
    console.log("update db", obj);
  });

  function changeHandler({ target }) {
    updateAnswer(indexQuestion, target.value);
    setValue(target.value);
    optimizedVersion(target.value);
  }

  React.useEffect(() => {
    console.log("short answer");
    previousData?.data?.[0].answer &&
      setValue(
        userInputData.find((item) => item.index === indexQuestion)?.value ||
          previousData?.data?.find((item) => item.examIndex === indexQuestion)
            ?.answer
      );
  }, [previousData]);
  return (
    <FormControl>
      <RadioGroup
        onChange={changeHandler}
        column="true"
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}

export { MultipleChoice };
