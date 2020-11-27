import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { Bar } from "react-chartjs-2";
moment.locale("vi");

OrderChart.propTypes = {
  orders: PropTypes.array,
};

OrderChart.defaultProps = {
  orders: [],
};

const getDataChart = (orders) => {
  let days = [];
  for (let i = 0; i < 15; i++)
    days.push(moment().subtract(i, "day").format("YYYY-MM-DD"));

  const datas = days.map((day) => {
    const dataExist = orders.find((e) => e.date === day);
    if (dataExist) return { ...dataExist };
    return { count: 0, date: day };
  });
  const labels = datas.map((order) => order.date)?.reverse() || [];
  const data = datas.map((order) => order.count)?.reverse() || [];
  return {
    labels: labels,
    datasets: [
      {
        label: "Số đơn hàng",
        backgroundColor: "#f7c0cb",
        borderColor: "#f76483",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: data,
      },
    ],
  };
};

function OrderChart(props) {
  const { orders } = props;

  return (
    <div>
      <Bar
        data={getDataChart(orders)}
        width={100}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: { yAxes: [{ ticks: { min: 0 } }] },
        }}
      />
    </div>
  );
}

export default OrderChart;
