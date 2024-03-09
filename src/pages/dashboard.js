import { BarChart, PieChart, PieChartTable } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";
import { Layout } from "@/layout/Layout";
import { recordsData } from "../utils/recordsData";
import { CatHouse, GreenUpArrow, Logo, NFC, Spiral } from "@/icons";
import { LogoWhite } from "@/icons/LogoWhite";

export default function dashboard() {
  return (
    <div className="py-[32px] bg-base-200 pt-8 pb-10" data-theme="myTheme">
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-row mb-[32px] bg-base-200 justify-between">
          <div className="relative h-[216px] bg-primary w-[384px] rounded-2xl">
            <img
              src="/Noise.png"
              alt="Why ?"
              className="absolute left-0 top-0"
            />
            <div className="absolute flex flex-row justify-center items-center top-8 left-8">
              <LogoWhite />
              <h1 class="text-2xl font-semibold text-base-100">Geld</h1>
            </div>
            <div className="absolute flex flex-col items-start top-[128px] left-8">
              <p className="text-lg text-base-300">Cash</p>
              <p class="text-2xl font-semibold text-base-100">10,000,00</p>
            </div>
            <div className="absolute flex flex-col items-start bottom-8 right-8">
              <NFC />
            </div>
            <div className="absolute flex flex-col items-start bottom-0 right-0">
              <Spiral />
            </div>
          </div>

          <div className="h-[216px] bg-base-100 w-[384px] rounded-2xl flex flex-col ">
            <div className="flex flex-row items-center px-6 py-4 border-b-2 border-base-200 gap-2">
              <div className="bg-accent h-2 w-2 rounded-full"></div>
              <p className="font-semibold text-2xl">Your income</p>
            </div>
            <div className="flex flex-col pt-5 pl-6 pb-6 gap-4">
              <div>
                <p className="font-semibold text-3xl">1,200,000 ₮</p>
                <p className="text-base-300 text-xl">Your income Amount</p>
              </div>
              <div className="flex flex-row gap-2">
                <GreenUpArrow />
                <p className="text-lg">32% from last month</p>
              </div>
            </div>
          </div>

          <div className="h-[216px] bg-base-100 w-[384px] rounded-2xl flex flex-col ">
            <div className="flex flex-row items-center px-6 py-4 border-b-2 border-base-200 gap-2">
              <div className="bg-primary h-2 w-2 rounded-full"></div>
              <p className="font-semibold text-2xl">Total expense</p>
            </div>
            <div className="flex flex-col pt-5 pl-6 pb-6 gap-4">
              <div>
                <p className="font-semibold text-3xl">-1,200,000 ₮</p>
                <p className="text-base-300 text-xl">Your income Amount</p>
              </div>
              <div className="flex flex-row gap-2">
                <GreenUpArrow />
                <p className="text-lg">32% from last month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row max-w-[1220px] m-auto gap-10 mb-8">
          <div className="w-1/2 h-[284px] rounded-lg bg-white bg-base-100">
            <p className="font-bold border-b-2 border-base-200 py-4 px-6">
              Income & Expense
            </p>
            <div className="py-8 px-6">
              <BarChart />
            </div>
          </div>
          <div className="w-1/2 flex flex-col rounded-lg bg-base-100 h-[284px]">
            <p className="font-bold border-b-2 border-base-200 py-4 px-6">
              Expenses
            </p>
            <div className="flex flex-row py-8 px-6 justify-between">
              <PieChart />
              <PieChartTable pieChartData={pieChartData} />
            </div>
          </div>
        </div>
        <div className="bg-base-100 rounded-xl">
          <div className="py-4 px-5 flex flex-row justify-start font-bold border-b-2 border-base-200">
            <p>Last Records</p>
          </div>
          <div className="px-6 divide-y divide-base-200">
            {recordsData.records.map((e, index) => {
              return (
                <div className={`flex flex-row justify-between py-5`}>
                  <div className="flex flex-row items-center gap-4">
                    <CatHouse />
                    <div>
                      <h2>{e.recordName}</h2>
                      <p className="text-base-300">{e.recordTime}</p>
                    </div>
                  </div>
                  <p
                    className={`${
                      e.direction == "income" ? "text-error" : "text-accent"
                    }`}
                  >
                    {e.direction == "income" ? "-" : "+"}
                    {e.amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
