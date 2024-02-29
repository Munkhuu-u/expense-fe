// import { Navbar } from "@/components";
export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex flex-row justify-center items-center w-[240px]">
            <Logo />
            <h1 class="text-3xl font-semibold text-center text-gray-700">
              Geld
            </h1>
          </div>
          <ul className="steps" data-theme="light">
            <li className={`step step-primary`}>Currency</li>
            <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
              Balance
            </li>
            <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
              Finish
            </li>
          </ul>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};
