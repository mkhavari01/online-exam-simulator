/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Textarea from "@mui/joy/Textarea";
import { useAnswerData } from "../handler/useAnswerData";
import { useEffect, useState } from "react";
import useDebounce from "../handler/useDebounce";
import { CircularProgress } from "@mui/material";
import { sendUpdateRequestAsync } from "../redux/updateSlice";
import { useDispatch, useSelector } from "react-redux";

function LongAnswer({ indexQuestion }) {
  const dispatch = useDispatch();
  const { previousData, userInputData, updateAnswer } = useAnswerData();
  const [value, setValue] = useState("");

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
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
        <Textarea
          placeholder="Type anything…"
          onChange={changeHandler}
          value={value}
        />
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
}

export { LongAnswer };
