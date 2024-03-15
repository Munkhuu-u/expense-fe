import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { Logo } from "../icons";

export const SignUp = ({
  showLoader,
  setShowLoader,
  signupDuplicate,
  setSignupDuplicate,
}) => {
  const router = useRouter();

  const AddUserURL = "http://localhost:3001/addUser";

  async function handlerSignUp(e) {
    e.preventDefault();
    setShowLoader("loader");

    const data = {
      name: e.target.Name.value,
      mail: e.target.Email.value,
      password: e.target.Password.value,
      id: uuidv4(),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const fetchData = await fetch(AddUserURL, options);
    console.log("fetchData: ", fetchData);
    const fetchJSON = await fetchData.json();
    console.log("fetchJSON: ", fetchJSON);
    if (fetchJSON.message == "SUCCESS") {
      localStorage.setItem("userID", data.id);
      setSignupDuplicate(false);
      setShowLoader("step1");
    } else {
      setShowLoader("signup");
      setSignupDuplicate(true);
    }
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
            Create Gel account
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
        <div className={`text-error ${signupDuplicate ? "block" : "hidden"}`}>
          Your email duplicated, please use another email
        </div>
      </div>
      <div className="w-1/2 bg-primary"></div>
    </div>
  );
};
