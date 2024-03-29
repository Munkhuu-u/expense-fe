import { SignUp, Loader, StepOne, StepTwo, StepThree } from "../components";
import React, { useState } from "react";

export default function signUp() {
  const [showLoader, setShowLoader] = useState("signup");
  const [step, setStep] = useState(1);
  const [signupDuplicate, setSignupDuplicate] = useState(false);
  return (
    <div>
      <div
        className={`flex flex-row h-screen w-full ${
          showLoader == "signup" ? "block" : "hidden"
        }`}
      >
        <SignUp
          showLoader={showLoader}
          setShowLoader={setShowLoader}
          signupDuplicate={signupDuplicate}
          setSignupDuplicate={setSignupDuplicate}
        />
      </div>
      <div className={`${showLoader == "loader" ? "block" : "hidden"}`}>
        <Loader showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "step1" ? "pt-10 block" : "hidden"}`}>
        <StepOne
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div className={`${showLoader == "step2" ? "pt-10 block" : "hidden"}`}>
        <StepTwo
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div className={`${showLoader == "step3" ? "pt-10 block" : "hidden"}`}>
        <StepThree
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
    </div>
  );
}
