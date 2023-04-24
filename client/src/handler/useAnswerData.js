import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAnswers, userInput } from "../redux/answersSlice";

const useAnswerData = (indexQuestion) => {
  const dispatch = useDispatch();
  const previousData = useSelector(selectAllAnswers);
  const userInputData = useSelector(userInput);

  const [value, setValue] = useState("");

  useEffect(() => {
    previousData?.data?.[0].answer &&
      setValue(
        userInputData.find((item) => item.index === indexQuestion)?.value ||
          previousData?.data?.find((item) => item.examIndex === indexQuestion)
            ?.answer
      );
  }, [previousData]);

  return { previousData, userInputData, dispatch };
};

export { useAnswerData };
