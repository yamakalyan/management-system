import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import { Faker } from "../DashboardTypes/Faker.jsx";
import { Chart as ChartJs } from "chart.js/auto";

export const PolarAreaGraph = () => {
  const options = {
    labels: Faker.map((data) => data.year),
    datasets: [
      {
        label: "Gained",
        data: Faker.map((success) => success.success),
      },
    ],
  };
  return <PolarArea data={options} />;
};

export const BarGraph = () => {
  const options = {
    labels: Faker.map((data) => data.year),
    datasets: [
      {
        label: "Gained",
        data: Faker.map((success) => success.success),
      },
      {
        label: "Lost",
        data: Faker.map((success) => success.lost),
      },
    ],
  };
  return <Bar data={options} style={{height : "100vh"}}/>;
};

export const lineGraph = () => {
  const options = {
    labels: Faker.map((data) => data.year),
    datasets: [
      {
        label: "Gained",
        data: Faker.map((success) => success.success),
      },
    ],
  };
  return <Line data={options} />;
};

export const DonoutGraph = () => {
  const options = {
    labels: Faker.map((data) => data.year),
    datasets: [
      {
        label: "Gained",
        data: Faker.map((success) => success.success),
      },
    ],
  };
  return <Doughnut data={options} />;
};

export const PieGraph = () => {
  const options = {
    labels: Faker.map((data) => data.year),
    datasets: [
      {
        label: "Gained",
        data: Faker.map((success) => success.success),
      },
    ],
  };
  return <Pie data={options} />;
};
