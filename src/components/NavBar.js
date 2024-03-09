import { Plus, Logo, X, CatHouse } from "@/icons";
import { Router } from "next/router";
import react, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

export const Navbar = () => {
  const [bold, setBold] = useState("dashboard");
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 max-w-[1200px] flex flex-row justify-between m-auto">
      <div className="">
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
      <div className="gap-6">
        <button
          class="btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <Plus />
          Record
        </button>
        <div role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
      {/* Modal */}
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
              {/* income or expense */}
              <div className="w-full flex flex-row bg-base-200 mb-5">
                <button class="w-1/2 btn btn-sm bg-primary rounded-3xl text-base-100 text-base font-normal hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
                  <Plus />
                  Income
                </button>
                <button class="w-1/2 btn btn-sm bg-primary rounded-3xl text-base-100 text-base font-normal hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100">
                  <Plus />
                  Expense
                </button>
              </div>

              {/* Amount */}
              <div className="w-full bg-neutral-100 py-3 px-4 rounded-lg mb-[22px] border border-neutral-200">
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

              {/* Category */}
              <div className="mb-[22px]">
                <p>Category</p>
                <select className="select select-bordered border-neutral-200 w-full bg-neutral-100">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>
                    <CatHouse />
                    Apple
                  </option>
                  <option> Orange</option>
                  <option> Tomato</option>
                </select>
              </div>
              {/* Date & Clock */}
              <div className="flex flex-row gap-3 mb-8">
                <div>
                  <p>Date</p>
                  <select className="select select-bordered  max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]">
                    <option disabled selected>
                      Oct 30, 2023
                    </option>
                    <option>Oct 29, 2023</option>
                    <option>Oct 28, 2023</option>
                  </select>
                </div>
                <div>
                  <p>Clock</p>
                  <select className="select select-bordered max-w-xs w-[168px] text-[#0F172A]] text-base font-normal not-italic bg-[#F9FAFB]">
                    <option disabled selected>
                      4:15 PM
                    </option>
                    <option>3:32 PM</option>
                    <option>9:23 AM</option>
                  </select>
                </div>
              </div>

              {/* Choose button */}
              <button
                class="w-full btn bg-primary rounded-3xl text-base-100 font-normal text-base hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100"
                onClick={() => console.log("Pressed add Record button")}
              >
                Add Record
              </button>
            </div>
            {/* Right side */}
            <div className="w-1/2 flex flex-col pl-6 pt-5 gap-[22px]">
              <div className="flex flex-col gap-2">
                <p>Payee</p>
                <select className="select select-bordered w-full text-[#94A3B8] text-base font-normal not-italic bg-neutral-100">
                  <option disabled selected>
                    Write here
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <p>Note</p>
                <textarea
                  placeholder="Write here"
                  className="border border-neutral-200 bg-neutral-100 p-4 rounded-lg w-full min-h-[260px]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-neutral opacity-50">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Navbar;
