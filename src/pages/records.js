import { BarChart, PieChart, PieChartTable, Transaction } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";
import { Layout } from "@/layout/Layout";
import { recordsData } from "../utils/recordsData";
import { transaction } from "@/utils/transaction";
import React, { useState, useEffect, use } from "react";
import {
  CatHouse,
  Eye,
  LeftArrow,
  Logo,
  Plus,
  PlusBlue,
  RightArrow,
  RightTriangle,
} from "@/icons";
import { Slider } from "@mui/material";
import { categories } from "@/utils/categories";

import Record from "@/components/Record";

export default function record() {
  const [transData, setTransData] = useState("");
  const [cates, setCates] = useState("");

  const sliderData = {
    MAX: 1000,
    MIN: 0,
  };
  sliderData.marks = [
    {
      value: sliderData.MAX,
      label: sliderData.MAX,
    },
    {
      value: sliderData.MIN,
      label: sliderData.MIN,
    },
  ];

  async function getTodayTrans() {
    const data = await fetch("http://localhost:3001/transaction");
    const trans = await data.json();
    setTransData(trans);
  }

  async function getCategories() {
    const getCategoriesURL = "http://localhost:3001/get-category";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: localStorage.getItem("userID") }),
    };
    const catesFetch = await fetch(getCategoriesURL, options);
    const catesJSON = await catesFetch.json();
    setCates(catesJSON);
  }

  useEffect(() => {
    getTodayTrans();
    getCategories();
  }, []);

  const transToday = transData?.transaction?.filter((tr) => {
    // console.log("tra: ", tr);
    const today = new Date();
    let trAt = new Date(tr.createdAt);
    trAt.setHours(trAt.getHours() - 8);

    console.log("trAt: ", trAt);

    return (
      today.getFullYear() == trAt.getFullYear() &&
      today.getMonth() == trAt.getMonth() &&
      today.getDate() == trAt.getDate()
    );
  });

  const transYesterday = transData?.transaction?.filter((tr) => {
    const today = new Date();
    const trAt = new Date(tr.createdAt);
    trAt.setHours(trAt.getHours() - 8);

    return (
      today.getFullYear() == trAt.getFullYear() &&
      today.getMonth() == trAt.getMonth() &&
      today.getDate() - 1 == trAt.getDate()
    );
  });

  return (
    <div className="bg-base-200">
      <div className="flex flex-row p-4 gap-6 bg-base-200 max-w-[1200px] m-auto">
        {/* Side menu */}
        <div className="flex flex-col p-4 gap-6 w-[284px] h-fit bg-base-100 rounded-xl">
          {/* Record +Add  */}
          <div className="flex flex-col items-start gap-6">
            <h2 class="text-2xl font-semibold text-center text-gray-700">
              Records
            </h2>
            <button class="btn btn-sm bg-primary rounded-3xl text-base-100 text-xl hover:text-primary hover:border-primary hover:border-2 hover:bg-base-100 w-full">
              <Plus />
              Add
            </button>
          </div>

          {/* Search  */}
          <div className="">
            <label class="label"></label>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-xs w-full max-w-xs bg-base-200 h-[30px] text-lg"
            />
          </div>

          {/* Types  */}
          <div className="flex flex-col items-start gap-4">
            <h2 class="text-md font-semibold text-center text-gray-700">
              Types
            </h2>
            {/* <div className="form-control gap-1"> */}
            <div className="flex flex-col gap-1">
              <label className="label cursor-pointer text-left flex justify-start gap-2 px-3 py-1">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  checked
                />
                All
              </label>
              <label className="label cursor-pointer text-left flex justify-start gap-2 px-3 py-1">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  checked
                />
                Income
              </label>
              <label className="label cursor-pointer text-left flex justify-start gap-2 px-3 py-1">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  checked
                />
                Expense
              </label>
            </div>
          </div>

          {/* Category  */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex justify-between w-full">
              <h2 class="text-md font-semibold text-gray-700">Category</h2>
              <p className="text-base-300">Clear</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <button
                className="border"
                onClick={() => {
                  getCategories();
                }}
              >
                get all categories
              </button>
              {cates?.response?.rows.map((category) => {
                return (
                  <div className="flex flex-row justify-between items-center ">
                    <button className="flex gap-2 py-1 px-3">
                      <Eye /> {category.name}
                    </button>
                    <RightTriangle />
                  </div>
                );
              })}
              <div className="flex flex-row justify-between items-center">
                <button className="flex gap-2 py-1 px-3 items-center">
                  <PlusBlue /> <p>Add Category</p>
                </button>
              </div>
            </div>
          </div>

          {/* Amount Range  */}
          <div className="flex flex-col gap-4">
            <h2 class="text-md font-semibold text-gray-700">Amount Range</h2>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="0"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="1000"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <Slider
              getAriaLabel={() => "Temperature"}
              aria-label="Always visible"
              // getAriaValueText={"valuetext"}
              // value={"asgd"}
              step={50}
              max={sliderData.MAX}
              min={sliderData.MIN}
              marks={sliderData.marks}
              defaultValue={[10, 340]}
              valueLabelDisplay="auto"
            />
          </div>
        </div>

        {/* Main list */}
        <div className="w-full">
          {/* Last 30 days Sort Select all*/}
          <div>
            {/* Last 30 days Sort */}
            <div className="flex flex-row w-full justify-between mb-4">
              <div className="flex flex-row items-center gap-4">
                <button className="bg-base-200 p-[6px] rounded-lg">
                  <LeftArrow />
                </button>
                <p>Last 30 days</p>
                <button className="bg-base-200 p-[6px] rounded-lg">
                  <RightArrow />
                </button>
              </div>
              <select className="select w-full max-w-[180px] border-1 border-base-300 bg-base-100">
                <option disabled selected>
                  Sort
                </option>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>

            {/* Select all */}
            <div className="flex flex-row justify-between items-center gap-4 bg-base-100 rounded-xl px-6 py-3 mb-6">
              <div className="form-control flex flex-row justify-start items-center gap-4">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                </label>
                <span className="label-text text-base">Select all</span>
              </div>
              <p>{" - 35,500 ₮"}</p>
            </div>
          </div>

          {/* Transactions */}
          <div className="h-2/5 overflow-scroll">
            {/* Today */}
            <div className="flex flex-col items-start gap-3">
              <h2 class="text-md font-semibold text-center text-gray-700">
                Today
              </h2>
              <div className="flex flex-col gap-3 overflow-scroll w-full mb-6">
                {transToday?.map((e) => {
                  return <Transaction e={e} />;
                })}
              </div>
            </div>

            {/* Yesterday */}
            <div className="flex flex-col items-start gap-3">
              <h2 class="text-md font-semibold text-center text-gray-700">
                Yesterday
              </h2>
              <div className="flex flex-col gap-3 overflow-scroll w-full">
                {transYesterday?.map((e) => {
                  return <Transaction e={e} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
