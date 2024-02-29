import { BarChart, PieChart, PieChartTable } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";
import { Layout } from "@/layout/Layout";

export default function dashboard() {
  return (
    <div className="py-[32px] bg-base-200" data-theme="myTheme">
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-row py-[32px] bg-base-200 justify-between">
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
          <div className="w-1/2 flex flex-row rounded-lg bg-base-100 py-4 px-6 h-[284px]">
            <PieChart />
            <PieChartTable pieChartData={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
