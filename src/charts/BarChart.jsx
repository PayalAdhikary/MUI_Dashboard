import React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 600],
    ["2015", 1170, 460, 710],
    ["2016", 660, 1120, -460],
    ["2017", 1030, 540, 490],
    ["2018", 1000, 400, 600],
    ["2019", 1170, 460, 710],
    ["2020", 660, 1120, -460],
    ["2021", 1030, 540, 490],
  ];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors: 
    ["rgb(53, 138, 148)", "rgb(91, 180, 141)", "rgb(40, 34, 70)"],
  
};


function BarChart() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      data={data}
      options={options}
      height={350}
    />
  );
}

export default BarChart;