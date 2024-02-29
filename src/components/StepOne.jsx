import { useRouter } from "next/router";
import { Logo, Currency, Coin } from "../icons";
// import { SignUp } from "../layout/SignUp";

export const StepOne = ({ showLoader, setShowLoader, step, setStep }) => {
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
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 w-[308px] ${
          ""
          // showLoader == "step1" ? "block" : "hidden"
        }`}
      >
        <Currency />
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Select base currency
        </h1>
        <select className="select select-bordered w-full max-w-xs font-bold">
          <option>MNT - Mongolian Tugrik</option>
          <option>USD - United States Dollar</option>
          <option>EUR - Eurozone countries</option>
          <option>JPY - Japanese Yen</option>
          <option>GBP - British Pound Sterling</option>
          <option>GBP - British Pound Sterling</option>
          <option>CAD - Canadian Dollar</option>
          <option>CHF - Swiss Franc</option>
          <option>CNY - Chinese Yuan Renminbi</option>
          <option>SEK - Swedish Krona</option>
          <option>NZD - New Zealand Dollar</option>
        </select>
        <p className="text-slate-600 text-left text-xs">
          Your base currency be the one you use most often. All transaction in
          other curencies will be calculated based on this one
        </p>
        <button
          class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
          onClick={() => {
            setStep((step += 1));
            setShowLoader("step2");
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
