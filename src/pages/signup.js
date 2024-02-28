import { SignUp, Loader, StepOne } from "../components";
import React, { useState } from "react";

export default function signup() {
  const [showLoader, setShowLoader] = useState("signup");
  const [step, setStep] = useState(1);
  return (
    <div>
      <div
        className={`flex flex-row h-screen w-full ${
          showLoader == "signup" ? "block" : "hidden"
        }`}
      >
        <SignUp showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "loader" ? "block" : "hidden"}`}>
        <Loader showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "stepOne" ? "pt-10 block" : "hidden"}`}>
        <StepOne setStep={setStep} step={step} />
      </div>
    </div>
  );
}
