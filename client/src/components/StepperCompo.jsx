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
];

function StepperCompo() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className="wrapper-boxes-holder">
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
    </section>
  );
}

export { StepperCompo };
