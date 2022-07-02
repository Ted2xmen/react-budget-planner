import React, { useContext } from "react";
import { Chart } from "react-google-charts";

import { AppContext } from "../context/AppContext";

const AnotherCharts = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remainingExp = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const data = [
    ["Ad", "Miktar"],
    ["Harcama", totalExpenses],
    ["Kalan", budget - totalExpenses],
  ];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.5,
    is3D: false,
  };

  return (
    <div>
      <Chart
        className="mb-4"
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default AnotherCharts;
