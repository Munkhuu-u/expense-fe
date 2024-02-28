import { BarChart, PieChart, PieChartTable } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";
import { Layout } from "@/layout/Layout";
// import NestedLayout from "../components/nested-layout";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] py-[32px]">
      <div className="flex flex-row max-w-[1220px] m-auto gap-10">
        <div className="w-1/2 rounded-lg bg-white py-[16px] px-[24px]">
          <BarChart />
        </div>
        <div className="w-1/2 flex flex-row gap-3 rounded-lg bg-white py-[16px] px-[24px]">
          <PieChart />
          <PieChartTable pieChartData={pieChartData} />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
