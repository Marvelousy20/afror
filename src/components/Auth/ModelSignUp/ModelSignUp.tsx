"use client";

import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const ModelSignUp = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

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
      </form>

      <div className="text-center mt-[6.5rem] text-white">
        Powered by <span className="text-[#FFCC4D]">Afro</span>
        <span>Runs</span>
      </div>
    </div>
  );
};

export default ModelSignUp;