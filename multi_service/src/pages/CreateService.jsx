import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Step1 from "../components/CreateService/Step1";
import Step2 from "../components/CreateService/Step2";
import Step3 from "../components/CreateService/Step3";

export default function CreateService() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const steps = ["1", "2", "3"];

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container py-5">
        <h1 className="mb-5" style={{ fontWeight: "600" }}>
          Create Service
        </h1>
        <Stepper activeStep={activeStep} className="mb-5">
          {steps.map((step, index) => {
            const stepProps: { completed?: boolean } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={step} {...stepProps}>
                <StepLabel></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 && <Step1 />}
        {activeStep === 1 && <Step2 />}
        {activeStep === 2 && <Step3 />}
        <div className="d-flex justify-content-end">
          {activeStep !== 0 && (
            <div
              className="primaryButtonOutline px-5 me-3"
              onClick={handleBack}
            >
              Back
            </div>
          )}
          {activeStep === steps.length - 1 ? (
            <div className="primaryButton px-5">Finish</div>
          ) : (
            <div className="primaryButton px-5" onClick={handleNext}>
              Next
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
