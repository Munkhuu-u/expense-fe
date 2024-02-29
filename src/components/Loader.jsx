import { Logo } from "@/icons";

export const Loader = ({ showLoader, setShowLoader }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-12 mt-[404px]`}
    >
      <div className="flex flex-row justify-center">
        <Logo />
        <h1 class="text-3xl font-semibold text-center text-gray-700">Geld</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="loading loading-spinner loading-md"></span>
        <p>Түр хүлээнэ үү...</p>
        <button
          className="btn"
          onClick={() => {
            setShowLoader("step1");
          }}
        >
          NEXT /dev/
        </button>
      </div>
    </div>
  );
};
