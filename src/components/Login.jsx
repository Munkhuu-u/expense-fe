import { useRouter } from "next/router";
import { Logo } from "@/icons";

export const Login = ({ showLoader, setShowLoader }) => {
  const router = useRouter();
  return (
    <div class="w-full p-6 m-auto bg-white lg:max-w-md flex flex-col gap-10 mt-[278px]">
      <div className="flex flex-row justify-center">
        <Logo />
        <h1 class="text-3xl font-semibold text-center text-gray-700">Geld</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Welcome Back
        </h1>
        <p>Welcome back, Please enter your details</p>
      </div>
      <form class="space-y-4">
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
          <button class="btn btn-block bg-blue-600  rounded-3xl text-white text-xl hover:text-blue-600 hover:border-blue-600 hover:border-2">
            Log in
          </button>
        </div>
      </form>
      <div className="m-auto flex flex-row gap-4 justify-center items-center text-md">
        <span className="cursor-default">Don’t have account?</span>
        <span
          class="underline text-blue-600 cursor-pointer"
          onClick={() => {
            router.push("./signup");
          }}
        >
          Sign up
        </span>
      </div>
    </div>
  );
};
