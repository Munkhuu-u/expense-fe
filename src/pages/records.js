import { BarChart, PieChart, PieChartTable } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";
import { Layout } from "@/layout/Layout";
import { recordsData } from "../utils/recordsData";
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

function record() {
  const MAX = 1000;
  const MIN = 0;
  const marks = [
    {
      value: MAX,
      label: MAX,
    },
    {
      value: MIN,
      label: MIN,
    },
  ];
  return (
    <div className="flex flex-row p-4 gap-6">
      {/* Side menu */}
      <div className="flex flex-col p-4 gap-6 w-[284px]">
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
          <h2 class="text-md font-semibold text-center text-gray-700">Types</h2>
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
            {categories.categories.map((category) => {
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
            max={MAX}
            min={MIN}
            marks={marks}
            defaultValue={[10, 340]}
            valueLabelDisplay="auto"
          />
        </div>
      </div>

      {/* Main list */}
      <div className="">
        {/* Last 30 days Sort Select all*/}
        <div>
          {/* Last 30 days Sort */}
          <div className="flex flex-row items-center gap-4">
            <button className="bg-base-200 p-[6px] rounded-lg">
              <LeftArrow />
            </button>
            <p>Last 30 days</p>
            <button className="bg-base-200 p-[6px] rounded-lg">
              <RightArrow />
            </button>
          </div>

          {/* Select all */}
          <div></div>
        </div>

        {/* Today */}
        <div>{/* some map fn */}</div>
      </div>
    </div>
  );
}
export default record;

record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
