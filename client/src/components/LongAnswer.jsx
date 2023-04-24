import Textarea from "@mui/joy/Textarea";
import { useAnswerData } from "../handler/useAnswerData";
import { useEffect, useState } from "react";
import useDebounce from "../handler/useDebounce";

const indexQuestion = 1;

function LongAnswer() {
  const { previousData, userInputData, updateAnswer } = useAnswerData();
  const [value, setValue] = useState("");

  const [handleDebounce, optimizedVersion] = useDebounce((obj) => {
    console.log("update db", obj);
  });

  function changeHandler({ target }) {
    updateAnswer(indexQuestion, target.value);
    setValue(target.value);
    optimizedVersion(target.value);
  }

  useEffect(() => {
    console.log("short answer");
    previousData?.data?.[0].answer &&
      setValue(
        userInputData.find((item) => item.index === indexQuestion)?.value ||
          previousData?.data?.find((item) => item.examIndex === indexQuestion)
            ?.answer
      );
  }, [previousData]);

  return (
    <>
      <Textarea
        placeholder="Type anything…"
        onChange={changeHandler}
        value={value}
      />
    </>
  );
}

export { LongAnswer };
