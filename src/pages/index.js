import { BarChart, PieChart } from "@/components";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "@/utils/graphData";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] py-[32px]">
      <div className="flex flex-row max-w-[1220px] m-auto gap-10">
        <div className="w-1/2 rounded-lg bg-white py-[16px] px-[24px]">
          <BarChart />
        </div>
        <div className="w-1/2 flex flex-row gap-3 rounded-lg bg-white py-[16px] px-[24px]">
          <PieChart />
          <div className="flex flex-row items-center">
            <div className="flex flex-col gap-4 mr-3">
              {pieChartData.labels.map((sector, index) => {
                return (
                  <div
                    className={`flex flex-row bg-[${pieChartData.datasets[0].backgroundColor[index]}] rounded-full w-6 h-6`}
                  />
                );
              })}
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-4 w-[100px]">
                {pieChartData.labels.map((sector, index) => {
                  return (
                    <div className={`flex flex-row ${""}`}>
                      <p>{sector}</p>
                      {/* <p>{pieChartData.datasets[0].data}</p> */}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-4 w-[100px]">
                {pieChartData.labels.map((sector, index) => {
                  return (
                    <p className="flex flex-col gap-4">{`${pieChartData.datasets[0].data[index]} ₮`}</p>
                  );
                })}
              </div>
              <div className="flex flex-col gap-4">
                {pieChartData.labels.map((cat, index) => {
                  let sum = 0;

                  pieChartData.datasets[0].data.map((e) => {
                    return (sum += e);
                  });

                  return (
                    <div className={`flex flex-row ${""}`}>
                      <p>{Math}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
