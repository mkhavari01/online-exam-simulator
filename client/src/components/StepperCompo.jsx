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
    let result = [
      ...state.map((itemX) => {
        const itemY = userInputData.find(
          (itemY) => itemY.index === itemX.index
        );
        return itemY ? itemY : itemX;
      }),
      ...userInputData.filter(
        (itemY) => !state.some((itemX) => itemX.index === itemY.index)
      ),
    ];

    console.log("rrr", result);

    result = result.map((el) => {
      return {
        examIndex: el.index || el.examIndex || 0,
        answer: el.value || el.answer,
      };
    });

    // console.log("replaces", result);
    dispatch(finalAnswer(result));
    dispatch(clearAnswers());
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
