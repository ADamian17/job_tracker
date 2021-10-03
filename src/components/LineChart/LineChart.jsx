import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const LineChart = ({ userJobs }) => {
  const count = Object.keys(userJobs).map(label => userJobs[label]);

  const data = {

    labels: Object.keys(userJobs),

    datasets: [
      {
        label: 'application count by status',
        data: count,
        fill: false,
        backgroundColor: '#3310b0',
        borderColor: '#3310b0'
      }
    ]
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
