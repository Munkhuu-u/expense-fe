import { useRouter } from "next/router";
import { Logo, Currency, Coin, Tick } from "../icons";

export const StepThree = ({ showLoader, setShowLoader, step, setStep }) => {
  const router = useRouter();
  return (
    <div class="w-1/2 m-auto bg-white lg:max-w-md flex flex-col items-center gap-[141px]">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-row justify-center items-center w-[240px]">
          <Logo />
          <h1 class="text-3xl font-semibold text-center text-gray-700">Geld</h1>
        </div>
        <ul className="steps" data-theme="light">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 w-[348px] ${
          showLoader == "step3" ? "block" : "hidden"
        }`}
      >
        <Tick />
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Good Job!
        </h1>
        <p className="text-slate-600 text-center text-xs mb-8">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <button
          class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
          onClick={() => {
            // setShowLoader("step4");
            router.push("./dashboard");
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};
