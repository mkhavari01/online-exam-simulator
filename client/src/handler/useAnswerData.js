import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllAnswers,
  updateAnswer,
  userInput,
  fetchAnswers,
} from "../redux/answersSlice";

const useAnswerData = () => {
  const dispatch = useDispatch();

  const previousData = useSelector(selectAllAnswers);
  const userInputData = useSelector(userInput);

  useEffect(() => {
    if (!previousData?.data) {
      dispatch(fetchAnswers());
    }
  }, []);

  const updateAnswerData = (index, value) => {
    dispatch(updateAnswer({ index, value }));
  };

  return { previousData, userInputData, updateAnswer: updateAnswerData };
};

export { useAnswerData };
