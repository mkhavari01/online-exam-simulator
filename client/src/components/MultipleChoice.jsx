import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useAnswerData } from "../handler/useAnswerData";
import useDebounce from "../handler/useDebounce";
import { CircularProgress } from "@mui/material";
import { sendUpdateRequestAsync } from "../redux/updateSlice";
import { useDispatch, useSelector } from "react-redux";

function MultipleChoice({ indexQuestion }) {
  const dispatch = useDispatch();
  const { previousData, userInputData, updateAnswer } = useAnswerData();
  const [value, setValue] = React.useState("");

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
    dispatch(sendUpdateRequestAsync({ examIndex: indexQuestion, answer: obj }));
  });

  const isLoading = useSelector((state) => state.update.isLoading);

  function changeHandler({ target }) {
    updateAnswer(indexQuestion, target.value);
    setValue(target.value);
    optimizedVersion(target.value);
  }

  React.useEffect(() => {
    setValue(
      userInputData.find((item) => item.index === indexQuestion)?.value ||
        previousData?.data?.find((item) => item.examIndex === indexQuestion)
          ?.answer
    );
  }, [previousData]);
  return (
    <div className="shortAnswerholder">
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
      {isLoading && <CircularProgress />}
    </div>
  );
}

export { MultipleChoice };
