import { Pie } from "react-chartjs-2";

export const PieChartTable = ({ pieChartData }) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col justify-between h-full">
        {pieChartData.labels.map((sector, index) => {
          return (
            <div
              className={`flex flex-row rounded-full w-6 h-6`}
              style={{
                backgroundColor:
                  pieChartData.datasets[0].backgroundColor[index],
              }}
            ></div>
          );
        })}
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-3">
          {pieChartData.labels.map((sector, index) => {
            return (
              <div className={`flex flex-row ${""}`}>
                <p>{sector}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-around">
          {pieChartData.labels.map((sector, index) => {
            return (
              <p className="flex flex-col gap-4">{`${pieChartData.datasets[0].data[index]} ₮`}</p>
            );
          })}
        </div>
        <div className="flex flex-col justify-around">
          {pieChartData.labels.map((cat, index) => {
            let sum = 0;
            pieChartData.datasets[0].data.map((e) => {
              return (sum += e);
            });
            console.log("cat: ", pieChartData.datasets[0].data[index]);
            console.log("sum: ", sum);
            let percP = Math.round(
              (pieChartData.datasets[0].data[index] / sum) * 100
            );
            percP += "%";
            return <div className={`flex flex-row ${""}`}>{percP}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
