import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { Logo } from "../icons";

export const SignUp = ({ showLoader, setShowLoader }) => {
  const router = useRouter();

  async function handlerSignUp(e) {
    e.preventDefault();
    // console.log("uuidv4(): ", uuidv4());
    const user = {
      name: e.target.Name.value,
      mail: e.target.Email.value,
      password: e.target.Password.value,
      id: uuidv4(),
    };

    const fetchData = await fetch("localhost:3001/addUser");
    const data = await fetchData.json();
    console.log("consoling in FE data: ", data);
  }

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
        <form class="space-y-4" onSubmit={handlerSignUp}>
          <input
            type="name"
            placeholder="Name"
            name="Name"
            class="w-full input input-bordered"
          />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            class="w-full input input-bordered"
          />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            class="w-full input input-bordered"
          />
          <input
            type="password"
            placeholder="Re-Password"
            name="Re-Password"
            class="w-full input input-bordered"
          />
          <input
            type="submit"
            class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
            value="Sign up"
          />
        </form>
        {/* <form class="space-y-4" onSubmit={handlerSignUp}>
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
            <button
              type="submit"
              class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
            >
              Sign up
            </button>
          </div>
        </form> */}
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
