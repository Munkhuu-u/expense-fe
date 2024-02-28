import { useRouter } from "next/router";
import { Logo, Currency, Coin } from "../icons";

export const StepOne = ({ setShowLoader, step, setStep }) => {
  const router = useRouter();
  return (
    <div class="w-1/2 m-auto bg-white lg:max-w-md flex flex-col items-center gap-[141px]">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-row justify-center items-center w-[240px]">
          <Logo />
          <h1 class="text-3xl font-semibold text-center text-gray-700">Geld</h1>
        </div>
        <ul className="steps" data-theme="light">
          <li className={`step step-primary`}>Currency</li>
          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Balance</li>
          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Finish</li>
        </ul>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 w-[308px] ${
          step == 1 ? "block" : "hidden"
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
          class="btn btn-block bg-blue-600  rounded-3xl text-white text-xl hover:text-blue-600 hover:border-blue-600 hover:border-2"
          onClick={() => {
            setStep((step += 1));
            console.log("step: ", step);
          }}
        >
          Confirm
        </button>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-4 w-[348px] ${
          step == 2 ? "block" : "hidden"
        }`}
      >
        <Coin />
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Set up your cash Balance
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
          class="btn btn-block bg-blue-600  rounded-3xl text-white text-xl hover:text-blue-600 hover:border-blue-600 hover:border-2"
          onClick={() => {
            setStep((step += 1));
            console.log("step: ", step);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
