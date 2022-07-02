import React from "react";
import {  Chart } from "react-charts";

const Charts = () => {


const data = [
  {
    label: "Purchases",
    data: [
      {
        date: new Date(),

        stars: 299320,
      },
      {
        date: new Date(),

        stars: 249999,
      },
      {
        date: new Date(),

        stars: 1000,
      },
      {
        date: new Date(),

        stars: 249999,
      },
    ],
  },
  {
    label: "Purchases 2",
    data: [
      {
        date: new Date(),

        stars: 299320,
      },
      {
        date: new Date(),

        stars: 249999,
      },
      {
        date: new Date(),

        stars: 1000,
      },
      {
        date: new Date(),

        stars: 249999,
      },
    ],
  },

];

  const primaryAxis = React.useMemo(
     AxisOptions => ({
      getValue: (datum) => datum.date,
    }),

    []
  );

  const secondaryAxes = React.useMemo(
    (AxisOptions) => [
      {
        getValue: (datum) => datum.stars,
        elementType: "line",
      },
    ],

    []
  );
  return (
    <div>
      <Chart
       options={{secondaryAxes, primaryAxis, data}}
        
      />
    </div>
  );
};

export default Charts;
