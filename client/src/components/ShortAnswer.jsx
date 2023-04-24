import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import useDebounce from "../handler/useDebounce";
import { useAnswerData } from "../handler/useAnswerData";
import CircularProgress from "@mui/material/CircularProgress";
import { sendUpdateRequestAsync } from "../redux/updateSlice";
import { useDispatch, useSelector } from "react-redux";

const ShortAnswer = ({ indexQuestion }) => {
  const { previousData, userInputData, updateAnswer } = useAnswerData();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
    console.log("update db", obj);
    dispatch(sendUpdateRequestAsync({ examIndex: indexQuestion, answer: obj }));
  });

  const isLoading = useSelector((state) => state.update.isLoading);

  function changeHandler({ target }) {
    updateAnswer(indexQuestion, target.value);
    setValue(target.value);
    optimizedVersion(target.value);
  }

  useEffect(() => {
    setValue(
      userInputData.find((item) => item.index === indexQuestion)?.value ||
        previousData?.data?.find((item) => item.examIndex === indexQuestion)
          ?.answer
    );
  }, [previousData]);

  return (
    <>
      <div className="shortAnswerholder">
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange={changeHandler}
          value={value}
        />
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
};

export { ShortAnswer };
