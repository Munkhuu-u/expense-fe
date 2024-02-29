import { useRouter } from "next/router";
import { Logo } from "../icons";

export const SignUp = ({ showLoader, setShowLoader }) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-row">
      <div class="w-1/2 p-6 m-auto bg-white lg:max-w-md flex flex-col gap-10 mt-[278px]">
        <div className="flex flex-row justify-center">
          <Logo />
          <h1 class="text-3xl font-semibold text-center text-gray-700">Geld</h1>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 class="text-3xl font-semibold text-center text-gray-700">
            Create Gel account{" "}
          </h1>
          <p>Sign up below to create your Wallet account</p>
        </div>
        <form
          class="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setShowLoader("loader");
          }}
        >
          <div>
            <label class="label"></label>
            <input
              type="name"
              placeholder="Name"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text"></span>
            </label>
            <input
              type="text"
              placeholder="Email"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text"></span>
            </label>
            <input
              type="password"
              placeholder="Password"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text"></span>
            </label>
            <input
              type="password"
              placeholder="Re-Password"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <button class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
              Sign up
            </button>
          </div>
        </form>
        <div className="m-auto flex flex-row gap-4 justify-center items-center text-md">
          <span className="cursor-default">Already have an account?</span>
          <span
            class="underline text-primary cursor-pointer"
            onClick={() => {
              router.push("./login");
            }}
          >
            Sign In
          </span>
        </div>
      </div>
      <div className="w-1/2 bg-primary"></div>
    </div>
  );
};
