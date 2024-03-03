import { Plus, Logo, X } from "@/icons";
import { Router } from "next/router";
import react, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Navbar = () => {
  const [bold, setBold] = useState("dashboard");
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 max-w-[1200px] m-auto">
      <div className="flex-1">
        <Logo />
        <button
          className={`btn bg-[white] shadow-none border-0 ${
            bold == "dashboard" ? "font-bold" : "font-light"
          }`}
          onClick={() => {
            setBold("dashboard");
            router.push("./dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          className={`btn bg-[white] shadow-none border-0 ${
            bold == "records" ? "font-bold" : "font-light"
          }`}
          onClick={() => {
            setBold("records");
            router.push("./records");
          }}
        >
          Records
        </button>
      </div>
      <div className="flex-none gap-2 "></div>
      <div className="flex flex-row gap-6">
        <button
          class="btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100 w-full"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <Plus />
          Record
        </button>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-[792px] max-w-5xl divide-y divide-base-200 px-6">
            <div className="mb-5">
              <h3 className="font-bold text-xl">Add Record</h3>
              <form method="dialog">
                <button className="btn btn-sm btn-circle absolute right-6 top-5 bg-base-200">
                  <X />
                </button>
              </form>
            </div>
            <div className="w-full flex flex-row">
              <div className="w-1/2 pr-6 pt-5">
                <div className="w-full flex flex-row bg-base-200 mb-5">
                  <button class="w-1/2 btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
                    <Plus />
                    Expense
                  </button>
                  <button class="w-1/2 btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
                    <Plus />
                    Income
                  </button>
                </div>

                <div className="w-full bg-base-200 py-3 px-4 rounded-lg mb-[22px]">
                  <TextField
                    id="standard-number"
                    label="Amount"
                    type="number"
                    placeholder="₮ 000.00"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                </div>

                <p className="bg-primary px-6 py-5">
                  Click the button below to close
                </p>
              </div>
              <div className="w-1/2 pl-6 pt-5">
                {" "}
                <div className="flex flex-row bg-accent">
                  <button class="btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
                    <Plus />
                    Expense
                  </button>
                  <button class="btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
                    <Plus />
                    Income
                  </button>
                </div>
                <p className="bg-accent px-6 py-5">
                  Click the button below to close
                </p>
              </div>
            </div>
          </div>
          <form
            method="dialog"
            className="modal-backdrop bg-neutral opacity-50"
          >
            <button>close</button>
          </form>
        </dialog>

        <div role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
