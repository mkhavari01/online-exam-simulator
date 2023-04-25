import { useEffect } from "react";
import { StepperCompo } from "../components/StepperCompo";
import { useDispatch } from "react-redux";
import { fetchAnswers } from "../redux/answersSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch whole data
    dispatch(fetchAnswers());
  }, [dispatch]);

  return (
    <>
      <StepperCompo />
    </>
  );
};

export { FormPage };
