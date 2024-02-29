import { useRouter } from "next/router";
import { Logo, Currency, Coin } from "../icons";

export const StepTwo = ({ showLoader, setShowLoader, step, setStep }) => {
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
          <li className="step ">Finish</li>
        </ul>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 w-[348px] ${
          showLoader == "step2" ? "block" : "hidden"
        }`}
      >
        <Coin />
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Set up your cash Balance
        </h1>
        <input
          type="text"
          placeholder="Enter Your Cash Balance"
          className="input input-bordered w-full max-w-xs"
        />
        <p className="text-slate-600 text-left text-xs">
          How much cash do you have in your wallet?
        </p>
        <button
          class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
          onClick={() => {
            setShowLoader("step3");
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

// StepOne.getLayout = function getLayout(page) {
//   return <SignUp>{page}</SignUp>;
// };
