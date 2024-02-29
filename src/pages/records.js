import { BarChart, PieChart, PieChartTable } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";
import { Layout } from "@/layout/Layout";
import { recordsData } from "../utils/recordsData";
import { CatHouse, Logo } from "@/icons";

export default function records() {
  return (
    <div className="py-[32px] bg-base-200 pt-8 pb-10" data-theme="myTheme">
      fsdgfgdsb
      {/* <div className="max-w-[1200px] m-auto">
        <div className="flex flex-row mb-[32px] bg-base-200 justify-between">
          <div className="h-[216px] bg-primary w-[384px] rounded-2xl">
            Noise
            <img src="../images/Noise.png"></img>
          </div>
          <div className="h-[216px] bg-base-100 w-[384px] rounded-2xl">
            asdfg
          </div>
          <div className="h-[216px] bg-base-100 w-[384px] rounded-2xl">
            asdfg
          </div>
        </div>
        <div className="flex flex-row max-w-[1220px] m-auto gap-10">
          <div className="w-1/2 h-[284px] rounded-lg bg-white py-[16px] px-[24px] bg-base-100">
            <BarChart />
          </div>
          <div className="w-1/2 mb-8 flex flex-row rounded-lg bg-base-100 py-4 px-6 h-[284px]">
            <PieChart />
            <PieChartTable pieChartData={pieChartData} />
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
      </div> */}
    </div>
  );
}

records.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
