import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { ShortAnswer, LongAnswer, MultipleChoice } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useAnswerData } from "../handler/useAnswerData";
import { finalAnswer } from "../redux/finalAnswerSlice";
import { clearAnswers } from "../redux/answersSlice";
import { CircularProgress } from "@mui/material";

const steps = [
  {
    label: "Enter Your Name (short answer)",
    description: <ShortAnswer indexQuestion={0} />,
  },
  {
    label: "Tell something about yourself (Long answer)",
    description: <LongAnswer indexQuestion={1} />,
  },
  {
    label: "What is your gender (Multiple choice)",
    description: <MultipleChoice indexQuestion={2} />,
  },
  {
    label: "what is your family name? (short answer)",
    description: <ShortAnswer indexQuestion={3} />,
  },
];

function StepperCompo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.answers.answers.data);
  const loading = useSelector((state) => state.finalAnswer.loading);
  // const updateError = useSelector((state) => state.update.isError);

  // console.log("Error ", updateError);

  const { previousData, userInputData, updateAnswer } = useAnswerData();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const finalSubmit = () => {
    console.log(state);
    console.log(userInputData);

    let inputArray = [...userInputData, ...state];

    function getUniqueArray(arr) {
      const indexMap = new Map();
      const examIndexMap = new Map();

      // Iterate through the array
      arr.forEach((obj) => {
        if (obj.index !== undefined) {
          // If object has an "index" key
          indexMap.set(obj.index, obj);
        } else if (obj.examIndex !== undefined) {
          // If object has an "examIndex" key
          examIndexMap.set(obj.examIndex, obj);
        }
      });

      // Return the objects with unique "index" or "examIndex" values
      const result = [];
      indexMap.forEach((value) => result.push(value));
      examIndexMap.forEach((value, key) => {
        if (!indexMap.has(key)) {
          result.push(value);
        }
      });
      return result;
    }

    function filterAndMap(arr) {
      const indexObj = arr.find((obj) => obj.hasOwnProperty("index"));
      const examIndexObj = arr.find((obj) => obj.hasOwnProperty("examIndex"));
      if (indexObj && examIndexObj) {
        arr = arr.filter(
          (obj) =>
            !obj.hasOwnProperty("examIndex") || obj.examIndex !== indexObj.index
        );
      }
      const result = [];
      for (const obj of arr) {
        if (obj.hasOwnProperty("index")) {
          result.push({ answer: obj.value, examIndex: obj.index });
        } else if (obj.hasOwnProperty("examIndex")) {
          result.push({ answer: obj.answer, examIndex: obj.examIndex });
        }
      }
      return result;
    }

    dispatch(finalAnswer(filterAndMap(getUniqueArray(inputArray))));
    // dispatch(clearAnswers());
    setActiveStep(0);
  };

  return (
    <section className="wrapper-boxes-holder">
      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }} className="boxes-holder">
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box
            sx={{
              background: "#fff",
              height: 255,
              maxWidth: 400,
              width: "100%",
              p: 2,
              overflow: "auto",
            }}
          >
            {steps[activeStep].description}
          </Box>
          {activeStep === steps.length - 1 && (
            <div className="main-button-wrapper">
              <Button
                style={{
                  background: "#fff",
                  color: "#2b85c3",
                  margin: "10px 0",
                }}
                className="main-button"
                variant="contained"
                onClick={finalSubmit}
              >
                Submit
              </Button>
            </div>
          )}

          <MobileStepper
            style={{ background: "#e0e0e0" }}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      )}
    </section>
  );
}

export { StepperCompo };
