"use client";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const ModelSignUp = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="mt-12 pb-10">
      <form action="">
        <div className="text-lg flex justify-end">
          Step {step} / {totalSteps}
        </div>

        {step === 1 && <StepOne nextStep={nextStep} />}
        {step === 2 && <StepTwo nextStep={nextStep} />}
        {step === 3 && <StepThree nextStep = {nextStep} />}
        {step === 4 && <StepFour />}

      </form>

      <div className="text-center mt-[6.5rem] text-white">
        Powered by <span className="text-[#FFCC4D]">Afro</span>
        <span>Runs</span>
      </div>
    </div>
  );
};

export default ModelSignUp;
