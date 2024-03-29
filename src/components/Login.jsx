import { useRouter } from "next/router";
import { Logo } from "@/icons";
import Router from "next/router";
import React, { useState } from "react";

const signInUrl = "http://localhost:3001/sign-in";

export const Login = ({ setShowWhich }) => {
  const router = useRouter();
  const [loginWrong, setLoginWrong] = useState(false);

  const HandlerLogin = async (e) => {
    e.preventDefault();
    setShowWhich("loader");
    const data = {
      userName: e.target.mail.value,
      password: e.target.pass.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const fData = await fetch(signInUrl, options);
    const jData = await fData.json();
    console.log("jData: ", jData);
    if (jData.message == "SUCCESS") {
      router.push("/dashboard");
      localStorage.setItem("userID", jData.id);
    } else {
      setLoginWrong(true);
    }
  };

  // const HandlerInitCategory = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     userName: e.target.mail.value,
  //     password: e.target.pass.value,
  //   };
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };

  //   const fData = await fetch(signInUrl, options);
  //   const jData = await fData.json();
  //   if (jData.message == "SUCCESS") {
  //     router.push("/dashboard");
  //   } else {
  //     setLoginWrong(true);
  //   }
  // };

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
      <form class="space-y-4" onSubmit={HandlerLogin}>
        <div>
          <label class="label">
            <span class="text-base label-text"></span>
          </label>
          <input
            type="text"
            name="mail"
            placeholder="Email"
            class="w-full input input-bordered"
          />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text"></span>
          </label>
          <input
            name="pass"
            type="password"
            placeholder="Password"
            class="w-full input input-bordered"
          />
        </div>
        <div
          className={`text-error text-center ${
            loginWrong ? "block" : "hidden"
          }`}
        >
          Wrong password, Please try again
        </div>
        <div>
          <input
            type="submit"
            class="btn btn-block bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
            value="Log in"
          />
        </div>
      </form>
      <div className="m-auto flex flex-row gap-4 justify-center items-center text-md">
        <span className="cursor-default">Don’t have account?</span>
        <span
          class="underline text-primary cursor-pointer"
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
