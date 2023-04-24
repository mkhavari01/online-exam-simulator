import { useEffect } from "react";
import { StepperCompo } from "../components/StepperCompo";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAnswers,
  selectAllAnswers,
  selectAnswerStatus,
  selectError,
} from "../redux/answersSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllAnswers);
  const postStatus = useSelector(selectAnswerStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    // fetch whole data
    dispatch(fetchAnswers());
    console.log("wrapper answer compo", posts);
  }, [dispatch]);

  return (
    <>
      <StepperCompo />
    </>
  );
};

export { FormPage };
